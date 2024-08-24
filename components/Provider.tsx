"use client";

import { SessionProvider } from "next-auth/react";

export const Provider = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: Element;
}) => {
  return <SessionProvider>{children}</SessionProvider>;
};
