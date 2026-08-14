import { GitBranch, Mail } from "lucide-react";

const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer
      className="border-t border-[#e5e7eb] py-12 bg-[#fafafa]"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left — Brand */}
          <div className="text-center sm:text-left">
            <p className="font-black text-sm tracking-[0.18em] uppercase text-[#111111] mb-1">
              VAMSEE
            </p>
            <p className="text-xs font-mono text-[#9ca3af] tracking-wider">
              AI · SOFTWARE · DATA
            </p>
          </div>

          {/* Center — Social links */}
          <nav aria-label="Footer social links" className="flex items-center gap-6">
            <a
              href="https://github.com/vamseevemulapalli"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (opens in new tab)"
              className="flex items-center gap-1.5 text-xs font-medium text-[#6b7280] hover:text-[#111111] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] rounded"
            >
              <GitBranch size={14} aria-hidden="true" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/vamseevemulapalli"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in new tab)"
              className="flex items-center gap-1.5 text-xs font-medium text-[#6b7280] hover:text-[#111111] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] rounded"
            >
              <LinkedinIcon />
              LinkedIn
            </a>
            <a
              href="mailto:vamseevemulapalli@example.com"
              aria-label="Send email"
              className="flex items-center gap-1.5 text-xs font-medium text-[#6b7280] hover:text-[#111111] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] rounded"
            >
              <Mail size={14} aria-hidden="true" />
              Email
            </a>
          </nav>

          {/* Right — Copyright */}
          <p className="text-xs font-mono text-[#9ca3af]">
            © {currentYear} Vamsee Vemulapalli
          </p>
        </div>
      </div>
    </footer>
  );
}

