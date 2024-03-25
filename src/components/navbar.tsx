"use client";

import Link from "next/link";
import { Joti_One, Montserrat } from "next/font/google";

const jotiOne = Joti_One({ weight: "400", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const links = [
  { name: "About", href: "/#about", number: "01." },
  { name: "Experience", href: "/#experience", number: "02." },
  { name: "Work", href: "/#work", number: "03." },
  { name: "Services", href: "/#services", number: "04." },
  // { name: "Testimonials", href: "/#testimonials", number: "05." },
  { name: "Get in touch", href: "/#get-in-touch", number: "05." },
];

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-5 md:px-10 lg:px-20 py-7 snap-start">
      <Link
        href="/"
        className={`${jotiOne.className} text-foreground text-4xl uppercase`}
      >
        RI
      </Link>
      <div className="hidden lg:flex gap-x-8 items-center">
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
      <Link
        href="/resume.pdf"
        target="_blank"
        className="hidden lg:flex px-4 py-3 border-foreground border-2 rounded-lg capitalize text-foreground font-semibold"
      >
        resume
      </Link>
    </nav>
  );
}
