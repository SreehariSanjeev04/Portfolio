"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project, type ProjectCategory } from "@/data/portfolioData";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/section-header";

const filters: ("All" | ProjectCategory)[] = ["All", "Web", "Systems", "Compilers", "Databases"];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors duration-300 hover:border-zinc-600 hover:bg-zinc-900/70"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-sky-400">
            {project.title}
          </h3>
          <p className="mt-0.5 text-sm text-zinc-500">{project.tagline}</p>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} repository`}
          className="text-zinc-500 transition-colors hover:text-white"
        >
          <Github className="size-5" />
        </a>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-zinc-400">{project.description}</p>

      <ul className="mt-5 space-y-2">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-300">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-sky-400/70" />
            {highlight}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-zinc-800 bg-zinc-800/40 px-2.5 py-1 font-mono text-xs text-zinc-400"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-zinc-800/80 pt-4 text-xs text-zinc-500">
        <span className="flex items-center gap-1.5">
          <span className={cn("size-2 rounded-full", project.languageColor)} />
          {project.language}
        </span>
        <span className="font-mono">{project.year}</span>
      </div>
    </motion.article>
  );
}

export default function ProjectsBento() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="work" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader index="01" title="Projects" subtitle="Selected work" />

        <div className="mb-8 flex flex-wrap items-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm transition-colors",
                active === filter ? "bg-white font-medium text-ink-950" : "text-zinc-400 hover:text-white"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence initial={false}>
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://github.com/SreehariSanjeev04?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Explore more on GitHub
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
