import { Container } from "@/components/local/container";
import { Header } from "@/components/local/header";
import { NextAuthProvider } from "@/components/local/next-auth-provider";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { twJoin } from "tailwind-merge";
import "./globals.css";

const roboto = Roboto({
        weight: ["400", "500", "700", "900"],
        subsets: ["latin-ext"],
});

export const metadata: Metadata = {
        title: "ig.news",
        description: "Ig.news is a blog about the React world",
        viewport: "width=device-width, initial-scale=1",
        icons: {
                icon: "/next.svg",
        },
};

export default function RootLayout({
        children,
}: {
        children: React.ReactNode;
}) {
        return (
                <html lang="en">
                        <body
                                className={twJoin(
                                        roboto.className,
                                        "w-full flex"
                                )}
                                suppressHydrationWarning
                        >
                                <NextAuthProvider>
                                        <Container>
                                                <Header />
                                                {children}
                                        </Container>
                                </NextAuthProvider>
                        </body>
                </html>
        );
}
