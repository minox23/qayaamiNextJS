import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { KyselyAdapter } from "@auth/kysely-adapter";
import { db } from "@utils/database";

export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: KyselyAdapter(db),
  providers: [Google],
  callbacks: {
    async session({ session }) {
      return session;
    },
  },
});
