import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { CONSTELLATION_LINES, SPECTRAL_HEX, formatMag } from "@/data/catalog";
import type { Star } from "@/data/types";

function wrapRa(stars: Star[]): { star: Star; ra: number }[] {
  const ras = stars.map((s) => s.ra);
  const span = Math.max(...ras) - Math.min(...ras);
  const shift = span > 12;
  return stars.map((star) => ({
    star,
    ra: shift && star.ra < 12 ? star.ra + 24 : star.ra,
  }));
}

export function ConstellationFigure({
  slug,
  stars,
  lucida,
}: {
  slug: string;
  stars: Star[];
  lucida?: string;
}) {
  const navigate = useNavigate();
  const [hover, setHover] = useState<string | null>(null);
  if (stars.length === 0) return null;

  const width = 1100;
  const height = 420;
  const pad = 48;
  const wrapped = wrapRa(stars);
  const ras = wrapped.map((w) => w.ra);
  const decs = stars.map((s) => s.dec);
  const minRa = Math.min(...ras);
  const maxRa = Math.max(...ras);
  const minDec = Math.min(...decs);
  const maxDec = Math.max(...decs);
  const raPad = Math.max((maxRa - minRa) * 0.18, 0.4);
  const decPad = Math.max((maxDec - minDec) * 0.22, 2);
  const ra0 = minRa - raPad;
  const ra1 = maxRa + raPad;
  const dec0 = minDec - decPad;
  const dec1 = maxDec + decPad;

  function xy(ra: number, dec: number) {
    const x = Math.round(pad + (1 - (ra - ra0) / (ra1 - ra0)) * (width - pad * 2));
    const y = Math.round(pad + ((dec1 - dec) / (dec1 - dec0)) * (height - pad * 2));
    return { x, y };
  }

  const bySlug = new Map(wrapped.map((w) => [w.star.slug, w]));
  const lines = CONSTELLATION_LINES[slug] ?? [];
  const hoverStar = stars.find((s) => s.slug === hover);

  return (
    <div className="relative overflow-hidden rounded-xl bg-bg-elevated/70 shadow-border">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full"
        role="img"
        aria-label={`Figure of the constellation`}
      >
        <rect width={width} height={height} fill="var(--color-bg)" />
        {lines.map(([a, b]) => {
          const sa = bySlug.get(a);
          const sb = bySlug.get(b);
          if (!sa || !sb) return null;
          const pa = xy(sa.ra, sa.star.dec);
          const pb = xy(sb.ra, sb.star.dec);
          return (
            <line
              key={`${a}-${b}`}
              x1={pa.x}
              y1={pa.y}
              x2={pb.x}
              y2={pb.y}
              stroke="color-mix(in oklab, var(--color-fg) 22%, transparent)"
              strokeWidth={1.2}
            />
          );
        })}
        {wrapped.map(({ star, ra }) => {
          const { x, y } = xy(ra, star.dec);
          const active = hover === star.slug || lucida === star.slug;
          const r = star.apparentMag < 1 ? 6 : star.apparentMag < 2 ? 4.5 : star.apparentMag < 4 ? 3.2 : 2.2;
          return (
            <g
              key={star.slug}
              className="cursor-pointer"
              onMouseEnter={() => setHover(star.slug)}
              onMouseLeave={() => setHover(null)}
              onClick={() => navigate({ to: "/star/$slug", params: { slug: star.slug } })}
            >
              <circle
                cx={x}
                cy={y}
                r={r * 2.4}
                fill={SPECTRAL_HEX[star.spectralClass]}
                opacity={active ? 0.35 : 0.1}
              />
              <circle cx={x} cy={y} r={active ? r + 1.2 : r} fill={SPECTRAL_HEX[star.spectralClass]} />
              {hover === star.slug || lucida === star.slug ? (
                <text
                  x={x + r + 6}
                  y={y + 4}
                  fill="color-mix(in oklab, var(--color-fg) 75%, transparent)"
                  fontSize={13}
                  fontFamily="Outfit, sans-serif"
                >
                  {star.name}
                </text>
              ) : null}
            </g>
          );
        })}
      </svg>
      {hoverStar ? (
        <div className="pointer-events-none absolute bottom-4 left-4 rounded-md bg-bg/90 px-3 py-2 text-sm shadow-panel">
          <p className="font-display text-base text-fg">{hoverStar.name}</p>
          <p className="font-mono text-xs text-muted">
            {hoverStar.spectralType} · {formatMag(hoverStar.apparentMag)}
          </p>
        </div>
      ) : (
        <p className="pointer-events-none absolute bottom-4 left-4 font-mono text-xs text-subtle">
          Click a star
        </p>
      )}
    </div>
  );
}
