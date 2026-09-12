import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { NebulaCard } from "@/components/nebula-card";
import { NebulaFiltersBar } from "@/components/nebula-filters";
import { NebulaPortrait } from "@/components/nebula-portrait";
import { SiteFooter } from "@/components/site-shell";
import {
  filterNebulae,
  getNebula,
  kindCountNebulae,
  NEBULA_COUNT,
  NEBULA_KIND_INFO,
  type NebulaFilters,
  type NebulaSort,
} from "@/data/nebula-catalog";
import type { NebulaKind, NebulaTag } from "@/data/types";

const KINDS = new Set([
  "emission",
  "reflection",
  "planetary",
  "remnant",
  "dark",
  "mixed",
]);
const TAGS = new Set([
  "messier",
  "naked-eye",
  "stellar-nursery",
  "imaged",
  "extreme",
  "historical",
]);
const SORTS = new Set(["distance", "name", "size"]);

export type NebulaSearch = {
  q?: string;
  kind?: NebulaKind;
  notable?: NebulaTag;
  sort?: NebulaSort;
};

function asFilters(search: NebulaSearch): NebulaFilters {
  return {
    q: search.q ?? "",
    kind: search.kind ?? "",
    notable: search.notable ?? "",
    sort: search.sort ?? "distance",
  };
}

function toSearch(filters: NebulaFilters): NebulaSearch {
  const next: NebulaSearch = {};
  if (filters.q) next.q = filters.q;
  if (filters.kind) next.kind = filters.kind;
  if (filters.notable) next.notable = filters.notable;
  if (filters.sort && filters.sort !== "distance") next.sort = filters.sort;
  return next;
}

export const Route = createFileRoute("/nebulae")({
  validateSearch: (search: Record<string, unknown>): NebulaSearch => {
    const next: NebulaSearch = {};
    if (typeof search.q === "string" && search.q) next.q = search.q;
    if (typeof search.kind === "string" && KINDS.has(search.kind)) {
      next.kind = search.kind as NebulaKind;
    }
    if (typeof search.notable === "string" && TAGS.has(search.notable)) {
      next.notable = search.notable as NebulaTag;
    }
    if (typeof search.sort === "string" && SORTS.has(search.sort)) {
      next.sort = search.sort as NebulaSort;
    }
    return next;
  },
  component: NebulaePage,
});

function NebulaePage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const filters = asFilters(search);
  const results = useMemo(() => filterNebulae(asFilters(search)), [search]);
  const featured = getNebula("orion");

  return (
    <>
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">Clouds</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">Nebulae</h1>
        <p className="mt-3 max-w-2xl text-muted">
          {NEBULA_COUNT} named clouds — nurseries, death shrouds, and dark dust that hides
          the next generation. Colour is chemistry. Motion is the wind of stars.
        </p>

        {featured ? (
          <Link
            to="/nebula/$slug"
            params={{ slug: featured.slug }}
            className="relative mt-10 block overflow-hidden rounded-xl shadow-border transition-[box-shadow] duration-200 hover:shadow-border-hover"
          >
            <NebulaPortrait nebula={featured} variant="hero" className="rounded-none" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg via-bg/70 to-transparent px-5 py-5 sm:px-6">
              <p className="font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">
                Featured · {featured.designation}
              </p>
              <p className="mt-1 font-display text-2xl tracking-tight">{featured.name}</p>
              <p className="mt-1 max-w-2xl text-sm text-muted">{featured.summary}</p>
            </div>
          </Link>
        ) : null}

        <section className="mt-16">
          <h2 className="font-display text-2xl tracking-tight">Kinds of cloud</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {NEBULA_KIND_INFO.map((k) => (
              <Link
                key={k.id}
                to="/nebulae"
                search={{ kind: k.id }}
                className="rounded-xl bg-bg-elevated/80 p-5 shadow-border transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-border-hover"
              >
                <p className="font-display text-xl tracking-tight">{k.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{k.summary}</p>
                <p className="mt-3 font-mono text-[11px] text-subtle tabular">
                  {kindCountNebulae(k.id)} in atlas
                </p>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-16">
          <NebulaFiltersBar
            value={filters}
            onChange={(next) => navigate({ search: toSearch(next), replace: true })}
            resultCount={results.length}
          />
        </div>

        {results.length === 0 ? (
          <p className="mt-16 text-center text-muted">
            No nebulae match those filters.
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
            {results.map((nebula, i) => (
              <NebulaCard key={nebula.slug} nebula={nebula} index={i} />
            ))}
          </div>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
