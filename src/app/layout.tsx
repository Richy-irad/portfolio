import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Richard Iradukunda",
  description:
    "Discover digital excellence with a seasoned Full Stack Web Developer. Elevate your online presence with tailored solutions blending innovation and functionality",
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
        <main className="mx-5 md:mx-10 lg:mx-20 xl:mx-40 2xl:mx-96 h-fit pb-24 mt-20 lg:mt-24">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
