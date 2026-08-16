"use client";

import { motion } from "framer-motion";
import { Server, Database, Brain, ArrowDown, Layout, GitBranch } from "lucide-react";
import type { CaseStudy } from "../../data/caseStudies";
import ByokComparisonVisual from "./ByokComparisonVisual";
import MultiAgentRoutingVisual from "./MultiAgentRoutingVisual";
import EduRiskPortalsShowcase from "./EduRiskPortalsShowcase";

const iconMap: Record<string, React.ReactNode> = {
  "Frontend": <Layout size={18} />,
  "User Interface": <Layout size={18} />,
  "API & Auth": <Server size={18} />,
  "API & Events": <Server size={18} />,
  "ML Pipeline": <Brain size={18} />,
  "Orchestrator": <GitBranch size={18} />,
  "Knowledge Base": <Database size={18} />,
  "Data Layer": <Database size={18} />,
  "Database": <Database size={18} />,
  "Workspace": <Layout size={18} />,
  "Context Engine": <Server size={18} />,
  "Intelligence": <Brain size={18} />,
  "Action": <GitBranch size={18} />,
  "Infrastructure": <Server size={18} />,
};

export default function ArchitectureSection({ study }: { study: CaseStudy }) {
  return (
    <section className="px-6 max-w-5xl mx-auto py-20 border-t border-[#f3f4f6]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-mono font-bold tracking-[0.15em] text-[#9ca3af] uppercase mb-8">
          03 / How It Works
        </h2>

        <p className="text-lg text-[#374151] leading-relaxed mb-8">
          {study.architecture.overview}
        </p>

        {study.previewType === "codeagent" && <ByokComparisonVisual />}
        {study.previewType === "multiagent" && <MultiAgentRoutingVisual />}
        {study.previewType === "edurisk" && <EduRiskPortalsShowcase />}

        <div className="bg-[#f8fafc] border border-[#e5e7eb] rounded-2xl p-8 lg:p-12 mt-12">
          <div className="flex flex-col items-center max-w-xl mx-auto">
            {study.architecture.nodes.map((node, index) => (
              <div key={node.layer} className="w-full flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="w-full bg-white border border-[#e5e7eb] rounded-xl p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-10"
                >
                  <div className="flex items-center gap-3 min-w-40">
                    <div className="text-[#9ca3af]">
                      {iconMap[node.layer] || <Server size={18} />}
                    </div>
                    <span className="text-xs font-bold tracking-widest text-[#111111] uppercase">
                      {node.layer}
                    </span>
                  </div>

                  <div className="flex flex-col sm:items-end text-left sm:text-right flex-1">
                    <span className="text-sm font-semibold text-[#111111]">
                      {node.component}
                    </span>
                    <span className="text-xs font-mono text-[#6b7280] mt-1">
                      {node.detail}
                    </span>
                  </div>
                </motion.div>

                {index !== study.architecture.nodes.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileInView={{ opacity: 1, height: 32 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="flex flex-col items-center justify-center py-1 text-[#d1d5db]"
                  >
                    <div className="w-[2px] h-6 bg-gradient-to-b from-[#e5e7eb] to-transparent mb-1" />
                    <ArrowDown size={14} className="opacity-50" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
