import { Wrapper } from "@/components/local/container";
import { Intro } from "@/components/local/intro";
import { LandingImage } from "@/components/local/landing-image";
import { stripe } from "@/services/stripe";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import Head from "next/head";

dayjs.locale("pt-br");

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
                                <LandingImage />
                        </main>
                </Wrapper>
        );
}
