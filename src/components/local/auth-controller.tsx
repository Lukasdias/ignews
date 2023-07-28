"use client";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Github, LoaderIcon, X } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

export function AuthController() {
        const { data: session, status } = useSession();
        const isLogged = session ? true : false;

        return (
                <>
                        <Button
                                type="button"
                                className={clsx(
                                        "sm:flex items-center bg-brand-shape  hover:bg-brand-shape text-brand-background text-base font-bold gap-4 rounded-3xl ml-auto   transition-opacity duration-200",
                                        {
                                                "hover:opacity-50": !isLogged,
                                        }
                                )}
                                onClick={() => !session && signIn("github")}
                        >
                                {status === "loading" ? (
                                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-brand-background">
                                                <LoaderIcon
                                                        size={24}
                                                        className="text-brand-green"
                                                />
                                        </div>
                                ) : (
                                        <>
                                                <Github
                                                        className={clsx(
                                                                "text-brand-yellow w-4 sm:w-6 h-4 sm:h-6",
                                                                {
                                                                        "text-brand-green":
                                                                                isLogged,
                                                                }
                                                        )}
                                                />
                                                <span className="font-bold text-brand-title hidden sm:block">
                                                        {isLogged
                                                                ? session?.user
                                                                          ?.name
                                                                : "Sing in with Github"}
                                                </span>
                                                {isLogged && (
                                                        <button
                                                                onClick={() =>
                                                                        signOut()
                                                                }
                                                        >
                                                                <X
                                                                        size={
                                                                                24
                                                                        }
                                                                        className="text-brand-green z-10 hover:text-brand-yellow"
                                                                />
                                                        </button>
                                                )}
                                        </>
                                )}
                        </Button>
                </>
        );
}
