import Link from "next/link";

export interface Post {
        id: string;
        slug: string;
        time: string;
        title: string;
        content: string;
}

export const PostPreview: React.FC<Post> = ({
        content,
        time,
        title,
        slug,
}: Post) => {
        return (
                <Link
                        href={`/posts/${slug}`}
                        className="flex flex-col w-full max-w-5xl py-8 border-b-2 border-b-brand-shape group cursor-pointer"
                >
                        <time className="mb-4 text-brand-text">{time}</time>
                        <article className="flex flex-col gap-1">
                                <h2 className="font-bold text-white text-2xl group-hover:text-brand-yellow transition-colors duration-200">
                                        {title}
                                </h2>
                                <p className="text-brand-text">{content}</p>
                        </article>
                </Link>
        );
};
