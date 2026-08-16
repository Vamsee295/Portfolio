"use client";

import { useState, useMemo, useRef } from "react";
import { motion, useInView, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Search, GitBranch } from "lucide-react";
import { projects, Project, LabCategory } from "../../data/projects";

// ─── Categories ───────────────────────────────────────────────────────────────
const labCategories: { key: LabCategory; label: string }[] = [
  { key: "All", label: "ALL" },
  { key: "AI / Agents", label: "AI / AGENTS" },
  { key: "Machine Learning", label: "MACHINE LEARNING" },
  { key: "Computer Vision", label: "COMPUTER VISION" },
  { key: "Data Science", label: "DATA SCIENCE" },
  { key: "Web", label: "WEB" },
  { key: "Mobile", label: "MOBILE" },
  { key: "Developer Tools", label: "DEVELOPER TOOLS" },
  { key: "Automation", label: "AUTOMATION" },
  { key: "Academic", label: "ACADEMIC" },
  { key: "Experiments", label: "EXPERIMENTS" },
];

// ─── Individual Build Card ────────────────────────────────────────────────────
function BuildCard({
  item,
  index,
}: {
  item: Project;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Reusing the exact architecture from main portfolio ProjectCard.tsx
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  const isPersonalAI = item.status === "IN DEVELOPMENT";

  // Base and Hover styles (using motion-safe for reduced motion compatibility)
  const baseCardStyle = "group relative bg-white flex flex-col justify-between h-full will-change-transform";
  const hoverClasses = "transition-all duration-400 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-xl hover:shadow-[rgba(0,0,0,0.06)]";
  
  // ALL cards use the strong dark-border treatment
  const cardStyle = "border-2 border-[#111111] rounded-2xl p-7 lg:p-8";

  // Reusing ProjectCard.tsx animation values
  const initialY = shouldReduceMotion ? 0 : 40;
  const initialScale = 1;
  const delay = shouldReduceMotion ? 0 : (index % 3) * 0.12;
  const duration = 0.7;

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: initialY, scale: initialScale }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: initialY, scale: initialScale }}
      exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.2 } }}
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: "easeOut",
        layout: { duration: 0.3 }
      }}
      className={`${baseCardStyle} ${cardStyle} ${hoverClasses}`}
    >
      <div>
        {/* Top row */}
        <div className="flex items-start justify-between mb-4 gap-2">
          <span className="font-mono font-semibold uppercase text-[#9ca3af] group-hover:text-[#111111] transition-colors duration-300 text-[10px] tracking-[0.16em]">
            {item.category}
          </span>
          {isPersonalAI && (
            <motion.span 
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -5 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: delay + 0.3 }}
              className="shrink-0 inline-block bg-[#fefce8] text-[#854d0e] border border-[#fef08a] px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-widest uppercase"
            >
              IN DEVELOPMENT
            </motion.span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-black tracking-tight text-[#111111] mb-3 leading-snug group-hover:text-[#000000] transition-colors duration-300">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#6b7280] leading-relaxed mb-6">
          {item.description}
        </p>

        {/* Tech tags */}
        {item.technologies && item.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono font-medium text-[#6b7280] bg-[#f8fafc] border border-[#e5e7eb] px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Source links */}
      {item.githubUrl && (
        <div className={`flex flex-wrap gap-2 pt-4 border-t border-[#e5e7eb] mt-auto`}>
          <a
            href={item.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-[#6b7280] hover:text-[#111111] transition-colors duration-200 focus-visible:outline-none rounded"
          >
            View on GitHub
            <GitBranch size={14} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      )}
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function PlaygroundExplorer() {
  const [activeCategory, setActiveCategory] = useState<LabCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const shouldReduceMotion = useReducedMotion();

  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  const labProjects = useMemo(() => projects.filter((p) => !p.featured), []);

  // Derived filtered list
  const filtered = useMemo(() => {
    let items = [...labProjects];

    // Category filter
    if (activeCategory !== "All") {
      items = items.filter((item) => item.labCategory === activeCategory);
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          (item.technologies && item.technologies.some((t) => t.toLowerCase().includes(q))) ||
          item.category.toLowerCase().includes(q)
      );
    }

    // We DO NOT sort here to preserve the explicit Tier ordering from projects.ts.
    return items;
  }, [activeCategory, searchQuery, labProjects]);

  return (
    <main className="min-h-screen bg-white">
      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-8" ref={headerRef}>
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="mb-10"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[11px] font-mono font-semibold tracking-[0.18em] text-[#9ca3af] hover:text-[#111111] transition-colors uppercase"
              >
                <ArrowLeft size={12} />
                Back to Portfolio
              </Link>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0 }}
              className="text-5xl lg:text-7xl font-black tracking-[-0.04em] text-[#111111] mb-6 leading-none uppercase"
            >
              LABS.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: shouldReduceMotion ? 0 : 0.1 }}
              className="text-base text-[#6b7280] max-w-xl mb-6 leading-relaxed"
            >
              Experiments, prototypes, academic projects, and everything I've built along the way.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: shouldReduceMotion ? 0 : 0.18 }}
            >
              <span className="inline-block bg-[#f3f4f6] text-[#111111] font-mono text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded">
                {labProjects.length} PROJECTS
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Controls ────────────────────────────────────────────────────────── */}
      <div className="sticky top-14 z-30 bg-white border-b border-[#f3f4f6] shadow-[0_1px_0_rgba(0,0,0,0.04)]">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start justify-between">
            {/* Search */}
            <motion.div 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: shouldReduceMotion ? 0 : 0.25 }}
              className="relative w-full lg:w-96 shrink-0"
            >
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]"
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="
                  w-full pl-9 pr-4 py-2.5
                  text-sm text-[#111111] placeholder-[#9ca3af]
                  bg-[#f9fafb] border border-[#e5e7eb] rounded-md
                  focus:outline-none focus:border-[#111111] focus:bg-white
                  transition-all duration-200 font-mono
                "
              />
            </motion.div>
            
            {/* Filter Tabs container - allows horizontal scrolling if needed on mobile */}
            <motion.div 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: shouldReduceMotion ? 0 : 0.32 }}
              className="w-full overflow-x-auto pb-1 scrollbar-hide"
            >
              <div className="flex gap-2">
                {labCategories.map(({ key, label }) => {
                  const isActive = activeCategory === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveCategory(key)}
                      className={`
                        shrink-0 inline-flex items-center gap-1.5
                        text-[10px] font-mono font-semibold tracking-[0.14em]
                        px-3 py-1.5 rounded-full border
                        transition-all duration-200
                        ${
                          isActive
                            ? "bg-[#111111] text-white border-[#111111]"
                            : "bg-transparent text-[#6b7280] border-[#e5e7eb] hover:border-[#111111] hover:text-[#111111]"
                        }
                      `}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Grid ────────────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 items-start">
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              filtered.map((item, index) => (
                <BuildCard key={item.id} item={item} index={index} />
              ))
            ) : (
              <motion.div
                key="empty"
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="col-span-full py-24 text-center"
              >
                <p className="text-4xl font-black tracking-[-0.03em] text-[#e5e7eb] mb-3">
                  NOTHING HERE.
                </p>
                <p className="text-sm font-mono text-[#9ca3af]">
                  Try a different search or category.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}
