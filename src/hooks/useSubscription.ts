"use client";

import { api } from "@/services/api";
import { getStripeJs } from "@/services/stripe-js";
import { Session } from "next-auth";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useToast } from "../components/ui/use-toast";

export interface SessionWithSubscription extends Session {
        activeSubscription: any;
}

export default function useSubscription() {
        const { data } = useSession();
        const { toast } = useToast();
        const [loading, setLoading] = useState(false);
        const router = useRouter();

        const session = data as SessionWithSubscription;

        async function handleSubscribe() {
                if (!session) {
                        toast({
                                variant: "default",
                                title: "You need to login first.",
                        });
                        signIn("github");
                        return;
                }

                if (session?.activeSubscription) {
                        toast({
                                variant: "default",
                                title: "You already have an active subscription.",
                        });
                        router.push("/posts");
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

        return {
                handleSubscribe,
                loading,
                session,
        };
}
