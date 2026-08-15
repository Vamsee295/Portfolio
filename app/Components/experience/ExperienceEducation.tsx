"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { profile } from "../../data/profile";
import { Briefcase, GraduationCap } from "lucide-react";

export default function ExperienceEducation() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      className="py-24 border-t border-[#e5e7eb]"
      aria-labelledby="experience-heading"
    >
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono font-semibold tracking-[0.22em] text-[#2563eb] mb-8 uppercase"
        >
          EXPERIENCE & EDUCATION
        </motion.p>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column — 5 Experience Entries Timeline (7 cols on lg) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2 mb-8"
            >
              <Briefcase size={16} className="text-[#111111]" aria-hidden="true" />
              <h2
                id="experience-heading"
                className="text-lg font-bold text-[#111111] tracking-tight"
              >
                Experience
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div
                className="absolute left-0 top-2 bottom-2 w-px bg-[#e5e7eb]"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-8">
                {profile.experience.map((exp, i) => (
                  <motion.div
                    key={exp.id || i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: "easeOut" }}
                    className="pl-7 relative"
                  >
                    {/* Timeline dot — monochrome */}
                    <div
                      className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-[#111111] border-2 border-white shadow-sm"
                      aria-hidden="true"
                    />

                    {/* Period */}
                    <span className="text-[11px] font-mono font-semibold text-[#111111] opacity-60 tracking-wider block mb-2">
                      {exp.period || exp.year}
                    </span>

                    {/* Experience Card */}
                    <div className="bg-white border border-[#e5e7eb] rounded-xl p-5 shadow-sm hover:border-[#111111] hover:shadow-md transition-all duration-300">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-bold text-[#111111] text-sm">
                          {exp.role}
                        </h3>
                      </div>
                      <p className="text-xs font-mono font-medium text-[#6b7280] mb-3 tracking-wide">
                        {exp.company}
                      </p>
                      <p className="text-sm text-[#6b7280] leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Projects / Highlights tags if present */}
                      {exp.projects && exp.projects.length > 0 && (
                        <div className="pt-3 border-t border-[#f3f4f6]">
                          <span className="text-[10px] font-mono text-[#9ca3af] uppercase tracking-wider block mb-2">
                            Projects & Focus
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.projects.map((proj) => (
                              <span
                                key={proj}
                                className="text-[10px] font-mono text-[#374151] bg-[#f8fafc] border border-[#e5e7eb] px-2 py-0.5 rounded-md"
                              >
                                {proj}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column — Education (5 cols on lg, sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-center gap-2 mb-8"
            >
              <GraduationCap size={16} className="text-[#111111]" aria-hidden="true" />
              <h2 className="text-lg font-bold text-[#111111] tracking-tight">
                Education
              </h2>
            </motion.div>

            <div className="relative">
              <div
                className="absolute left-0 top-2 bottom-2 w-px bg-[#e5e7eb]"
                aria-hidden="true"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                className="pl-7 relative"
              >
                <div
                  className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-[#111111] border-2 border-white shadow-sm"
                  aria-hidden="true"
                />

                <span className="text-[11px] font-mono font-semibold text-[#9ca3af] tracking-wider block mb-2">
                  CURRENT
                </span>

                <div className="bg-white border border-[#e5e7eb] rounded-xl p-5 shadow-sm hover:border-[#111111] hover:shadow-md transition-all duration-300">
                  <h3 className="font-bold text-[#111111] text-sm mb-1">
                    {profile.education.institution}
                  </h3>
                  <p className="text-xs font-mono font-medium text-[#6b7280] mb-4 tracking-wide">
                    {profile.education.degree} · {profile.education.field}
                  </p>

                  <div className="pt-3 border-t border-[#f3f4f6]">
                    <span className="text-[10px] font-mono text-[#9ca3af] uppercase tracking-wider block mb-2">
                      Academic Focus
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {profile.focus.map((area) => (
                        <span
                          key={area}
                          className="text-[10px] font-mono text-[#374151] bg-[#f8fafc] border border-[#e5e7eb] px-2 py-0.5 rounded-md"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
