import { Container } from "@/components/local/container";
import { Header } from "@/components/local/header";
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
                        >
                                <Container>
                                        <Header />
                                        {children}
                                </Container>
                        </body>
                </html>
        );
}
