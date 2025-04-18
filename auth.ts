// auth.ts
import Google from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";

const allowedEmails = [process.env.EMAIL_OWNER!, process.env.EMAIL_DEV!];

export const authConfig: NextAuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (allowedEmails.includes(user.email!)) {
        return true;
      } else {
        return `/access-denied`;
      }
    },
  },
};

export const auth = () => getServerSession(authConfig);
