"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "../../data/projects";
import { MultiAgentPreview, EduRiskPreview, StudyHubPreview } from "./ProjectPreviews";
import { useViewMode } from "../../context/ViewModeContext";
import { CountUp, ease } from "../common/motion";

type PreviewType = NonNullable<Project["previewType"]>;

const previewMap: Record<PreviewType, React.ReactNode> = {
  studyhub: <StudyHubPreview />,
  multiagent: <MultiAgentPreview />,
  edurisk: <EduRiskPreview />,
};

// One headline number per featured project, taken from what each preview shows.
const statMap: Record<PreviewType, { value: number; suffix: string; label: string; color: string }> = {
  studyhub: { value: 3, suffix: "", label: "career tracks", color: "var(--teal)" },
  multiagent: { value: 3, suffix: "", label: "agents in parallel", color: "var(--gold)" },
  edurisk: { value: 82, suffix: "%", label: "risk, explained", color: "var(--accent)" },
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const mobile = useViewMode().effectiveMode === "mobile";
  const still = useReducedMotion();
  const caseStudySlug = project.id === "student-dropout-risk" ? "edurisk" : project.id;
  const stat = project.previewType ? statMap[project.previewType] : null;
  const tilt = index % 2 ? -1.5 : 1.5;

  return (
    <motion.article
      initial={still ? false : { opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease }}
      className="stk group relative overflow-hidden transition-[transform,box-shadow] duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[8px_9px_0_var(--ink)]"
    >
      <div className={`grid grid-cols-[minmax(0,1fr)] ${mobile ? "" : "lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]"}`}>
        <div className="flex flex-col justify-between p-7 sm:p-10">
          <div>
            <div className="flex items-start justify-between gap-4">
              <span className="font-display text-6xl leading-none text-accent">{project.number}</span>
              <span className="max-w-[60%] text-right font-cond text-sm font-bold uppercase tracking-[0.12em] text-[var(--mute)]">
                {project.category}
              </span>
            </div>
            <h3 className="mt-6 font-display text-[clamp(2rem,3.6vw,3rem)] uppercase leading-[0.95] text-ink">{project.title}</h3>
            <p className="mt-4 leading-relaxed text-[var(--body)]">{project.description}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li key={tech} className="rounded-lg border-2 border-ink bg-paper px-2.5 py-1 font-mono text-xs text-ink">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t-2 border-dashed border-[var(--line)] pt-6">
            {project.featured ? (
              <Link href={`/projects/${caseStudySlug}`} className="btn-stk" aria-label={`View case study for ${project.title}`}>
                Case study <ArrowRight size={18} aria-hidden />
              </Link>
            ) : (
              <a href={project.githubUrl!} target="_blank" rel="noopener noreferrer" className="btn-stk" aria-label={`View ${project.title} on GitHub`}>
                GitHub <ArrowRight size={18} aria-hidden />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-cond text-base font-bold uppercase tracking-[0.1em] text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
                aria-label={`Open ${project.title} live`}
              >
                Live project <ArrowUpRight size={16} aria-hidden />
              </a>
            )}
          </div>
        </div>

        <div className={`relative flex items-center justify-center overflow-hidden border-t-[2.5px] border-ink bg-paper2 p-8 sm:p-12 ${mobile ? "" : "lg:border-l-[2.5px] lg:border-t-0"}`}>
          <div className="pointer-events-none absolute inset-0 [background:radial-gradient(rgba(25,22,20,0.12)_1.1px,transparent_1.5px)_0_0/13px_13px]" />
          <motion.div
            className="relative w-full max-w-[440px]"
            style={{ rotate: tilt }}
            whileHover={still ? undefined : { rotate: 0, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="aspect-[4/3.3] overflow-hidden rounded-xl border-[2.5px] border-ink shadow-[5px_6px_0_var(--ink)]">
              {project.previewType ? previewMap[project.previewType] : null}
            </div>
          </motion.div>
          {stat && (
            <motion.div
              className="absolute bottom-5 right-5 rotate-3 rounded-xl border-[2.5px] border-ink bg-card px-4 py-2 shadow-[3px_4px_0_var(--ink)]"
              initial={still ? false : { scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 320, damping: 15 }}
            >
              <p className="font-display text-3xl leading-none" style={{ color: stat.color }}>
                <CountUp to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="font-cond text-xs font-bold uppercase tracking-[0.1em] text-ink">{stat.label}</p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
