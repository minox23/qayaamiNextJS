import "@globals.css";
import type { Metadata } from "next";
import { inter } from "@components/ui/fonts";

export const metadata: Metadata = {
  title: "Qayaami",
  description: "advertising and Marketing agency",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
