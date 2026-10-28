"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { profile } from "../../data/profile";
import { Marked, Reveal, ease } from "../common/motion";

export default function ExperienceEducation() {
  const still = useReducedMotion();
  const timelineRef = useRef<HTMLOListElement>(null);
  // The orange rail fills as the timeline scrolls past the middle of the screen.
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 60%", "end 60%"] });
  const rail = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" aria-labelledby="experience-heading" className="dots-night relative bg-night py-28 text-paper">
      <div className="mx-auto max-w-[1180px] px-[clamp(18px,4vw,40px)]">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-paper/50">03 / EXPERIENCE &amp; EDUCATION</p>
            <h2 id="experience-heading" className="mt-3 font-display text-[clamp(2.8rem,6.5vw,5.6rem)] uppercase leading-[0.95]">
              Where I&rsquo;ve <Marked>shipped</Marked>
            </h2>
          </div>
          <p className="-rotate-2 font-hand text-2xl text-[var(--mint)]">{profile.experience.length} internships, one degree in progress</p>
        </Reveal>

        <div className="mt-20 grid grid-cols-[minmax(0,1fr)] items-start gap-16 lg:grid-cols-[minmax(0,1fr)_360px]">
          <ol ref={timelineRef} className="relative space-y-10 pl-9 sm:pl-12">
            <span aria-hidden className="absolute bottom-0 left-[7px] top-0 w-[3px] rounded-full bg-paper/10 sm:left-[11px]" />
            <motion.span
              aria-hidden
              className="absolute bottom-0 left-[7px] top-0 w-[3px] origin-top rounded-full bg-accent sm:left-[11px]"
              style={still ? undefined : { scaleY: rail }}
            />

            {profile.experience.map((exp, i) => {
              const current = /present/i.test(exp.period || exp.year);
              return (
                <motion.li
                  key={exp.id || i}
                  className="relative"
                  initial={still ? false : { opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease }}
                >
                  <span
                    aria-hidden
                    className={`absolute -left-9 top-1.5 h-[17px] w-[17px] rounded-full border-[3px] border-night sm:-left-12 sm:h-[25px] sm:w-[25px] ${current ? "bg-[var(--mint)]" : "bg-accent"}`}
                  />
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs tracking-[0.14em] text-paper/60">{exp.period || exp.year}</span>
                    {current && (
                      <span className="flex items-center gap-1.5 rounded-md bg-[var(--mint)] px-2 py-0.5 font-cond text-xs font-bold uppercase tracking-[0.1em] text-ink">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink" /> Now
                      </span>
                    )}
                  </div>

                  <div className="mt-3 rounded-2xl border-2 border-paper/15 bg-[#1F1B18] p-6 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent sm:p-7">
                    <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.1rem)] uppercase leading-none">{exp.role}</h3>
                    <p className="mt-2 font-cond text-base font-bold uppercase tracking-[0.12em] text-[var(--accent-l)]">{exp.company}</p>
                    <p className="mt-4 leading-relaxed text-paper/70">{exp.description}</p>
                    {exp.projects && exp.projects.length > 0 && (
                      <ul className="mt-5 flex flex-wrap gap-2 border-t border-dashed border-paper/15 pt-5">
                        {exp.projects.map((proj) => (
                          <li key={proj} className="rounded-lg border-2 border-paper/25 px-2.5 py-1 font-mono text-xs text-paper/85">
                            {proj}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.li>
              );
            })}
          </ol>

          <Reveal delay={0.1} className="lg:sticky lg:top-28">
            <div className="stk rotate-2 p-7 text-ink transition-transform duration-300 hover:rotate-0">
              <div className="flex items-center justify-between">
                <span className="font-cond text-sm font-bold uppercase tracking-[0.14em] text-[var(--mute)]">Education</span>
                <span className="rounded-md border-2 border-ink bg-[var(--mint)] px-2 py-0.5 font-cond text-xs font-bold uppercase tracking-[0.1em]">Current</span>
              </div>
              <h3 className="mt-5 font-display text-4xl uppercase leading-none">{profile.education.institution}</h3>
              <p className="mt-2 font-mono text-sm text-[var(--body)]">
                {profile.education.degree} · {profile.education.field}
              </p>
              <div className="my-6 border-t-2 border-dashed border-[var(--line)]" />
              <p className="font-cond text-sm font-bold uppercase tracking-[0.14em] text-[var(--mute)]">Academic focus</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {profile.focus.map((area) => (
                  <li key={area} className="rounded-lg border-2 border-ink bg-paper px-2.5 py-1 font-mono text-xs">
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
