import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-shell";
import { StarOrb } from "@/components/star-orb";
import {
  CONSTELLATIONS,
  STAR_BY_SLUG,
  constellationStarCount,
} from "@/data/catalog";

export const Route = createFileRoute("/constellations/")({
  component: ConstellationsPage,
});

function ConstellationsPage() {
  return (
    <>
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
          Figures
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
          Constellations
        </h1>
        <p className="mt-3 max-w-2xl text-muted">
          Eighty-eight official figures tile the sphere. This atlas keeps the ones
          that hold its stars — myth, genitive, and the lucida of each. Click a
          figure to open it.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONSTELLATIONS.map((c) => {
            const n = constellationStarCount(c.slug);
            const lucida = STAR_BY_SLUG[c.brightest];
            return (
              <Link
                key={c.slug}
                to="/constellations/$slug"
                params={{ slug: c.slug }}
                className="rounded-xl bg-bg-elevated/80 p-5 shadow-border transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-border-hover"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">
                      {c.abbreviation} ·{" "}
                      {c.hemisphere === "N"
                        ? "North"
                        : c.hemisphere === "S"
                          ? "South"
                          : "Equatorial"}
                    </p>
                    <h2 className="mt-1 font-display text-2xl tracking-tight">{c.name}</h2>
                    <p className="text-sm text-muted">{c.meaning}</p>
                  </div>
                  {lucida ? <StarOrb spectral={lucida.spectralClass} size="md" /> : null}
                </div>
                <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted">{c.lore}</p>
                <p className="mt-4 font-mono text-xs text-subtle">
                  {n} {n === 1 ? "star" : "stars"} · {c.genitive}
                </p>
              </Link>
            );
          })}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
