"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  index: string;
  title: string;
  subtitle: string;
};

export default function SectionHeader({ index, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10 md:mb-14"
    >
      <div className="flex items-center gap-3 font-mono text-sm text-zinc-600">
        <span>{index}</span>
        <span className="h-px w-10 bg-zinc-700" />
        <span className="uppercase tracking-[0.3em] text-zinc-500">{title}</span>
      </div>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
        {subtitle.split(" ").map((word, i) => (
          <span key={i} className={i === subtitle.split(" ").length - 1 ? "text-sky-400" : undefined}>
            {word}{" "}
          </span>
        ))}
      </h2>
    </motion.div>
  );
}
