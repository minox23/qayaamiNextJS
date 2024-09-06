import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { KyselyAdapter } from "@auth/kysely-adapter";
import Resend from "next-auth/providers/resend";
import db from "@server/database/2DBconnect";

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
    Resend({
      // If your environment variable is named differently than default
      apiKey: process.env.AUTH_RESEND_KEY,
      from: "mokonya9@gmail.com",
    }),
  ],
});
