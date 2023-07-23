import { Post } from "@/components/local/post-preview";
import { formatPostDate } from "@/lib/utils";
import { getPrismicClient } from "@/services/prismic";
import { asText } from "@prismicio/client";

interface PostProps {
        posts: Post[];
}

export async function getPosts() {
        const client = await getPrismicClient();

        const prismicPosts = await client.getAllByType("post", {});

        const posts = prismicPosts.map((post) => ({
                id: post.id!,
                title: asText(post.data.title)!,
                slug: post.uid!,
                content: asText(post.data.content)!,
                time: formatPostDate(new Date(post.last_publication_date))!,
        }));

        return posts;
}
