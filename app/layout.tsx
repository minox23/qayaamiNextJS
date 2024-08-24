import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Provider from "@components/Provider";

export const metadata = {
  title: "Qayaami",
  description: "digital marketing and advertising",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main className="app">
            <Navbar />
            {children}
          </main>
          <p>hey</p>
        </Provider>
      </body>
    </html>
  );
}
