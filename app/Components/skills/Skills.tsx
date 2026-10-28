"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "../../data/profile";
import { useViewMode } from "../../context/ViewModeContext";
import { Marked, Reveal, ease } from "../common/motion";

const NOTES: Record<string, string> = {
  Languages: "What the systems are written in.",
  "AI / ML": "The intelligent part of the software.",
  Development: "How the models become products.",
  Tools: "What keeps it versioned, shipped and running.",
};

export default function Skills() {
  const still = useReducedMotion();
  const mobile = useViewMode().effectiveMode === "mobile";

  return (
    <section id="skills" aria-labelledby="skills-heading" className="relative border-y-[2.5px] border-ink bg-paper2 py-28">
      <div className="mx-auto max-w-[1180px] px-[clamp(18px,4vw,40px)]">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] text-[var(--mute)]">05 / SKILLS</p>
          <h2 id="skills-heading" className="mt-3 font-display text-[clamp(2.8rem,6.5vw,5.6rem)] uppercase leading-[0.95] text-ink">
            What&rsquo;s in the <Marked>toolkit</Marked>
          </h2>
        </Reveal>

        <ol className={`mt-16 grid gap-x-16 gap-y-12 ${mobile ? "" : "md:grid-cols-[repeat(2,minmax(0,1fr))]"}`}>
          {Object.entries(profile.skills).map(([category, skills], i) => (
            <motion.li
              key={category}
              className="grid grid-cols-[56px_minmax(0,1fr)] gap-3 sm:grid-cols-[72px_minmax(0,1fr)] sm:gap-4"
              initial={still ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease }}
            >
              <span className="font-display text-6xl leading-none text-accent">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <div className="flex items-baseline gap-3">
                  <h3 className="font-display text-3xl uppercase leading-none text-ink">{category}</h3>
                  <motion.span
                    aria-hidden
                    className="h-0 flex-1 origin-left border-b-2 border-dotted border-[var(--mute)]"
                    initial={still ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 + (i % 2) * 0.1, ease }}
                  />
                  <span className="font-mono text-xs text-[var(--mute)]">{skills.length}</span>
                </div>
                <p className="mt-2 text-[var(--body)]">{NOTES[category]}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border-2 border-ink bg-card px-3 py-1.5 font-cond text-base font-bold uppercase tracking-[0.06em] text-ink shadow-[2px_3px_0_var(--ink)] transition-transform hover:-translate-y-0.5 hover:-rotate-2"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
