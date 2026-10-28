"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GitBranch, FileText } from "lucide-react";
import Link from "next/link";
import { profile } from "../../data/profile";

const LinkedinIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const navLinks = [
  { label: "Work",       href: "/#work" },
  { label: "Labs",       href: "/playground" },
  { label: "About",      href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Certifications", href: "/#certifications" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const isCurrentPageRoot = window.location.pathname === "/";
      if (isCurrentPageRoot) {
        e.preventDefault();
        const id = href.replace(/^\/#/, "#");
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setMobileOpen(false);
      }
    } else {
      setMobileOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-paper/90 backdrop-blur-md border-b-[2.5px] border-ink"
            : "bg-transparent border-b-[2.5px] border-transparent"
        }`}
        role="banner"
      >
        <nav
          className="max-w-[1180px] mx-auto px-[clamp(18px,4vw,40px)] h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="group flex items-center gap-2.5 rounded text-ink"
            aria-label="Vamsee Vemulapalli — home"
          >
            <span className="font-display text-2xl uppercase leading-none">Vamsee</span>
            <span className="hidden lg:inline-block whitespace-nowrap rotate-[-4deg] rounded-md border-2 border-ink bg-accent px-1.5 py-0.5 font-cond text-[11px] font-bold uppercase tracking-[0.1em] text-paper transition-transform group-hover:rotate-3">
              AI / ML
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4 lg:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-cond text-[17px] font-bold uppercase tracking-[0.08em] text-ink/70 hover:text-accent transition-colors duration-200 rounded px-1"
              >
                {link.label}
              </Link>
            ))}

            {/* Resume — navigates to dedicated resume viewer */}
            <Link
              href={profile.resume}
              onClick={() => setMobileOpen(false)}
              aria-label="View Resume"
              className="btn-stk !gap-1.5 !px-3 !py-2 !text-[15px] !shadow-[3px_3px_0_var(--ink)]"
            >
              <FileText size={15} aria-hidden="true" />
              Resume
            </Link>
          </div>


          {/* Desktop Social Icons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in new tab)"
              className="grid h-9 w-9 place-items-center rounded-lg border-2 border-ink bg-card text-ink shadow-[2px_2px_0_var(--ink)] transition-transform hover:-translate-y-0.5"
            >
              <GitBranch size={17} aria-hidden="true" />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in new tab)"
              className="grid h-9 w-9 place-items-center rounded-lg border-2 border-ink bg-card text-ink shadow-[2px_2px_0_var(--ink)] transition-transform hover:-translate-y-0.5"
            >
              <LinkedinIcon />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-ink p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 z-40 bg-paper border-b-[2.5px] border-ink md:hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block py-3 font-display text-2xl uppercase border-b-2 border-dashed border-[var(--line)] text-ink hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              {/* Mobile Resume */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Link
                  href={profile.resume}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 font-display text-2xl uppercase border-b-2 border-dashed border-[var(--line)] text-ink hover:text-accent transition-colors flex items-center gap-2"
                >
                  <FileText size={15} aria-hidden="true" />
                  Resume
                </Link>
              </motion.div>


              <div className="flex flex-col gap-2 pt-4">
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-3 px-1 min-h-[44px] font-cond text-lg font-bold uppercase text-ink/70 hover:text-accent transition-colors"
                >
                  <GitBranch size={18} aria-hidden="true" /> GitHub
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-3 px-1 min-h-[44px] font-cond text-lg font-bold uppercase text-ink/70 hover:text-accent transition-colors"
                >
                  <LinkedinIcon /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

