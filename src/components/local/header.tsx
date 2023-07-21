"use client";

import { AuthController } from "@/components/local/auth-controller";
import { Wrapper } from "@/components/local/container";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tab } from "./tab";

const HeaderBrand = () => {
        const pathname = usePathname();
        const isOnHome = pathname === "/";
        const isOnPosts = pathname === "/posts";
        return (
                <div className="flex gap-[82px] w-full justify-between sm:justify-start">
                        <Link
                                href="/"
                                className="flex justify-center items-center"
                        >
                                <Image
                                        src="/ig_news.svg"
                                        alt="ig.news"
                                        width="100"
                                        height="100"
                                />
                        </Link>

                        <div className="flex gap-8">
                                <Tab
                                        active={isOnHome}
                                        label="Home"
                                        targetUrl="/"
                                />
                                <Tab
                                        active={isOnPosts}
                                        label="Posts"
                                        targetUrl="/posts"
                                />
                        </div>
                        <AuthController />
                </div>
        );
};

export const Header = () => {
        return (
                <header className="w-full flex bg-brand-background border-b-brand-shape border-b-4 ">
                        <Wrapper className="h-20 max-h-[80px]">
                                <HeaderBrand />
                        </Wrapper>
                </header>
        );
};
