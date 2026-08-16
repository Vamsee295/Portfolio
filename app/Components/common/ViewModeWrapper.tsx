"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useViewMode } from "../../context/ViewModeContext";

interface ViewModeWrapperProps {
  children: (effectiveMode: "desktop" | "mobile") => React.ReactNode;
  className?: string;
}

/**
 * ViewModeWrapper
 *
 * Wraps content that needs to react to the current effective view mode.
 * On mode switch, applies a subtle fade + slight scale transition.
 * Children receive the current effectiveMode as a render prop.
 */
export default function ViewModeWrapper({ children, className }: ViewModeWrapperProps) {
  const { effectiveMode, isHydrated } = useViewMode();

  // Don't animate on initial load to avoid layout flash
  if (!isHydrated) {
    return (
      <div className={className}>
        {children("desktop")}
      </div>
    );
  }

  return (
    <div className={className}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={effectiveMode}
          initial={{ opacity: 0, scale: 0.995 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.995 }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
        >
          {children(effectiveMode)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
