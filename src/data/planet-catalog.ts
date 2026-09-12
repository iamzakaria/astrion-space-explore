import { discoveryOf, PLANETS } from "./planets";
import type { DiscoveryMethod, Planet, PlanetKind, PlanetTag } from "./types";

export {
  discoveryOf,
  DISCOVERY_INFO,
  DISCOVERY_LABEL,
  getPlanet,
  PLANET_BG,
  PLANET_BY_SLUG,
  PLANET_HEX,
  PLANET_KIND_HEX,
  PLANET_KIND_INFO,
  PLANET_KIND_LABEL,
  PLANET_TAG_LABEL,
  PLANETS,
  planetsForStar,
  systemOf,
} from "./planets";

export const PLANET_COUNT = PLANETS.length;
export const SOLAR_COUNT = PLANETS.filter((p) => p.solar).length;
export const EXO_COUNT = PLANETS.filter((p) => !p.solar).length;

export type PlanetSort = "au" | "name" | "mass" | "radius" | "period";

export interface PlanetFilters {
  q: string;
  kind: PlanetKind | "";
  system: "solar" | "exoplanet" | "";
  notable: PlanetTag | "";
  discovery: DiscoveryMethod | "";
  sort: PlanetSort;
}

export const EMPTY_PLANET_FILTERS: PlanetFilters = {
  q: "",
  kind: "",
  system: "",
  notable: "",
  discovery: "",
  sort: "au",
};

export function filterPlanets(filters: PlanetFilters): Planet[] {
  const q = filters.q.trim().toLowerCase();
  let list = PLANETS.filter((p) => {
    if (filters.kind && p.kind !== filters.kind) return false;
    if (filters.system === "solar" && !p.solar) return false;
    if (filters.system === "exoplanet" && p.solar) return false;
    if (filters.notable && !p.notable.includes(filters.notable)) return false;
    if (filters.discovery && discoveryOf(p) !== filters.discovery) return false;
    if (q) {
      const hay = [p.name, p.designation, p.hostName, p.summary, ...p.facts]
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
      case "mass":
        return b.massEarth - a.massEarth;
      case "radius":
        return b.radiusEarth - a.radiusEarth;
      case "period":
        return a.periodDays - b.periodDays;
      case "au":
      default:
        if (a.solar !== b.solar) return a.solar ? -1 : 1;
        return a.au - b.au;
    }
  });

  return list;
}

export function formatAu(au: number): string {
  if (au < 0.1) return `${au.toFixed(3)} au`;
  if (au < 10) return `${au.toFixed(2)} au`;
  return `${au.toFixed(1)} au`;
}

export function formatEarth(n: number, unit: string): string {
  if (n >= 100) return `${Math.round(n).toLocaleString()} ${unit}`;
  if (n >= 10) return `${n.toFixed(1)} ${unit}`;
  if (n >= 1) return `${n.toFixed(2)} ${unit}`;
  if (n >= 0.01) return `${n.toFixed(3)} ${unit}`;
  return `${n.toExponential(1)} ${unit}`;
}

export function formatPeriod(days: number): string {
  if (days < 2) return `${(days * 24).toFixed(1)} hours`;
  if (days < 370) return `${days < 10 ? days.toFixed(2) : days.toFixed(1)} days`;
  const years = days / 365.25;
  if (years < 10) return `${years.toFixed(2)} yr`;
  return `${years.toFixed(1)} yr`;
}

export function kindCountPlanets(kind: PlanetKind): number {
  return PLANETS.filter((p) => p.kind === kind).length;
}

export const FEATURED_PLANETS = ["earth", "jupiter", "saturn", "proxima-b"] as const;

export const SOLAR_PLANETS = PLANETS.filter((p) => p.solar && p.kind !== "dwarf");
export const DWARF_PLANETS = PLANETS.filter((p) => p.kind === "dwarf");
