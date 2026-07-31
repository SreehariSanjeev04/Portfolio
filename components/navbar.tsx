"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Github } from "lucide-react";
import { navLinks, profile } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => setScrolled(v > 24));
    return unsubscribe;
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-6 py-4 transition-all duration-300",
          scrolled && "border-b border-zinc-800/80 bg-ink-950/80 backdrop-blur-md"
        )}
      >
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight text-white">
          sreehari<span className="text-sky-400">.dev</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-zinc-400 transition-colors hover:text-white"
          >
            <Github className="size-5" />
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
