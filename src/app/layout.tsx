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
    <html lang="en" className="!scroll-smooth snap-y">
      <body className={`bg-background-100 text-light-300 ${inter.className}`}>
        <Navbar />
        <main className="mx-5 md:mx-10 lg:mx-20 xl:mx-40 2xl:mx-96 h-fit pb-24">
          {children}
        </main>
      </body>
    </html>
  );
}
