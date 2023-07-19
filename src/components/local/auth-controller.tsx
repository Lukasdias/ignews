"use client";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Github, X } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

export function AuthController() {
        const { data: session } = useSession();
        const isLogged = session ? true : false;

        return (
                <>
                        <Button
                                type="button"
                                className="sm:flex items-center bg-brand-shape  hover:bg-brand-shape text-brand-background text-base font-bold gap-4 rounded-3xl ml-auto hidden hover:opacity-50 transition-opacity duration-200"
                                onClick={() => !session && signIn("github")}
                        >
                                <Github
                                        size={24}
                                        className={clsx("text-brand-yellow", {
                                                "text-brand-green": isLogged,
                                        })}
                                />
                                <span className="font-bold text-brand-title">
                                        {isLogged
                                                ? session?.user?.name
                                                : "Sing in with Github"}
                                </span>
                                {isLogged && (
                                        <X
                                                size={24}
                                                className="text-brand-green"
                                                onClick={() => signOut()}
                                        />
                                )}
                        </Button>
                </>
        );
}