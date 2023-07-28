import { SubscribeButton } from "@/components/local/subscribe-button";
import { formatUSD } from "@/lib/utils";

interface IntroProps {
        product: {
                amount: number;
        };
}

export function Intro(props: IntroProps) {
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
                                        for {formatUSD(props.product.amount)}{" "}
                                        month
                                </span>
                        </p>

                        <SubscribeButton />
                </div>
        );
}
