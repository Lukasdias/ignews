import Image from "next/image";
import { Tab } from "./tab";

const HeaderBrand = () => {
        return (
                <div className="flex gap-[82px]">
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
                </div>
        );
};

export const Header = () => {
        return (
                <header className="w-full flex bg-brand-background border-b-brand-shape border-b-4 h-full max-h-[80px] justify-center">
                        <div className="w-full max-w-7xl flex justify-between">
                                <HeaderBrand />
                        </div>
                </header>
        );
};
