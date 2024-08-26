import "@styles/globals.css";

export const metadata = {
  title: "Qayaami",
  description: "digital marketing and advertising",
};

const RootLayout: React.FC<any> = ({ children }): JSX.Element => {
  return (
    <html lang="en">
      <body>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
