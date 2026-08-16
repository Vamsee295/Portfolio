"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, GitBranch } from "lucide-react";
import type { CaseStudy } from "../../data/caseStudies";
import { CodeAgentPreview, MultiAgentPreview, EduRiskPreview } from "../projects/ProjectPreviews";

const previewMap: Record<string, React.ReactNode> = {
  codeagent: <CodeAgentPreview />,
  multiagent: <MultiAgentPreview />,
  edurisk: <EduRiskPreview />,
};

export default function CaseStudyHero({ study }: { study: CaseStudy }) {
  return (
    <section className="pt-28 pb-16 px-6 max-w-7xl mx-auto">
      {/* Back to Work Nav */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-12"
      >
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-[11px] font-mono font-semibold tracking-[0.18em] text-[#9ca3af] hover:text-[#111111] transition-colors uppercase"
        >
          <ArrowLeft size={12} />
          Back to Work
        </Link>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left: Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-mono font-semibold tracking-[0.12em] text-[#9ca3af] uppercase">
                {study.category}
              </span>
              <span
                className={`text-[10px] font-mono font-bold tracking-widest px-2 py-0.5 rounded-sm uppercase ${
                  study.status === "ACTIVE"
                    ? "bg-green-100 text-green-700"
                    : study.status === "EXPERIMENTAL"
                    ? "bg-orange-100 text-orange-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {study.status}
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-black tracking-[-0.04em] text-[#111111] mb-6 leading-tight">
              {study.title}
            </h1>

            <p className="text-lg text-[#6b7280] leading-relaxed mb-8 max-w-xl">
              {study.tagline}
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {study.primaryStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[12px] font-mono font-medium text-[#6b7280] bg-[#f8fafc] border border-[#e5e7eb] px-3 py-1.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={study.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#111111] text-white font-semibold text-sm hover:bg-[#000000] hover:shadow-lg transition-all duration-200"
              >
                <GitBranch size={16} />
                View on GitHub
              </a>
              {study.demoUrl && (
                <a
                  href={study.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#e5e7eb] bg-white text-[#374151] font-semibold text-sm hover:border-[#111111] hover:text-[#111111] transition-all duration-200"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Right: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl overflow-hidden border border-[#e5e7eb] bg-[#f8fafc] shadow-2xl shadow-[rgba(0,0,0,0.04)] aspect-[4/3] flex items-center justify-center p-6"
        >
          <div className="w-full h-full max-w-xl">
            {previewMap[study.previewType]}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
