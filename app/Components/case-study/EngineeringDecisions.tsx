"use client";

import { motion } from "framer-motion";
import type { CaseStudy } from "../../data/caseStudies";

export default function EngineeringDecisions({ study }: { study: CaseStudy }) {
  if (!study.decisions || study.decisions.length === 0) return null;

  return (
    <section className="px-6 max-w-5xl mx-auto py-20 border-t border-[#f3f4f6]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-mono font-bold tracking-[0.15em] text-[#9ca3af] uppercase mb-12">
          06 / Engineering Decisions
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {study.decisions.map((decision, index) => (
            <motion.div
              key={decision.decision}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#fafafa] border border-[#e5e7eb] rounded-xl p-8"
            >
              <h3 className="text-sm font-bold text-[#111111] mb-6">{decision.decision}</h3>
              
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#9ca3af] uppercase block mb-1">
                    Why
                  </span>
                  <p className="text-sm text-[#374151] leading-relaxed">
                    {decision.why}
                  </p>
                </div>
                
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#f59e0b] uppercase block mb-1">
                    Trade-off
                  </span>
                  <p className="text-sm text-[#374151] leading-relaxed">
                    {decision.tradeoff}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
