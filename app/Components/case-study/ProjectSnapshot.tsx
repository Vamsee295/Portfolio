"use client";

import { motion } from "framer-motion";
import type { CaseStudy } from "../../data/caseStudies";

export default function ProjectSnapshot({ study }: { study: CaseStudy }) {
  const metaItems = [
    { label: "ROLE", value: study.role },
    { label: "TYPE", value: study.projectType },
    { label: "STACK", value: study.primaryStack.join(" / ") },
    { label: "ARCHITECTURE", value: study.architectureSummary },
    { label: "STATUS", value: study.status },
  ];

  return (
    <section className="px-6 max-w-7xl mx-auto mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-5 gap-8 py-8 border-y border-[#e5e7eb]"
      >
        {metaItems.map((item, i) => (
          <div key={item.label} className="flex flex-col gap-2">
            <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#9ca3af] uppercase">
              {item.label}
            </span>
            <span className="text-sm font-medium text-[#111111]">
              {item.value}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
