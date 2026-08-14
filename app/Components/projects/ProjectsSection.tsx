"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

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
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

