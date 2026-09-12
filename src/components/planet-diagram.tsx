import { useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PLANET_KIND_HEX, PLANET_KIND_LABEL, PLANETS } from "@/data/planet-catalog";
import type { Planet } from "@/data/types";

function round(n: number) {
  return Math.round(n * 10) / 10;
}

function xOf(mass: number, w: number) {
  const minM = Math.log10(0.0001);
  const maxM = Math.log10(5000);
  const m = Math.min(Math.max(Math.log10(Math.max(mass, 0.00008)), minM), maxM);
  return round(52 + ((m - minM) / (maxM - minM)) * (w - 84));
}

function yOf(radius: number, h: number) {
  const minR = Math.log10(0.05);
  const maxR = Math.log10(28);
  const r = Math.min(Math.max(Math.log10(Math.max(radius, 0.04)), minR), maxR);
  return round(24 + ((maxR - r) / (maxR - minR)) * (h - 60));
}

export function PlanetDiagram() {
  const navigate = useNavigate();
  const [hover, setHover] = useState<string | null>(null);
  const width = 920;
  const height = 520;
  const hoverPlanet = useMemo(
    () => PLANETS.find((p) => p.slug === hover),
    [hover],
  );

  return (
    <div className="relative overflow-hidden rounded-xl bg-bg-elevated/70 shadow-border">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full"
        role="img"
        aria-label="Mass–radius diagram of the planet catalog"
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
          Mass (M⊕) →
        </text>
        <text
          x={16}
          y={height / 2}
          fill="rgba(236,236,241,0.4)"
          fontSize={11}
          fontFamily="IBM Plex Mono, monospace"
          transform={`rotate(-90 16 ${height / 2})`}
        >
          Radius (R⊕)
        </text>

        {[0.001, 0.1, 1, 10, 100, 1000].map((m) => {
          const x = xOf(m, width);
          return (
            <g key={m}>
              <line x1={x} y1={28} x2={x} y2={height - 36} stroke="rgba(236,236,241,0.06)" />
              <text
                x={x}
                y={height - 16}
                textAnchor="middle"
                fill="rgba(236,236,241,0.35)"
                fontSize={10}
                fontFamily="IBM Plex Mono, monospace"
              >
                {m >= 1 ? m.toLocaleString() : m}
              </text>
            </g>
          );
        })}

        {[0.1, 1, 4, 11].map((r) => {
          const y = yOf(r, height);
          return (
            <g key={r}>
              <line x1={52} y1={y} x2={width - 24} y2={y} stroke="rgba(236,236,241,0.06)" />
              <text
                x={48}
                y={y + 3}
                textAnchor="end"
                fill="rgba(236,236,241,0.35)"
                fontSize={10}
                fontFamily="IBM Plex Mono, monospace"
              >
                {r}
              </text>
            </g>
          );
        })}

        {PLANETS.map((planet) => {
          const x = xOf(planet.massEarth, width);
          const y = yOf(planet.radiusEarth, height);
          const active = hover === planet.slug;
          const rad =
            planet.kind === "dwarf" ? 3.2 : planet.kind === "hot-jupiter" || planet.kind === "gas-giant" ? 5.4 : 4;
          return (
            <circle
              key={planet.slug}
              cx={x}
              cy={y}
              r={active ? rad + 2 : rad}
              fill={PLANET_KIND_HEX[planet.kind]}
              opacity={active ? 1 : 0.88}
              className="cursor-pointer"
              onMouseEnter={() => setHover(planet.slug)}
              onMouseLeave={() => setHover(null)}
              onClick={() =>
                navigate({ to: "/planet/$slug", params: { slug: planet.slug } })
              }
            />
          );
        })}
      </svg>
      <HoverCard planet={hoverPlanet} />
    </div>
  );
}

function HoverCard({ planet }: { planet: Planet | undefined }) {
  if (!planet) {
    return (
      <p className="pointer-events-none absolute bottom-4 left-4 text-xs text-subtle">
        Rock lower-left · giants upper-right · click any world
      </p>
    );
  }
  return (
    <div className="pointer-events-none absolute bottom-4 left-4 rounded-md bg-bg/90 px-3 py-2 text-sm shadow-panel">
      <p className="font-display text-base text-fg">{planet.name}</p>
      <p className="font-mono text-xs text-muted">
        {PLANET_KIND_LABEL[planet.kind]} · {planet.massEarth >= 10 ? planet.massEarth.toFixed(0) : planet.massEarth} M⊕ ·{" "}
        {planet.radiusEarth.toFixed(2)} R⊕
      </p>
    </div>
  );
}
