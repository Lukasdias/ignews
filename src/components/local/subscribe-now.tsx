"use client";

import useSubscription from "@/hooks/useSubscription";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

export function SubscribeNow() {
        const { handleSubscribe, loading, session } = useSubscription();

        if (session?.activeSubscription) {
                return null;
        }

        return (
                <Button
                        className="w-full flex justify-center items-center p-8 bg-brand-shape rounded-3xl animate-pulse"
                        onClick={handleSubscribe}
                >
                        {loading ? (
                                <>
                                        <Loader2
                                                className="animate-spin text-brand-yellow"
                                                size={24}
                                        />
                                </>
                        ) : (
                                <>
                                        <span className="font-bold text-white text-xl">
                                                Wanna continue reading?{" "}
                                                <span className="text-brand-yellow">
                                                        Subscribe now
                                                </span>
                                                {""} 🤗
                                        </span>
                                </>
                        )}
                </Button>
        );
}
