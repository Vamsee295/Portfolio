"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, GitBranch } from "lucide-react";
import { projects, Project, LabCategory } from "../../data/projects";
import { CountUp, ease } from "../common/motion";

// ─── Categories ───────────────────────────────────────────────────────────────
const labCategories: { key: LabCategory; label: string }[] = [
  { key: "All", label: "All" },
  { key: "AI / Agents", label: "AI / Agents" },
  { key: "Machine Learning", label: "Machine learning" },
  { key: "Computer Vision", label: "Computer vision" },
  { key: "Data Science", label: "Data science" },
  { key: "Web", label: "Web" },
  { key: "Mobile", label: "Mobile" },
  { key: "Developer Tools", label: "Developer tools" },
  { key: "Automation", label: "Automation" },
  { key: "Academic", label: "Academic" },
  { key: "Experiments", label: "Experiments" },
];

// ─── Individual Build Card ────────────────────────────────────────────────────
function BuildCard({ item, index }: { item: Project; index: number }) {
  const still = useReducedMotion();
  const inDev = item.status === "IN DEVELOPMENT";

  return (
    <motion.article
      layout
      initial={still ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.18 } }}
      transition={{ duration: 0.6, delay: still ? 0 : (index % 3) * 0.08, ease, layout: { duration: 0.3 } }}
      className="stk group flex h-full flex-col justify-between p-7 transition-[transform,box-shadow] duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[8px_9px_0_var(--ink)]"
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <span className="font-cond text-sm font-bold uppercase tracking-[0.1em] text-[var(--mute)] group-hover:text-accent">{item.category}</span>
          {inDev && (
            <span className="shrink-0 rotate-3 rounded-md border-2 border-ink bg-gold px-2 py-0.5 font-cond text-xs font-bold uppercase tracking-[0.1em] text-ink">
              In development
            </span>
          )}
        </div>
        <h3 className="mt-4 font-display text-[1.9rem] uppercase leading-[0.95] text-ink">{item.title}</h3>
        <p className="mt-3 leading-relaxed text-[var(--body)]">{item.description}</p>
        {item.technologies && item.technologies.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <li key={tech} className="rounded-lg border-2 border-ink bg-paper px-2.5 py-1 font-mono text-xs text-ink">
                {tech}
              </li>
            ))}
          </ul>
        )}
      </div>

      {item.githubUrl && (
        <div className="mt-6 border-t-2 border-dashed border-[var(--line)] pt-5">
          <a
            href={item.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-cond text-base font-bold uppercase tracking-[0.1em] text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
            aria-label={`View ${item.title} on GitHub`}
          >
            View on GitHub <GitBranch size={15} aria-hidden />
          </a>
        </div>
      )}
    </motion.article>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function PlaygroundExplorer() {
  const [activeCategory, setActiveCategory] = useState<LabCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const still = useReducedMotion();

  const labProjects = useMemo(() => projects.filter((p) => !p.featured), []);

  const counts = useMemo(() => {
    const c: Partial<Record<LabCategory, number>> = { All: labProjects.length };
    labProjects.forEach((p) => p.labCategory && (c[p.labCategory] = (c[p.labCategory] ?? 0) + 1));
    return c;
  }, [labProjects]);

  const filtered = useMemo(() => {
    let items = [...labProjects];
    if (activeCategory !== "All") items = items.filter((item) => item.labCategory === activeCategory);
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
    // No sort: keep the explicit tier ordering from projects.ts.
    return items;
  }, [activeCategory, searchQuery, labProjects]);

  const rise = (delay: number) => ({
    initial: still ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <main className="relative min-h-screen">
      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1180px] px-[clamp(18px,4vw,40px)] pb-14 pt-32">
        <motion.div {...rise(0)}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-cond text-sm font-bold uppercase tracking-[0.14em] text-[var(--mute)] hover:text-accent"
          >
            <ArrowLeft size={14} aria-hidden /> Back to portfolio
          </Link>
        </motion.div>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-8">
          <div>
            <h1 className="overflow-hidden font-display text-[clamp(5rem,16vw,11rem)] uppercase leading-[0.85] text-ink">
              <motion.span className="block" initial={still ? false : { y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, ease }}>
                Labs<span className="text-accent">.</span>
              </motion.span>
            </h1>
            <motion.p {...rise(0.15)} className="mt-5 max-w-xl text-[17px] leading-relaxed text-[var(--body)]">
              Experiments, prototypes, academic projects, and everything I&rsquo;ve built along the way.
            </motion.p>
            <motion.p {...rise(0.25)} className="mt-3 -rotate-1 font-hand text-2xl text-[var(--teal)]">
              everything that didn&rsquo;t make the front page ↓
            </motion.p>
          </div>

          <motion.div
            initial={still ? false : { scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 4 }}
            transition={{ delay: 0.35, type: "spring", stiffness: 300, damping: 15 }}
            className="rounded-2xl border-[2.5px] border-ink bg-gold px-6 py-4 text-ink shadow-[4px_5px_0_var(--ink)]"
          >
            <p className="font-display text-6xl leading-none">
              <CountUp to={labProjects.length} />
            </p>
            <p className="font-cond text-sm font-bold uppercase tracking-[0.12em]">builds in the lab</p>
          </motion.div>
        </div>
      </section>

      {/* ── Controls ────────────────────────────────────────────────────────── */}
      <div className="sticky top-16 z-30 border-y-[2.5px] border-ink bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-4 px-[clamp(18px,4vw,40px)] py-4 lg:flex-row lg:items-center">
          <label className="flex w-full shrink-0 items-center gap-3 rounded-xl border-[2.5px] border-ink bg-card px-4 py-2.5 shadow-[3px_4px_0_var(--ink)] focus-within:shadow-[3px_4px_0_var(--accent)] lg:w-80">
            <span className="font-mono text-accent" aria-hidden>&gt;</span>
            <input
              type="search"
              placeholder="search the lab…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search projects"
              className="w-full bg-transparent font-mono text-sm text-ink placeholder:text-[var(--mute)] focus:outline-none"
            />
          </label>

          <div className="w-full overflow-x-auto pb-2 pt-1 scrollbar-hide" role="tablist" aria-label="Filter by category">
            <div className="flex gap-2 pr-2">
              {labCategories
                .filter(({ key }) => counts[key])
                .map(({ key, label }) => {
                  const isActive = activeCategory === key;
                  return (
                    <button
                      key={key}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveCategory(key)}
                      className={`inline-flex shrink-0 items-center gap-2 rounded-lg border-2 border-ink px-3 py-1.5 font-cond text-sm font-bold uppercase tracking-[0.08em] transition-[transform,box-shadow,background-color] duration-150 ${
                        isActive
                          ? "translate-x-[2px] translate-y-[2px] bg-accent text-paper shadow-none"
                          : "bg-card text-ink shadow-[2px_2px_0_var(--ink)] hover:-translate-y-0.5"
                      }`}
                    >
                      {label}
                      <span className={`font-mono text-[11px] ${isActive ? "text-paper/80" : "text-[var(--mute)]"}`}>{counts[key]}</span>
                    </button>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Grid ────────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1180px] px-[clamp(18px,4vw,40px)] py-14">
        <motion.div layout className="grid grid-cols-1 items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              filtered.map((item, index) => <BuildCard key={item.id} item={item} index={index} />)
            ) : (
              <motion.div
                key="empty"
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="col-span-full py-24 text-center"
              >
                <p className="font-display text-6xl uppercase text-ink/15">Nothing here.</p>
                <p className="mt-3 font-hand text-2xl text-[var(--teal)]">try a different search or category</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}
