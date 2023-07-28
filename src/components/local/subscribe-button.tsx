"use client";

import { Button } from "@/components/ui/button";
import useSubscription from "@/hooks/useSubscription";
import { Loader } from "lucide-react";

export function SubscribeButton() {
        const { loading, handleSubscribe } = useSubscription();

        return (
                <Button
                        className="w-[256px] h-[64px] bg-brand-yellow hover:bg-brand-green font-bold text-2xl text-brand-background rounded-[100px]"
                        onClick={handleSubscribe}
                >
                        {loading ? (
                                <>
                                        <Loader
                                                className="animate-spin"
                                                size={24}
                                        />
                                </>
                        ) : (
                                "Subscribe now"
                        )}
                </Button>
        );
}
