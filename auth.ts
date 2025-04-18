import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { getServerSession, NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import dbConnect from "./lib/mongoose";
import Whitelist from "./models/Whitelist";
import { MongoClient } from "mongodb";

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

export const getAuthSession = () => getServerSession(authConfig);
