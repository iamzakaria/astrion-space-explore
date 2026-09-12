import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { MoonCard } from "@/components/moon-card";
import { MoonFiltersBar } from "@/components/moon-filters";
import { PlanetOrb } from "@/components/planet-orb";
import { SiteFooter } from "@/components/site-shell";
import {
  filterMoons,
  kindCountMoons,
  MOON_COUNT,
  MOON_KIND_INFO,
  MOON_PLANET_LABEL,
  MOON_PLANETS,
  MOON_SYSTEM_COUNT,
  planetMoonCount,
  type MoonFilters,
  type MoonSort,
} from "@/data/moon-catalog";
import { PLANET_BY_SLUG } from "@/data/planet-catalog";
import type { MoonKind, MoonTag } from "@/data/types";

const KINDS = new Set(["rocky", "icy", "volcanic", "irregular"]);
const PLANETS = new Set<string>(MOON_PLANETS);
const TAGS = new Set([
  "galilean",
  "ocean-world",
  "atmosphere",
  "captured",
  "visited",
  "binary",
  "inner",
  "largest",
]);
const SORTS = new Set(["orbit", "name", "radius", "period"]);

export type MoonSearch = {
  q?: string;
  planet?: string;
  kind?: MoonKind;
  notable?: MoonTag;
  sort?: MoonSort;
};

function asFilters(search: MoonSearch): MoonFilters {
  return {
    q: search.q ?? "",
    planet: search.planet ?? "",
    kind: search.kind ?? "",
    notable: search.notable ?? "",
    sort: search.sort ?? "orbit",
  };
}

function toSearch(filters: MoonFilters): MoonSearch {
  const next: MoonSearch = {};
  if (filters.q) next.q = filters.q;
  if (filters.planet) next.planet = filters.planet;
  if (filters.kind) next.kind = filters.kind;
  if (filters.notable) next.notable = filters.notable;
  if (filters.sort && filters.sort !== "orbit") next.sort = filters.sort;
  return next;
}

export const Route = createFileRoute("/moons")({
  validateSearch: (search: Record<string, unknown>): MoonSearch => {
    const next: MoonSearch = {};
    if (typeof search.q === "string" && search.q) next.q = search.q;
    if (typeof search.planet === "string" && PLANETS.has(search.planet)) {
      next.planet = search.planet;
    }
    if (typeof search.kind === "string" && KINDS.has(search.kind)) {
      next.kind = search.kind as MoonKind;
    }
    if (typeof search.notable === "string" && TAGS.has(search.notable)) {
      next.notable = search.notable as MoonTag;
    }
    if (typeof search.sort === "string" && SORTS.has(search.sort)) {
      next.sort = search.sort as MoonSort;
    }
    return next;
  },
  component: MoonsPage,
});

function MoonsPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const filters = asFilters(search);
  const results = useMemo(() => filterMoons(asFilters(search)), [search]);

  return (
    <>
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">Satellites</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">Moons</h1>
        <p className="mt-3 max-w-2xl text-muted">
          {MOON_COUNT} named moons around {MOON_SYSTEM_COUNT} Solar System worlds — the Galileans,
          Titan, Triton, and the ice chips of the Kuiper belt. Jupiter and Saturn hold dozens more
          irregulars not listed here.
        </p>

        <section className="mt-12">
          <h2 className="font-display text-2xl tracking-tight">By planet</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Mercury and Venus have none. The giants keep courts. Click a world.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {MOON_PLANETS.map((slug) => {
              const planet = PLANET_BY_SLUG[slug];
              const count = planetMoonCount(slug);
              return (
                <Link
                  key={slug}
                  to="/moons"
                  search={{ planet: slug }}
                  className="rounded-xl bg-bg-elevated/80 p-4 shadow-border transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-border-hover"
                >
                  {planet ? <PlanetOrb palette={planet.palette} rings={planet.rings} size="md" /> : null}
                  <p className="mt-3 font-display text-lg tracking-tight">
                    {MOON_PLANET_LABEL[slug]}
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-subtle tabular">
                    {count} in atlas
                    {planet && planet.moons > count ? ` · ${planet.moons} known` : ""}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl tracking-tight">Kinds of moon</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {MOON_KIND_INFO.map((k) => (
              <Link
                key={k.id}
                to="/moons"
                search={{ kind: k.id }}
                className="rounded-xl bg-bg-elevated/80 p-5 shadow-border transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-border-hover"
              >
                <p className="font-display text-xl tracking-tight">{k.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{k.summary}</p>
                <p className="mt-3 font-mono text-[11px] text-subtle tabular">
                  {kindCountMoons(k.id)} in atlas
                </p>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-16">
          <MoonFiltersBar
            value={filters}
            onChange={(next) => navigate({ search: toSearch(next), replace: true })}
            resultCount={results.length}
          />
        </div>

        {results.length === 0 ? (
          <p className="mt-16 text-center text-muted">
            No moons match those filters.
            <button
              type="button"
              className="ml-2 text-fg underline-offset-4 hover:underline"
              onClick={() => navigate({ search: {}, replace: true })}
            >
              Reset
            </button>
          </p>
        ) : (
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {results.map((moon, i) => (
              <MoonCard key={moon.slug} moon={moon} index={i} />
            ))}
          </div>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
