import "@public/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qayaami",
  description: "advertising and Marketing agency",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
