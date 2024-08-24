"use client";

import { SessionProvider } from "next-auth/react";

export default function Provider<ElementType2>({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: ElementType2;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
