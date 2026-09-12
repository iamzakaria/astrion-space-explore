import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { CatalogFiltersBar } from "@/components/catalog-filters";
import { SiteFooter } from "@/components/site-shell";
import { StarCard } from "@/components/star-card";
import {
  CONSTELLATION_BY_SLUG,
  filterStars,
  type CatalogFilters,
  type DistanceBucket,
  type SortKey,
} from "@/data/catalog";
import type { SpectralClass, StarKind } from "@/data/types";

const SPECTRAL = new Set(["O", "B", "A", "F", "G", "K", "M", "W", "D", "N", "L", "C"]);
const KINDS = new Set([
  "main-sequence",
  "subgiant",
  "giant",
  "bright-giant",
  "supergiant",
  "hypergiant",
  "white-dwarf",
  "neutron-star",
  "wolf-rayet",
  "luminous-blue-variable",
]);
const DIST = new Set(["nearby", "neighborhood", "galactic", "distant"]);
const SORTS = new Set(["name", "distance", "magnitude", "temperature", "luminosity"]);

export type AtlasSearch = {
  q?: string;
  spectral?: SpectralClass;
  kind?: StarKind;
  constellation?: string;
  distance?: DistanceBucket;
  notable?: string;
  sort?: SortKey;
};

function asFilters(search: AtlasSearch): CatalogFilters {
  return {
    q: search.q ?? "",
    spectral: search.spectral ?? "",
    kind: search.kind ?? "",
    constellation: search.constellation ?? "",
    distance: search.distance ?? "",
    notable: search.notable ?? "",
    sort: search.sort ?? "magnitude",
  };
}

function toSearch(filters: CatalogFilters): AtlasSearch {
  const next: AtlasSearch = {};
  if (filters.q) next.q = filters.q;
  if (filters.spectral) next.spectral = filters.spectral;
  if (filters.kind) next.kind = filters.kind;
  if (filters.constellation) next.constellation = filters.constellation;
  if (filters.distance) next.distance = filters.distance;
  if (filters.notable) next.notable = filters.notable;
  if (filters.sort && filters.sort !== "magnitude") next.sort = filters.sort;
  return next;
}

export const Route = createFileRoute("/atlas")({
  validateSearch: (search: Record<string, unknown>): AtlasSearch => {
    const next: AtlasSearch = {};
    if (typeof search.q === "string" && search.q) next.q = search.q;
    if (typeof search.spectral === "string" && SPECTRAL.has(search.spectral)) {
      next.spectral = search.spectral as SpectralClass;
    }
    if (typeof search.kind === "string" && KINDS.has(search.kind)) {
      next.kind = search.kind as StarKind;
    }
    if (typeof search.constellation === "string" && search.constellation) {
      next.constellation = search.constellation;
    }
    if (typeof search.distance === "string" && DIST.has(search.distance)) {
      next.distance = search.distance as DistanceBucket;
    }
    if (typeof search.notable === "string" && search.notable) next.notable = search.notable;
    if (typeof search.sort === "string" && SORTS.has(search.sort)) {
      next.sort = search.sort as SortKey;
    }
    return next;
  },
  component: AtlasPage,
});

function AtlasPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const filters = asFilters(search);
  const results = useMemo(() => filterStars(asFilters(search)), [search]);
  const constellation = search.constellation
    ? CONSTELLATION_BY_SLUG[search.constellation]
    : undefined;

  return (
    <>
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">Catalog</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">Atlas</h1>
        <p className="mt-3 max-w-2xl text-muted">
          Filter by colour, evolutionary stage, distance, or the tags that made a star
          famous. Every entry is a real sun with measured numbers.
        </p>

        {constellation ? (
          <p className="mt-6 text-sm text-muted">
            Showing{" "}
            <Link
              to="/constellations/$slug"
              params={{ slug: constellation.slug }}
              className="text-fg underline-offset-4 hover:underline"
            >
              {constellation.name}
            </Link>
            .{" "}
            <button
              type="button"
              className="text-fg underline-offset-4 hover:underline"
              onClick={() =>
                navigate({ search: toSearch({ ...filters, constellation: "" }), replace: true })
              }
            >
              Clear
            </button>
          </p>
        ) : null}

        <div className="mt-10">
          <CatalogFiltersBar
            value={filters}
            onChange={(next) =>
              navigate({
                search: toSearch(next),
                replace: true,
              })
            }
            resultCount={results.length}
          />
        </div>

        {results.length === 0 ? (
          <p className="mt-16 text-center text-muted">
            No stars match those filters.
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
            {results.map((star, i) => (
              <StarCard key={star.slug} star={star} index={i} />
            ))}
          </div>
        )}
      </main>
      <SiteFooter />
    </>
  );
}