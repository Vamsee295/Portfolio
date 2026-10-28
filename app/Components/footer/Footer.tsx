import { profile } from "../../data/profile";

const links = [
  { label: "GitHub", href: profile.social.github, external: true },
  { label: "LinkedIn", href: profile.social.linkedin, external: true },
  { label: "Email", href: profile.social.email, external: false },
  { label: "Resume", href: profile.resume, external: false },
];

export default function Footer() {
  return (
    <footer role="contentinfo" className="dots-night relative overflow-hidden border-t-[2.5px] border-ink bg-night text-paper">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-8 px-[clamp(18px,4vw,40px)] pt-14 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-cond text-lg font-bold uppercase tracking-[0.12em]">Vamsee Vemulapalli</p>
          <p className="font-mono text-xs tracking-[0.14em] text-paper/50">AI · SOFTWARE · DATA</p>
        </div>
        <nav aria-label="Footer links" className="flex flex-wrap gap-x-8 gap-y-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="font-cond text-lg font-bold uppercase tracking-[0.1em] text-paper/70 underline-offset-4 hover:text-[var(--accent-l)] hover:underline"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <p className="font-mono text-xs text-paper/50">© {new Date().getFullYear()} · built by hand</p>
      </div>
      {/* Oversized wordmark, cropped by the footer's bottom edge */}
      <p aria-hidden className="mt-10 select-none text-center font-display text-[23vw] uppercase leading-[0.72] text-transparent [-webkit-text-stroke:2px_rgba(245,239,230,0.22)]">
        Vamsee
      </p>
    </footer>
  );
}
