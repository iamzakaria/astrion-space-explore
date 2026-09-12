import { NEBULAE } from "./nebulae";
import type { Nebula, NebulaKind, NebulaTag } from "./types";

export {
  FEATURED_NEBULAE,
  getNebula,
  kindCountNebulae,
  NEBULA_BY_SLUG,
  NEBULA_COUNT,
  NEBULA_KIND_INFO,
  NEBULA_KIND_LABEL,
  NEBULA_TAG_LABEL,
  NEBULAE,
  nebulaeForStar,
  nebulaeInConstellation,
} from "./nebulae";

export type NebulaSort = "distance" | "name" | "size";

export interface NebulaFilters {
  q: string;
  kind: NebulaKind | "";
  notable: NebulaTag | "";
  sort: NebulaSort;
}

export const EMPTY_NEBULA_FILTERS: NebulaFilters = {
  q: "",
  kind: "",
  notable: "",
  sort: "distance",
};

export function filterNebulae(filters: NebulaFilters): Nebula[] {
  const q = filters.q.trim().toLowerCase();
  let list = NEBULAE.filter((n) => {
    if (filters.kind && n.kind !== filters.kind) return false;
    if (filters.notable && !n.notable.includes(filters.notable)) return false;
    if (q) {
      const hay = [
        n.name,
        n.designation,
        n.constellationName,
        n.illuminatorName ?? "",
        n.summary,
        ...n.facts,
      ]
        .join(" ")
        .toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  list = [...list].sort((a, b) => {
    switch (filters.sort) {
      case "name":
        return a.name.localeCompare(b.name);
      case "size":
        return (b.sizeLy ?? 0) - (a.sizeLy ?? 0);
      case "distance":
      default:
        return a.distanceLy - b.distanceLy;
    }
  });

  return list;
}

export function formatArcmin(arcmin: number): string {
  if (arcmin >= 60) {
    const deg = arcmin / 60;
    return deg >= 10 ? `${Math.round(deg)}°` : `${deg.toFixed(1)}°`;
  }
  if (arcmin >= 1) return `${arcmin % 1 === 0 ? arcmin.toFixed(0) : arcmin.toFixed(1)}′`;
  return `${Math.round(arcmin * 60)}″`;
}

export function formatSizeLy(ly: number | null): string {
  if (ly == null) return "—";
  if (ly < 1) return `${ly.toFixed(1)} ly`;
  if (ly < 10) return `${ly.toFixed(1)} ly`;
  return `${Math.round(ly).toLocaleString()} ly`;
}
