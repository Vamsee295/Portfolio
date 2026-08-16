"use client";

import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

// Dynamically import the ResumeViewer with SSR disabled.
// This is strictly required because react-pdf and pdfjs-dist rely on browser APIs 
// (like DOMMatrix and canvas) which crash the Next.js static generation build.
const ResumeViewer = dynamic(() => import("./ResumeViewer"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center">
      <Loader2 className="animate-spin text-[#9ca3af] mb-4" size={32} />
      <p className="text-sm font-mono text-[#6b7280]">Loading viewer...</p>
    </div>
  ),
});

export default function ClientResumeViewer() {
  return <ResumeViewer />;
}
