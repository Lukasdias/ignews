import { stripe } from "@/services/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { Readable } from "stream";
import Stripe from "stripe";

const RELEVANT_EVENTS = new Set([
        "checkout.session.completed",
        "customer.subscription.updated",
]);

async function buffer(readable: Readable | Buffer | string): Promise<Buffer> {
        if (Buffer.isBuffer(readable)) {
                return readable;
        }

        if (typeof readable === "string") {
                return Buffer.from(readable);
        }

        const chunks = [];
        for await (const chunk of readable) {
                chunks.push(
                        typeof chunk === "string" ? Buffer.from(chunk) : chunk
                );
        }
        return Buffer.concat(chunks);
}

export async function POST(req: Request, res: NextResponse) {
        if (req.method !== "POST") {
                return NextResponse.json(
                        { error: "Method not allowed" },
                        { status: 405 }
                );
        }

        try {
                const headersList = headers();
                const secret = headersList.get("stripe-signature");
                const data = await buffer(req.body as any);

                let event: Stripe.Event;

                try {
                        event = stripe.webhooks.constructEvent(
                                data,
                                secret!,
                                process.env.STRIPE_WEBHOOK_SECRET!
                        );
                        const { type } = event;
                        if (RELEVANT_EVENTS.has(type)) {
                                console.log("Evento recebido", event);
                        }
                } catch (error) {
                        return NextResponse.json(
                                {
                                        error: `Webhook signature verification failed ${error.message}}`,
                                },
                                { status: 400 }
                        );
                }

                return NextResponse.json({ data }, { status: 200 });
        } catch (e) {
                return NextResponse.json(
                        { error: "Erro ao ler o stream" },
                        { status: 500 }
                );
        }
}
