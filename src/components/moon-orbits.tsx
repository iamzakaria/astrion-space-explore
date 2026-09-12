import { useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { formatKm, formatMoonPeriod } from "@/data/moon-catalog";
import { PLANET_HEX } from "@/data/planet-catalog";
import type { Moon, Planet } from "@/data/types";

function orbitR(km: number, maxKm: number, maxR: number) {
  const span = Math.max(maxKm, 1);
  return Math.round(36 + Math.sqrt(Math.min(km, span) / span) * (maxR - 48));
}

function moonSize(radiusKm: number) {
  if (radiusKm >= 1500) return 7;
  if (radiusKm >= 500) return 5.4;
  if (radiusKm >= 150) return 4.2;
  if (radiusKm >= 40) return 3.2;
  return 2.4;
}

export function MoonOrbits({
  moons,
  planet,
  highlight,
}: {
  moons: Moon[];
  planet: Planet;
  highlight?: string;
}) {
  const navigate = useNavigate();
  const [hover, setHover] = useState<string | null>(null);
  const [showIrregulars, setShowIrregulars] = useState(false);

  const hasIrregulars = moons.some((m) => m.irregular);
  const visible = useMemo(
    () => (showIrregulars ? moons : moons.filter((m) => !m.irregular)),
    [moons, showIrregulars],
  );

  if (moons.length === 0) return null;

  const width = 1100;
  const height = 360;
  const cx = width / 2;
  const cy = height / 2;
  const maxR = Math.min(cx, cy) - 10;
  const maxKm = Math.max(...visible.map((m) => m.semiMajorKm), 1);
  const hoverMoon = visible.find((m) => m.slug === (hover ?? highlight));
  const planetSize =
    planet.kind === "gas-giant" ? 14 : planet.kind === "ice-giant" ? 11 : planet.kind === "dwarf" ? 7 : 9;

  return (
    <div>
      {hasIrregulars ? (
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted">
            Distances scaled by square root. {showIrregulars ? "Including captured irregulars." : "Regular satellites."}
          </p>
          <button
            type="button"
            aria-pressed={showIrregulars}
            onClick={() => setShowIrregulars((v) => !v)}
            className={
              showIrregulars
                ? "h-11 rounded-full bg-accent px-4 text-sm text-accent-fg"
                : "h-11 rounded-full bg-bg-elevated px-4 text-sm text-muted shadow-border hover:text-fg"
            }
          >
            Irregulars
          </button>
        </div>
      ) : null}
      <div className="relative overflow-hidden rounded-xl bg-bg-elevated/70 shadow-border">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="h-auto w-full"
          role="img"
          aria-label={`Moons of ${planet.name}`}
        >
          <rect width={width} height={height} fill="var(--color-bg)" />
          <circle cx={cx} cy={cy} r={planetSize + 8} fill={PLANET_HEX[planet.palette]} opacity={0.18} />
          <circle cx={cx} cy={cy} r={planetSize} fill={PLANET_HEX[planet.palette]} />
          {visible.map((m) => {
            const r = orbitR(m.semiMajorKm, maxKm, maxR);
            const period = Math.max(8, Math.sqrt(m.periodDays) * 2.2);
            const size = moonSize(m.radiusKm);
            const active = hover === m.slug || highlight === m.slug;
            return (
              <g key={m.slug}>
                <circle
                  cx={cx}
                  cy={cy}
                  r={r}
                  fill="none"
                  stroke={
                    highlight === m.slug
                      ? "color-mix(in oklab, var(--color-fg) 28%, transparent)"
                      : "color-mix(in oklab, var(--color-fg) 10%, transparent)"
                  }
                  strokeWidth={highlight === m.slug ? 1.6 : 1}
                  strokeDasharray={m.retrograde ? "4 4" : undefined}
                />
                <g
                  className="orbit-spin"
                  style={{
                    animationDuration: `${period}s`,
                    animationDirection: m.retrograde ? "reverse" : "normal",
                    transformOrigin: `${cx}px ${cy}px`,
                  }}
                >
                  <circle
                    cx={cx + r}
                    cy={cy}
                    r={active ? size + 1.6 : size}
                    fill={PLANET_HEX[m.palette]}
                    className="cursor-pointer"
                    onMouseEnter={() => setHover(m.slug)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => navigate({ to: "/moon/$slug", params: { slug: m.slug } })}
                  />
                </g>
              </g>
            );
          })}
        </svg>
        {hoverMoon ? (
          <div className="pointer-events-none absolute bottom-4 left-4 rounded-md bg-bg/90 px-3 py-2 text-sm shadow-panel">
            <p className="font-display text-base text-fg">{hoverMoon.name}</p>
            <p className="font-mono text-xs text-muted">
              {formatKm(hoverMoon.semiMajorKm)} · {formatMoonPeriod(hoverMoon.periodDays)}
              {hoverMoon.retrograde ? " · retrograde" : ""}
            </p>
          </div>
        ) : (
          <p className="pointer-events-none absolute bottom-4 left-4 font-mono text-xs text-subtle">
            {planet.name}
          </p>
        )}
      </div>
    </div>
  );
}
