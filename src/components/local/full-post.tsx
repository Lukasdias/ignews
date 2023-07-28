"use client";

import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { motion } from "framer-motion";
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
                                                        font-black  text-xl sm:text-3xl mb-6 text-white
                                                "
                                        >
                                                {children}
                                        </h3>
                                ),
                                paragraph: ({ children }) => (
                                        <p className="text-brand-text mb-4 text-sm sm:text-base">
                                                {children}
                                        </p>
                                ),
                                list: ({ children }) => (
                                        <ul className="text-brand-text mb-4 text-sm sm:text-base">
                                                {children}
                                        </ul>
                                ),
                                oListItem: ({ children }) => (
                                        <li className="text-brand-text mb-4 text-sm sm:text-base">
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

        const contentPaidHalf = content.slice(
                content.length / 2,
                content.length
        ) as RichTextField;

        const currentPaidContent = canSeeFullPost
                ? contentPaidHalf
                : (contentPaidHalf.slice(
                          0,
                          contentPaidHalf.length / 2
                  ) as RichTextField);

        return (
                <motion.div
                        initial={{
                                opacity: 0,
                                y: 20,
                        }}
                        animate={{
                                opacity: 1,
                                y: 0,
                                transition: { stiffness: 100, delay: 0.2 },
                        }}
                        exit={{ opacity: 0, y: 20 }}
                        className="flex flex-col w-full max-w-5xl p-4 py-8 sm:p-0"
                >
                        <h1 className="font-black text-white text-3xl md:text-5xl mb-6">
                                {title}
                        </h1>
                        <time className="mb-4 text-brand-text text-xs sm:text-base">
                                {time}
                        </time>
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
                                <Content content={currentPaidContent} />
                                <SubscribeNow />
                        </div>
                </motion.div>
        );
};
