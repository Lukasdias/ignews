import { Wrapper } from "@/components/local/container";
import { Button } from "@/components/ui/button";
import { Github, X } from "lucide-react";
import Image from "next/image";
import { Tab } from "./tab";

const SingUpButton = () => {
        return (
                <Button
                        type="button"
                        className="flex items-center bg-brand-shape  hover:bg-brand-shape text-brand-background text-base font-bold gap-4 rounded-3xl ml-auto"
                >
                        <Github size={24} className="text-brand-green" />
                        <span className="font-bold text-brand-title">
                                tiagoluchtenberg
                        </span>
                        <X size={24} className="text-brand-green" />
                </Button>
        );
};

const HeaderBrand = () => {
        return (
                <div className="flex gap-[82px] w-full justify-between sm:justify-start">
                        <Image
                                src="/ig_news.svg"
                                alt="ig.news"
                                width="100"
                                height="100"
                        />
                        <div className="flex gap-8">
                                <Tab active={true} label="Home" />
                                <Tab active={false} label="Posts" />
                        </div>
                        <SingUpButton />
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
