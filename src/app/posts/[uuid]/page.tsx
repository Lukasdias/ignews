import { Wrapper } from "@/components/local/container";
import Head from "next/head";

export default async function Post({ params }: { params: { uuid: string } }) {
        const { uuid } = params;
        return (
                <Wrapper>
                        <Head>
                                <title>Posts - Ignews</title>
                        </Head>
                        <main className="flex flex-col flex-1 justify-center items-center md:pt-20">
                                <h1 className="text-white text-4xl font-bold">
                                        {uuid}
                                </h1>
                        </main>
                </Wrapper>
        );
}
