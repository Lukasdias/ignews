import { Button } from "@/components/ui/button";
import Image from "next/image";

const Intro = () => {
        return (
                <div className="flex flex-col gap-4">
                        <span className="text-2xl font-bold text-brand-title mb-10">
                                👋 Hey, welcome
                        </span>

                        <h1 className="font-black text-7xl text-brand-title mb-6">
                                News about
                                <br /> the {""}
                                <span className="text-brand-blue">
                                        React
                                </span>{" "}
                                world
                        </h1>

                        <p className="text-brand-title text-2xl mb-10">
                                Get access to all the publications{" "}
                                <br className="hidden md:block" />
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
                <div className="ml-[164px] flex flex-col justify-center items-center">
                        <Image
                                src="/mulher.svg"
                                alt="ig.news"
                                width="334"
                                height={520}
                        />
                </div>
        );
};

export default function Home() {
        return (
                <div className="flex flex-1 justify-center items-center">
                        <Intro />
                        <Jumbotron />
                </div>
        );
}
