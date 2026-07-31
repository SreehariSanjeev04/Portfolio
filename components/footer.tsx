"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Check, Copy, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolioData";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-zinc-800/80 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center"
        >
          <div className="max-w-xl">
            <p className="font-mono text-sm text-zinc-500">04 — Contact</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Let&apos;s work together<span className="text-sky-400">.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              I&apos;m currently open to internships and full-time roles in full-stack engineering,
              systems programming, and applied AI. Have a project or a team in mind — my inbox is open.
            </p>
            <div className="mt-6 flex items-center gap-2 font-mono text-xs text-zinc-500">
              <MapPin className="size-3.5 text-sky-400" />
              {profile.location}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={copyEmail}
              className="group inline-flex items-center gap-3 rounded-lg border border-zinc-700 px-5 py-3 font-mono text-sm text-sky-400 transition-colors hover:border-sky-400/60"
            >
              <AnimatePresence mode="wait" initial={false}>
                {copied ? (
                  <motion.span
                    key="copied"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-emerald-400"
                  >
                    <Check className="size-4" />
                    Copied to clipboard
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Copy className="size-4" />
                    {profile.email}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg bg-white px-5 py-3 text-center text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
            >
              Send an email
            </a>
          </div>
        </motion.div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-zinc-800/80 pt-8 sm:flex-row">
          <p className="font-mono text-xs text-zinc-500">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { icon: Github, href: profile.socials.github, label: "GitHub" },
              { icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="text-zinc-500 transition-colors hover:text-white"
              >
                <Icon className="size-5" />
              </a>
            ))}
            <a
              href="#top"
              aria-label="Back to top"
              className="text-zinc-500 transition-colors hover:text-white"
            >
              <ArrowUp className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
