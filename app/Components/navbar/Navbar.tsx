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
            ? "bg-white/90 backdrop-blur-md border-b border-[#e5e7eb] shadow-sm"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <nav
          className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="text-[#111111] font-bold text-sm tracking-[0.18em] uppercase hover:text-[#000000] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded"
            aria-label="Vamsee Vemulapalli — home"
          >
            VAMSEE
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-[#6b7280] hover:text-[#111111] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded px-1"
              >
                {link.label}
              </Link>
            ))}

            {/* Resume — opens PDF in new tab */}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open resume PDF (opens in new tab)"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#6b7280] hover:text-[#111111] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded px-1"
            >
              <FileText size={14} aria-hidden="true" />
              Resume
            </a>
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in new tab)"
              className="text-[#6b7280] hover:text-[#111111] transition-colors duration-200 p-1.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
            >
              <GitBranch size={17} aria-hidden="true" />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in new tab)"
              className="text-[#6b7280] hover:text-[#111111] transition-colors duration-200 p-1.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
            >
              <LinkedinIcon />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#111111] p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
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
            className="fixed top-14 left-0 right-0 z-40 bg-white border-b border-[#e5e7eb] shadow-lg md:hidden"
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
                    className="block py-3 text-base font-medium border-b border-[#f3f4f6] text-[#6b7280] hover:text-[#111111] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              {/* Mobile Resume */}
              <motion.a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="py-3 text-base font-medium border-b border-[#f3f4f6] text-[#6b7280] hover:text-[#111111] transition-colors flex items-center gap-2"
              >
                <FileText size={15} aria-hidden="true" />
                Resume
              </motion.a>

              <div className="flex gap-5 pt-4">
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#111111] transition-colors"
                >
                  <GitBranch size={16} aria-hidden="true" /> GitHub
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#111111] transition-colors"
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

