"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-40px" });

  return (
    <section
      id="work"
      className="py-24 px-6 max-w-6xl mx-auto"
      aria-labelledby="projects-heading"
    >
      {/* Section header */}
      <div className="mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono font-semibold tracking-[0.22em] text-[#2563eb] mb-4 uppercase"
        >
          SELECTED WORK
        </motion.p>

        <motion.h2
          ref={ref}
          id="projects-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl lg:text-5xl font-black tracking-[-0.03em] text-[#111111] mb-4"
        >
          Things I&rsquo;ve Built
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base text-[#6b7280] max-w-lg"
        >
          A collection of intelligent systems, software tools, and applications
          I&rsquo;ve built — focused on AI/ML, software engineering, and data.
        </motion.p>
      </div>

      {/* Project cards */}
      <div className="flex flex-col gap-6">
        {projects.filter(p => p.featured).map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Vibe Coding CTA */}
      <motion.div
        ref={ctaRef}
        initial={{ opacity: 0, y: 24 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="mt-10"
      >
        <Link href="/playground" className="group block">
          <div
            className="
              border border-[#e5e7eb] rounded-2xl p-8 lg:p-10
              flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6
              transition-all duration-300 ease-out
              hover:border-[#111111] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]
              hover:-translate-y-[2px]
            "
          >
            {/* Left: label + headline + sub */}
            <div>
              <p className="text-[10px] font-mono font-semibold tracking-[0.22em] text-[#9ca3af] uppercase mb-3">
                MORE BUILDS &amp; EXPERIMENTS
              </p>
              <h3 className="text-2xl lg:text-3xl font-black tracking-[-0.03em] text-[#111111] mb-2">
                There&rsquo;s a lot more in the{" "}
                <span className="bg-[#dbeafe] text-[#111111] px-2 rounded-sm">
                  lab.
                </span>
              </h3>
              <p className="text-sm text-[#6b7280] max-w-md leading-relaxed">
                46+ repositories, AI agent prototypes, machine learning models,
                Jupyter &amp; Colab notebooks, and experiments across data
                science and software engineering.
              </p>
            </div>

            {/* Right: CTA pill */}
            <div className="flex-shrink-0">
              <span
                className="
                  inline-flex items-center gap-2
                  border border-[#111111] rounded-full
                  px-6 py-3
                  text-sm font-semibold text-[#111111]
                  transition-all duration-300
                  group-hover:bg-[#111111] group-hover:text-white
                "
              >
                Explore All Labs
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}


