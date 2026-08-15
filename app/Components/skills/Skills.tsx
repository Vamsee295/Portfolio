"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { profile } from "../../data/profile";

const categoryColors: Record<string, string> = {
  Languages: "#2563eb",
  "AI / ML": "#7c3aed",
  Development: "#0891b2",
  Tools: "#059669",
};

const categoryBg: Record<string, string> = {
  Languages: "#dbeafe",
  "AI / ML": "#ede9fe",
  Development: "#cffafe",
  Tools: "#d1fae5",
};

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      className="py-24 bg-[#fafafa] border-t border-[#e5e7eb]"
      aria-labelledby="skills-heading"
    >
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-xs font-mono font-semibold tracking-[0.22em] text-[#2563eb] mb-8 uppercase"
        >
          SKILLS
        </motion.p>

        <motion.h2
          id="skills-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl lg:text-5xl font-black tracking-[-0.03em] text-[#111111] mb-4"
        >
          What I Work With
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-base text-[#6b7280] mb-14 max-w-lg"
        >
          Technologies and tools I use across my projects.
        </motion.p>

        {/* Skill category cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Object.entries(profile.skills).map(([category, skills], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.08,
                ease: "easeOut",
              }}
              className="bg-white border border-[#e5e7eb] rounded-2xl p-6 hover:shadow-lg hover:border-[#d1d5db] transition-all duration-300"
            >
              {/* Category header */}
              <div className="mb-5">
                <div
                  className="inline-flex items-center px-2.5 py-1 rounded-lg mb-3"
                  style={{ background: categoryBg[category] }}
                >
                  <span
                    className="text-[10px] font-mono font-bold tracking-[0.15em] uppercase"
                    style={{ color: categoryColors[category] }}
                  >
                    {category}
                  </span>
                </div>
              </div>

              {/* Skills list */}
              <div className="flex flex-col gap-2">
                {skills.map((skill: string) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2.5 group"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200 group-hover:scale-125"
                      style={{ background: categoryColors[category] }}
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium text-[#374151]">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


