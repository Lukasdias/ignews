import { fauna } from "@/services/fauna";
import { query as q } from "faunadb";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
const handler = NextAuth({
        secret: process.env.JWT_SECRET,
        providers: [
                GitHubProvider({
                        clientId: process.env.GITHUB_CLIENT_ID!,
                        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
                        authorization: {
                                params: {
                                        scope: "read:user",
                                },
                        },
                }),
        ],
        callbacks: {
                async signIn({ user, account, profile, email, credentials }) {
                        const { email: userEmail } = user;
                        try {
                                fauna.query(
                                        q.Create(q.Collection("users"), {
                                                data: { email: userEmail },
                                        })
                                );
                                return true;
                        } catch {
                                return false;
                        }
                },
                async redirect({ url, baseUrl }) {
                        return baseUrl;
                },
                async session({ session, user, token }) {
                        return session;
                },
                async jwt({ token, user, account, profile, isNewUser }) {
                        return token;
                },
        },
});

export { handler as GET, handler as POST };
