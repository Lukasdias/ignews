import { Wrapper } from "@/components/local/container";
import { SubscribeButton } from "@/components/local/subscribe-button";
import { formatUSD } from "@/lib/utils";
import { stripe } from "@/services/stripe";
import "dayjs/locale/pt-br";
import Head from "next/head";
import Image from "next/image";

interface IntroProps {
        product: {
                amount: number;
        };
}

function Intro(props: IntroProps) {
        return (
                <div className="flex flex-col gap-4 sm:w-full items-center sm:items-start">
                        <span className="text-2xl font-bold text-brand-title mb-10">
                                👋 Hey, welcome
                        </span>

                        <h1 className="font-black text-5xl sm:text-7xl text-brand-title mb-6 text-center sm:text-left">
                                News about
                                <br className="hidden md:block" /> the {""}
                                <span className="text-brand-blue">
                                        React
                                </span>{" "}
                                world
                        </h1>

                        <p className="text-brand-title text-xl sm:text-2xl mb-10">
                                Get access to all the publications
                                <br className="block" />
                                <span className="text-brand-blue font-bold">
                                        for {formatUSD(props.product.amount)}{" "}
                                        month
                                </span>
                        </p>

                        <SubscribeButton />
                </div>
        );
}

function Jumbotron() {
        return (
                <Image
                        src="/mulher.svg"
                        alt="ig.news"
                        width="334"
                        height={520}
                />
        );
}

export default async function Home() {
        const price = await stripe.prices.retrieve(
                "price_1NVNqsHigjovIELDnh6dpSQv"
        );

        const product = {
                priceId: price.id,
                amount: price?.unit_amount! / 100!,
        };

        return (
                <Wrapper>
                        <Head>
                                <title>Home - Ignews</title>
                        </Head>
                        <main className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-10 flex-1">
                                <Intro product={product} />
                                <Jumbotron />
                        </main>
                </Wrapper>
        );
}
