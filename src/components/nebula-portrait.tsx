import { useEffect, useRef, useState } from "react";
import type { Nebula } from "@/data/types";
import { cn } from "@/lib/utils";

type Variant = "thumb" | "card" | "hero";

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

function mulberry32(seed: number) {
  let a = seed || 1;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function rgba(hex: string, a: number): string {
  const n = hex.replace("#", "");
  const r = parseInt(n.slice(0, 2), 16);
  const g = parseInt(n.slice(2, 4), 16);
  const b = parseInt(n.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

interface Blob {
  x: number;
  y: number;
  rx: number;
  ry: number;
  rot: number;
  c: string;
  a: number;
  s: number;
  p: number;
}

interface Filament {
  x: number;
  y: number;
  len: number;
  ang: number;
  c: string;
  w: number;
  p: number;
}

interface StarBit {
  x: number;
  y: number;
  r: number;
  a: number;
  tw: number;
}

interface Speck {
  x: number;
  y: number;
  r: number;
  a: number;
  p: number;
}

function seedScene(nebula: Nebula, count: number) {
  const rng = mulberry32(hash(nebula.slug));
  const blobs: Blob[] = [];
  const filaments: Filament[] = [];
  const stars: StarBit[] = [];
  const specks: Speck[] = [];
  const [c0, c1, c2] = nebula.colors;

  for (let i = 0; i < count; i++) {
    blobs.push({
      x: 0.28 + rng() * 0.44 + (rng() - 0.5) * 0.2,
      y: 0.32 + rng() * 0.4 + (rng() - 0.5) * 0.18,
      rx: 0.08 + rng() * 0.28,
      ry: 0.05 + rng() * 0.2,
      rot: rng() * Math.PI * 2,
      c: i % 3 === 0 ? c0 : i % 3 === 1 ? c1 : c2,
      a: 0.12 + rng() * 0.28,
      s: 0.15 + rng() * 0.45,
      p: rng() * Math.PI * 2,
    });
  }

  const filCount = nebula.shape === "filaments" ? Math.round(count * 1.4) : nebula.shape === "pillars" ? 6 : 0;
  for (let i = 0; i < filCount; i++) {
    filaments.push({
      x: 0.2 + rng() * 0.6,
      y: 0.2 + rng() * 0.6,
      len: 0.12 + rng() * 0.38,
      ang: rng() * Math.PI * 2,
      c: i % 2 === 0 ? c0 : c1,
      w: 1 + rng() * 2.4,
      p: rng() * Math.PI * 2,
    });
  }

  const starN = 18 + Math.round(rng() * 28);
  for (let i = 0; i < starN; i++) {
    stars.push({
      x: rng(),
      y: rng(),
      r: rng() < 0.12 ? 1.4 : 0.5 + rng() * 0.7,
      a: 0.35 + rng() * 0.65,
      tw: rng() * Math.PI * 2,
    });
  }

  const speckN = 40 + Math.round(rng() * 50);
  for (let i = 0; i < speckN; i++) {
    specks.push({
      x: 0.15 + rng() * 0.7,
      y: 0.15 + rng() * 0.7,
      r: 0.4 + rng() * 1.2,
      a: 0.04 + rng() * 0.1,
      p: rng() * Math.PI * 2,
    });
  }

  return { blobs, filaments, stars, specks, rng };
}

export function NebulaPortrait({
  nebula,
  variant = "card",
  className,
}: {
  nebula: Nebula;
  variant?: Variant;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [live, setLive] = useState(variant === "hero");

  useEffect(() => {
    if (live) return;
    const wrap = wrapRef.current;
    if (!wrap) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setLive(true);
      },
      { rootMargin: "160px", threshold: 0.01 },
    );
    io.observe(wrap);
    return () => io.disconnect();
  }, [live]);

  useEffect(() => {
    if (!live) return;
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const count = variant === "hero" ? 28 : variant === "card" ? 18 : 10;
    const scene = seedScene(nebula, count);
    let raf = 0;
    let running = true;
    let visible = true;
    let t = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let frameN = 0;
    const skip = variant === "hero" ? 1 : variant === "card" ? 2 : 3;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = wrap!.clientWidth;
      h = wrap!.clientHeight;
      canvas!.width = Math.max(1, Math.floor(w * dpr));
      canvas!.height = Math.max(1, Math.floor(h * dpr));
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function blob(b: Blob, time: number) {
      const drift = reduced ? 0 : Math.sin(time * 0.00035 * b.s + b.p);
      const x = (b.x + drift * 0.03) * w;
      const y = (b.y + Math.cos(time * 0.00028 * b.s + b.p) * 0.025) * h;
      const rx = b.rx * Math.min(w, h) * (1 + (reduced ? 0 : Math.sin(time * 0.0004 + b.p) * 0.08));
      const ry = b.ry * Math.min(w, h);
      ctx!.save();
      ctx!.translate(x, y);
      ctx!.rotate(b.rot + (reduced ? 0 : time * 0.00004 * b.s));
      const g = ctx!.createRadialGradient(0, 0, 0, 0, 0, Math.max(rx, ry));
      g.addColorStop(0, rgba(b.c, b.a));
      g.addColorStop(0.45, rgba(b.c, b.a * 0.45));
      g.addColorStop(1, rgba(b.c, 0));
      ctx!.fillStyle = g;
      ctx!.beginPath();
      ctx!.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.restore();
    }

    function drawStructure(time: number) {
      const cx = w * 0.5;
      const cy = h * 0.48;
      const pulse = reduced ? 1 : 1 + Math.sin(time * 0.0006) * 0.04;
      const [c0, c1, c2] = nebula.colors;

      if (nebula.shape === "ring" || nebula.shape === "helix" || nebula.shape === "shell") {
        const r = Math.min(w, h) * (nebula.shape === "shell" ? 0.32 : 0.22) * pulse;
        ctx!.save();
        ctx!.translate(cx, cy);
        ctx!.rotate(-0.15);
        ctx!.scale(1.15, nebula.shape === "helix" ? 0.78 : 0.92);
        const ring = ctx!.createRadialGradient(0, 0, r * 0.45, 0, 0, r * 1.35);
        ring.addColorStop(0, "rgba(0,0,0,0)");
        ring.addColorStop(0.42, "rgba(0,0,0,0)");
        ring.addColorStop(0.62, rgba(c0, 0.55));
        ring.addColorStop(0.78, rgba(c1, 0.35));
        ring.addColorStop(1, rgba(c2, 0));
        ctx!.fillStyle = ring;
        ctx!.beginPath();
        ctx!.arc(0, 0, r * 1.35, 0, Math.PI * 2);
        ctx!.fill();
        if (nebula.shape === "helix") {
          ctx!.rotate(0.6);
          ctx!.scale(0.86, 0.86);
          ctx!.globalAlpha = 0.7;
          ctx!.beginPath();
          ctx!.arc(0, 0, r * 1.15, 0, Math.PI * 2);
          ctx!.fill();
        }
        const core = ctx!.createRadialGradient(0, 0, 0, 0, 0, r * 0.22);
        core.addColorStop(0, "rgba(255,255,255,0.9)");
        core.addColorStop(0.4, rgba(c1, 0.5));
        core.addColorStop(1, "rgba(0,0,0,0)");
        ctx!.fillStyle = core;
        ctx!.beginPath();
        ctx!.arc(0, 0, r * 0.22, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.restore();
      }

      if (nebula.shape === "bipolar") {
        for (const side of [-1, 1]) {
          ctx!.save();
          ctx!.translate(cx + side * w * 0.12, cy);
          ctx!.rotate(side * 0.35);
          const lobe = ctx!.createRadialGradient(0, 0, 0, 0, 0, Math.min(w, h) * 0.32);
          lobe.addColorStop(0, rgba(c1, 0.45));
          lobe.addColorStop(0.45, rgba(c0, 0.28));
          lobe.addColorStop(1, rgba(c0, 0));
          ctx!.fillStyle = lobe;
          ctx!.beginPath();
          ctx!.ellipse(0, 0, Math.min(w, h) * 0.28, Math.min(w, h) * 0.16, 0, 0, Math.PI * 2);
          ctx!.fill();
          ctx!.restore();
        }
        const core = ctx!.createRadialGradient(cx, cy, 0, cx, cy, 16);
        core.addColorStop(0, "#fff");
        core.addColorStop(1, "rgba(0,0,0,0)");
        ctx!.fillStyle = core;
        ctx!.beginPath();
        ctx!.arc(cx, cy, 16, 0, Math.PI * 2);
        ctx!.fill();
      }

      if (nebula.shape === "pillars") {
        for (let i = 0; i < 3; i++) {
          const px = w * (0.38 + i * 0.1);
          const py = h * 0.72;
          const ph = h * (0.28 + i * 0.06) * pulse;
          const pw = w * (0.045 + i * 0.008);
          const g = ctx!.createLinearGradient(px, py, px, py - ph);
          g.addColorStop(0, rgba(c2, 0.15));
          g.addColorStop(0.4, rgba(c0, 0.5));
          g.addColorStop(1, rgba(c1, 0.05));
          ctx!.fillStyle = g;
          ctx!.beginPath();
          ctx!.moveTo(px - pw, py);
          ctx!.bezierCurveTo(px - pw * 1.4, py - ph * 0.5, px + pw * 0.2, py - ph * 0.75, px, py - ph);
          ctx!.bezierCurveTo(px + pw, py - ph * 0.7, px + pw * 1.3, py - ph * 0.4, px + pw, py);
          ctx!.closePath();
          ctx!.fill();
        }
      }

      if (nebula.shape === "silhouette") {
        ctx!.globalCompositeOperation = "source-over";
        for (const b of scene.blobs.slice(0, 8)) {
          const x = b.x * w;
          const y = b.y * h;
          const g = ctx!.createRadialGradient(x, y, 0, x, y, b.rx * Math.min(w, h) * 1.1);
          g.addColorStop(0, rgba(c0, 0.85));
          g.addColorStop(0.6, rgba(c0, 0.4));
          g.addColorStop(1, rgba(c0, 0));
          ctx!.fillStyle = g;
          ctx!.beginPath();
          ctx!.ellipse(x, y, b.rx * w * 0.55, b.ry * h * 0.9, b.rot, 0, Math.PI * 2);
          ctx!.fill();
        }
        if (nebula.slug === "horsehead") {
          ctx!.fillStyle = rgba(c0, 0.92);
          ctx!.beginPath();
          const hx = w * 0.5;
          const hy = h * 0.52;
          ctx!.moveTo(hx, hy + h * 0.22);
          ctx!.bezierCurveTo(hx - w * 0.08, hy + h * 0.05, hx - w * 0.12, hy - h * 0.05, hx - w * 0.02, hy - h * 0.18);
          ctx!.bezierCurveTo(hx + w * 0.02, hy - h * 0.28, hx + w * 0.1, hy - h * 0.18, hx + w * 0.06, hy - h * 0.04);
          ctx!.bezierCurveTo(hx + w * 0.14, hy + h * 0.02, hx + w * 0.04, hy + h * 0.16, hx, hy + h * 0.22);
          ctx!.fill();
        }
      }
    }

    function frame(now: number) {
      if (!running) return;
      t = now;
      frameN += 1;
      if (!reduced && frameN % skip !== 0) {
        if (visible) raf = requestAnimationFrame(frame);
        return;
      }
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.clearRect(0, 0, w, h);
      ctx!.fillStyle = "#07070a";
      ctx!.fillRect(0, 0, w, h);

      ctx!.globalCompositeOperation = nebula.kind === "dark" ? "source-over" : "screen";
      for (const b of scene.blobs) blob(b, t);

      ctx!.globalCompositeOperation = "screen";
      for (const f of scene.filaments) {
        const wob = reduced ? 0 : Math.sin(t * 0.0005 + f.p) * 0.12;
        const x = f.x * w;
        const y = f.y * h;
        const ang = f.ang + wob;
        const len = f.len * Math.min(w, h);
        ctx!.strokeStyle = rgba(f.c, 0.45);
        ctx!.lineWidth = f.w;
        ctx!.lineCap = "round";
        ctx!.beginPath();
        ctx!.moveTo(x, y);
        ctx!.quadraticCurveTo(
          x + Math.cos(ang + 0.6) * len * 0.5,
          y + Math.sin(ang + 0.6) * len * 0.5,
          x + Math.cos(ang) * len,
          y + Math.sin(ang) * len,
        );
        ctx!.stroke();
      }

      drawStructure(t);

      ctx!.globalCompositeOperation = nebula.kind === "dark" ? "source-over" : "screen";
      const [dust] = nebula.colors;
      for (const s of scene.specks) {
        const dx = reduced ? 0 : Math.sin(t * 0.0003 + s.p) * 6;
        ctx!.fillStyle = rgba(dust, s.a);
        ctx!.beginPath();
        ctx!.arc(s.x * w + dx, s.y * h, s.r, 0, Math.PI * 2);
        ctx!.fill();
      }

      ctx!.globalCompositeOperation = "source-over";
      for (const s of scene.stars) {
        const tw = reduced ? 1 : 0.55 + 0.45 * Math.sin(s.tw + t * 0.002);
        ctx!.fillStyle = `rgba(236,236,241,${s.a * tw})`;
        ctx!.beginPath();
        ctx!.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2);
        ctx!.fill();
      }

      if (!reduced && visible) raf = requestAnimationFrame(frame);
    }

    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) frame(0);
    });
    ro.observe(wrap);

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
        if (visible && !reduced) {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(frame);
        }
      },
      { threshold: 0.05 },
    );
    io.observe(wrap);

    resize();
    raf = requestAnimationFrame(frame);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [nebula, variant, live]);

  const [c0, c1] = nebula.colors;

  return (
    <div
      ref={wrapRef}
      className={cn(
        "relative overflow-hidden bg-bg",
        variant === "hero" && "aspect-video w-full rounded-xl shadow-border",
        variant === "card" && "aspect-video w-full",
        variant === "thumb" && "aspect-square w-full rounded-md",
        className,
      )}
      style={{
        background: `radial-gradient(ellipse at 48% 46%, ${c0}66, ${c1}24, var(--color-bg) 72%)`,
      }}
      aria-hidden="true"
    >
      {live ? <canvas ref={canvasRef} className="absolute inset-0 size-full" /> : null}
    </div>
  );
}
