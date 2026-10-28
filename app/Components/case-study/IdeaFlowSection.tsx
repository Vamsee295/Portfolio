"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import type { CaseStudy } from "../../data/caseStudies";

export default function IdeaFlowSection({ study }: { study: CaseStudy }) {
  return (
    <section className="px-6 max-w-5xl mx-auto py-20 border-t border-[#ECE3D4]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] uppercase leading-none text-ink mb-8">
          02 / The Idea
        </h2>
        
        <p className="text-xl text-[#191614] font-medium leading-relaxed mb-16 max-w-3xl">
          {study.idea.statement}
        </p>

        {/* Vertical Pipeline Flow */}
        <div className="flex flex-col items-center max-w-2xl mx-auto relative">
          {study.idea.flowSteps.map((step, index) => (
            <div key={step.step} className="w-full flex flex-col items-center">
              
              {/* Step Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="w-full bg-card border-2 border-ink rounded-xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] flex items-center justify-between z-10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-card border-2 border-ink text-[10px] font-mono font-bold text-[#6B615A]">
                    {step.step}
                  </div>
                  <span className="text-sm font-bold tracking-widest text-[#191614] uppercase">
                    {step.label}
                  </span>
                </div>
                <span className="text-sm text-[#6B615A] hidden sm:block text-right">
                  {step.desc}
                </span>
              </motion.div>

              {/* Connecting Arrow */}
              {index !== study.idea.flowSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: 40 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  className="flex flex-col items-center justify-center py-2 text-[#C9BCA8]"
                >
                  <div className="w-[1px] h-6 bg-gradient-to-b from-[#DDD2C1] to-transparent mb-1" />
                  <ArrowDown size={14} className="opacity-50" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
