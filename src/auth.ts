import NextAuth, { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./db";

export const authConfig = {
  adapter: DrizzleAdapter(db),
  providers: [
    GitHub({
      clientId: process.env.OAUTH_CLIENT_ID as string,
      clientSecret: process.env.OAUTH_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, user }: any) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.user.id = user.id;

      return session;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth } = NextAuth(authConfig);
