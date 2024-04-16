"use client";

import Link from "next/link";
import { jotiOne, montserrat } from "@/app/fonts";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { X } from "@phosphor-icons/react";
import { Popover } from "@headlessui/react";

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
    <nav className="fixed top-0 w-full flex items-center justify-between px-5 md:px-10 lg:px-20 py-7 snap-start bg-background-100">
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
      <Popover className="flex lg:hidden">
        <Popover.Button>
          <Bars2Icon className="w-8 h-8 text-foreground" />
        </Popover.Button>
        <Popover.Overlay className="fixed inset-0" />
        <Popover.Panel className="fixed left-0 top-0 w-full md:w-96 h-screen z-10 flex flex-col gap-6 bg-background-100 p-10">
          {({ close }) => (
            <>
              {/* close button */}
              <button
                type="button"
                className="text-foreground self-end"
                onClick={() => close()}
              >
                <X size={24} weight="bold" />
              </button>

              {/* the nav items */}
              {links.map((link, index) => (
                <Popover.Button
                  key={index}
                  as={Link}
                  href={link.href}
                  className="flex gap-1.5 items-center text-xl"
                >
                  <span className={`${montserrat.className} text-foreground`}>
                    {link.number}
                  </span>
                  <span className="text-light-100">{link.name}</span>
                </Popover.Button>
              ))}
            </>
          )}
        </Popover.Panel>
      </Popover>
    </nav>
  );
}
