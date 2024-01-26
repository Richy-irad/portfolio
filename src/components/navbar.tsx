"use client";

import Link from "next/link";
import { Joti_One, Montserrat } from "next/font/google";
import CallToAction from "./call-to-action";

const jotiOne = Joti_One({ weight: "400", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const links = [
  { name: "About", href: "/#about", number: "01." },
  { name: "Experience", href: "/#experience", number: "02." },
  { name: "Work", href: "/#work", number: "03." },
  { name: "Services", href: "/#services", number: "04." },
  { name: "Testimonials", href: "/#testimonials", number: "05." },
  { name: "Get in touch", href: "/#get-in-touch", number: "06." },
];

export default function Navbar() {
  return (
    <nav className="w-100 flex items-center justify-between px-20 py-7">
      <Link
        href="/"
        className={`${jotiOne.className} text-foreground text-4xl uppercase`}
      >
        RI
      </Link>
      <div className="flex gap-x-8 items-center">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="flex gap-1.5 items-center"
          >
            <span className={`${montserrat.className} text-foreground`}>
              {link.number}
            </span>
            <span className="text-light-100">{link.name}</span>
          </Link>
        ))}
      </div>
      <CallToAction text="Resume" />
    </nav>
  );
}
