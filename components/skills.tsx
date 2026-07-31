"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolioData";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/section-header";

export default function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);
  const category = skillCategories.find((c) => c.id === active) ?? skillCategories[0];

  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader index="03" title="Skills" subtitle="Core expertise" />

        <div className="flex flex-wrap gap-2">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm transition-colors",
                active === cat.id ? "bg-white font-medium text-ink-950" : "text-zinc-400 hover:text-white"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-2 font-mono text-sm text-zinc-300 transition-colors hover:border-zinc-600 hover:text-white"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        <p className="mt-10 flex items-center gap-2 font-mono text-xs text-zinc-500">
          <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
          Currently exploring: agentic AI workflows, distributed systems, and applied LLMs
        </p>
      </div>
    </section>
  );
}
