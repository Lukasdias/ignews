import { formatPostDate } from "@/lib/utils";
import { getPrismicClient } from "@/services/prismic";
import { asText } from "@prismicio/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
        try {
                const client = await getPrismicClient();

                const prismicPosts = await client.getAllByType("post", {});

                const posts = prismicPosts.map((post) => ({
                        id: post.id!,
                        title: asText(post.data.title)!,
                        slug: post.uid!,
                        content: asText(post.data.content)!,
                        time: formatPostDate(
                                new Date(post.last_publication_date)
                        )!,
                }));

                return NextResponse.json(posts);
        } catch (e) {
                return NextResponse.json(
                        {
                                message:
                                        "Error while fetching posts" +
                                        JSON.stringify(e),
                        },
                        {
                                status: 500,
                        }
                );
        }
}
