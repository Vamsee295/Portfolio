"use client";

import { motion } from "framer-motion";
import { MessageSquare, GitMerge, FileText, Bot, Layers, ArrowDown } from "lucide-react";

export default function MultiAgentRoutingVisual() {
  return (
    <div className="w-full bg-card border-2 border-ink rounded-2xl p-6 lg:p-12 my-16 font-sans text-[#191614] shadow-[0_8px_30px_rgba(15,23,42,0.04)] relative">
      <div className="text-center mb-12">
        <h3 className="text-sm font-mono font-bold tracking-[0.15em] text-[#191614] uppercase mb-2">
          Compound Query Orchestration
        </h3>
        <p className="text-xs text-[#6B615A]">Parallel decomposition of multi-intent customer support queries</p>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Customer Query */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-card border-2 border-ink rounded-xl p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)] w-full max-w-lg mb-8 relative z-10 transition-all duration-200 hover:shadow-[0_8px_25px_rgba(15,23,42,0.06)]"
        >
          <div className="flex items-start gap-4">
            <div className="bg-[#FBEDE5] p-2.5 rounded-lg text-[#2F6F6A] border border-[#CFE6DF]">
              <MessageSquare size={18} />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#8C8178] uppercase mb-1 block">
                User Query
              </span>
              <p className="text-sm font-medium text-[#3A332E] leading-relaxed">
                "I paid for my premium subscription yesterday, but the application keeps crashing when I try to open a new project."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Router */}
        <div className="flex flex-col items-center mb-8 relative">
          <div className="w-[2px] h-8 bg-gradient-to-b from-[#DDD2C1] to-[#2F6F6A]/40 mb-2" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-[#2F6F6A]/30 text-[#2F6F6A] rounded-full p-3.5 shadow-[0_4px_20px_rgba(59,130,246,0.12)] z-10 hover:border-[#2F6F6A]/60 transition-colors"
          >
            <GitMerge size={22} />
          </motion.div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#2F6F6A] uppercase mt-3">
            Intent Router
          </span>
          <span className="text-xs text-[#6B615A] mt-1">Detects: Billing + Technical</span>
          
          {/* Branching lines */}
          <div className="w-full max-w-sm absolute top-[calc(100%+32px)] left-1/2 -translate-x-1/2 h-[2px] bg-[#DDD2C1]" />
        </div>

        {/* Parallel Execution Layer */}
        <div className="w-full grid grid-cols-2 gap-4 lg:gap-10 mt-10 relative">
          {/* Billing Agent Path */}
          <div className="flex flex-col items-center">
            <div className="w-[2px] h-6 bg-[#DDD2C1] mb-2" />
            <ArrowDown size={14} className="text-[#8C8178] mb-4" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.4 }}
              className="w-full bg-card border-2 border-ink rounded-xl p-5 text-center flex flex-col items-center shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:border-[#E3A72F]/40 hover:shadow-[0_8px_25px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="bg-[#F7E4B5] p-2.5 rounded-full text-[#A87512] mb-3 border border-[#E3A72F]">
                <Bot size={18} />
              </div>
              <span className="text-[11px] font-bold tracking-widest text-[#191614] uppercase mb-1">
                Billing Agent
              </span>
              <span className="text-[10px] font-mono text-[#6B615A] mb-4">Verifies Subscription</span>
              
              <div className="w-full bg-card rounded-lg border-2 border-ink p-2.5 flex items-center justify-center gap-2">
                <FileText size={12} className="text-[#A87512]" />
                <span className="text-[9px] font-mono font-medium text-[#6B615A]">FAISS: Refund Policy</span>
              </div>
            </motion.div>
          </div>

          {/* Technical Agent Path */}
          <div className="flex flex-col items-center">
            <div className="w-[2px] h-6 bg-[#DDD2C1] mb-2" />
            <ArrowDown size={14} className="text-[#8C8178] mb-4" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.5 }}
              className="w-full bg-card border-2 border-ink rounded-xl p-5 text-center flex flex-col items-center shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:border-[#2F6F6A]/40 hover:shadow-[0_8px_25px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="bg-[#CFE6DF] p-2.5 rounded-full text-[#2F6F6A] mb-3 border border-[#7CC9B2]">
                <Bot size={18} />
              </div>
              <span className="text-[11px] font-bold tracking-widest text-[#191614] uppercase mb-1">
                Technical Agent
              </span>
              <span className="text-[10px] font-mono text-[#6B615A] mb-4">Troubleshoots Crash</span>
              
              <div className="w-full bg-card rounded-lg border-2 border-ink p-2.5 flex items-center justify-center gap-2">
                <FileText size={12} className="text-[#2F6F6A]" />
                <span className="text-[9px] font-mono font-medium text-[#6B615A]">FAISS: Crash Docs</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Synthesis */}
        <div className="flex flex-col items-center mt-8 w-full">
          <div className="flex justify-center gap-20 w-full mb-4">
            <div className="w-[2px] h-10 bg-gradient-to-b from-[#DDD2C1] to-[#C8603A]/40" />
            <div className="w-[2px] h-10 bg-gradient-to-b from-[#DDD2C1] to-[#C8603A]/40" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.7 }}
            className="w-full max-w-md bg-card border border-[#F6D9CB] rounded-xl p-6 shadow-[0_8px_30px_rgba(168,85,247,0.06)] hover:border-[#F08A5D] hover:shadow-[0_12px_35px_rgba(168,85,247,0.1)] transition-all duration-200 flex flex-col items-center text-center"
          >
            <div className="bg-[#FBEDE5] p-2.5 rounded-full text-[#A34A28] mb-3 border border-[#F6D9CB]">
              <Layers size={20} />
            </div>
            <span className="text-[11px] font-bold tracking-widest text-[#191614] uppercase mb-1">
              Response Synthesis
            </span>
            <p className="text-xs text-[#6B615A] leading-relaxed max-w-sm">
              Combines billing verification and technical troubleshooting into a single, cohesive customer response.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
