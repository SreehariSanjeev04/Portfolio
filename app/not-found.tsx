"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Home, TerminalSquare } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/portfolioData";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(56,189,248,0.09),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-2xl text-center"
      >
        <div className="mb-8 inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-ink-900/80 px-4 py-2 font-mono text-xs text-zinc-500">
          <TerminalSquare className="size-3.5 text-sky-400" />
          <span>$ curl -sI sreeharis.tech/lost</span>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="bg-gradient-to-b from-white to-zinc-600 bg-clip-text text-[8rem] font-bold leading-none tracking-tight text-transparent sm:text-[10rem]"
        >
          404
        </motion.h1>

        <p className="mt-4 font-mono text-sm text-sky-400 sm:text-base">segmentation_fault: page not found</p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mx-auto mt-4 max-w-md text-zinc-400"
        >
          The route you requested doesn&apos;t exist in this namespace. You may have taken a
          wrong turn, or the page has been moved to a different address.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
          >
            <Home className="size-4" />
            Back to home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Go back
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 font-mono text-xs text-zinc-600"
        >
          exit status 404 &mdash; {profile.headline}
        </motion.p>
      </motion.div>
    </section>
  );
}
