import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  display: 'swap',
  subsets: ["latin"],
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="canonical" href="https://www.arielbatoon.com" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} text-foreground antialiased !font-default overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}