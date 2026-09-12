import { Search, X } from "lucide-react";
import type { ReactNode } from "react";
import {
  NEBULA_KIND_INFO,
  NEBULA_TAG_LABEL,
  type NebulaFilters,
  type NebulaSort,
} from "@/data/nebula-catalog";
import type { NebulaTag } from "@/data/types";
import { cn } from "@/lib/utils";

const SORTS: { id: NebulaSort; label: string }[] = [
  { id: "distance", label: "Distance" },
  { id: "name", label: "Name" },
  { id: "size", label: "Span" },
];

const TAGS: NebulaTag[] = [
  "messier",
  "naked-eye",
  "stellar-nursery",
  "imaged",
  "extreme",
  "historical",
];

interface Props {
  value: NebulaFilters;
  onChange: (next: NebulaFilters) => void;
  resultCount: number;
}

export function NebulaFiltersBar({ value, onChange, resultCount }: Props) {
  const set = (patch: Partial<NebulaFilters>) => onChange({ ...value, ...patch });
  const hasFilters = value.q || value.kind || value.notable;

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

      <FilterRow label="Type">
        {NEBULA_KIND_INFO.map((k) => (
          <Chip
            key={k.id}
            active={value.kind === k.id}
            onClick={() => set({ kind: value.kind === k.id ? "" : k.id })}
          >
            {k.label}
          </Chip>
        ))}
      </FilterRow>

      <FilterRow label="Catalog tags">
        {TAGS.map((t) => (
          <Chip
            key={t}
            active={value.notable === t}
            onClick={() => set({ notable: value.notable === t ? "" : t })}
          >
            {NEBULA_TAG_LABEL[t]}
          </Chip>
        ))}
      </FilterRow>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-xs tracking-wide text-muted tabular">
          {resultCount} {resultCount === 1 ? "nebula" : "nebulae"}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <label className="flex items-center gap-2 text-xs text-muted">
            Sort
            <select
              value={value.sort}
              onChange={(e) => set({ sort: e.target.value as NebulaSort })}
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
              onClick={() => onChange({ ...value, q: "", kind: "", notable: "" })}
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
