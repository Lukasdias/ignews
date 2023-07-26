import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

interface Props {
        id: string;
        slug: string;
        time: string;
        title: string;
        content: RichTextField;
}

export const FullPost: React.FC<Props> = ({
        content,
        time,
        title,
        slug,
}: Props) => {
        return (
                <div className="flex flex-col w-full max-w-5xl py-8">
                        <h1 className="font-black text-white text-[54px] mb-6">
                                {title}
                        </h1>
                        <time className="mb-4 text-brand-text">{time}</time>
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
                </div>
        );
};
