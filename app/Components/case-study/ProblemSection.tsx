"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import type { CaseStudy } from "../../data/caseStudies";

export default function ProblemSection({ study }: { study: CaseStudy }) {
  return (
    <section className="px-6 max-w-5xl mx-auto py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-mono font-bold tracking-[0.15em] text-[#9ca3af] uppercase mb-8">
          01 / The Problem
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Narrative */}
          <div>
            <p className="text-lg text-[#374151] leading-relaxed mb-6 font-medium">
              {study.problem.summary}
            </p>
          </div>

          {/* Right Breakdown Cards */}
          <div className="flex flex-col gap-6">
            {study.problem.points.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-[#fafafa] border border-[#e5e7eb] rounded-xl p-6 hover:border-[#d1d5db] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-[#ef4444]">
                    <AlertCircle size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#111111] mb-2">
                      {point.title}
                    </h3>
                    <p className="text-sm text-[#6b7280] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
