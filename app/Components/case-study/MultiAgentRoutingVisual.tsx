"use client";

import { motion } from "framer-motion";
import { MessageSquare, GitMerge, FileText, Bot, Layers, ArrowDown } from "lucide-react";

export default function MultiAgentRoutingVisual() {
  return (
    <div className="w-full bg-[#fafafa] border border-[#e5e7eb] rounded-2xl p-6 lg:p-12 my-16 font-sans text-[#111827] shadow-[0_8px_30px_rgba(15,23,42,0.04)] relative">
      <div className="text-center mb-12">
        <h3 className="text-sm font-mono font-bold tracking-[0.15em] text-[#111827] uppercase mb-2">
          Compound Query Orchestration
        </h3>
        <p className="text-xs text-[#6b7280]">Parallel decomposition of multi-intent customer support queries</p>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Customer Query */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-white border border-[#e5e7eb] rounded-xl p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)] w-full max-w-lg mb-8 relative z-10 transition-all duration-200 hover:shadow-[0_8px_25px_rgba(15,23,42,0.06)]"
        >
          <div className="flex items-start gap-4">
            <div className="bg-[#eff6ff] p-2.5 rounded-lg text-[#3b82f6] border border-[#dbeafe]">
              <MessageSquare size={18} />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#9ca3af] uppercase mb-1 block">
                User Query
              </span>
              <p className="text-sm font-medium text-[#1f2937] leading-relaxed">
                "I paid for my premium subscription yesterday, but the application keeps crashing when I try to open a new project."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Router */}
        <div className="flex flex-col items-center mb-8 relative">
          <div className="w-[2px] h-8 bg-gradient-to-b from-[#e5e7eb] to-[#3b82f6]/40 mb-2" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-[#3b82f6]/30 text-[#3b82f6] rounded-full p-3.5 shadow-[0_4px_20px_rgba(59,130,246,0.12)] z-10 hover:border-[#3b82f6]/60 transition-colors"
          >
            <GitMerge size={22} />
          </motion.div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#3b82f6] uppercase mt-3">
            Intent Router
          </span>
          <span className="text-xs text-[#6b7280] mt-1">Detects: Billing + Technical</span>
          
          {/* Branching lines */}
          <div className="w-full max-w-sm absolute top-[calc(100%+32px)] left-1/2 -translate-x-1/2 h-[2px] bg-[#e5e7eb]" />
        </div>

        {/* Parallel Execution Layer */}
        <div className="w-full grid grid-cols-2 gap-4 lg:gap-10 mt-10 relative">
          {/* Billing Agent Path */}
          <div className="flex flex-col items-center">
            <div className="w-[2px] h-6 bg-[#e5e7eb] mb-2" />
            <ArrowDown size={14} className="text-[#9ca3af] mb-4" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.4 }}
              className="w-full bg-white border border-[#e5e7eb] rounded-xl p-5 text-center flex flex-col items-center shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:border-[#f59e0b]/40 hover:shadow-[0_8px_25px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="bg-[#fef3c7] p-2.5 rounded-full text-[#d97706] mb-3 border border-[#fde68a]">
                <Bot size={18} />
              </div>
              <span className="text-[11px] font-bold tracking-widest text-[#111827] uppercase mb-1">
                Billing Agent
              </span>
              <span className="text-[10px] font-mono text-[#6b7280] mb-4">Verifies Subscription</span>
              
              <div className="w-full bg-[#f8fafc] rounded-lg border border-[#e5e7eb] p-2.5 flex items-center justify-center gap-2">
                <FileText size={12} className="text-[#d97706]" />
                <span className="text-[9px] font-mono font-medium text-[#6b7280]">FAISS: Refund Policy</span>
              </div>
            </motion.div>
          </div>

          {/* Technical Agent Path */}
          <div className="flex flex-col items-center">
            <div className="w-[2px] h-6 bg-[#e5e7eb] mb-2" />
            <ArrowDown size={14} className="text-[#9ca3af] mb-4" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.5 }}
              className="w-full bg-white border border-[#e5e7eb] rounded-xl p-5 text-center flex flex-col items-center shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:border-[#10b981]/40 hover:shadow-[0_8px_25px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="bg-[#d1fae5] p-2.5 rounded-full text-[#10b981] mb-3 border border-[#a7f3d0]">
                <Bot size={18} />
              </div>
              <span className="text-[11px] font-bold tracking-widest text-[#111827] uppercase mb-1">
                Technical Agent
              </span>
              <span className="text-[10px] font-mono text-[#6b7280] mb-4">Troubleshoots Crash</span>
              
              <div className="w-full bg-[#f8fafc] rounded-lg border border-[#e5e7eb] p-2.5 flex items-center justify-center gap-2">
                <FileText size={12} className="text-[#10b981]" />
                <span className="text-[9px] font-mono font-medium text-[#6b7280]">FAISS: Crash Docs</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Synthesis */}
        <div className="flex flex-col items-center mt-8 w-full">
          <div className="flex justify-center gap-20 w-full mb-4">
            <div className="w-[2px] h-10 bg-gradient-to-b from-[#e5e7eb] to-[#a855f7]/40" />
            <div className="w-[2px] h-10 bg-gradient-to-b from-[#e5e7eb] to-[#a855f7]/40" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.7 }}
            className="w-full max-w-md bg-white border border-[#e9d5ff] rounded-xl p-6 shadow-[0_8px_30px_rgba(168,85,247,0.06)] hover:border-[#c084fc] hover:shadow-[0_12px_35px_rgba(168,85,247,0.1)] transition-all duration-200 flex flex-col items-center text-center"
          >
            <div className="bg-[#f3e8ff] p-2.5 rounded-full text-[#9333ea] mb-3 border border-[#e9d5ff]">
              <Layers size={20} />
            </div>
            <span className="text-[11px] font-bold tracking-widest text-[#111827] uppercase mb-1">
              Response Synthesis
            </span>
            <p className="text-xs text-[#6b7280] leading-relaxed max-w-sm">
              Combines billing verification and technical troubleshooting into a single, cohesive customer response.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
