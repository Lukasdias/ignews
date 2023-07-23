import { FullPost } from "@/components/local/full-post";
import Head from "next/head";

export default async function Post({ params }: { params: { uuid: string } }) {
        const { uuid } = params;
        const response = await fetch(
                `http://localhost:3000/api/posts/${uuid}`,
                {
                        next: {
                                revalidate: 60 * 60,
                        },
                }
        );
        const post = await response.json();
        return (
                <>
                        <Head>
                                <title>Posts - Ignews</title>
                        </Head>
                        <main className="flex flex-col flex-1 items-center md:pt-20">
                                <FullPost {...post} />
                        </main>
                </>
        );
}
