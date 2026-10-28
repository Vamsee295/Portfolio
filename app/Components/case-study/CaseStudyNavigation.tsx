"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, GitBranch } from "lucide-react";
import type { CaseStudy } from "../../data/caseStudies";
import { Marked, Reveal } from "../common/motion";

export default function CaseStudyNavigation({ study, prevTitle, nextTitle }: { study: CaseStudy; prevTitle: string; nextTitle: string }) {
  return (
    <section className="mt-24">
      {/* Project CTA */}
      <div className="dots-night border-y-[2.5px] border-ink bg-night px-[clamp(18px,4vw,40px)] py-24 text-center text-paper">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center">
          <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.4rem)] uppercase leading-[0.95]">
            {study.demoUrl ? (
              <>Go poke the <Marked>live build</Marked></>
            ) : (
              <>Read the <Marked>source</Marked></>
            )}
          </h2>
          <p className="mt-5 max-w-md text-paper/70">
            {study.demoUrl
              ? "Open the live experience in a new tab without leaving this case study."
              : "Dive into the source code to see how the architecture was built."}
          </p>
          <div className="mt-9">
            {study.demoUrl ? (
              <a href={study.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-stk !border-paper">
                Open live project <ArrowUpRight size={18} aria-hidden />
              </a>
            ) : study.githubUrl ? (
              <a href={study.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-stk !border-paper">
                <GitBranch size={18} aria-hidden /> View source on GitHub
              </a>
            ) : null}
          </div>
        </Reveal>
      </div>

      {/* Prev / next */}
      <nav aria-label="More case studies" className="mx-auto grid max-w-[1180px] gap-5 px-[clamp(18px,4vw,40px)] py-14 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <Link href={`/projects/${study.prevSlug}`} className="stk group p-6 transition-transform hover:-translate-x-1">
          <span className="flex items-center gap-2 font-cond text-sm font-bold uppercase tracking-[0.12em] text-[var(--mute)]">
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" aria-hidden /> Previous
          </span>
          <span className="mt-2 block font-display text-2xl uppercase leading-none text-ink">{prevTitle}</span>
        </Link>

        <Link href="/#work" className="text-center font-cond text-sm font-bold uppercase tracking-[0.14em] text-[var(--mute)] hover:text-accent">
          All work
        </Link>

        <Link href={`/projects/${study.nextSlug}`} className="stk group p-6 text-right transition-transform hover:translate-x-1">
          <span className="flex items-center justify-end gap-2 font-cond text-sm font-bold uppercase tracking-[0.12em] text-[var(--mute)]">
            Next <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden />
          </span>
          <span className="mt-2 block font-display text-2xl uppercase leading-none text-ink">{nextTitle}</span>
        </Link>
      </nav>
    </section>
  );
}
