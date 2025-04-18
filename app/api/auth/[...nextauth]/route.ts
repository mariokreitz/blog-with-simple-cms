import NextAuth, { NextAuthOptions } from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { MongoClient } from "mongodb";
import dbConnect from "@/lib/mongoose";
import Whitelist from "@/models/Whitelist";
import Google from "next-auth/providers/google";

if (!process.env.MONGODB_URI) throw new Error("Missing MONGODB_URI");
const clientPromise = MongoClient.connect(process.env.MONGODB_URI);

export const authConfig: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      await dbConnect();
      const allowed = await Whitelist.findOne({ email: user.email });
      if (allowed) {
        return true;
      } else {
        return `/access-denied`;
      }
    },
  },
};

const handler = NextAuth(authConfig);
export { handler as GET, handler as POST };
