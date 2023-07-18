import { Wrapper } from "@/components/local/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Intro = () => {
        return (
                <div className="flex flex-col gap-4 sm:w-full items-center sm:items-start">
                        <span className="text-2xl font-bold text-brand-title mb-10">
                                👋 Hey, welcome
                        </span>

                        <h1 className="font-black text-5xl sm:text-7xl text-brand-title mb-6 text-center sm:text-left">
                                News about
                                <br className="hidden md:block" /> the {""}
                                <span className="text-brand-blue">
                                        React
                                </span>{" "}
                                world
                        </h1>

                        <p className="text-brand-title text-xl sm:text-2xl mb-10">
                                Get access to all the publications
                                <br className="block" />
                                <span className="text-brand-blue font-bold">
                                        for $9.90 month
                                </span>
                        </p>

                        <Button className="w-[256px] h-[64px] bg-brand-yellow hover:bg-brand-green font-bold text-2xl text-brand-background rounded-[100px]">
                                Subscribe now
                        </Button>
                </div>
        );
};

const Jumbotron = () => {
        return (
                <Image
                        src="/mulher.svg"
                        alt="ig.news"
                        width="334"
                        height={520}
                />
        );
};

export default function Home() {
        return (
                <Wrapper>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-10 flex-1">
                                <Intro />
                                <Jumbotron />
                        </div>
                </Wrapper>
        );
}
