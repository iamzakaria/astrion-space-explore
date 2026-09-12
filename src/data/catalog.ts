import { CONSTELLATIONS } from "./constellations";
import { KIND_INFO, SPECTRAL_CLASSES } from "./spectral";
import { STARS } from "./stars";
import type { SpectralClass, Star, StarKind } from "./types";

export { CONSTELLATION_BY_SLUG, CONSTELLATION_LINES, CONSTELLATIONS } from "./constellations";
export { getStar, STAR_BY_SLUG, STARS, starsInConstellation } from "./stars";
export {
  KIND_INFO,
  KIND_LABEL,
  NOTABLE_LABEL,
  SPECTRAL_BG,
  SPECTRAL_CLASSES,
  SPECTRAL_HEX,
  SPECTRAL_TEXT,
  spectralVar,
} from "./spectral";
export type {
  Constellation,
  KindInfo,
  LuminosityClass,
  NotableTag,
  SpectralClass,
  SpectralInfo,
  Star,
  StarKind,
} from "./types";

export const CATALOG_COUNT = STARS.length;
export const CONSTELLATION_COUNT = CONSTELLATIONS.length;

export type DistanceBucket = "nearby" | "neighborhood" | "galactic" | "distant";

export function distanceBucket(ly: number): DistanceBucket {
  if (ly < 20) return "nearby";
  if (ly < 100) return "neighborhood";
  if (ly < 1000) return "galactic";
  return "distant";
}

export const DISTANCE_INFO: { id: DistanceBucket; label: string; range: string }[] = [
  { id: "nearby", label: "Nearby", range: "< 20 ly" },
  { id: "neighborhood", label: "Neighborhood", range: "20–100 ly" },
  { id: "galactic", label: "Galactic", range: "100–1,000 ly" },
  { id: "distant", label: "Distant", range: "> 1,000 ly" },
];

export type SortKey = "name" | "distance" | "magnitude" | "temperature" | "luminosity";

export interface CatalogFilters {
  q: string;
  spectral: SpectralClass | "";
  kind: StarKind | "";
  constellation: string;
  distance: DistanceBucket | "";
  notable: string;
  sort: SortKey;
}

export const EMPTY_FILTERS: CatalogFilters = {
  q: "",
  spectral: "",
  kind: "",
  constellation: "",
  distance: "",
  notable: "",
  sort: "magnitude",
};

export function filterStars(filters: CatalogFilters): Star[] {
  const q = filters.q.trim().toLowerCase();
  let list = STARS.filter((star) => {
    if (filters.spectral && star.spectralClass !== filters.spectral) return false;
    if (filters.kind && star.kind !== filters.kind) return false;
    if (filters.constellation && star.constellation !== filters.constellation) return false;
    if (filters.distance && distanceBucket(star.distanceLy) !== filters.distance) return false;
    if (filters.notable && !star.notable.includes(filters.notable as Star["notable"][number])) {
      return false;
    }
    if (q) {
      const hay = [
        star.name,
        star.designation,
        star.spectralType,
        star.constellationName ?? "",
        star.summary,
        ...star.facts,
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
      case "distance":
        return a.distanceLy - b.distanceLy;
      case "temperature":
        return b.temperatureK - a.temperatureK;
      case "luminosity":
        return b.luminositySun - a.luminositySun;
      case "magnitude":
      default:
        return a.apparentMag - b.apparentMag;
    }
  });

  return list;
}

export function formatLy(ly: number): string {
  if (ly < 0.001) return "8.3 light-minutes";
  if (ly < 1) return `${ly.toFixed(5)} ly`;
  if (ly < 10) return `${ly.toFixed(2)} ly`;
  if (ly < 100) return `${ly.toFixed(1)} ly`;
  if (ly >= 1000) return `${Math.round(ly).toLocaleString()} ly`;
  return `${Math.round(ly)} ly`;
}

export function formatMag(mag: number): string {
  const sign = mag > 0 ? "+" : "";
  return `${sign}${mag.toFixed(2)}`;
}

export function formatSolar(n: number, digits = 2): string {
  if (n === 0) return "0";
  if (n > 0 && n < 0.0001) return n.toExponential(1);
  if (n >= 1000) return Math.round(n).toLocaleString();
  if (n >= 100) return n.toFixed(0);
  if (n >= 10) return n.toFixed(1);
  return n.toFixed(digits);
}

export function formatTemp(k: number): string {
  return `${k.toLocaleString()} K`;
}

export function formatRa(hours: number): string {
  const h = Math.floor(hours);
  const mFloat = (hours - h) * 60;
  const m = Math.floor(mFloat);
  const s = Math.round((mFloat - m) * 60);
  return `${String(h).padStart(2, "0")}h ${String(m).padStart(2, "0")}m ${String(s).padStart(2, "0")}s`;
}

export function formatDec(deg: number): string {
  const sign = deg < 0 ? "−" : "+";
  const abs = Math.abs(deg);
  const d = Math.floor(abs);
  const mFloat = (abs - d) * 60;
  const m = Math.floor(mFloat);
  return `${sign}${d}° ${String(m).padStart(2, "0")}′`;
}

export const FEATURED_SLUGS = [
  "sirius",
  "betelgeuse",
  "vega",
  "proxima-centauri",
  "polaris",
  "rigel",
] as const;

export const SPECIMEN_BY_CLASS: Record<string, string> = Object.fromEntries(
  SPECTRAL_CLASSES.map((s) => [s.class, s.specimen]),
);

export function constellationStarCount(slug: string): number {
  return STARS.filter((s) => s.constellation === slug).length;
}

export function relatedStars(star: Star, limit = 4): Star[] {
  if (!star.constellation) {
    return STARS.filter((s) => s.slug !== star.slug && s.spectralClass === star.spectralClass).slice(
      0,
      limit,
    );
  }
  const same = STARS.filter(
    (s) => s.constellation === star.constellation && s.slug !== star.slug,
  );
  if (same.length >= limit) return same.slice(0, limit);
  const rest = STARS.filter(
    (s) => s.slug !== star.slug && s.spectralClass === star.spectralClass && !same.includes(s),
  );
  return [...same, ...rest].slice(0, limit);
}

export function kindCount(kind: StarKind): number {
  return STARS.filter((s) => s.kind === kind).length;
}

export function spectralCount(cls: SpectralClass): number {
  return STARS.filter((s) => s.spectralClass === cls).length;
}

export { KIND_INFO as KINDS };
