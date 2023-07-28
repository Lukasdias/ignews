import { Post, PostPreview } from "@/components/local/post-preview";
import Head from "next/head";

import { formatPostDate } from "@/lib/utils";
import { getPrismicClient } from "@/services/prismic";
import { asText } from "@prismicio/client";

export const revalidate = 60;

async function fetchPosts(): Promise<Post[] | null> {
        try {
                const client = await getPrismicClient();

                const prismicPosts = await client.getAllByType("post");

                const firstParagraphOfEveryArticleContent = prismicPosts.map(
                        (post) => {
                                const firstParagraph = post.data.content.find(
                                        (content) =>
                                                content.type === "paragraph"
                                );
                                const firstParagraphText =
                                        firstParagraph as unknown as {
                                                text: string;
                                        };
                                return firstParagraphText.text;
                        }
                );

                const posts = prismicPosts.map((post, idx) => ({
                        id: post.id!,
                        title: asText(post.data.title)!,
                        slug: post.uid!,
                        content: firstParagraphOfEveryArticleContent[idx]!,
                        time: formatPostDate(
                                new Date(post.last_publication_date)
                        )!,
                }));

                return posts;
        } catch (e) {
                return null;
        }
}

export default async function Posts() {
        const posts = (await fetchPosts()) as Post[];

        if (!posts || posts.length === 0) {
                return (
                        <>
                                <Head>
                                        <title>Posts - Ignews</title>
                                </Head>
                                <main className="flex flex-col flex-1 justify-center items-center md:pt-20">
                                        <h1 className="text-2xl font-bold text-brand-title">
                                                No posts found
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
                        <main className="flex flex-col flex-1 items-center md:pt-20">
                                {posts?.map((post) => (
                                        <PostPreview key={post.id} {...post} />
                                ))}
                                {posts?.length === 0 && (
                                        <p className="text-brand-text m-auto animate-pulse">
                                                No posts found.
                                        </p>
                                )}
                        </main>
                </>
        );
}
