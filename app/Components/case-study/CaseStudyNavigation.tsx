"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, GitBranch } from "lucide-react";
import type { CaseStudy } from "../../data/caseStudies";

export default function CaseStudyNavigation({ study, prevTitle, nextTitle }: { study: CaseStudy, prevTitle: string, nextTitle: string }) {
  return (
    <section className="mt-20">
      {/* GitHub CTA */}
      <div className="bg-[#fafafa] border-y border-[#e5e7eb] py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-2xl lg:text-3xl font-black tracking-tight text-[#111111] mb-6">
            Interested in the implementation?
          </h2>
          <p className="text-sm text-[#6b7280] mb-8">
            Dive into the source code to see how the architecture was built.
          </p>
          <a
            href={study.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#111111] text-white font-semibold text-sm hover:bg-[#000000] hover:shadow-lg transition-all duration-200"
          >
            <GitBranch size={18} />
            View Source on GitHub
          </a>
        </motion.div>
      </div>

      {/* Bottom Nav */}
      <div className="py-12 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <Link
          href={`/projects/${study.prevSlug}`}
          className="group flex flex-col items-start gap-1 w-full md:w-1/3"
        >
          <span className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-[0.15em] text-[#9ca3af] uppercase mb-1">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Previous Project
          </span>
          <span className="text-sm font-semibold text-[#111111]">{prevTitle}</span>
        </Link>
        
        <Link
          href="/#work"
          className="text-xs font-mono font-bold tracking-[0.15em] text-[#6b7280] hover:text-[#111111] uppercase whitespace-nowrap transition-colors"
        >
          Back to Work
        </Link>

        <Link
          href={`/projects/${study.nextSlug}`}
          className="group flex flex-col items-end gap-1 w-full md:w-1/3 text-right"
        >
          <span className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-[0.15em] text-[#9ca3af] uppercase mb-1">
            Next Project
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="text-sm font-semibold text-[#111111]">{nextTitle}</span>
        </Link>
      </div>
    </section>
  );
}
