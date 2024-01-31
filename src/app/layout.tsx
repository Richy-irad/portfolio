import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Richard Iradukunda",
  description: "Full-stack Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-background-100 text-light-300 ${inter.className}`}>
        <Navbar />
        <main className="mx-5 md:mx-10 lg:mx-60 2xl:mx-80 h-fit">{children}</main>
      </body>
    </html>
  );
}
