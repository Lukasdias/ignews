import { fauna } from "@/services/fauna";
import { stripe } from "@/services/stripe";
import { query as q } from "faunadb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../auth/[...nextauth]/options";

type User = {
        ref: {
                id: string;
        };
        data: {
                stripe_customer_id: string;
        };
};

export async function POST(req: NextRequest, res: NextResponse) {
        if (req.method === "POST") {
                const session = await getServerSession(options);

                const user = await fauna.query<User>(
                        q.Get(
                                q.Match(
                                        q.Index("user_by_email"),
                                        q.Casefold(session?.user?.email!)
                                )
                        )
                );

                let customerId = user.data.stripe_customer_id;

                if (!customerId) {
                        const stripeCustomer = await stripe.customers.create({
                                email: session?.user?.email!,
                                metadata: {},
                        });

                        await fauna.query(
                                q.Update(
                                        q.Ref(
                                                q.Collection("users"),
                                                user.ref.id
                                        ),
                                        {
                                                data: {
                                                        stripe_customer_id:
                                                                stripeCustomer.id,
                                                },
                                        }
                                )
                        );
                        customerId = stripeCustomer.id;
                }

                const stripeCheckoutSession =
                        await stripe.checkout.sessions.create({
                                customer: customerId,
                                payment_method_types: ["card"],
                                billing_address_collection: "required",
                                line_items: [
                                        {
                                                price: "price_1NVNqsHigjovIELDnh6dpSQv",
                                                quantity: 1,
                                        },
                                ],
                                mode: "subscription",
                                allow_promotion_codes: true,
                                success_url: process.env.STRIPE_SUCCESS_URL!,
                                cancel_url: process.env.STRIPE_CANCEL_URL!,
                        });

                return NextResponse.json(
                        {
                                sessionId: stripeCheckoutSession.id,
                        },
                        {
                                status: 200,
                        }
                );
        } else {
                NextResponse.json(
                        {
                                message: "Método não permitido",
                        },
                        {
                                status: 405,
                        }
                );
        }
}
