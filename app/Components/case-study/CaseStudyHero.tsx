"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, GitBranch } from "lucide-react";
import type { CaseStudy } from "../../data/caseStudies";
import { StudyHubPreview, MultiAgentPreview, EduRiskPreview } from "../projects/ProjectPreviews";
import { ease } from "../common/motion";

const previewMap: Record<string, React.ReactNode> = {
  studyhub: <StudyHubPreview />,
  multiagent: <MultiAgentPreview />,
  edurisk: <EduRiskPreview />,
};

const statusColor: Record<string, string> = {
  ACTIVE: "var(--mint)",
  EXPERIMENTAL: "var(--gold)",
};

export default function CaseStudyHero({ study }: { study: CaseStudy }) {
  const still = useReducedMotion();
  const rise = (delay: number) => ({
    initial: still ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section className="mx-auto max-w-[1180px] px-[clamp(18px,4vw,40px)] pb-20 pt-32">
      <motion.div {...rise(0)}>
        <Link href="/#work" className="inline-flex items-center gap-2 font-cond text-sm font-bold uppercase tracking-[0.14em] text-[var(--mute)] hover:text-accent">
          <ArrowLeft size={14} aria-hidden /> Back to work
        </Link>
      </motion.div>

      <div className="mt-10 grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <motion.div {...rise(0.05)} className="flex flex-wrap items-center gap-3">
            <span className="font-cond text-sm font-bold uppercase tracking-[0.12em] text-[var(--mute)]">{study.category}</span>
            <span
              className="rotate-2 rounded-md border-2 border-ink px-2 py-0.5 font-cond text-xs font-bold uppercase tracking-[0.1em] text-ink"
              style={{ background: statusColor[study.status] ?? "var(--paper2)" }}
            >
              {study.status}
            </span>
          </motion.div>

          <h1 className="mt-5 overflow-hidden font-display text-[clamp(3rem,7vw,6rem)] uppercase leading-[0.92] text-ink">
            <motion.span className="block" initial={still ? false : { y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease }}>
              {study.title}
            </motion.span>
          </h1>

          <motion.p {...rise(0.25)} className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--body)]">
            {study.tagline}
          </motion.p>

          <motion.ul {...rise(0.35)} className="mt-7 flex flex-wrap gap-2">
            {study.primaryStack.map((tech) => (
              <li key={tech} className="rounded-lg border-2 border-ink bg-card px-2.5 py-1 font-mono text-xs text-ink">
                {tech}
              </li>
            ))}
          </motion.ul>

          <motion.div {...rise(0.45)} className="mt-9 flex flex-wrap gap-4">
            {study.demoUrl && (
              <a href={study.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-stk">
                Live project <ArrowUpRight size={18} aria-hidden />
              </a>
            )}
            {study.githubUrl && (
              <a href={study.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-stk !bg-card !text-ink">
                <GitBranch size={18} aria-hidden /> Source
              </a>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={still ? false : { opacity: 0, y: 40, rotate: 5 }}
          animate={{ opacity: 1, y: 0, rotate: 1.5 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="relative mx-auto w-full max-w-[540px]"
        >
          <div className="absolute -inset-6 -z-10 rounded-3xl border-[2.5px] border-ink bg-paper2 [background-image:radial-gradient(rgba(25,22,20,0.12)_1.1px,transparent_1.5px)] [background-size:13px_13px]" />
          <div className="aspect-[4/3.3] overflow-hidden rounded-xl border-[2.5px] border-ink shadow-[6px_7px_0_var(--ink)]">
            {previewMap[study.previewType]}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
