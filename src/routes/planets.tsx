import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { PlanetCard } from "@/components/planet-card";
import { PlanetDiagram } from "@/components/planet-diagram";
import { PlanetFiltersBar } from "@/components/planet-filters";
import { PlanetOrb } from "@/components/planet-orb";
import { SiteFooter } from "@/components/site-shell";
import { SolarSystem } from "@/components/solar-system";
import {
  EXO_COUNT,
  filterPlanets,
  kindCountPlanets,
  PLANET_COUNT,
  PLANET_KIND_INFO,
  SOLAR_COUNT,
  type PlanetFilters,
  type PlanetSort,
} from "@/data/planet-catalog";
import type { DiscoveryMethod, PlanetKind, PlanetTag } from "@/data/types";

const KINDS = new Set([
  "terrestrial",
  "gas-giant",
  "ice-giant",
  "dwarf",
  "super-earth",
  "hot-jupiter",
  "mini-neptune",
]);
const SYSTEMS = new Set(["solar", "exoplanet"]);
const TAGS = new Set([
  "habitable-zone",
  "rings",
  "life",
  "first",
  "extreme",
  "visited",
  "transiting",
  "imaged",
]);
const DISCOVERIES = new Set([
  "visual",
  "transit",
  "radial-velocity",
  "imaging",
  "timing",
]);
const SORTS = new Set(["au", "name", "mass", "radius", "period"]);

export type PlanetSearch = {
  q?: string;
  kind?: PlanetKind;
  system?: "solar" | "exoplanet";
  notable?: PlanetTag;
  discovery?: DiscoveryMethod;
  sort?: PlanetSort;
};

function asFilters(search: PlanetSearch): PlanetFilters {
  return {
    q: search.q ?? "",
    kind: search.kind ?? "",
    system: search.system ?? "",
    notable: search.notable ?? "",
    discovery: search.discovery ?? "",
    sort: search.sort ?? "au",
  };
}

function toSearch(filters: PlanetFilters): PlanetSearch {
  const next: PlanetSearch = {};
  if (filters.q) next.q = filters.q;
  if (filters.kind) next.kind = filters.kind;
  if (filters.system) next.system = filters.system;
  if (filters.notable) next.notable = filters.notable;
  if (filters.discovery) next.discovery = filters.discovery;
  if (filters.sort && filters.sort !== "au") next.sort = filters.sort;
  return next;
}

export const Route = createFileRoute("/planets")({
  validateSearch: (search: Record<string, unknown>): PlanetSearch => {
    const next: PlanetSearch = {};
    if (typeof search.q === "string" && search.q) next.q = search.q;
    if (typeof search.kind === "string" && KINDS.has(search.kind)) {
      next.kind = search.kind as PlanetKind;
    }
    if (typeof search.system === "string" && SYSTEMS.has(search.system)) {
      next.system = search.system as "solar" | "exoplanet";
    }
    if (typeof search.notable === "string" && TAGS.has(search.notable)) {
      next.notable = search.notable as PlanetTag;
    }
    if (typeof search.discovery === "string" && DISCOVERIES.has(search.discovery)) {
      next.discovery = search.discovery as DiscoveryMethod;
    }
    if (typeof search.sort === "string" && SORTS.has(search.sort)) {
      next.sort = search.sort as PlanetSort;
    }
    return next;
  },
  component: PlanetsPage,
});

function PlanetsPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const filters = asFilters(search);
  const results = useMemo(() => filterPlanets(asFilters(search)), [search]);

  return (
    <>
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">Worlds</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">Planets</h1>
        <p className="mt-3 max-w-2xl text-muted">
          {SOLAR_COUNT} Solar System worlds and {EXO_COUNT} exoplanets — rocky, gassy,
          ice-wrapped, and boiling. {PLANET_COUNT} in this atlas.{" "}
          <Link to="/moons" className="text-fg underline-offset-4 hover:underline">
            Browse their moons
          </Link>
          .
        </p>

        <div className="mt-10">
          <SolarSystem />
        </div>

        <section className="mt-16">
          <h2 className="font-display text-2xl tracking-tight">Families of worlds</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Seven kinds, from the rocks underfoot to giants that never formed a surface.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PLANET_KIND_INFO.map((k) => (
              <Link
                key={k.id}
                to="/planets"
                search={{ kind: k.id }}
                className="rounded-xl bg-bg-elevated/80 p-5 shadow-border transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-border-hover"
              >
                <PlanetOrb
                  palette={
                    k.id === "terrestrial"
                      ? "earth"
                      : k.id === "gas-giant"
                        ? "jupiter"
                        : k.id === "ice-giant"
                          ? "neptune"
                          : k.id === "dwarf"
                            ? "pluto"
                            : k.id === "super-earth"
                              ? "venus"
                              : k.id === "hot-jupiter"
                                ? "lava"
                                : "haze"
                  }
                  rings={k.id === "gas-giant"}
                  size="md"
                />
                <p className="mt-4 font-display text-xl tracking-tight">{k.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{k.summary}</p>
                <p className="mt-3 font-mono text-[11px] text-subtle tabular">
                  {kindCountPlanets(k.id)} in atlas
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl tracking-tight">Mass and radius</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Earth sits at 1, 1. Dwarfs cluster bottom-left; inflated hot Jupiters
            climb the right. Click a point.
          </p>
          <div className="mt-6">
            <PlanetDiagram />
          </div>
        </section>

        <div className="mt-16">
          <PlanetFiltersBar
            value={filters}
            onChange={(next) => navigate({ search: toSearch(next), replace: true })}
            resultCount={results.length}
          />
        </div>

        {results.length === 0 ? (
          <p className="mt-16 text-center text-muted">
            No worlds match those filters.
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
            {results.map((planet, i) => (
              <PlanetCard key={planet.slug} planet={planet} index={i} />
            ))}
          </div>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
