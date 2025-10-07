import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Online Autoparts",
  description: "get your best services for free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="stylesheet" href="https://use.typekit.net/mqv8gzf.css"></link> */}
      </head>
       <body className="antialiased" style={{ fontFamily: "acumin-pro, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
