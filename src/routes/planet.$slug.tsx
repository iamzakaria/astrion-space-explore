import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Bookmark } from "lucide-react";
import { MoonCard } from "@/components/moon-card";
import { MoonOrbits } from "@/components/moon-orbits";
import { PlanetCard } from "@/components/planet-card";
import { PlanetPortrait } from "@/components/planet-portrait";
import { SiteFooter } from "@/components/site-shell";
import { SystemOrbits } from "@/components/system-orbits";
import { Button } from "@/components/ui/button";
import { formatTemp, getStar } from "@/data/catalog";
import { moonsForPlanet } from "@/data/moon-catalog";
import {
  DISCOVERY_LABEL,
  discoveryOf,
  formatAu,
  formatEarth,
  formatPeriod,
  getPlanet,
  PLANET_KIND_LABEL,
  PLANET_TAG_LABEL,
  PLANETS,
  systemOf,
} from "@/data/planet-catalog";
import { useFavorites } from "@/lib/favorites";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/planet/$slug")({
  loader: ({ params }) => {
    const planet = getPlanet(params.slug);
    if (!planet) throw notFound();
    const system = systemOf(planet);
    const siblings = system.filter((p) => p.slug !== planet.slug);
    const related = [
      ...siblings,
      ...PLANETS.filter(
        (p) =>
          p.slug !== planet.slug &&
          p.kind === planet.kind &&
          !siblings.some((s) => s.slug === p.slug),
      ),
    ].slice(0, 4);
    const moons = moonsForPlanet(planet.slug);
    return { planet, system, related, moons };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData ? `${loaderData.planet.name} — Astrion` : "Astrion" }],
  }),
  component: PlanetPage,
});

function PlanetPage() {
  const { planet, system, related, moons } = Route.useLoaderData();
  const saved = useFavorites((s) => s.slugs.includes(`p:${planet.slug}`));
  const toggle = useFavorites((s) => s.toggle);
  const host = planet.hostSlug ? getStar(planet.hostSlug) : undefined;
  const found = discoveryOf(planet);

  return (
    <>
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/planets"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg"
          >
            <ArrowLeft className="size-4" />
            Planets
          </Link>
          <Button
            variant={saved ? "primary" : "secondary"}
            onClick={() => toggle(`p:${planet.slug}`)}
          >
            <Bookmark className={cn("size-4", saved && "fill-current")} />
            {saved ? "Saved" : "Save"}
          </Button>
        </div>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,22rem)]">
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
              {planet.designation} · {planet.solar ? "Solar System" : "Exoplanet"}
            </p>
            <h1 className="mt-3 font-display text-5xl tracking-tight md:text-6xl">
              {planet.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              {planet.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-bg-elevated px-3 py-1.5 text-xs text-muted shadow-border">
                {PLANET_KIND_LABEL[planet.kind]}
              </span>
              <span className="rounded-full bg-bg-elevated px-3 py-1.5 text-xs text-muted shadow-border">
                {DISCOVERY_LABEL[found]}
              </span>
              {planet.notable.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-bg-elevated px-3 py-1.5 text-xs text-muted shadow-border"
                >
                  {PLANET_TAG_LABEL[tag]}
                </span>
              ))}
            </div>
          </div>
          <PlanetPortrait planet={planet} />
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-4">
          <Fact label="Semi-major axis" value={formatAu(planet.au)} />
          <Fact label="Period" value={formatPeriod(planet.periodDays)} />
          <Fact label="Radius" value={formatEarth(planet.radiusEarth, "R⊕")} />
          <Fact label="Mass" value={formatEarth(planet.massEarth, "M⊕")} />
          <Fact
            label="Temperature"
            value={planet.temperatureK == null ? "—" : formatTemp(planet.temperatureK)}
          />
          <Fact
            label="Moons"
            value={String(planet.moons)}
            href={moons.length > 0 ? "#moons" : undefined}
          />
          <Fact label="Found" value={planet.discovered} />
          <Fact label="Host" value={planet.hostName} />
        </dl>

        {system.length > 1 ? (
          <section className="mt-16">
            <h2 className="font-display text-2xl tracking-tight">System</h2>
            <p className="mt-2 text-sm text-muted">
              {system.length} known worlds around {planet.hostName}. Click a point.
            </p>
            <div className="mt-6">
              <SystemOrbits planets={system} highlight={planet.slug} />
            </div>
          </section>
        ) : null}

        {moons.length > 0 ? (
          <section id="moons" className="mt-16 scroll-mt-24">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="font-display text-2xl tracking-tight">Moons</h2>
                <p className="mt-2 text-sm text-muted">
                  {planet.moons} known
                  {planet.moons > moons.length
                    ? ` · ${moons.length} major moons in this atlas`
                    : moons.length === 1
                      ? " · the one in this atlas"
                      : ` · all ${moons.length} in this atlas`}
                  . Click a point.
                </p>
              </div>
              <Link
                to="/moons"
                search={{ planet: planet.slug }}
                className="text-sm text-muted hover:text-fg"
              >
                All moons of {planet.name}
              </Link>
            </div>
            <div className="mt-6">
              <MoonOrbits moons={moons} planet={planet} />
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {moons.map((m, i) => (
                <MoonCard key={m.slug} moon={m} index={i} />
              ))}
            </div>
          </section>
        ) : planet.solar ? (
          <section className="mt-16">
            <h2 className="font-display text-2xl tracking-tight">Moons</h2>
            <p className="mt-2 text-sm text-muted">
              {planet.name} has no known moons.
            </p>
          </section>
        ) : null}

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <section>
            <h2 className="font-display text-2xl tracking-tight">Notes</h2>
            <ul className="mt-4 space-y-3">
              {planet.facts.map((fact) => (
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
                <dt className="text-subtle">Star</dt>
                <dd className="text-fg">
                  {host ? (
                    <Link
                      to="/star/$slug"
                      params={{ slug: host.slug }}
                      className="hover:underline"
                    >
                      {host.name}
                    </Link>
                  ) : (
                    planet.hostName
                  )}
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-border py-2">
                <dt className="text-subtle">Class</dt>
                <dd className="text-fg">{PLANET_KIND_LABEL[planet.kind]}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-border py-2">
                <dt className="text-subtle">Discovery</dt>
                <dd className="text-fg">{DISCOVERY_LABEL[found]}</dd>
              </div>
              <div className="flex justify-between gap-4 py-2">
                <dt className="text-subtle">Rings</dt>
                <dd className="text-fg">{planet.rings ? "Yes" : "None known"}</dd>
              </div>
            </dl>
          </section>
        </div>

        {related.length > 0 ? (
          <section className="mt-16">
            <h2 className="font-display text-2xl tracking-tight">Related worlds</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {related.map((p, i) => (
                <PlanetCard key={p.slug} planet={p} index={i} />
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </>
  );
}

function Fact({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="bg-bg-elevated px-4 py-5">
      <dt className="font-mono text-[11px] tracking-[0.14em] text-subtle uppercase">{label}</dt>
      <dd className="mt-1 font-display text-2xl tracking-tight tabular">
        {href ? (
          <a href={href} className="hover:underline">
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}
