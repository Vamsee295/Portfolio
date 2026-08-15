"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { profile } from "../../data/profile";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      className="py-24 bg-[#fafafa] border-t border-[#e5e7eb]"
      aria-labelledby="about-heading"
    >
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Eyebrow — Step 1 */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-xs font-mono font-semibold tracking-[0.22em] text-[#2563eb] mb-8 uppercase"
        >
          ABOUT
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Statement & Paragraphs */}
          <div>
            {/* Main Headline — Step 2 */}
            <motion.h2
              id="about-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
              className="text-3xl lg:text-4xl font-black tracking-[-0.02em] text-[#111111] mb-8 leading-[1.15]"
            >
              {profile.about_statement}
            </motion.h2>

            <div className="space-y-4">
              {/* Paragraph 1 — Step 3 */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
                className="text-base text-[#6b7280] leading-relaxed"
              >
                {profile.about_description}
              </motion.p>

              {/* Paragraph 2 — Step 4 */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.32, ease: "easeOut" }}
                className="text-base text-[#6b7280] leading-relaxed"
              >
                {profile.about_secondary}
              </motion.p>
            </div>
          </div>

          {/* Right — Profile card — Step 5 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.28, ease: "easeOut" }}
            className="bg-white border border-[#e5e7eb] rounded-2xl p-8 shadow-sm"
          >
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.38, ease: "easeOut" }}
              className="w-14 h-14 rounded-full bg-[#dbeafe] flex items-center justify-center mb-6 border border-[#bfdbfe]"
            >
              <span
                className="text-xl font-black text-[#2563eb]"
                aria-hidden="true"
              >
                V
              </span>
            </motion.div>

            {/* Name + Role */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.44, ease: "easeOut" }}
              className="mb-6 pb-6 border-b border-[#f3f4f6]"
            >
              <p className="text-xs font-mono text-[#9ca3af] tracking-widest uppercase mb-1">
                NAME
              </p>
              <h3 className="text-lg font-black text-[#111111]">
                {profile.name}
              </h3>
              <p className="text-sm text-[#6b7280] mt-1">{profile.role}</p>
            </motion.div>

            {/* Current Focus */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="mb-5"
            >
              <p className="text-xs font-mono text-[#9ca3af] tracking-widest uppercase mb-3">
                CURRENT FOCUS
              </p>
              <div className="flex flex-col gap-2">
                {profile.focus.map((area, i) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, x: -8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.54 + i * 0.05, ease: "easeOut" }}
                    className="flex items-center gap-2"
                  >
                    <div
                      className="w-1 h-1 rounded-full bg-[#2563eb] flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium text-[#374151]">
                      {area}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Based In Location */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.74, ease: "easeOut" }}
              className="pt-4 border-t border-[#f3f4f6]"
            >
              <p className="text-xs font-mono text-[#9ca3af] tracking-widest uppercase mb-1">
                BASED IN
              </p>
              <p className="text-sm font-medium text-[#374151]">{profile.location}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
