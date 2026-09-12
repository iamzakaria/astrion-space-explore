import { useEffect, useRef } from "react";
import { SPECTRAL_HEX } from "@/data/catalog";
import { PLANET_HEX } from "@/data/planets";

interface Particle {
  x: number;
  y: number;
  z: number;
  r: number;
  a: number;
  tw: number;
  tws: number;
  c: string;
}

interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  max: number;
}

interface SkyWorld {
  xf: number;
  yf: number;
  r: number;
  z: number;
  hex: string;
  bands: boolean;
  rings: boolean;
  phase: number;
}

const COLORS = [
  SPECTRAL_HEX.A,
  SPECTRAL_HEX.B,
  SPECTRAL_HEX.F,
  SPECTRAL_HEX.G,
  "#ffffff",
  SPECTRAL_HEX.K,
];

const SKY_CLOUDS = [
  { xf: 0.2, yf: 0.36, rx: 0.22, ry: 0.12, rot: -0.5, c: "#ff5b7a", a: 0.07, p: 0.4 },
  { xf: 0.74, yf: 0.26, rx: 0.18, ry: 0.14, rot: 0.55, c: "#7eb6ff", a: 0.06, p: 1.7 },
  { xf: 0.58, yf: 0.72, rx: 0.16, ry: 0.09, rot: 0.2, c: "#5ad0c8", a: 0.055, p: 2.8 },
];

const SKY_WORLDS: Omit<SkyWorld, "phase">[] = [
  { xf: 0.93, yf: 0.16, r: 32, z: 0.2, hex: PLANET_HEX.jupiter, bands: true, rings: false },
  { xf: 0.9, yf: 0.84, r: 28, z: 0.16, hex: PLANET_HEX.saturn, bands: true, rings: true },
  { xf: 0.07, yf: 0.8, r: 16, z: 0.4, hex: PLANET_HEX.earth, bands: false, rings: false },
  { xf: 0.08, yf: 0.14, r: 10, z: 0.52, hex: PLANET_HEX.mars, bands: false, rings: false },
  { xf: 0.95, yf: 0.48, r: 13, z: 0.32, hex: PLANET_HEX.neptune, bands: false, rings: false },
];

function prefersReduced(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function shade(hex: string, amt: number): string {
  const n = hex.replace("#", "");
  const r = Math.min(255, Math.max(0, parseInt(n.slice(0, 2), 16) + amt));
  const g = Math.min(255, Math.max(0, parseInt(n.slice(2, 4), 16) + amt));
  const b = Math.min(255, Math.max(0, parseInt(n.slice(4, 6), 16) + amt));
  return `rgb(${r}, ${g}, ${b})`;
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let running = true;
    const reduced = prefersReduced();
    const particles: Particle[] = [];
    const meteors: Meteor[] = [];
    const worlds: SkyWorld[] = SKY_WORLDS.map((w) => ({
      ...w,
      phase: Math.random() * Math.PI * 2,
    }));
    let mouseX = 0;
    let mouseY = 0;
    let parX = 0;
    let parY = 0;
    let lastMeteor = 0;
    let t = 0;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = Math.floor(width * dpr);
      canvas!.height = Math.floor(height * dpr);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      particles.length = 0;
      const count = width < 640 ? 180 : width < 1024 ? 320 : 460;
      for (let i = 0; i < count; i++) {
        const z = Math.random();
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z,
          r: z > 0.92 ? 1.6 + Math.random() * 1.4 : z > 0.7 ? 0.8 + Math.random() * 0.7 : 0.35 + Math.random() * 0.45,
          a: 0.25 + z * 0.75,
          tw: Math.random() * Math.PI * 2,
          tws: 0.004 + Math.random() * 0.012,
          c: COLORS[Math.floor(Math.random() * COLORS.length)] ?? "#ffffff",
        });
      }
    }

    function spawnMeteor() {
      const fromLeft = Math.random() > 0.4;
      meteors.push({
        x: fromLeft ? -20 : Math.random() * width,
        y: fromLeft ? Math.random() * height * 0.45 : -20,
        vx: 6 + Math.random() * 5,
        vy: 3 + Math.random() * 3,
        life: 0,
        max: 55 + Math.random() * 30,
      });
    }

    function drawMilkyWay() {
      ctx!.save();
      ctx!.translate(width * 0.5, height * 0.42);
      ctx!.rotate(-0.42);
      const band = ctx!.createLinearGradient(0, -height * 0.18, 0, height * 0.18);
      band.addColorStop(0, "rgba(180, 196, 220, 0)");
      band.addColorStop(0.5, "rgba(180, 196, 220, 0.045)");
      band.addColorStop(1, "rgba(180, 196, 220, 0)");
      ctx!.fillStyle = band;
      ctx!.fillRect(-width, -height * 0.18, width * 2, height * 0.36);
      ctx!.restore();
    }

    function drawClouds() {
      ctx!.save();
      ctx!.globalCompositeOperation = "screen";
      for (const c of SKY_CLOUDS) {
        const drift = reduced ? 0 : Math.sin(t * 0.00025 + c.p) * 18;
        const x = c.xf * width + parX * 8 + drift;
        const y = c.yf * height + parY * 5;
        const rx = c.rx * width * (width < 640 ? 0.7 : 1);
        const ry = c.ry * height;
        ctx!.save();
        ctx!.translate(x, y);
        ctx!.rotate(c.rot);
        const g = ctx!.createRadialGradient(0, 0, 0, 0, 0, Math.max(rx, ry));
        g.addColorStop(0, c.c);
        g.addColorStop(1, "rgba(7,7,10,0)");
        ctx!.globalAlpha = c.a * (reduced ? 1 : 0.85 + 0.15 * Math.sin(t * 0.0004 + c.p));
        ctx!.fillStyle = g;
        ctx!.beginPath();
        ctx!.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.restore();
      }
      ctx!.restore();
    }

    function drawWorlds() {
      for (const w of worlds) {
        const ox = parX * (6 + w.z * 22);
        const oy = parY * (4 + w.z * 16);
        const drift = reduced ? 0 : Math.sin(t * 0.00035 + w.phase) * 10;
        const x = w.xf * width + ox + drift;
        const y = w.yf * height + oy;
        const r = w.r * (width < 640 ? 0.55 : 1);

        ctx!.save();
        ctx!.globalAlpha = 0.58;

        const glow = ctx!.createRadialGradient(x, y, r * 0.15, x, y, r * 1.7);
        glow.addColorStop(0, shade(w.hex, 10));
        glow.addColorStop(1, "rgba(7,7,10,0)");
        ctx!.fillStyle = glow;
        ctx!.beginPath();
        ctx!.arc(x, y, r * 1.7, 0, Math.PI * 2);
        ctx!.fill();

        if (w.rings) {
          ctx!.save();
          ctx!.translate(x, y);
          ctx!.rotate(-0.32);
          ctx!.scale(1, 0.28);
          ctx!.beginPath();
          ctx!.ellipse(0, 0, r * 1.85, r * 1.85, 0, 0, Math.PI * 2);
          ctx!.strokeStyle = shade(w.hex, 50);
          ctx!.globalAlpha = 0.55;
          ctx!.lineWidth = 4;
          ctx!.stroke();
          ctx!.beginPath();
          ctx!.ellipse(0, 0, r * 1.55, r * 1.55, 0, 0, Math.PI * 2);
          ctx!.lineWidth = 2;
          ctx!.stroke();
          ctx!.restore();
          ctx!.globalAlpha = 0.58;
        }

        const body = ctx!.createRadialGradient(
          x - r * 0.38,
          y - r * 0.42,
          r * 0.06,
          x + r * 0.1,
          y + r * 0.15,
          r,
        );
        body.addColorStop(0, shade(w.hex, 85));
        body.addColorStop(0.42, w.hex);
        body.addColorStop(1, shade(w.hex, -95));
        ctx!.beginPath();
        ctx!.arc(x, y, r, 0, Math.PI * 2);
        ctx!.fillStyle = body;
        ctx!.fill();

        if (w.bands) {
          ctx!.save();
          ctx!.beginPath();
          ctx!.arc(x, y, r, 0, Math.PI * 2);
          ctx!.clip();
          ctx!.globalAlpha = 0.18;
          ctx!.fillStyle = shade(w.hex, -40);
          for (let i = -3; i <= 3; i++) {
            ctx!.fillRect(x - r, y + i * r * 0.28 - r * 0.05, r * 2, r * 0.1);
          }
          ctx!.restore();
        }

        ctx!.restore();
      }
      ctx!.globalAlpha = 1;
    }

    function frame(now: number) {
      if (!running) return;
      t += 1;
      parX += (mouseX - parX) * 0.04;
      parY += (mouseY - parY) * 0.04;

      ctx!.clearRect(0, 0, width, height);
      ctx!.fillStyle = "#07070a";
      ctx!.fillRect(0, 0, width, height);
      drawMilkyWay();
      drawClouds();

      for (const p of particles) {
        const ox = parX * (0.8 + p.z * 14);
        const oy = parY * (0.5 + p.z * 10);
        let x = p.x + ox;
        let y = p.y + oy;
        if (!reduced) {
          x += Math.sin(t * 0.0008 + p.tw) * p.z * 6;
          y += Math.cos(t * 0.0006 + p.tw) * p.z * 4;
        }
        const twinkle = reduced ? 1 : 0.65 + 0.35 * Math.sin(p.tw + t * p.tws);
        ctx!.beginPath();
        ctx!.fillStyle = p.c;
        ctx!.globalAlpha = p.a * twinkle;
        ctx!.arc(x, y, p.r, 0, Math.PI * 2);
        ctx!.fill();
        if (p.r > 1.3) {
          ctx!.globalAlpha = p.a * twinkle * 0.25;
          ctx!.beginPath();
          ctx!.arc(x, y, p.r * 3.4, 0, Math.PI * 2);
          ctx!.fill();
        }
      }
      ctx!.globalAlpha = 1;

      drawWorlds();

      if (!reduced) {
        if (now - lastMeteor > 4200 + Math.random() * 5000) {
          spawnMeteor();
          lastMeteor = now;
        }
        for (let i = meteors.length - 1; i >= 0; i--) {
          const m = meteors[i]!;
          m.x += m.vx;
          m.y += m.vy;
          m.life += 1;
          const fade = 1 - m.life / m.max;
          ctx!.strokeStyle = `rgba(236, 236, 241, ${0.55 * fade})`;
          ctx!.lineWidth = 1.2;
          ctx!.beginPath();
          ctx!.moveTo(m.x, m.y);
          ctx!.lineTo(m.x - m.vx * 8, m.y - m.vy * 8);
          ctx!.stroke();
          if (m.life > m.max || m.x > width + 40 || m.y > height + 40) {
            meteors.splice(i, 1);
          }
        }
      }

      raf = requestAnimationFrame(frame);
    }

    function onMove(e: PointerEvent) {
      mouseX = (e.clientX / width - 0.5) * 2;
      mouseY = (e.clientY / height - 0.5) * 2;
    }

    function onVis() {
      running = document.visibilityState !== "hidden";
      if (running) raf = requestAnimationFrame(frame);
      else cancelAnimationFrame(raf);
    }

    function onResize() {
      resize();
      seed();
    }

    resize();
    seed();
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVis);
    lastMeteor = performance.now();
    raf = requestAnimationFrame(frame);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
