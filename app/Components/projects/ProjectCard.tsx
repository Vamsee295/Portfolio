"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import type { Project } from "../../data/projects";
import {
  CodeAgentPreview,
  MultiAgentPreview,
  EduRiskPreview,
} from "./ProjectPreviews";

const previewMap: Record<string, React.ReactNode> = {
  codeagent:  <CodeAgentPreview />,
  multiagent: <MultiAgentPreview />,
  edurisk:    <EduRiskPreview />,
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref as React.RefObject<HTMLElement>}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: "easeOut",
      }}
      className="group relative bg-white border border-[#e5e7eb] rounded-2xl overflow-hidden hover:border-[#111111] hover:shadow-xl hover:shadow-[rgba(0,0,0,0.06)] transition-all duration-400"
      style={{ transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)" }}
    >
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Left — Content */}
        <div className="p-8 lg:p-10 flex flex-col justify-between">
          <div>
            {/* Number + Category */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono font-bold text-[#111111] opacity-70">
                {project.number}
              </span>
              <span className="text-[10px] font-mono font-semibold tracking-[0.12em] text-[#9ca3af] uppercase">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl lg:text-3xl font-black tracking-tight text-[#111111] mb-4 leading-tight group-hover:text-[#000000] transition-colors duration-300">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-[#6b7280] leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-mono font-medium text-[#6b7280] bg-[#f8fafc] border border-[#e5e7eb] px-2.5 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 pt-6 border-t border-[#f3f4f6]">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-[#6b7280] hover:text-[#111111] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded"
              aria-label={`View ${project.title} on GitHub`}
            >
              View on GitHub
              <ArrowRight
                size={15}
                className="group-hover/btn:translate-x-1 transition-transform duration-200"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Right — Preview */}
        <div className="relative bg-[#f8fafc] border-t lg:border-t-0 lg:border-l border-[#e5e7eb] p-6 flex items-center justify-center min-h-64 lg:min-h-auto">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="w-full" style={{ aspectRatio: "4/3" }}>
              {project.previewType ? previewMap[project.previewType] : null}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}


