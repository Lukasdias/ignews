import { createClient } from "@/prismicio";

export async function getPrismicClient() {
        const client = createClient({
                accessToken: process.env.PRISMIC_ACCESS_TOKEN!,
        });
        return client;
}
