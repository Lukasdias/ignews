"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/services/api";
import { getStripeJs } from "@/services/stripe-js";
import { Loader } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { useToast } from "../ui/use-toast";

export function SubscribeButton() {
        const { data: session } = useSession();
        const { toast } = useToast();
        const [loading, setLoading] = useState(false);

        async function handleSubscribe() {
                if (!session) {
                        signIn("github");
                        return;
                }
                setLoading(true);
                try {
                        const response = await api.post<{
                                sessionId: string;
                        }>("/subscribe");
                        const { sessionId } = response.data;
                        const stripe = await getStripeJs();
                        stripe?.redirectToCheckout({ sessionId });
                } catch (e) {
                        toast({
                                variant: "destructive",
                                title: "Error while subscribing, try login again with github.",
                        });
                }
                setLoading(false);
        }

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
