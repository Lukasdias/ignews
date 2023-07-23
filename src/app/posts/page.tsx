import { Post, PostPreview } from "@/components/local/post-preview";
import Head from "next/head";

export default async function Posts() {
        const response = await fetch("http://localhost:3000/api/posts", {
                next: {
                        revalidate: 60,
                },
        });
        const posts: Post[] = await response.json();
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
                                        <p className="text-brand-text m-auto">
                                                No posts found.
                                        </p>
                                )}
                        </main>
                </>
        );
}
