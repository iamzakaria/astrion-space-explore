import { useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PLANET_HEX, SOLAR_PLANETS } from "@/data/planet-catalog";
import { PLANETS } from "@/data/planets";
import type { Planet } from "@/data/types";

function orbitR(au: number, maxR: number) {
  return Math.round(36 + Math.sqrt(Math.min(au, 40) / 40) * (maxR - 48));
}

export function SolarSystem() {
  const navigate = useNavigate();
  const [hover, setHover] = useState<string | null>(null);
  const [showDwarfs, setShowDwarfs] = useState(false);

  const worlds = useMemo(() => {
    const list: Planet[] = [...SOLAR_PLANETS];
    if (showDwarfs) {
      list.push(...PLANETS.filter((p) => p.solar && p.kind === "dwarf"));
    }
    return list;
  }, [showDwarfs]);

  const width = 1100;
  const height = 560;
  const cx = width / 2;
  const cy = height / 2;
  const maxR = Math.min(cx, cy) - 8;
  const hoverWorld = worlds.find((p) => p.slug === hover);

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted">Orbits scaled by square root of distance. Click a world.</p>
        <button
          type="button"
          aria-pressed={showDwarfs}
          onClick={() => setShowDwarfs((v) => !v)}
          className={
            showDwarfs
              ? "h-11 rounded-full bg-accent px-4 text-sm text-accent-fg"
              : "h-11 rounded-full bg-bg-elevated px-4 text-sm text-muted shadow-border hover:text-fg"
          }
        >
          Dwarf planets
        </button>
      </div>
      <div className="relative overflow-hidden rounded-xl bg-bg-elevated/70 shadow-border">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="h-auto w-full"
          role="img"
          aria-label="Solar System orbits"
        >
          <rect width={width} height={height} fill="#07070a" />
          <circle cx={cx} cy={cy} r={10} fill="#fff4ea" />
          <circle cx={cx} cy={cy} r={18} fill="#fff4ea" opacity={0.18} />
          {worlds.map((p) => {
            const r = orbitR(p.au, maxR);
            const period = Math.max(8, Math.sqrt(p.periodDays) * 1.8);
            const size = p.kind === "gas-giant" ? 9 : p.kind === "ice-giant" ? 7 : p.kind === "dwarf" ? 3.4 : 5.2;
            return (
              <g key={p.slug}>
                <circle
                  cx={cx}
                  cy={cy}
                  r={r}
                  fill="none"
                  stroke="rgba(236,236,241,0.1)"
                  strokeWidth={1}
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
                      r={hover === p.slug ? size + 2 : size}
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
              {hoverWorld.au.toFixed(2)} au · {hoverWorld.periodDays < 400
                ? `${Math.round(hoverWorld.periodDays)} d`
                : `${(hoverWorld.periodDays / 365.25).toFixed(1)} yr`}
              {hoverWorld.moons > 0
                ? ` · ${hoverWorld.moons} ${hoverWorld.moons === 1 ? "moon" : "moons"}`
                : ""}
            </p>
          </div>
        ) : (
          <p className="pointer-events-none absolute bottom-4 left-4 font-mono text-xs text-subtle">
            Sol
          </p>
        )}
      </div>
    </div>
  );
}
