import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Bookmark } from "lucide-react";
import { MoonCard } from "@/components/moon-card";
import { MoonOrbits } from "@/components/moon-orbits";
import { MoonPortrait } from "@/components/moon-portrait";
import { SiteFooter } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import {
  formatKm,
  formatMoonMass,
  formatMoonPeriod,
  formatMoonRadius,
  getMoon,
  MOON_KIND_LABEL,
  MOON_TAG_LABEL,
  moonsForPlanet,
} from "@/data/moon-catalog";
import { getPlanet } from "@/data/planet-catalog";
import { useFavorites } from "@/lib/favorites";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/moon/$slug")({
  loader: ({ params }) => {
    const moon = getMoon(params.slug);
    if (!moon) throw notFound();
    const planet = getPlanet(moon.planetSlug);
    const siblings = moonsForPlanet(moon.planetSlug).filter((m) => m.slug !== moon.slug);
    return { moon, planet, siblings };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData ? `${loaderData.moon.name} — Astrion` : "Astrion" }],
  }),
  component: MoonPage,
});

function MoonPage() {
  const { moon, planet, siblings } = Route.useLoaderData();
  const saved = useFavorites((s) => s.slugs.includes(`m:${moon.slug}`));
  const toggle = useFavorites((s) => s.toggle);
  const system = planet ? [moon, ...siblings].sort((a, b) => a.semiMajorKm - b.semiMajorKm) : [];

  return (
    <>
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/moons"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg"
          >
            <ArrowLeft className="size-4" />
            Moons
          </Link>
          <Button variant={saved ? "primary" : "secondary"} onClick={() => toggle(`m:${moon.slug}`)}>
            <Bookmark className={cn("size-4", saved && "fill-current")} />
            {saved ? "Saved" : "Save"}
          </Button>
        </div>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,22rem)]">
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
              {moon.designation} · {moon.planetName}
            </p>
            <h1 className="mt-3 font-display text-5xl tracking-tight md:text-6xl">{moon.name}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{moon.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-bg-elevated px-3 py-1.5 text-xs text-muted shadow-border">
                {MOON_KIND_LABEL[moon.kind]}
              </span>
              {moon.retrograde ? (
                <span className="rounded-full bg-bg-elevated px-3 py-1.5 text-xs text-muted shadow-border">
                  Retrograde
                </span>
              ) : null}
              {moon.notable.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-bg-elevated px-3 py-1.5 text-xs text-muted shadow-border"
                >
                  {MOON_TAG_LABEL[tag]}
                </span>
              ))}
            </div>
          </div>
          <MoonPortrait moon={moon} />
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-4">
          <Fact label="Orbit" value={formatKm(moon.semiMajorKm)} />
          <Fact label="Period" value={formatMoonPeriod(moon.periodDays)} />
          <Fact label="Radius" value={formatMoonRadius(moon.radiusKm)} />
          <Fact label="Mass" value={formatMoonMass(moon.massKg)} />
          <Fact label="Found" value={moon.discovered} />
          <Fact label="Discoverer" value={moon.discoverer ?? "—"} />
          <Fact label="Host" value={moon.planetName} />
          <Fact label="Path" value={moon.retrograde ? "Retrograde" : "Prograde"} />
        </dl>

        {planet && system.length > 0 ? (
          <section className="mt-16">
            <h2 className="font-display text-2xl tracking-tight">Around {planet.name}</h2>
            <p className="mt-2 text-sm text-muted">
              {system.length} moons in this atlas
              {planet.moons > system.length ? ` of ${planet.moons} known` : ""}. Click a point.
            </p>
            <div className="mt-6">
              <MoonOrbits moons={system} planet={planet} highlight={moon.slug} />
            </div>
          </section>
        ) : null}

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <section>
            <h2 className="font-display text-2xl tracking-tight">Notes</h2>
            <ul className="mt-4 space-y-3">
              {moon.facts.map((fact) => (
                <li key={fact} className="text-sm leading-relaxed text-muted">
                  {fact}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-display text-2xl tracking-tight">Census</h2>
            <dl className="mt-4 space-y-3 font-mono text-sm">
              <div className="flex justify-between gap-4 border-b border-border py-2">
                <dt className="text-subtle">Planet</dt>
                <dd className="text-fg">
                  {planet ? (
                    <Link
                      to="/planet/$slug"
                      params={{ slug: planet.slug }}
                      className="hover:underline"
                    >
                      {planet.name}
                    </Link>
                  ) : (
                    moon.planetName
                  )}
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-border py-2">
                <dt className="text-subtle">Class</dt>
                <dd className="text-fg">{MOON_KIND_LABEL[moon.kind]}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-border py-2">
                <dt className="text-subtle">Discoverer</dt>
                <dd className="text-right text-fg">{moon.discoverer ?? "—"}</dd>
              </div>
              <div className="flex justify-between gap-4 py-2">
                <dt className="text-subtle">Captured</dt>
                <dd className="text-fg">{moon.notable.includes("captured") ? "Likely" : "Native"}</dd>
              </div>
            </dl>
          </section>
        </div>

        {siblings.length > 0 ? (
          <section className="mt-16">
            <h2 className="font-display text-2xl tracking-tight">Sibling moons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {siblings.slice(0, 4).map((m, i) => (
                <MoonCard key={m.slug} moon={m} index={i} />
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
      <dt className="font-mono text-[11px] tracking-[0.14em] text-subtle uppercase">{label}</dt>
      <dd className="mt-1 font-display text-2xl tracking-tight tabular">{value}</dd>
    </div>
  );
}
