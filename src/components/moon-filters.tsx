import { Search, X } from "lucide-react";
import type { ReactNode } from "react";
import {
  MOON_KIND_INFO,
  MOON_PLANET_LABEL,
  MOON_PLANETS,
  MOON_TAG_LABEL,
  type MoonFilters,
  type MoonSort,
} from "@/data/moon-catalog";
import type { MoonKind, MoonTag } from "@/data/types";
import { cn } from "@/lib/utils";

const SORTS: { id: MoonSort; label: string }[] = [
  { id: "orbit", label: "Orbit" },
  { id: "name", label: "Name" },
  { id: "radius", label: "Radius" },
  { id: "period", label: "Period" },
];

const TAGS: MoonTag[] = [
  "galilean",
  "ocean-world",
  "atmosphere",
  "captured",
  "visited",
  "binary",
  "inner",
  "largest",
];

interface Props {
  value: MoonFilters;
  onChange: (next: MoonFilters) => void;
  resultCount: number;
}

export function MoonFiltersBar({ value, onChange, resultCount }: Props) {
  const set = (patch: Partial<MoonFilters>) => onChange({ ...value, ...patch });
  const hasFilters = value.q || value.planet || value.kind || value.notable;

  return (
    <div className="space-y-5">
      <div className="relative">
        <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-subtle" />
        <input
          type="search"
          value={value.q}
          onChange={(e) => set({ q: e.target.value })}
          placeholder="Search name, planet, designation…"
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

      <FilterRow label="Planet">
        {MOON_PLANETS.map((p) => (
          <Chip
            key={p}
            active={value.planet === p}
            onClick={() => set({ planet: value.planet === p ? "" : p })}
          >
            {MOON_PLANET_LABEL[p]}
          </Chip>
        ))}
      </FilterRow>

      <FilterRow label="Type">
        {MOON_KIND_INFO.map((k) => (
          <Chip
            key={k.id}
            active={value.kind === k.id}
            onClick={() => set({ kind: value.kind === k.id ? "" : (k.id as MoonKind) })}
          >
            {k.label}
          </Chip>
        ))}
      </FilterRow>

      <FilterRow label="Tags">
        {TAGS.map((t) => (
          <Chip
            key={t}
            active={value.notable === t}
            onClick={() => set({ notable: value.notable === t ? "" : t })}
          >
            {MOON_TAG_LABEL[t]}
          </Chip>
        ))}
      </FilterRow>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-xs tracking-wide text-muted tabular">
          {resultCount} {resultCount === 1 ? "moon" : "moons"}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <label className="flex items-center gap-2 text-xs text-muted">
            Sort
            <select
              value={value.sort}
              onChange={(e) => set({ sort: e.target.value as MoonSort })}
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
              onClick={() => onChange({ ...value, q: "", planet: "", kind: "", notable: "" })}
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
      <p className="mb-2 font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">{label}</p>
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
  children: ReactNode;
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
