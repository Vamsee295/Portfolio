"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";

// ─── Types ──────────────────────────────────────────────────────────────────
export type ViewMode = "auto" | "desktop" | "mobile";
export type EffectiveMode = "desktop" | "mobile";

interface ViewModeContextValue {
  /** Current user-selected mode (auto/desktop/mobile) */
  mode: ViewMode;
  /** Resolved mode after applying auto-detection — always "desktop" | "mobile" */
  effectiveMode: EffectiveMode;
  /** Override the mode manually */
  setMode: (mode: ViewMode) => void;
  /** True on first render before hydration resolves */
  isHydrated: boolean;
}

// ─── Breakpoint ─────────────────────────────────────────────────────────────
const DESKTOP_BREAKPOINT = 1024; // px — treat >= 1024 as desktop in auto mode

function detectViewport(): EffectiveMode {
  if (typeof window === "undefined") return "desktop";
  return window.innerWidth >= DESKTOP_BREAKPOINT ? "desktop" : "mobile";
}

// ─── Session Storage ─────────────────────────────────────────────────────────
const STORAGE_KEY = "vamsee_view_mode";

function readStoredMode(): ViewMode {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored === "desktop" || stored === "mobile" || stored === "auto") {
      return stored;
    }
  } catch {}
  return "auto";
}

function writeStoredMode(mode: ViewMode) {
  try {
    sessionStorage.setItem(STORAGE_KEY, mode);
  } catch {}
}

// ─── Context ─────────────────────────────────────────────────────────────────
const ViewModeContext = createContext<ViewModeContextValue>({
  mode: "auto",
  effectiveMode: "desktop",
  setMode: () => {},
  isHydrated: false,
});

// ─── Provider ────────────────────────────────────────────────────────────────
export function ViewModeProvider({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [mode, setModeState] = useState<ViewMode>("auto");
  const [autoDetected, setAutoDetected] = useState<EffectiveMode>("desktop");

  // Hydrate once on mount (client-side only)
  useEffect(() => {
    const stored = readStoredMode();
    setModeState(stored);
    setAutoDetected(detectViewport());
    setIsHydrated(true);
  }, []);

  // Respond to viewport resize in auto mode using matchMedia + resize
  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setAutoDetected(e.matches ? "desktop" : "mobile");
    };

    handleChange(mql); // initial check
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  const setMode = useCallback((newMode: ViewMode) => {
    setModeState(newMode);
    writeStoredMode(newMode);
  }, []);

  const effectiveMode: EffectiveMode = useMemo(() => {
    if (!isHydrated) return "desktop"; // SSR safe default
    if (mode === "auto") return autoDetected;
    return mode;
  }, [mode, autoDetected, isHydrated]);

  const value = useMemo(
    () => ({ mode, effectiveMode, setMode, isHydrated }),
    [mode, effectiveMode, setMode, isHydrated]
  );

  return (
    <ViewModeContext.Provider value={value}>
      {children}
    </ViewModeContext.Provider>
  );
}

// ─── Hook ────────────────────────────────────────────────────────────────────
export function useViewMode(): ViewModeContextValue {
  return useContext(ViewModeContext);
}
