"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

export interface Post {
        id: string;
        slug: string;
        time: string;
        title: string;
        content: string;
        idx?: number;
}

export const PostPreview: React.FC<Post> = ({
        content,
        time,
        title,
        slug,
        idx = 0,
}: Post) => {
        const delay = idx * 0.1;
        return (
                <AnimatePresence>
                        <MotionLink
                                initial={{
                                        opacity: 0,
                                        y: 20,
                                }}
                                animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                                delay,
                                                stiffness: 100,
                                        },
                                }}
                                exit={{ opacity: 0, y: 20 }}
                                href={`/posts/${slug}`}
                                className="flex flex-col w-full max-w-5xl py-8 border-b-2 border-b-brand-shape group cursor-pointer px-4 md:px-0"
                        >
                                <time className="mb-4 text-brand-text">
                                        {time}
                                </time>
                                <article className="flex flex-col gap-1">
                                        <h2 className="font-bold text-white text-xl md:text-2xl group-hover:text-brand-yellow transition-colors duration-200">
                                                {title}
                                        </h2>
                                        <p className="text-brand-text sm:text-base text-sm">
                                                {content}
                                        </p>
                                </article>
                        </MotionLink>
                </AnimatePresence>
        );
};
