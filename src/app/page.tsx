import Image from "next/image";

const Intro = () => {
        return (
                <div className="flex flex-col justify-center items-center">
                        <h1 className="text-6xl font-bold text-brand-green">
                                Welcome to Next.js!
                        </h1>
                </div>
        );
};

const Jumbotron = () => {
        return (
                <div className="flex flex-col justify-center items-center">
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
                </div>
        );
}
