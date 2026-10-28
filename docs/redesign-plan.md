# Portfolio Redesign Plan — "Paper & Ink" direction

Reference: itsflxkzy.com (analyzed 2026-10-28). We borrow the *design language*, not the copy or assets.

## What makes the reference feel premium

| Trait | Reference | Ours today |
|---|---|---|
| Background | Warm paper `#F5EFE6` + 13px dot-grid texture (`radial-gradient` on `body::before`) | Flat white / `#fafafa` |
| Type | 5 roles: Anton (display), Barlow Condensed (labels/buttons), Inter (body), JetBrains Mono (code/meta), Caveat (handwritten asides) | One sans + one mono, everything same weight feel |
| Accent | One strong burnt orange `#C8603A` + teal/gold/mint used sparingly | Tailwind blue on white = default look |
| Surfaces | "Sticker" cards: 2.5px ink border, 16px radius, hard offset shadow `5px 6px 0 ink` | 1px grey border, soft/no shadow |
| Buttons | Orange fill, ink border, hard shadow, press = translate(3px,4px) + shadow shrinks | Black pill |
| Highlight words | Word in a filled accent box (`EVERY KIND`), slightly rotated tags | Pale blue box |
| Rhythm | Light sections broken by a dark `night` section (`#151311`) with its own dot grid | All white |
| Motion | Purposeful, story-driven: typing prompt bar, terminal that types + ticks steps, count-up numbers, SVG strike-through drawing on reveal, marquee ticker, spinning round sticker CTA, rotating badge | Generic fade-ups, orbit loader |
| Character | Looping MP4s of a mascot ("Harvey") + talking head inside phone frames, lazy-loaded & play-only-when-visible | None |
| Discipline | `prefers-reduced-motion` respected everywhere; videos lazy-load via IntersectionObserver | Partial |

Why ours reads "vibe coded": default white + blue, uniform soft cards, every element fades up the same way, motion with no meaning.

## Our design tokens (new `app/globals.css` `:root`)

```
--paper #F5EFE6  --paper2 #ECE3D4  --card #FBF8F2
--ink #191614    --night #151311   --line rgba(25,22,20,.14)
--accent <decide: keep #C8603A or our own, e.g. electric #3B5BDB / acid #D4F25A>
--bw 2.5px  --sh 5px 6px 0 var(--ink)
fonts via next/font/google: Anton, Barlow Condensed, Inter, JetBrains Mono, Caveat
```

## Section-by-section rebuild

1. **Loader** — replace orbit loader. Paper screen, dot grid; "VAMSEE" in Anton slides up letter-by-letter with clip masks, handwritten Caveat note "( building intelligent software )" writes in, a terminal line types `> boot vamsee.portfolio` → `ready ✓`, then the whole sheet wipes up. ≤1.8s, skippable on click, skipped on repeat visit (sessionStorage) and reduced-motion.
2. **Nav** — paper bar, Anton wordmark + rotated accent sticker tag ("AI / ML"), sticker "Resume" button.
3. **Hero** — Caveat aside above, Anton headline `I BUILD / [INTELLIGENT] / SOFTWARE.` with the accent box word. Below: a prompt bar that types rotating examples (`train a dropout-risk model`, `orchestrate 3 agents`…) with a chip showing the matching project. Right/below: phone or monitor frame playing the **character loop**.
4. **Ticker** — marquee of skills on an ink strip, slight rotation.
5. **Work** — sticker cards; each project preview sits in a terminal/phone frame. Numbered `01 02 03` in Anton. Count-up stats (e.g. 82% risk, 46+ repos).
6. **"You might be thinking…" style myths → our "How I build"** — 4 steps as headers whose strike-through/underline draws on reveal.
7. **Night section** — Experience timeline on `--night` with paper text.
8. **Certifications** — receipt-style card list (mono, dashed rules, ✓ ticks) + logos.
9. **Skills** — "What's in the folder" numbered 2-column list.
10. **Contact** — dot-grid final block, big Anton CTA, round spinning sticker "LET'S TALK" FAB that appears once hero CTA scrolls away.
11. **Labs page** — same tokens; filter chips become sticker chips; cards get hard shadow + hover lift.

## The live character

Reference uses pre-rendered MP4 loops in phone frames (no 3D runtime). Plan:
- Produce 3–4 short loops (wave hello, typing at laptop, thinking, thumbs up) of a Vamsee character — the existing `ai-to-code` low-poly style (Vamsee + Claude robot) fits. Export MP4/WebM, ≤1.5MB each, 9:16 and 1:1.
- Component `<CharacterLoop src poster />`: `muted loop playsInline`, `preload="none"`, lazy src + play/pause via IntersectionObserver, poster image for reduced-motion.
- Placements: hero, work section header, contact.

## Engineering approach

- Keep Next 16 + framer-motion (already installed). No new deps except fonts via `next/font`.
- Motion primitives (small, reusable): `Reveal`, `TypeLoop`, `CountUp`, `DrawLine`, `Marquee`, `StickerButton`, `CharacterLoop`. Each honors `useReducedMotion`.
- Replace `app/Components/intro/` loader; keep data files (`projects.ts`, `caseStudies.ts`) untouched — only presentation changes.
- Order: tokens + fonts → primitives → loader → hero → work → rest → labs/case studies → mobile pass → perf (Lighthouse, video weight).

## Open decisions
1. Accent colour: reuse burnt orange, or our own accent (recommended, so it isn't a clone).
2. Character: render with the ai-to-code pipeline, or start with a placeholder and swap later.
