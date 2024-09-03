import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { KyselyAdapter } from "@auth/kysely-adapter";
import { db } from "@server/lib/db";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: KyselyAdapter(db),
  providers: [
    Google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
});
