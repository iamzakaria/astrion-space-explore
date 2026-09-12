import { useNavigate } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";
import {
  CONSTELLATION_LINES,
  SPECTRAL_HEX,
  STARS,
  formatMag,
} from "@/data/catalog";
import { NEBULAE } from "@/data/nebula-catalog";
import type { Star } from "@/data/types";

function project(ra: number, dec: number, w: number, h: number) {
  const padX = 28;
  const padY = 28;
  const x = padX + (1 - ra / 24) * (w - padX * 2);
  const y = padY + ((90 - dec) / 180) * (h - padY * 2);
  return { x, y };
}

function magRadius(mag: number) {
  if (mag < -1) return 7;
  if (mag < 0) return 5.5;
  if (mag < 1) return 4.4;
  if (mag < 2) return 3.4;
  if (mag < 3) return 2.6;
  if (mag < 6) return 1.8;
  return 1.2;
}

function nebulaRadius(arcmin: number) {
  return Math.min(34, Math.max(7, Math.sqrt(Math.max(arcmin, 1)) * 1.5));
}

export function SkyMap() {
  const navigate = useNavigate();
  const [limit, setLimit] = useState(6);
  const [linesOn, setLinesOn] = useState(true);
  const [labelsOn, setLabelsOn] = useState(true);
  const [cloudsOn, setCloudsOn] = useState(true);
  const [hover, setHover] = useState<string | null>(null);
  const [hoverNeb, setHoverNeb] = useState<string | null>(null);

  const width = 1100;
  const height = 620;

  const visible = useMemo(
    () => STARS.filter((s) => s.slug !== "sun" && s.apparentMag <= limit),
    [limit],
  );

  const bySlug = useMemo(() => {
    const m = new Map<string, Star>();
    for (const s of visible) m.set(s.slug, s);
    return m;
  }, [visible]);

  const hoverStar = hover ? visible.find((s) => s.slug === hover) : undefined;
  const hoverCloud = hoverNeb ? NEBULAE.find((n) => n.slug === hoverNeb) : undefined;

  return (
    <div>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex items-center gap-3 text-sm text-muted">
          Magnitude ≤
          <input
            type="range"
            min={1}
            max={17}
            step={1}
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
            className="w-40 accent-accent"
          />
          <span className="font-mono text-fg tabular">{limit}</span>
        </label>
        <div className="flex flex-wrap gap-2">
          <Toggle pressed={cloudsOn} onPressed={() => setCloudsOn((v) => !v)}>
            Clouds
          </Toggle>
          <Toggle pressed={linesOn} onPressed={() => setLinesOn((v) => !v)}>
            Figures
          </Toggle>
          <Toggle pressed={labelsOn} onPressed={() => setLabelsOn((v) => !v)}>
            Labels
          </Toggle>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-xl bg-bg-elevated/70 shadow-border">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="h-auto w-full"
          role="img"
          aria-label="Equirectangular map of catalog stars and nebulae"
        >
          <rect width={width} height={height} fill="#07070a" />
          {[-60, -30, 0, 30, 60].map((dec) => {
            const y = 28 + ((90 - dec) / 180) * (height - 56);
            return (
              <g key={dec}>
                <line
                  x1={28}
                  x2={width - 28}
                  y1={y}
                  y2={y}
                  stroke="rgba(236,236,241,0.06)"
                />
                <text
                  x={8}
                  y={y + 3}
                  fill="rgba(236,236,241,0.28)"
                  fontSize={10}
                  fontFamily="IBM Plex Mono, monospace"
                >
                  {dec > 0 ? `+${dec}` : dec}°
                </text>
              </g>
            );
          })}
          {[0, 6, 12, 18].map((ra) => {
            const x = 28 + (1 - ra / 24) * (width - 56);
            return (
              <g key={ra}>
                <line
                  y1={28}
                  y2={height - 28}
                  x1={x}
                  x2={x}
                  stroke="rgba(236,236,241,0.06)"
                />
                <text
                  x={x + 4}
                  y={height - 10}
                  fill="rgba(236,236,241,0.28)"
                  fontSize={10}
                  fontFamily="IBM Plex Mono, monospace"
                >
                  {ra}h
                </text>
              </g>
            );
          })}

          {cloudsOn
            ? NEBULAE.map((n) => {
                const { x, y } = project(n.ra, n.dec, width, height);
                const r = nebulaRadius(n.angularArcmin);
                const active = hoverNeb === n.slug;
                return (
                  <g
                    key={`n-${n.slug}`}
                    className="cursor-pointer"
                    onMouseEnter={() => setHoverNeb(n.slug)}
                    onMouseLeave={() => setHoverNeb(null)}
                    onClick={() =>
                      navigate({ to: "/nebula/$slug", params: { slug: n.slug } })
                    }
                  >
                    <ellipse
                      cx={x}
                      cy={y}
                      rx={r * 1.45}
                      ry={r * 0.82}
                      fill={n.colors[0]}
                      opacity={active ? 0.32 : 0.16}
                    />
                    <ellipse
                      cx={x}
                      cy={y}
                      rx={r * 0.72}
                      ry={r * 0.42}
                      fill={n.colors[1]}
                      opacity={active ? 0.28 : 0.12}
                    />
                  </g>
                );
              })
            : null}

          {linesOn
            ? Object.values(CONSTELLATION_LINES).flatMap((pairs) =>
                pairs.map(([a, b]) => {
                  const sa = bySlug.get(a);
                  const sb = bySlug.get(b);
                  if (!sa || !sb) return null;
                  const pa = project(sa.ra, sa.dec, width, height);
                  const pb = project(sb.ra, sb.dec, width, height);
                  return (
                    <line
                      key={`${a}-${b}`}
                      x1={pa.x}
                      y1={pa.y}
                      x2={pb.x}
                      y2={pb.y}
                      stroke="rgba(197,206,216,0.22)"
                      strokeWidth={1}
                    />
                  );
                }),
              )
            : null}

          {visible.map((star) => {
            const { x, y } = project(star.ra, star.dec, width, height);
            const r = magRadius(star.apparentMag);
            const color = SPECTRAL_HEX[star.spectralClass];
            const active = hover === star.slug;
            return (
              <g
                key={star.slug}
                className="cursor-pointer"
                onMouseEnter={() => setHover(star.slug)}
                onMouseLeave={() => setHover(null)}
                onClick={() =>
                  navigate({ to: "/star/$slug", params: { slug: star.slug } })
                }
              >
                <circle cx={x} cy={y} r={r * 3} fill={color} opacity={active ? 0.28 : 0.08} />
                <circle cx={x} cy={y} r={r} fill={color} />
                {labelsOn && star.apparentMag < 1.6 ? (
                  <text
                    x={x + r + 4}
                    y={y + 3}
                    fill="rgba(236,236,241,0.72)"
                    fontSize={11}
                    fontFamily="Outfit, sans-serif"
                  >
                    {star.name}
                  </text>
                ) : null}
              </g>
            );
          })}

          {linesOn
            ? [...new Map(
                visible
                  .filter((s) => s.constellation && s.constellationName)
                  .map((s) => [s.constellation, s] as const),
              ).values()].map((s) => {
                const members = visible.filter((m) => m.constellation === s.constellation);
                const pts = members.map((m) => project(m.ra, m.dec, width, height));
                const x = pts.reduce((a, p) => a + p.x, 0) / pts.length;
                const y = pts.reduce((a, p) => a + p.y, 0) / pts.length - 16;
                return (
                  <text
                    key={`fig-${s.constellation}`}
                    x={x}
                    y={y}
                    textAnchor="middle"
                    fill="rgba(197,206,216,0.45)"
                    fontSize={11}
                    fontFamily="IBM Plex Mono, monospace"
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (s.constellation) {
                        navigate({
                          to: "/constellations/$slug",
                          params: { slug: s.constellation },
                        });
                      }
                    }}
                  >
                    {s.constellationName}
                  </text>
                );
              })
            : null}
        </svg>

        {hoverCloud ? (
          <div className="pointer-events-none absolute bottom-4 left-4 rounded-md bg-bg/90 px-3 py-2 text-sm shadow-panel">
            <p className="font-display text-base text-fg">{hoverCloud.name}</p>
            <p className="font-mono text-xs text-muted">
              {hoverCloud.designation} · nebula
            </p>
          </div>
        ) : hoverStar ? (
          <div className="pointer-events-none absolute bottom-4 left-4 rounded-md bg-bg/90 px-3 py-2 text-sm shadow-panel">
            <p className="font-display text-base text-fg">{hoverStar.name}</p>
            <p className="font-mono text-xs text-muted">
              {hoverStar.spectralType} · {formatMag(hoverStar.apparentMag)}
            </p>
          </div>
        ) : (
          <p className="pointer-events-none absolute bottom-4 left-4 text-xs text-subtle">
            Equirectangular · RA leftward · click a star or a cloud
          </p>
        )}
      </div>
    </div>
  );
}

function Toggle({
  pressed,
  onPressed,
  children,
}: {
  pressed: boolean;
  onPressed: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onPressed}
      className={
        pressed
          ? "h-11 rounded-full bg-accent px-4 text-sm text-accent-fg"
          : "h-11 rounded-full bg-bg-elevated px-4 text-sm text-muted shadow-border hover:text-fg"
      }
    >
      {children}
    </button>
  );
}
