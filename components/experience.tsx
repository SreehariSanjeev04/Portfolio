"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap, Users } from "lucide-react";
import { experience } from "@/data/portfolioData";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/section-header";

const typeIcons = {
  Internship: Briefcase,
  Leadership: Users,
  Education: GraduationCap,
};

const typeStyles = {
  Internship: "text-sky-400",
  Leadership: "text-violet-400",
  Education: "text-emerald-400",
};

function TimelineItem({
  item,
  index,
}: {
  item: (typeof experience)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-30% 0px -30% 0px" });
  const Icon = typeIcons[item.type];

  return (
    <div ref={ref} className="relative pl-12">
      <span
        className={cn(
          "absolute left-0 top-1.5 size-3 rounded-full border-2 transition-colors duration-300",
          inView ? "border-sky-400 bg-sky-400" : "border-zinc-700 bg-ink-950"
        )}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "rounded-xl border p-6 transition-colors duration-300",
          inView ? "border-zinc-700 bg-zinc-900/60" : "border-zinc-800 bg-zinc-900/40"
        )}
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className={cn("inline-flex items-center gap-1.5 font-mono text-xs", typeStyles[item.type])}>
            <Icon className="size-3.5" />
            {item.type}
          </span>
          <span className="font-mono text-xs text-zinc-500">{item.period}</span>
        </div>

        <h3 className="mt-3 text-lg font-semibold text-white">{item.role}</h3>
        <p className="mt-0.5 text-sm text-zinc-400">
          {item.org} · {item.location}
        </p>

        <ul className="mt-4 space-y-2">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-400">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-zinc-600" />
              {bullet}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeader index="02" title="Experience" subtitle="Career highlights" />

        <div className="relative">
          <div className="absolute bottom-2 left-[5px] top-2 w-px bg-zinc-800" />
          <div className="space-y-8">
            {experience.map((item, index) => (
              <TimelineItem key={`${item.role}-${index}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
