"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { profile } from "../../data/profile";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="py-24 bg-[#fafafa] border-t border-[#e5e7eb]"
      aria-labelledby="about-heading"
    >
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono font-semibold tracking-[0.22em] text-[#2563eb] mb-8 uppercase"
        >
          ABOUT
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Statement */}
          <div>
            <motion.h2
              id="about-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-3xl lg:text-4xl font-black tracking-[-0.02em] text-[#111111] mb-8 leading-[1.15]"
            >
              {profile.about_statement}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="text-base text-[#6b7280] leading-relaxed"
            >
              {profile.about_description}
            </motion.p>
          </div>

          {/* Right — Profile card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="bg-white border border-[#e5e7eb] rounded-2xl p-8 shadow-sm"
          >
            {/* Avatar placeholder */}
            <div className="w-14 h-14 rounded-full bg-[#dbeafe] flex items-center justify-center mb-6 border border-[#bfdbfe]">
              <span
                className="text-xl font-black text-[#2563eb]"
                aria-hidden="true"
              >
                V
              </span>
            </div>

            {/* Name + Role */}
            <div className="mb-6 pb-6 border-b border-[#f3f4f6]">
              <p className="text-xs font-mono text-[#9ca3af] tracking-widest uppercase mb-1">
                NAME
              </p>
              <h3 className="text-lg font-black text-[#111111]">
                {profile.name}
              </h3>
              <p className="text-sm text-[#6b7280] mt-1">{profile.role}</p>
            </div>

            {/* Focus areas */}
            <div>
              <p className="text-xs font-mono text-[#9ca3af] tracking-widest uppercase mb-3">
                FOCUS
              </p>
              <div className="flex flex-col gap-2">
                {profile.focus.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <div
                      className="w-1 h-1 rounded-full bg-[#2563eb] flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium text-[#374151]">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

