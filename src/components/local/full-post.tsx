import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { SubscribeNow } from "./subscribe-now";

interface Props {
        id: string;
        slug: string;
        time: string;
        title: string;
        content: RichTextField;
        canSeeFullPost: boolean;
}

const Content = ({ content }: { content: RichTextField }) => {
        return (
                <PrismicRichText
                        field={content}
                        components={{
                                preformatted: ({ children }) => (
                                        <div className="p-4 bg-brand-shape text-brand-text rounded-md">
                                                {children}
                                        </div>
                                ),
                                heading3: ({ children }) => (
                                        <h3
                                                className="
                                                        font-black  text-3xl mb-6 text-white
                                                "
                                        >
                                                {children}
                                        </h3>
                                ),
                                paragraph: ({ children }) => (
                                        <p className="text-brand-text mb-4">
                                                {children}
                                        </p>
                                ),
                                list: ({ children }) => (
                                        <ul className="text-brand-text mb-4">
                                                {children}
                                        </ul>
                                ),
                                oListItem: ({ children }) => (
                                        <li className="text-brand-text mb-4">
                                                {children}
                                        </li>
                                ),
                        }}
                />
        );
};

export const FullPost: React.FC<Props> = ({
        content,
        time,
        title,
        slug,
        canSeeFullPost,
}: Props) => {
        const contentFreeHalf = content.slice(
                0,
                content.length / 2
        ) as RichTextField;

        const currentContent = canSeeFullPost
                ? (content as RichTextField)
                : (contentFreeHalf as RichTextField);

        return (
                <div className="flex flex-col w-full max-w-5xl py-8">
                        <h1 className="font-black text-white text-[54px] mb-6">
                                {title}
                        </h1>
                        <time className="mb-4 text-brand-text">{time}</time>
                        <div className="from-[rgba(0, 0, 0, 0)]">
                                <Content content={contentFreeHalf} />
                        </div>
                        <div className="relative bg-clip-text flex flex-col">
                                {!canSeeFullPost && (
                                        <div
                                                className={
                                                        "absolute  bg-brand-background to-brand-background opacity-50 flex-1 h-full w-full"
                                                }
                                        />
                                )}
                                <Content content={currentContent} />
                                <SubscribeNow />
                        </div>
                </div>
        );
};
