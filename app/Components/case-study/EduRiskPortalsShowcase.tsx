"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { GraduationCap, Users, ShieldAlert, Activity, BookOpen, AlertTriangle, Building, PieChart, ShieldCheck } from "lucide-react";

export default function EduRiskPortalsShowcase() {
  const [activeTab, setActiveTab] = useState<"student" | "faculty" | "dean">("student");

  const tabs = [
    { id: "student", label: "Student Portal", icon: <GraduationCap size={16} /> },
    { id: "faculty", label: "Faculty Portal", icon: <Users size={16} /> },
    { id: "dean", label: "Dean Command Center", icon: <ShieldAlert size={16} /> }
  ] as const;

  return (
    <div className="w-full bg-card border-2 border-ink rounded-2xl overflow-hidden my-16 shadow-lg font-sans">
      {/* Tab Navigation */}
      <div className="flex flex-col sm:flex-row border-b border-[#DDD2C1] bg-card">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center justify-center gap-2 flex-1 py-4 px-4 text-xs font-bold tracking-widest uppercase transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-card text-[#191614] border-b-2 border-[#191614]"
                : "text-[#8C8178] hover:text-[#191614] hover:bg-[#ECE3D4]"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6 md:p-10 min-h-[400px]">
        {/* STUDENT PORTAL */}
        {activeTab === "student" && (
          <motion.div
            key="student"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-10"
          >
            <div>
              <h4 className="font-display text-3xl uppercase leading-none text-ink mb-3">Academic Intelligence</h4>
              <p className="text-sm text-[#6B615A] leading-relaxed mb-8">
                Don't just show students data—help them understand where they need to improve. The student portal translates raw academic signals into actionable insights and weak-area heatmaps.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Activity size={18} className="text-[#2F6F6A] mt-0.5" />
                  <div>
                    <span className="block font-display text-2xl uppercase leading-none text-ink">Weak-Area Heatmaps</span>
                    <span className="text-xs text-[#6B615A]">Visual identification of struggling subjects</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BookOpen size={18} className="text-[#2F6F6A] mt-0.5" />
                  <div>
                    <span className="block font-display text-2xl uppercase leading-none text-ink">Attendance vs Performance</span>
                    <span className="text-xs text-[#6B615A]">Correlates absence with academic decline</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-card border-2 border-ink rounded-xl p-6 relative shadow-[4px_5px_0_var(--ink)]">
               <div className="absolute top-4 right-4 bg-[#FBEDE5] text-[#C8603A] border border-[#CFE6DF] text-[9px] font-mono font-semibold px-2.5 py-1 rounded">RBAC: STUDENT</div>
               <div className="space-y-4 mt-6">
                 <div className="h-2 w-1/3 bg-[#DDD2C1] rounded" />
                 <div className="h-20 w-full bg-gradient-to-r from-[#C8603A]/10 via-[#f8fafc] to-[#2F6F6A]/10 rounded-lg border-2 border-ink flex items-center justify-between p-4 shadow-sm">
                    <span className="text-xs font-bold text-[#C8603A]">Calculus (High Risk)</span>
                    <span className="text-xs font-bold text-[#2F6F6A]">Physics (Safe)</span>
                 </div>
                 <div className="flex gap-2">
                   <div className="h-12 flex-1 bg-card border-2 border-ink rounded shadow-sm" />
                   <div className="h-12 flex-1 bg-card border-2 border-ink rounded shadow-sm" />
                 </div>
               </div>
            </div>
          </motion.div>
        )}

        {/* FACULTY PORTAL */}
        {activeTab === "faculty" && (
          <motion.div
            key="faculty"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-10"
          >
            <div>
              <h4 className="font-display text-3xl uppercase leading-none text-ink mb-3">The Intervention Workflow</h4>
              <p className="text-sm text-[#6B615A] leading-relaxed mb-8">
                Machine learning is useless without a workflow. Faculty use SHAP explanations to understand exactly WHY a student is at risk, allowing them to initiate targeted academic interventions.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <AlertTriangle size={18} className="text-[#E3A72F] mt-0.5" />
                  <div>
                    <span className="block font-display text-2xl uppercase leading-none text-ink">Risk & SHAP Explainability</span>
                    <span className="text-xs text-[#6B615A]">Deconstructs ML predictions into root causes</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Activity size={18} className="text-[#A34A28] mt-0.5" />
                  <div>
                    <span className="block font-display text-2xl uppercase leading-none text-ink">Closed-Loop Tracking</span>
                    <span className="text-xs text-[#6B615A]">Log interventions and evaluate semester outcomes</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-card border-2 border-ink rounded-xl p-6 relative shadow-[4px_5px_0_var(--ink)]">
               <div className="absolute top-4 right-4 bg-[#F7E4B5] text-[#A87512] border border-[#E3A72F] text-[9px] font-mono font-semibold px-2.5 py-1 rounded">RBAC: FACULTY</div>
               <div className="space-y-4 mt-6">
                 <div className="h-2 w-1/2 bg-[#DDD2C1] rounded" />
                 <div className="bg-card border-2 border-ink rounded-lg p-4 shadow-sm">
                   <div className="flex justify-between items-center mb-3">
                     <span className="text-xs font-bold text-[#191614]">Student A</span>
                     <span className="text-[10px] bg-[#C8603A]/10 text-[#C8603A] px-2 py-0.5 rounded font-bold">87% RISK</span>
                   </div>
                   <div className="space-y-2">
                     <div className="flex items-center gap-2">
                       <div className="w-2/3 h-1.5 bg-[#C8603A] rounded" />
                       <span className="text-[9px] text-[#6B615A]">Low Attendance</span>
                     </div>
                     <div className="flex items-center gap-2">
                       <div className="w-1/3 h-1.5 bg-[#E3A72F] rounded" />
                       <span className="text-[9px] text-[#6B615A]">Declining Grades</span>
                     </div>
                   </div>
                   <button className="mt-4 w-full py-2 bg-[#191614] text-paper text-[10px] font-bold rounded-lg hover:bg-black transition-colors shadow-sm">Log Intervention</button>
                 </div>
               </div>
            </div>
          </motion.div>
        )}

        {/* DEAN PORTAL */}
        {activeTab === "dean" && (
          <motion.div
            key="dean"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-10"
          >
            <div>
              <h4 className="font-display text-3xl uppercase leading-none text-ink mb-3">Institutional Command Center</h4>
              <p className="text-sm text-[#6B615A] leading-relaxed mb-8">
                The Dean portal is the administrative layer. It aggregates student and faculty data to provide a macro-level view of institutional health, access provisioning, and college analytics.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ShieldCheck size={18} className="text-[#C8603A] mt-0.5" />
                  <div>
                    <span className="block font-display text-2xl uppercase leading-none text-ink">Access Provisioning</span>
                    <span className="text-xs text-[#6B615A]">Manage Student and Faculty RBAC permissions</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Building size={18} className="text-[#6B615A] mt-0.5" />
                  <div>
                    <span className="block font-display text-2xl uppercase leading-none text-ink">Institutional Health</span>
                    <span className="text-xs text-[#6B615A]">Macro analytics on department retention and funds</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-card border-2 border-ink rounded-xl p-6 relative shadow-[0_4px_20px_rgba(15,23,42,0.03)]">
               <div className="absolute top-4 right-4 bg-[#FBEDE5] text-[#A34A28] border border-[#F6D9CB] text-[9px] font-mono font-semibold px-2.5 py-1 rounded">RBAC: DEAN</div>
               <div className="space-y-4 mt-6">
                 <div className="flex gap-4 mb-6">
                   <div className="flex-1 bg-card border-2 border-ink rounded-lg p-3.5 shadow-sm">
                     <span className="text-[9px] text-[#6B615A] font-mono font-medium uppercase tracking-wider">Total Students</span>
                     <div className="text-xl font-bold text-[#191614] mt-1">4,208</div>
                   </div>
                   <div className="flex-1 bg-card border-2 border-ink rounded-lg p-3.5 shadow-sm">
                     <span className="text-[9px] text-[#6B615A] font-mono font-medium uppercase tracking-wider">At-Risk</span>
                     <div className="text-xl font-bold text-[#C8603A] mt-1">12%</div>
                   </div>
                 </div>
                 <div className="bg-card border-2 border-ink h-16 rounded-lg p-3 flex items-center justify-center shadow-sm">
                    <PieChart size={22} className="text-[#A34A28]" />
                 </div>
               </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
