"use client";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

interface TabProps {
        active: boolean;
        label: string;
        targetUrl: string;
}

export const Tab = ({ active, label, targetUrl }: TabProps) => {
        return (
                <Link
                        href={targetUrl ? targetUrl : "/"}
                        className={
                                "flex flex-col flex-1 justify-center items-center relative"
                        }
                >
                        <span
                                className={clsx(
                                        "text-xs sm:text-base font-bold text-brand-title transition-colors duration-200 ease-in-out",
                                        {
                                                "text-brand-text": !active,
                                        }
                                )}
                        >
                                {label}
                        </span>
                        <AnimatePresence>
                                {active && (
                                        <motion.div
                                                initial={{
                                                        opacity: 0,
                                                }}
                                                animate={{
                                                        opacity: 1,
                                                }}
                                                exit={{
                                                        opacity: 0,
                                                }}
                                                className="absolute flex -bottom-6 w-[59px] h-1 bg-brand-yellow rounded-tl-[10px] rounded-tr-[10px]"
                                        ></motion.div>
                                )}
                        </AnimatePresence>
                </Link>
        );
};
