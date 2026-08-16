"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Smartphone } from "lucide-react";
import { useViewMode, type ViewMode } from "../../context/ViewModeContext";

const options: { mode: ViewMode; label: string; icon: React.ReactNode }[] = [
  { mode: "auto",    label: "Auto",    icon: null },
  { mode: "desktop", label: "Desktop", icon: <Monitor size={12} /> },
  { mode: "mobile",  label: "Mobile",  icon: <Smartphone size={12} /> },
];

export default function ViewModeSwitcher({ compact = false }: { compact?: boolean }) {
  const { mode, effectiveMode, setMode, isHydrated } = useViewMode();

  if (!isHydrated) return null;

  if (compact) {
    // In the mobile nav - just show two buttons
    return (
      <div className="flex items-center gap-1 p-1 bg-[#f8fafc] border border-[#e5e7eb] rounded-lg">
        {options.map((opt) => {
          const isActive = mode === opt.mode;
          return (
            <button
              key={opt.mode}
              onClick={() => setMode(opt.mode)}
              aria-label={`Switch to ${opt.label} view`}
              aria-pressed={isActive}
              className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] font-bold tracking-widest uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] ${
                isActive
                  ? "bg-white text-[#111111] shadow-sm border border-[#e5e7eb]"
                  : "text-[#9ca3af] hover:text-[#6b7280]"
              }`}
            >
              {opt.icon}
              {opt.label}
            </button>
          );
        })}
      </div>
    );
  }

  // Full switcher for navbar
  return (
    <div
      className="relative flex items-center gap-0.5 p-1 bg-[#f8fafc] border border-[#e5e7eb] rounded-lg"
      role="group"
      aria-label="View mode switcher"
    >
      {/* Animated background pill */}
      <AnimatePresence initial={false}>
        {options.map((opt) =>
          mode === opt.mode ? (
            <motion.div
              key={opt.mode}
              layoutId="view-mode-pill"
              className="absolute inset-1 bg-white border border-[#e5e7eb] rounded-md shadow-sm"
              style={{
                // Calculate width and left based on which option is active
                width: `calc(100% / ${options.length} - 2px)`,
                left: `calc(${options.indexOf(opt)} * (100% / ${options.length}) + 2px)`,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 35 }}
            />
          ) : null
        )}
      </AnimatePresence>

      {options.map((opt) => {
        const isActive = mode === opt.mode;
        return (
          <button
            key={opt.mode}
            onClick={() => setMode(opt.mode)}
            aria-label={`Switch to ${opt.label} view`}
            aria-pressed={isActive}
            className={`relative z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] font-bold tracking-widest uppercase transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] whitespace-nowrap ${
              isActive ? "text-[#111111]" : "text-[#9ca3af] hover:text-[#6b7280]"
            }`}
          >
            {opt.icon}
            {opt.label}
          </button>
        );
      })}

      {/* Effective mode indicator dot */}
      <span
        className="relative z-10 ml-1 w-1.5 h-1.5 rounded-full bg-[#10b981] flex-shrink-0"
        title={`Currently showing: ${effectiveMode} experience`}
        aria-hidden="true"
      />
    </div>
  );
}
