"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-line bg-paper/85 border-b backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#beranda" className="flex items-center gap-2.5">
          <Image
            src={site.logos.bitsi}
            alt="Logo BitSI"
            width={28}
            height={28}
            className="rounded-lg"
          />
          <span className="font-display text-base font-semibold tracking-tight">
            bit<span className="text-cobalt">si</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-fog hover:text-cobalt font-mono text-xs tracking-widest uppercase transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#gabung"
          className="group bg-ink text-paper hover:bg-cobalt inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-mono text-xs font-medium tracking-wider transition-colors"
        >
          Gabung
          <ArrowUpRight
            size={13}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </nav>
    </header>
  );
}
