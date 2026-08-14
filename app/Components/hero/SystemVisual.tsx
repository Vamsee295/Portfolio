"use client";

import { useEffect, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────
interface NodeDef {
  id: string;
  x: number; // 0-1 relative position
  y: number;
  label: string;
  size: number;
  isCore?: boolean;
}

interface Particle {
  fromId: string;
  toId: string;
  progress: number;
  speed: number;
  opacity: number;
  size: number;
}

interface ActivityState {
  name: string;
  activeNodes: string[];
  activeConnections: Array<{ from: string; to: string }>;
}

// ─── Fixed Node Layout ────────────────────────────────────────
// Positions tuned so labels don't overlap + visual balance
const NODES: NodeDef[] = [
  { id: "core",      x: 0.50, y: 0.50, label: "AI CORE",   size: 7, isCore: true },
  { id: "agents",   x: 0.50, y: 0.13, label: "AGENTS",     size: 3.8 },
  { id: "models",   x: 0.80, y: 0.27, label: "MODELS",     size: 3.8 },
  { id: "software", x: 0.84, y: 0.57, label: "SOFTWARE",   size: 3.8 },
  { id: "llms",     x: 0.68, y: 0.84, label: "LLMs",       size: 3.2 },
  { id: "data",     x: 0.38, y: 0.88, label: "DATA",       size: 3.8 },
  { id: "apis",     x: 0.16, y: 0.68, label: "APIs",       size: 3.2 },
  { id: "aiml",     x: 0.12, y: 0.40, label: "AI / ML",   size: 3.8 },
  { id: "pipelines",x: 0.24, y: 0.18, label: "PIPELINES",  size: 3.2 },
];

// Hub + selected cross-connections for richness
const CONNECTIONS = [
  { from: "core",    to: "agents"   },
  { from: "core",    to: "models"   },
  { from: "core",    to: "software" },
  { from: "core",    to: "llms"     },
  { from: "core",    to: "data"     },
  { from: "core",    to: "apis"     },
  { from: "core",    to: "aiml"     },
  { from: "core",    to: "pipelines"},
  { from: "agents",  to: "models"   },
  { from: "models",  to: "llms"     },
  { from: "data",    to: "aiml"     },
  { from: "software",to: "apis"     },
];

// Cycling activity states — highlight a different "flow" every 5s
const ACTIVITY_STATES: ActivityState[] = [
  {
    name: "AI Agents",
    activeNodes: ["core", "agents", "models", "software"],
    activeConnections: [
      { from: "agents",  to: "core"     },
      { from: "core",    to: "models"   },
      { from: "core",    to: "software" },
      { from: "agents",  to: "models"   },
    ],
  },
  {
    name: "Machine Learning",
    activeNodes: ["core", "data", "models", "aiml", "llms"],
    activeConnections: [
      { from: "data",   to: "core"   },
      { from: "core",   to: "models" },
      { from: "core",   to: "aiml"   },
      { from: "models", to: "llms"   },
    ],
  },
  {
    name: "Software Systems",
    activeNodes: ["core", "apis", "software", "pipelines"],
    activeConnections: [
      { from: "apis",    to: "core"      },
      { from: "core",    to: "software"  },
      { from: "core",    to: "pipelines" },
      { from: "software",to: "apis"      },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────
export default function SystemVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Build lookup map
    const nodeMap: Record<string, NodeDef> = {};
    NODES.forEach((n) => { nodeMap[n.id] = n; });

    // Mutable state (lives in ref, not React state)
    const s = {
      time: 0,
      mouse: { x: -1, y: -1 },
      raf: 0,
      ring1: 0,
      ring2: Math.PI / 3,
      currentState: 0,
      nextSwitch: 5,
      particles: [] as Particle[],
      nodeAct: {} as Record<string, number>,   // 0-1 activation per node
      connAct: {} as Record<string, number>,   // 0-1 activation per connection
    };

    NODES.forEach((n) => { s.nodeAct[n.id] = 0; });
    CONNECTIONS.forEach((c) => {
      s.connAct[`${c.from}→${c.to}`] = 0;
      s.connAct[`${c.to}→${c.from}`]  = 0;
    });

    // ─── Helpers ─────────────────────────────────────────────
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const spawnParticle = (from: string, to: string) => {
      if (s.particles.length >= 35) return;
      s.particles.push({
        fromId: from, toId: to,
        progress: 0,
        speed: 0.0025 + Math.random() * 0.0025,
        opacity: 0.65 + Math.random() * 0.35,
        size: 1.8 + Math.random() * 1.2,
      });
    };

    // Ease in-out for particle travel
    const easeInOut = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    // ─── Resize ───────────────────────────────────────────────
    let W = 0, H = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // ─── Mouse ───────────────────────────────────────────────
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      s.mouse.x = (e.clientX - r.left) / r.width;
      s.mouse.y = (e.clientY - r.top)  / r.height;
    };
    const onLeave = () => { s.mouse.x = -1; s.mouse.y = -1; };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    // ─── Draw loop ────────────────────────────────────────────
    const draw = () => {
      if (!W || !H) { s.raf = requestAnimationFrame(draw); return; }

      s.time += 0.016;
      ctx.clearRect(0, 0, W, H);

      // px: get pixel coords for a node
      const px = (n: NodeDef) => ({ x: n.x * W, y: n.y * H });

      // ── Activity state cycling ──────────────────────────────
      if (s.time >= s.nextSwitch) {
        s.currentState = (s.currentState + 1) % ACTIVITY_STATES.length;
        s.nextSwitch = s.time + 5;
      }
      const act = ACTIVITY_STATES[s.currentState];

      // Lerp node activation toward targets
      NODES.forEach((n) => {
        const target = act.activeNodes.includes(n.id) ? 1 : 0;
        s.nodeAct[n.id] = lerp(s.nodeAct[n.id], target, 0.025);
      });

      // Lerp connection activation
      CONNECTIONS.forEach((c) => {
        const fwd = `${c.from}→${c.to}`;
        const bwd = `${c.to}→${c.from}`;
        const isActive = act.activeConnections.some(
          (ac) =>
            (ac.from === c.from && ac.to === c.to) ||
            (ac.from === c.to   && ac.to === c.from)
        );
        const t = isActive ? 1 : 0;
        s.connAct[fwd] = lerp(s.connAct[fwd] || 0, t, 0.025);
        s.connAct[bwd] = s.connAct[fwd];
      });

      // Cursor proximity — boost nearby node activation
      if (s.mouse.x >= 0) {
        NODES.forEach((n) => {
          const dx = (n.x - s.mouse.x) * (W / H); // aspect-corrected
          const dy = n.y - s.mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 0.2) {
            const boost = (1 - dist / 0.2) * 0.9;
            s.nodeAct[n.id] = Math.max(s.nodeAct[n.id], boost);
          }
        });
      }

      // ── Spawn particles ─────────────────────────────────────
      if (!prefersReducedMotion) {
        // Active connections spawn more
        if (Math.random() < 0.06) {
          const pool = act.activeConnections;
          if (pool.length) {
            const c = pool[Math.floor(Math.random() * pool.length)];
            spawnParticle(c.from, c.to);
          }
        }
        // Sparse background particles on any connection
        if (Math.random() < 0.015) {
          const c = CONNECTIONS[Math.floor(Math.random() * CONNECTIONS.length)];
          spawnParticle(c.from, c.to);
        }
      }

      // ── Update particles ────────────────────────────────────
      s.particles = s.particles.filter((p) => {
        p.progress += p.speed;
        return p.progress < 1;
      });

      // ─────────────────────────────────────────────────────────
      // LAYER 1 — Radial background glow
      // ─────────────────────────────────────────────────────────
      const bg = ctx.createRadialGradient(W/2,H/2,0, W/2,H/2, Math.min(W,H)*0.48);
      bg.addColorStop(0, "rgba(37,99,235,0.04)");
      bg.addColorStop(1, "rgba(37,99,235,0)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // ─────────────────────────────────────────────────────────
      // LAYER 2 — Orbital rings (slow rotation)
      // ─────────────────────────────────────────────────────────
      if (!prefersReducedMotion) {
        s.ring1 += 0.0018;
        s.ring2 -= 0.0012;
      }

      const rings = [
        { rFrac: 0.42, speed: 1,    opacity: 0.055, dashLen: Math.PI * 0.4 },
        { rFrac: 0.31, speed: -0.7, opacity: 0.045, dashLen: Math.PI * 0.55 },
        { rFrac: 0.20, speed: 0.5,  opacity: 0.07,  dashLen: Math.PI * 0.3 },
      ];

      rings.forEach((ring, ri) => {
        const r = Math.min(W, H) * ring.rFrac;
        const angle = !prefersReducedMotion
          ? (s.time * ring.speed * 0.35 + ri * 1.2)
          : ri * 1.2;

        // Full ring (very faint)
        ctx.beginPath();
        ctx.arc(W/2, H/2, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(37,99,235,${ring.opacity * 0.6})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();

        // Arc segment traveling around ring
        if (!prefersReducedMotion) {
          ctx.beginPath();
          ctx.arc(W/2, H/2, r, angle, angle + ring.dashLen);
          ctx.strokeStyle = `rgba(37,99,235,${ring.opacity * 1.8})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Leading dot on ring
          const sx = W/2 + Math.cos(angle + ring.dashLen) * r;
          const sy = H/2 + Math.sin(angle + ring.dashLen) * r;
          ctx.beginPath();
          ctx.arc(sx, sy, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(37,99,235,${ring.opacity * 3.5})`;
          ctx.fill();
        }
      });

      // ─────────────────────────────────────────────────────────
      // LAYER 3 — Connection lines
      // ─────────────────────────────────────────────────────────
      CONNECTIONS.forEach((c) => {
        const fn = nodeMap[c.from];
        const tn = nodeMap[c.to];
        if (!fn || !tn) return;

        const fp = px(fn);
        const tp = px(tn);
        const key = `${c.from}→${c.to}`;
        const activation = s.connAct[key] || 0;

        const hasParticle = s.particles.some(
          (p) =>
            (p.fromId === c.from && p.toId === c.to) ||
            (p.fromId === c.to   && p.toId === c.from)
        );

        // Active connections are brighter, particle-active ones brightest
        const opacity = 0.07 + activation * 0.22 + (hasParticle ? 0.13 : 0);
        const width = hasParticle ? 1.1 : 0.65;

        const grad = ctx.createLinearGradient(fp.x, fp.y, tp.x, tp.y);
        grad.addColorStop(0,   `rgba(37,99,235,${opacity})`);
        grad.addColorStop(0.5, `rgba(37,99,235,${opacity * 1.5})`);
        grad.addColorStop(1,   `rgba(37,99,235,${opacity})`);

        ctx.beginPath();
        ctx.moveTo(fp.x, fp.y);
        ctx.lineTo(tp.x, tp.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = width;
        ctx.stroke();
      });

      // ─────────────────────────────────────────────────────────
      // LAYER 4 — Particles (data flow)
      // ─────────────────────────────────────────────────────────
      s.particles.forEach((p) => {
        const fn = nodeMap[p.fromId];
        const tn = nodeMap[p.toId];
        if (!fn || !tn) return;

        const fp = px(fn);
        const tp = px(tn);
        const t = easeInOut(p.progress);
        const x = lerp(fp.x, tp.x, t);
        const y = lerp(fp.y, tp.y, t);

        // Fade in/out at endpoints
        const fade = Math.sin(p.progress * Math.PI);
        const alpha = p.opacity * fade;

        // Soft glow halo
        const glow = ctx.createRadialGradient(x, y, 0, x, y, p.size * 4);
        glow.addColorStop(0, `rgba(59,130,246,${alpha * 0.35})`);
        glow.addColorStop(1, "rgba(59,130,246,0)");
        ctx.beginPath();
        ctx.arc(x, y, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Particle core
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59,130,246,${alpha})`;
        ctx.fill();
      });

      // ─────────────────────────────────────────────────────────
      // LAYER 5 — Nodes
      // ─────────────────────────────────────────────────────────
      NODES.forEach((n, ni) => {
        const { x: nx, y: ny } = px(n);
        const activation = s.nodeAct[n.id] || 0;

        if (n.isCore) {
          // ── AI Core ──────────────────────────────────────────
          const breath = 1 + 0.07 * Math.sin(s.time * 1.1);
          const cr = n.size * breath;

          // Outer ambient glow
          const glow1 = ctx.createRadialGradient(nx, ny, 0, nx, ny, cr * 5.5);
          glow1.addColorStop(0, "rgba(37,99,235,0.20)");
          glow1.addColorStop(0.5,"rgba(37,99,235,0.07)");
          glow1.addColorStop(1, "rgba(37,99,235,0)");
          ctx.beginPath();
          ctx.arc(nx, ny, cr * 5.5, 0, Math.PI * 2);
          ctx.fillStyle = glow1;
          ctx.fill();

          // Rotating dashed arc (outer)
          if (!prefersReducedMotion) {
            const a1 = s.time * 0.65;
            ctx.save();
            ctx.translate(nx, ny);
            ctx.rotate(a1);
            ctx.beginPath();
            ctx.arc(0, 0, cr + 8, 0, Math.PI * 1.6);
            ctx.strokeStyle = "rgba(37,99,235,0.35)";
            ctx.lineWidth = 1.2;
            ctx.stroke();
            ctx.restore();

            // Counter-rotating short arc (inner)
            ctx.save();
            ctx.translate(nx, ny);
            ctx.rotate(-a1 * 0.55 + Math.PI * 0.7);
            ctx.beginPath();
            ctx.arc(0, 0, cr + 5, 0, Math.PI * 0.9);
            ctx.strokeStyle = "rgba(37,99,235,0.22)";
            ctx.lineWidth = 0.9;
            ctx.stroke();
            ctx.restore();
          } else {
            // Static ring in reduced-motion
            ctx.beginPath();
            ctx.arc(nx, ny, cr + 7, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(37,99,235,0.25)";
            ctx.lineWidth = 1;
            ctx.stroke();
          }

          // Core fill
          const coreGrad = ctx.createRadialGradient(nx - cr*0.2, ny - cr*0.2, 0, nx, ny, cr);
          coreGrad.addColorStop(0, "rgba(79,130,255,1)");
          coreGrad.addColorStop(1, "rgba(29,78,216,1)");
          ctx.beginPath();
          ctx.arc(nx, ny, cr, 0, Math.PI * 2);
          ctx.fillStyle = coreGrad;
          ctx.fill();

          // Core label — two lines centered
          ctx.font = `bold 6.5px var(--font-geist-mono, monospace)`;
          ctx.fillStyle = "rgba(255,255,255,0.95)";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText("AI",   nx, ny - 3);
          ctx.fillText("CORE", nx, ny + 4);

        } else {
          // ── Peripheral node ───────────────────────────────────
          const pulse = 1 + 0.1 * Math.sin(s.time * 1.7 + ni * 1.5);
          const r = n.size * pulse;

          // Glow
          const glowA = 0.04 + activation * 0.18;
          const glow = ctx.createRadialGradient(nx, ny, 0, nx, ny, r * 5);
          glow.addColorStop(0, `rgba(37,99,235,${glowA})`);
          glow.addColorStop(1, "rgba(37,99,235,0)");
          ctx.beginPath();
          ctx.arc(nx, ny, r * 5, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();

          // Outer ring — brightens with activation
          ctx.beginPath();
          ctx.arc(nx, ny, r + 4, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(37,99,235,${0.12 + activation * 0.4})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();

          // White fill with slight blue tint when active
          ctx.beginPath();
          ctx.arc(nx, ny, r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,1)`;
          ctx.fill();
          ctx.strokeStyle = `rgba(37,99,235,${0.45 + activation * 0.55})`;
          ctx.lineWidth = activation > 0.5 ? 2 : 1.5;
          ctx.stroke();

          // Label — pushed outward from center
          const dx = n.x - 0.5;
          const dy = n.y - 0.5;
          const len = Math.sqrt(dx * dx + dy * dy) || 1;
          const labelPad = r + 13 + activation * 2;
          const labelX = nx + (dx / len) * labelPad;
          const labelY = ny + (dy / len) * labelPad;

          const fontSize = 7.5 + activation * 1.5;
          const weight = activation > 0.6 ? "700" : "500";
          ctx.font = `${weight} ${fontSize}px var(--font-geist-mono, monospace)`;
          ctx.fillStyle = `rgba(37,99,235,${0.62 + activation * 0.38})`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(n.label, labelX, labelY);
        }
      });

      s.raf = requestAnimationFrame(draw);
    };

    s.raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(s.raf);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="relative w-full h-full" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: "block" }}
      />
    </div>
  );
}
