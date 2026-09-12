import { Search, X } from "lucide-react";
import type { ReactNode } from "react";
import {
  CONSTELLATIONS,
  DISTANCE_INFO,
  KIND_INFO,
  NOTABLE_LABEL,
  SPECTRAL_BG,
  SPECTRAL_CLASSES,
  type CatalogFilters,
  type DistanceBucket,
  type SortKey,
} from "@/data/catalog";
import type { SpectralClass, StarKind } from "@/data/types";
import { cn } from "@/lib/utils";

const SORTS: { id: SortKey; label: string }[] = [
  { id: "magnitude", label: "Brightness" },
  { id: "distance", label: "Distance" },
  { id: "name", label: "Name" },
  { id: "temperature", label: "Temperature" },
  { id: "luminosity", label: "Luminosity" },
];

const NOTABLES = ["nearest", "brightest", "navigational", "variable", "binary", "historical", "extreme", "north-star"];

interface Props {
  value: CatalogFilters;
  onChange: (next: CatalogFilters) => void;
  resultCount: number;
}

export function CatalogFiltersBar({ value, onChange, resultCount }: Props) {
  const set = (patch: Partial<CatalogFilters>) => onChange({ ...value, ...patch });
  const hasFilters =
    value.q ||
    value.spectral ||
    value.kind ||
    value.constellation ||
    value.distance ||
    value.notable;

  return (
    <div className="space-y-5">
      <div className="relative">
        <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-subtle" />
        <input
          type="search"
          value={value.q}
          onChange={(e) => set({ q: e.target.value })}
          placeholder="Search name, designation, constellation…"
          className="h-12 w-full rounded-lg bg-bg-elevated pr-12 pl-11 text-sm text-fg shadow-border placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        />
        {value.q ? (
          <button
            type="button"
            className="absolute top-1/2 right-2 grid size-9 -translate-y-1/2 place-items-center rounded-sm text-subtle hover:text-fg"
            onClick={() => set({ q: "" })}
            aria-label="Clear search"
          >
            <X className="size-4" />
          </button>
        ) : null}
      </div>

      <FilterRow label="Spectral class">
        {SPECTRAL_CLASSES.map((s) => (
          <Chip
            key={s.class}
            active={value.spectral === s.class}
            onClick={() =>
              set({ spectral: value.spectral === s.class ? "" : (s.class as SpectralClass) })
            }
          >
            <span className={cn("size-2 rounded-full", SPECTRAL_BG[s.class])} />
            {s.class}
          </Chip>
        ))}
      </FilterRow>

      <FilterRow label="Constellation">
        {CONSTELLATIONS.map((c) => (
          <Chip
            key={c.slug}
            active={value.constellation === c.slug}
            onClick={() => set({ constellation: value.constellation === c.slug ? "" : c.slug })}
          >
            {c.name}
          </Chip>
        ))}
      </FilterRow>

      <FilterRow label="Stage">
        {KIND_INFO.map((k) => (
          <Chip
            key={k.id}
            active={value.kind === k.id}
            onClick={() => set({ kind: value.kind === k.id ? "" : (k.id as StarKind) })}
          >
            {k.label}
          </Chip>
        ))}
      </FilterRow>

      <FilterRow label="Distance">
        {DISTANCE_INFO.map((d) => (
          <Chip
            key={d.id}
            active={value.distance === d.id}
            onClick={() =>
              set({ distance: value.distance === d.id ? "" : (d.id as DistanceBucket) })
            }
          >
            {d.label}
            <span className="text-subtle"> {d.range}</span>
          </Chip>
        ))}
      </FilterRow>

      <FilterRow label="Catalog tags">
        {NOTABLES.map((n) => (
          <Chip
            key={n}
            active={value.notable === n}
            onClick={() => set({ notable: value.notable === n ? "" : n })}
          >
            {NOTABLE_LABEL[n]}
          </Chip>
        ))}
      </FilterRow>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-xs tracking-wide text-muted tabular">
          {resultCount} {resultCount === 1 ? "star" : "stars"}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <label className="flex items-center gap-2 text-xs text-muted">
            Sort
            <select
              value={value.sort}
              onChange={(e) => set({ sort: e.target.value as SortKey })}
              className="h-11 rounded-sm bg-bg-elevated px-3 text-sm text-fg shadow-border"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
          {hasFilters ? (
            <button
              type="button"
              className="h-11 rounded-sm px-3 text-sm text-muted hover:text-fg"
              onClick={() =>
                onChange({
                  ...value,
                  q: "",
                  spectral: "",
                  kind: "",
                  constellation: "",
                  distance: "",
                  notable: "",
                })
              }
            >
              Clear filters
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function FilterRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="mb-2 font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">
        {label}
      </p>
      <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {children}
      </div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex h-11 shrink-0 items-center gap-2 rounded-full px-3.5 text-sm transition-colors duration-150",
        active
          ? "bg-accent text-accent-fg"
          : "bg-bg-elevated text-muted shadow-border hover:text-fg",
      )}
    >
      {children}
    </button>
  );
}
