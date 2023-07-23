import { formatPostDate } from "@/lib/utils";
import { getPrismicClient } from "@/services/prismic";
import { asText } from "@prismicio/client";
import { NextResponse } from "next/server";

export async function GET(
        request: Request,
        { params }: { params: { uuid: string } }
) {
        const { uuid } = params;
        try {
                console.log(uuid);
                const client = await getPrismicClient();

                const prismicPost = await client.getByUID("post", uuid);

                const post = {
                        id: prismicPost.id!,
                        title: asText(prismicPost.data.title)!,
                        slug: prismicPost.uid!,
                        content: asText(prismicPost.data.content)!,
                        time: formatPostDate(
                                new Date(prismicPost.last_publication_date)
                        )!,
                };

                return NextResponse.json(post);
        } catch (e) {
                return NextResponse.json(
                        {
                                message:
                                        "Error while fetching current post" +
                                        JSON.stringify(e),
                        },
                        {
                                status: 500,
                        }
                );
        }
}
