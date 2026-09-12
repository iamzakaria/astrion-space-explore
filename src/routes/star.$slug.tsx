import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Bookmark } from "lucide-react";
import { PlanetCard } from "@/components/planet-card";
import { NebulaCard } from "@/components/nebula-card";
import { SiteFooter } from "@/components/site-shell";
import { StarCard } from "@/components/star-card";
import { StarPortrait } from "@/components/star-portrait";
import { SystemOrbits } from "@/components/system-orbits";
import { Button } from "@/components/ui/button";
import {
  KIND_LABEL,
  NOTABLE_LABEL,
  SPECTRAL_TEXT,
  formatDec,
  formatLy,
  formatMag,
  formatRa,
  formatSolar,
  formatTemp,
  getStar,
  relatedStars,
} from "@/data/catalog";
import { planetsForStar } from "@/data/planet-catalog";
import { nebulaeForStar } from "@/data/nebula-catalog";
import { useFavorites } from "@/lib/favorites";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/star/$slug")({
  loader: ({ params }) => {
    const star = getStar(params.slug);
    if (!star) throw notFound();
    const planets = planetsForStar(star.slug);
    const nebulae = nebulaeForStar(star.slug);
    return { star, related: relatedStars(star), planets, nebulae };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData ? `${loaderData.star.name} — Astrion` : "Astrion",
      },
    ],
  }),
  component: StarPage,
});

function StarPage() {
  const { star, related, planets, nebulae } = Route.useLoaderData();
  const saved = useFavorites((s) => s.slugs.includes(star.slug));
  const toggle = useFavorites((s) => s.toggle);

  return (
    <>
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/atlas"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg"
          >
            <ArrowLeft className="size-4" />
            Atlas
          </Link>
          <Button
            variant={saved ? "primary" : "secondary"}
            onClick={() => toggle(star.slug)}
          >
            <Bookmark className={cn("size-4", saved && "fill-current")} />
            {saved ? "Saved" : "Save"}
          </Button>
        </div>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,22rem)]">
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
              {star.designation}
              {star.constellationName ? ` · ${star.constellationName}` : ""}
            </p>
            <h1 className="mt-3 font-display text-5xl tracking-tight md:text-6xl">
              {star.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              {star.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className={cn("rounded-full bg-bg-elevated px-3 py-1.5 font-mono text-xs shadow-[var(--shadow-border)]", SPECTRAL_TEXT[star.spectralClass])}>
                {star.spectralType}
              </span>
              <span className="rounded-full bg-bg-elevated px-3 py-1.5 text-xs text-muted shadow-[var(--shadow-border)]">
                {KIND_LABEL[star.kind]}
              </span>
              {star.notable.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-bg-elevated px-3 py-1.5 text-xs text-muted shadow-[var(--shadow-border)]"
                >
                  {NOTABLE_LABEL[tag] ?? tag}
                </span>
              ))}
            </div>
          </div>
          <StarPortrait star={star} />
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-4">
          <Fact label="Distance" value={formatLy(star.distanceLy)} />
          <Fact label="Apparent mag" value={formatMag(star.apparentMag)} />
          <Fact label="Absolute mag" value={formatMag(star.absoluteMag)} />
          <Fact label="Temperature" value={formatTemp(star.temperatureK)} />
          <Fact label="Mass" value={`${formatSolar(star.massSun)} M☉`} />
          <Fact label="Radius" value={`${formatSolar(star.radiusSun)} R☉`} />
          <Fact label="Luminosity" value={`${formatSolar(star.luminositySun, 1)} L☉`} />
          <Fact
            label="Age"
            value={star.ageGyr == null ? "—" : `${star.ageGyr} Gyr`}
          />
        </dl>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <section>
            <h2 className="font-display text-2xl tracking-tight">Notes</h2>
            <ul className="mt-4 space-y-3">
              {star.facts.map((fact) => (
                <li key={fact} className="text-sm leading-relaxed text-muted">
                  {fact}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-display text-2xl tracking-tight">Position</h2>
            <dl className="mt-4 space-y-3 font-mono text-sm">
              <div className="flex justify-between gap-4 border-b border-border py-2">
                <dt className="text-subtle">Right ascension</dt>
                <dd className="tabular text-fg">{formatRa(star.ra)}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-border py-2">
                <dt className="text-subtle">Declination</dt>
                <dd className="tabular text-fg">{formatDec(star.dec)}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-border py-2">
                <dt className="text-subtle">Constellation</dt>
                <dd className="text-fg">
                  {star.constellation ? (
                    <Link
                      to="/constellations/$slug"
                      params={{ slug: star.constellation }}
                      className="hover:underline"
                    >
                      {star.constellationName}
                    </Link>
                  ) : (
                    "—"
                  )}
                </dd>
              </div>
              <div className="flex justify-between gap-4 py-2">
                <dt className="text-subtle">System</dt>
                <dd className="text-fg">
                  {star.binary ? "Multiple" : "Single"}
                  {star.variable ? " · Variable" : ""}
                </dd>
              </div>
            </dl>
          </section>
        </div>

        {planets.length > 0 ? (
          <section className="mt-16">
            <h2 className="font-display text-2xl tracking-tight">Planets</h2>
            {planets.length > 1 ? (
              <div className="mt-6">
                <SystemOrbits planets={planets} />
              </div>
            ) : null}
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {planets.map((p, i) => (
                <PlanetCard key={p.slug} planet={p} index={i} />
              ))}
            </div>
          </section>
        ) : null}

        {nebulae.length > 0 ? (
          <section className="mt-16">
            <h2 className="font-display text-2xl tracking-tight">Nebulae</h2>
            <p className="mt-2 text-sm text-muted">Clouds this star lights, or sits beside.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {nebulae.map((n, i) => (
                <NebulaCard key={n.slug} nebula={n} index={i} />
              ))}
            </div>
          </section>
        ) : null}

        {related.length > 0 ? (
          <section className="mt-16">
            <h2 className="font-display text-2xl tracking-tight">Nearby in the catalog</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {related.map((s, i) => (
                <StarCard key={s.slug} star={s} index={i} />
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-bg-elevated px-4 py-5">
      <dt className="font-mono text-[11px] tracking-[0.14em] text-subtle uppercase">
        {label}
      </dt>
      <dd className="mt-1 font-display text-2xl tracking-tight tabular">{value}</dd>
    </div>
  );
}
