import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { formatAu, formatPeriod, PLANET_HEX } from "@/data/planet-catalog";
import type { Planet } from "@/data/types";

function orbitR(au: number, maxAu: number, maxR: number) {
  const span = Math.max(maxAu, 0.05);
  return Math.round(28 + Math.sqrt(Math.min(au, span) / span) * (maxR - 40));
}

export function SystemOrbits({
  planets,
  highlight,
}: {
  planets: Planet[];
  highlight?: string;
}) {
  const navigate = useNavigate();
  const [hover, setHover] = useState<string | null>(null);
  if (planets.length === 0) return null;

  const width = 1100;
  const height = 360;
  const cx = width / 2;
  const cy = height / 2;
  const maxR = Math.min(cx, cy) - 10;
  const maxAu = Math.max(...planets.map((p) => p.au));
  const hoverWorld = planets.find((p) => p.slug === (hover ?? highlight));
  const host = planets[0]?.hostName ?? "Host";

  return (
    <div className="relative overflow-hidden rounded-xl bg-bg-elevated/70 shadow-border">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full"
        role="img"
        aria-label={`Orbits around ${host}`}
      >
        <rect width={width} height={height} fill="#07070a" />
        <circle cx={cx} cy={cy} r={8} fill="#fff4ea" />
        <circle cx={cx} cy={cy} r={16} fill="#fff4ea" opacity={0.16} />
        {planets.map((p) => {
          const r = orbitR(p.au, maxAu, maxR);
          const period = Math.max(10, Math.sqrt(p.periodDays) * 1.6);
          const size =
            p.kind === "gas-giant" || p.kind === "hot-jupiter"
              ? 8
              : p.kind === "ice-giant" || p.kind === "mini-neptune"
                ? 6.5
                : p.kind === "dwarf"
                  ? 3.2
                  : 5;
          const active = hover === p.slug || highlight === p.slug;
          return (
            <g key={p.slug}>
              <circle
                cx={cx}
                cy={cy}
                r={r}
                fill="none"
                stroke={highlight === p.slug ? "rgba(236,236,241,0.28)" : "rgba(236,236,241,0.1)"}
                strokeWidth={highlight === p.slug ? 1.6 : 1}
              />
              <g
                className="orbit-spin"
                style={{
                  animationDuration: `${period}s`,
                  transformOrigin: `${cx}px ${cy}px`,
                }}
              >
                <circle
                  cx={cx + r}
                  cy={cy}
                  r={active ? size + 2 : size}
                  fill={PLANET_HEX[p.palette]}
                  className="cursor-pointer"
                  onMouseEnter={() => setHover(p.slug)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() =>
                    navigate({ to: "/planet/$slug", params: { slug: p.slug } })
                  }
                />
              </g>
            </g>
          );
        })}
      </svg>
      {hoverWorld ? (
        <div className="pointer-events-none absolute bottom-4 left-4 rounded-md bg-bg/90 px-3 py-2 text-sm shadow-panel">
          <p className="font-display text-base text-fg">{hoverWorld.name}</p>
          <p className="font-mono text-xs text-muted">
            {formatAu(hoverWorld.au)} · {formatPeriod(hoverWorld.periodDays)}
          </p>
        </div>
      ) : (
        <p className="pointer-events-none absolute bottom-4 left-4 font-mono text-xs text-subtle">
          {host}
        </p>
      )}
    </div>
  );
}
