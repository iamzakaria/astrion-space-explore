import {
  LUNA_MASS_KG,
  LUNA_RADIUS_KM,
  MOON_BY_SLUG,
  MOON_KIND_INFO,
  MOON_KIND_LABEL,
  MOON_PLANET_LABEL,
  MOON_PLANETS,
  MOON_TAG_LABEL,
  MOONS,
  getMoon,
  moonsForPlanet,
} from "./moons";
import type { Moon, MoonKind, MoonTag } from "./types";

export {
  LUNA_MASS_KG,
  LUNA_RADIUS_KM,
  MOON_BY_SLUG,
  MOON_KIND_INFO,
  MOON_KIND_LABEL,
  MOON_PLANET_LABEL,
  MOON_PLANETS,
  MOON_TAG_LABEL,
  MOONS,
  getMoon,
  moonsForPlanet,
};

export const MOON_COUNT = MOONS.length;
export const MOON_SYSTEM_COUNT = MOON_PLANETS.length;

export const FEATURED_MOONS = ["luna", "io", "europa", "titan", "triton", "charon"] as const;

export type MoonSort = "orbit" | "name" | "radius" | "period";

export interface MoonFilters {
  q: string;
  planet: string;
  kind: MoonKind | "";
  notable: MoonTag | "";
  sort: MoonSort;
}

export const EMPTY_MOON_FILTERS: MoonFilters = {
  q: "",
  planet: "",
  kind: "",
  notable: "",
  sort: "orbit",
};

export function filterMoons(filters: MoonFilters): Moon[] {
  const q = filters.q.trim().toLowerCase();
  let list = MOONS.filter((m) => {
    if (filters.planet && m.planetSlug !== filters.planet) return false;
    if (filters.kind && m.kind !== filters.kind) return false;
    if (filters.notable && !m.notable.includes(filters.notable)) return false;
    if (q) {
      const hay = [m.name, m.designation, m.planetName, m.summary, ...m.facts]
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
      case "radius":
        return b.radiusKm - a.radiusKm;
      case "period":
        return a.periodDays - b.periodDays;
      case "orbit":
      default:
        if (a.planetSlug !== b.planetSlug) {
          const ia = MOON_PLANETS.indexOf(a.planetSlug as (typeof MOON_PLANETS)[number]);
          const ib = MOON_PLANETS.indexOf(b.planetSlug as (typeof MOON_PLANETS)[number]);
          return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
        }
        return a.semiMajorKm - b.semiMajorKm;
    }
  });

  return list;
}

export function kindCountMoons(kind: MoonKind): number {
  return MOONS.filter((m) => m.kind === kind).length;
}

export function planetMoonCount(planetSlug: string): number {
  return MOONS.filter((m) => m.planetSlug === planetSlug).length;
}

export function formatKm(km: number): string {
  if (km >= 1_000_000) {
    const m = km / 1_000_000;
    return `${m >= 10 ? m.toFixed(1) : m.toFixed(2)} million km`;
  }
  if (km >= 10_000) return `${Math.round(km).toLocaleString()} km`;
  if (km >= 100) return `${Math.round(km).toLocaleString()} km`;
  if (km >= 10) return `${km.toFixed(1)} km`;
  return `${km.toFixed(0)} km`;
}

export function formatMoonRadius(km: number): string {
  const luna = km / LUNA_RADIUS_KM;
  if (luna >= 0.15) return `${formatKm(km)} · ${luna.toFixed(2)} R☾`;
  return formatKm(km);
}

export function formatMoonMass(kg: number | null): string {
  if (kg == null) return "Unknown";
  const luna = kg / LUNA_MASS_KG;
  if (luna >= 0.05) return `${luna.toFixed(2)} M☾`;
  if (luna >= 0.001) return `${luna.toFixed(3)} M☾`;
  return `${luna.toExponential(1)} M☾`;
}

export function formatMoonPeriod(days: number): string {
  if (days < 1) return `${(days * 24).toFixed(1)} hours`;
  if (days < 2) return `${days.toFixed(3)} days`;
  if (days < 370) return `${days < 10 ? days.toFixed(2) : days.toFixed(1)} days`;
  const years = days / 365.25;
  return `${years.toFixed(2)} yr`;
}
