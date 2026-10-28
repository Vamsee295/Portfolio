"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "../../data/projects";
import { Marked, Reveal } from "../common/motion";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="work" aria-labelledby="projects-heading" className="relative mx-auto max-w-[1180px] px-[clamp(18px,4vw,40px)] py-28">
      <Reveal className="mb-16 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-[var(--mute)]">01 / SELECTED WORK</p>
          <h2 id="projects-heading" className="mt-3 font-display text-[clamp(2.8rem,6.5vw,5.6rem)] uppercase leading-[0.95] text-ink">
            Things I&rsquo;ve <Marked>built</Marked>
          </h2>
          <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-[var(--body)]">
            Intelligent systems, software tools and applications — focused on AI/ML, software engineering and data.
          </p>
        </div>
        <p className="rotate-2 font-hand text-2xl text-[var(--teal)]">the three i&rsquo;m proudest of ↓</p>
      </Reveal>

      <div className="flex flex-col gap-12">
        {projects.filter((p) => p.featured).map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <Reveal className="mt-16">
        <Link
          href="/playground"
          className="group dots-night relative flex flex-col gap-8 overflow-hidden rounded-2xl border-[2.5px] border-ink bg-night p-8 text-paper shadow-[5px_6px_0_var(--ink)] transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 lg:flex-row lg:items-center lg:justify-between lg:p-12"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-paper/50">MORE BUILDS &amp; EXPERIMENTS</p>
            <h3 className="mt-3 font-display text-[clamp(2rem,4vw,3.4rem)] uppercase leading-none">
              There&rsquo;s a lot more in the <Marked>lab.</Marked>
            </h3>
            <p className="mt-4 max-w-md leading-relaxed text-paper/70">
              46+ repositories, AI agent prototypes, machine learning models, notebooks and experiments across data science and software engineering.
            </p>
          </div>
          <span className="btn-stk shrink-0 !border-paper">
            Explore all labs <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden />
          </span>
        </Link>
      </Reveal>
    </section>
  );
}
