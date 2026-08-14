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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2 mb-8"
            >
              <Briefcase size={16} className="text-[#2563eb]" aria-hidden="true" />
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
                className="absolute left-0 top-0 bottom-0 w-px bg-[#e5e7eb]"
                aria-hidden="true"
              />

              {profile.experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                  className="pl-8 pb-10 last:pb-0 relative"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-[#2563eb] border-2 border-white shadow-sm"
                    aria-hidden="true"
                  />

                  {/* Year */}
                  <span className="text-xs font-mono font-semibold text-[#2563eb] tracking-wider block mb-2">
                    {exp.year}
                  </span>

                  {/* Company */}
                  <div className="bg-white border border-[#e5e7eb] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-bold text-[#111111] text-sm">
                        {exp.company}
                      </h3>
                    </div>
                    <p className="text-xs font-mono font-medium text-[#2563eb] mb-3 tracking-wide">
                      {exp.role}
                    </p>
                    <p className="text-sm text-[#6b7280] leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-center gap-2 mb-8"
            >
              <GraduationCap size={16} className="text-[#2563eb]" aria-hidden="true" />
              <h2 className="text-lg font-bold text-[#111111] tracking-tight">
                Education
              </h2>
            </motion.div>

            <div className="relative">
              <div
                className="absolute left-0 top-0 bottom-0 w-px bg-[#e5e7eb]"
                aria-hidden="true"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                className="pl-8 pb-10 relative"
              >
                <div
                  className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-[#111111] border-2 border-white shadow-sm"
                  aria-hidden="true"
                />

                <span className="text-xs font-mono font-semibold text-[#9ca3af] tracking-wider block mb-2">
                  CURRENT
                </span>

                <div className="bg-white border border-[#e5e7eb] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-[#111111] text-sm mb-1">
                    {profile.education.institution}
                  </h3>
                  <p className="text-xs font-mono font-medium text-[#6b7280] mb-3 tracking-wide">
                    {profile.education.degree} · {profile.education.field}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {profile.focus.map((area) => (
                      <span
                        key={area}
                        className="text-[11px] font-mono text-[#6b7280] bg-[#f8fafc] border border-[#e5e7eb] px-2.5 py-1 rounded-full"
                      >
                        {area}
                      </span>
                    ))}
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
