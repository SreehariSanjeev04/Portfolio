"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolioData";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(56,189,248,0.09),transparent_70%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.h1
            variants={item}
            className="text-5xl font-bold tracking-tight text-white sm:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p variants={item} className="mt-4 font-mono text-sm text-zinc-500 sm:text-base">
            {profile.headline} — {profile.location}
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            {profile.pitch}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
            >
              View projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-6 text-zinc-500">
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
                className="flex items-center gap-2 text-sm transition-colors hover:text-white"
              >
                <Icon className="size-4" />
                {label}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
