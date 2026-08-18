"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ArrowUpRight, ShieldCheck, FileBadge } from "lucide-react";
import { certifications } from "../../data/certifications";

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="certifications"
      className="py-24 border-t border-[#e5e7eb] bg-white"
      aria-labelledby="certifications-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono font-semibold tracking-[0.22em] text-[#2563eb] mb-8 uppercase"
        >
          GLOBAL CERTIFICATIONS
        </motion.p>

        {/* Header & Description */}
        <div ref={ref} className="max-w-2xl mb-16">
          <motion.h2
            id="certifications-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black tracking-[-0.03em] text-[#111111] mb-4"
          >
            Credentials I've Earned
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[#6b7280] leading-relaxed"
          >
            A collection of globally recognized certifications and credentials across cloud, databases, networking, data science, and communication.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: "easeOut" }}
              className="group flex flex-col justify-between w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-[#e5e7eb] rounded-2xl p-6 lg:p-7 hover:border-[#111111] hover:shadow-xl hover:shadow-[rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
              aria-label={`View credential for ${cert.title}`}
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-[#f8fafc] border border-[#e5e7eb] flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300">
                    {cert.type === "credential" ? <ShieldCheck size={18} /> : <FileBadge size={18} />}
                  </div>
                  <div>
                    <p className="text-[10px] font-mono font-semibold tracking-wider text-[#6b7280] uppercase">
                      {cert.category}
                    </p>
                    <p className="text-[12px] font-medium text-[#374151]">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#111111] leading-snug mb-2 group-hover:text-[#2563eb] transition-colors duration-300">
                  {cert.title}
                </h3>
                {cert.shortName && (
                  <p className="text-sm font-mono text-[#6b7280] mb-4">
                    {cert.shortName}
                  </p>
                )}
              </div>

              <div className="mt-8 flex items-center gap-1.5 text-sm font-bold text-[#111111]">
                {cert.type === "credential" ? "View Credential" : "View Certificate"}
                <ArrowUpRight size={16} className="text-[#6b7280] group-hover:text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
