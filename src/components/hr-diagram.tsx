import { useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SPECTRAL_HEX, STARS } from "@/data/catalog";
import type { Star } from "@/data/types";

function round(n: number) {
  return Math.round(n * 10) / 10;
}

function xOf(temp: number, w: number) {
  const minT = Math.log10(2200);
  const maxT = Math.log10(52000);
  const t = Math.min(Math.max(Math.log10(temp), minT), maxT);
  return round(48 + ((maxT - t) / (maxT - minT)) * (w - 80));
}

function yOf(lum: number, h: number) {
  const minL = Math.log10(0.0001);
  const maxL = Math.log10(8_000_000);
  const l = Math.min(Math.max(Math.log10(Math.max(lum, 0.00005)), minL), maxL);
  return round(20 + ((maxL - l) / (maxL - minL)) * (h - 56));
}

export function HrDiagram() {
  const navigate = useNavigate();
  const [hover, setHover] = useState<string | null>(null);
  const width = 920;
  const height = 560;

  const hoverStar = useMemo(
    () => STARS.find((s) => s.slug === hover),
    [hover],
  );

  return (
    <div className="relative overflow-hidden rounded-xl bg-bg-elevated/70 shadow-[var(--shadow-border)]">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full"
        role="img"
        aria-label="Hertzsprung–Russell diagram of the catalog"
      >
        <rect width={width} height={height} fill="#0b0b10" />
        <text
          x={width / 2}
          y={18}
          textAnchor="middle"
          fill="rgba(236,236,241,0.4)"
          fontSize={11}
          fontFamily="IBM Plex Mono, monospace"
        >
          Temperature → cooler
        </text>
        <text
          x={16}
          y={height / 2}
          fill="rgba(236,236,241,0.4)"
          fontSize={11}
          fontFamily="IBM Plex Mono, monospace"
          transform={`rotate(-90 16 ${height / 2})`}
        >
          Luminosity (L☉)
        </text>

        {[40000, 10000, 6000, 4000, 3000].map((k) => {
          const x = xOf(k, width);
          return (
            <g key={k}>
              <line x1={x} y1={24} x2={x} y2={height - 36} stroke="rgba(236,236,241,0.06)" />
              <text
                x={x}
                y={height - 16}
                textAnchor="middle"
                fill="rgba(236,236,241,0.35)"
                fontSize={10}
                fontFamily="IBM Plex Mono, monospace"
              >
                {k >= 1000 ? `${k / 1000}k` : k}K
              </text>
            </g>
          );
        })}

        {[0.001, 1, 1000, 100000].map((l) => {
          const y = yOf(l, height);
          return (
            <g key={l}>
              <line x1={48} y1={y} x2={width - 24} y2={y} stroke="rgba(236,236,241,0.06)" />
              <text
                x={44}
                y={y + 3}
                textAnchor="end"
                fill="rgba(236,236,241,0.35)"
                fontSize={10}
                fontFamily="IBM Plex Mono, monospace"
              >
                {l >= 1 ? l.toLocaleString() : l}
              </text>
            </g>
          );
        })}

        {STARS.map((star) => {
          const x = xOf(star.temperatureK, width);
          const y = yOf(star.luminositySun, height);
          const r = star.kind === "neutron-star" ? 3.2 : star.radiusSun > 100 ? 6 : star.radiusSun > 10 ? 4.5 : 3.2;
          const active = hover === star.slug;
          return (
            <circle
              key={star.slug}
              cx={x}
              cy={y}
              r={active ? r + 2 : r}
              fill={SPECTRAL_HEX[star.spectralClass]}
              opacity={active ? 1 : 0.88}
              className="cursor-pointer"
              onMouseEnter={() => setHover(star.slug)}
              onMouseLeave={() => setHover(null)}
              onClick={() =>
                navigate({ to: "/star/$slug", params: { slug: star.slug } })
              }
            />
          );
        })}
      </svg>
      <HoverCard star={hoverStar} />
    </div>
  );
}

function HoverCard({ star }: { star: Star | undefined }) {
  if (!star) {
    return (
      <p className="pointer-events-none absolute bottom-4 left-4 text-xs text-subtle">
        Hot stars left · luminous stars up · click any point
      </p>
    );
  }
  return (
    <div className="pointer-events-none absolute bottom-4 left-4 rounded-md bg-bg/90 px-3 py-2 text-sm shadow-[var(--shadow-panel)]">
      <p className="font-display text-base text-fg">{star.name}</p>
      <p className="font-mono text-xs text-muted">
        {star.spectralType} · {star.temperatureK.toLocaleString()} K · {star.luminositySun.toLocaleString()} L☉
      </p>
    </div>
  );
}
