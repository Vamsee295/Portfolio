"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink, Loader2 } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { profile } from "../../data/profile";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure pdfjs worker to run on the client side
if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

export default function ResumeViewer() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });
  
  const [numPages, setNumPages] = useState<number>(0);
  const [pageWidth, setPageWidth] = useState(800);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const pdfUrl = (profile as any).resumePdfUrl || "/resume/Vamsee_CV.pdf";

  // Handle responsive page width based on container
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        // Leave some margin for padding
        const newWidth = Math.min(containerRef.current.clientWidth - 32, 900);
        setPageWidth(newWidth);
      }
    };
    
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-10 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8" ref={headerRef}>
          {/* Left Side: Title & Description */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[11px] font-mono font-semibold tracking-[0.18em] text-[#9ca3af] hover:text-[#111111] transition-colors uppercase"
              >
                <ArrowLeft size={12} />
                Back to Portfolio
              </Link>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-4xl lg:text-5xl font-black tracking-[-0.04em] text-[#111111] mb-4 uppercase"
            >
              RESUME.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-[#6b7280] max-w-md leading-relaxed"
            >
              View my current experience, projects, skills, and certifications.
            </motion.p>
          </div>

          {/* Right Side: Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            {/* Open in new tab */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-[#e5e7eb] bg-white text-[#374151] font-semibold text-sm hover:border-[#111111] hover:text-[#111111] transition-all duration-200"
            >
              Open PDF
              <ExternalLink size={16} />
            </a>

            {/* Download Button */}
            <a
              href={pdfUrl}
              download="Vamsee_Krishna_Vemulapalli_Resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#111111] text-white font-semibold text-sm hover:bg-[#000000] hover:shadow-lg hover:-translate-y-[1px] transition-all duration-200"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Seamless Document Renderer ──────────────────────────────────────────── */}
      <section className="pb-32 px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex flex-col items-center gap-8"
          ref={containerRef}
        >
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex flex-col items-center justify-center h-64 w-full">
                <Loader2 className="animate-spin text-[#9ca3af] mb-4" size={32} />
                <p className="text-sm font-mono text-[#6b7280]">Loading document...</p>
              </div>
            }
            error={
              <div className="flex flex-col items-center justify-center p-12 text-center border border-[#e5e7eb] bg-white rounded-xl w-full">
                <p className="text-lg font-bold text-[#111111] mb-2">
                  Resume preview is currently unavailable.
                </p>
                <p className="text-sm text-[#6b7280] mb-6">
                  Please download or open the PDF directly.
                </p>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111111] text-white font-semibold text-sm"
                >
                  <ExternalLink size={16} />
                  Open Resume PDF
                </a>
              </div>
            }
            className="flex flex-col gap-10"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <div
                key={`page_${index + 1}`}
                className="bg-white mx-auto rounded-sm overflow-hidden"
                style={{
                  boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1), 0 0 1px rgba(0,0,0,0.1)"
                }}
              >
                <Page
                  pageNumber={index + 1}
                  width={pageWidth}
                  renderAnnotationLayer={true}
                  renderTextLayer={true}
                  className="react-pdf-page-container"
                />
              </div>
            ))}
          </Document>
        </motion.div>
      </section>

      {/* Global styles to ensure text layers align properly and canvas respects width */}
      <style dangerouslySetInnerHTML={{__html: `
        .react-pdf-page-container {
          background-color: white;
        }
        .react-pdf-page-container canvas {
          max-width: 100% !important;
          height: auto !important;
        }
        .react-pdf__Page__textContent {
          /* Ensures text layer sits accurately above the canvas for selection */
          font-family: inherit !important;
        }
      `}} />
    </main>
  );
}
