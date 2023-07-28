import { FullPost } from "@/components/local/full-post";
import Head from "next/head";

import { options } from "@/app/api/auth/[...nextauth]/options";
import { Session, getServerSession } from "next-auth";

import { formatPostDate } from "@/lib/utils";
import { getPrismicClient } from "@/services/prismic";
import { asText } from "@prismicio/client";

export const revalidate = 60;

async function fetchPost(uuid: string) {
        try {
                const client = await getPrismicClient();
                const prismicPost = await client.getByUID("post", uuid);

                const post = {
                        id: prismicPost.id!,
                        title: asText(prismicPost.data.title)!,
                        slug: prismicPost.uid!,
                        content: prismicPost.data.content,
                        time: formatPostDate(
                                new Date(prismicPost.last_publication_date)
                        )!,
                };
                return post;
        } catch (e) {
                console.log(e);
                return null;
        }
}

export default async function Post({ params }: { params: { uuid: string } }) {
        const { uuid } = params;

        const post = await fetchPost(uuid);

        const session = (await getServerSession(options)) as Session & {
                activeSubscription: boolean;
        };

        console.log("session", session);

        const canSeeFullPost = session?.activeSubscription;

        if (!post) {
                return (
                        <>
                                <Head>
                                        <title>Posts - Ignews</title>
                                </Head>
                                <main className="flex flex-col flex-1 items-center md:pt-20">
                                        <h1 className="text-2xl font-bold text-brand-title">
                                                Post not found
                                        </h1>
                                </main>
                        </>
                );
        }

        return (
                <>
                        <Head>
                                <title>Posts - Ignews</title>
                        </Head>
                        <main className="flex flex-col flex-1 items-center md:pt-20 ">
                                <FullPost
                                        {...post}
                                        canSeeFullPost={canSeeFullPost}
                                />
                        </main>
                </>
        );
}
