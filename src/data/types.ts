export type SpectralClass =
  | "O"
  | "B"
  | "A"
  | "F"
  | "G"
  | "K"
  | "M"
  | "W"
  | "D"
  | "N"
  | "L"
  | "C";

export type LuminosityClass =
  | "0"
  | "I"
  | "II"
  | "III"
  | "IV"
  | "V"
  | "VI"
  | "D"
  | "N";

export type StarKind =
  | "main-sequence"
  | "subgiant"
  | "giant"
  | "bright-giant"
  | "supergiant"
  | "hypergiant"
  | "white-dwarf"
  | "neutron-star"
  | "wolf-rayet"
  | "luminous-blue-variable";

export type NotableTag =
  | "nearest"
  | "brightest"
  | "navigational"
  | "variable"
  | "binary"
  | "historical"
  | "extreme"
  | "north-star";

export interface Star {
  slug: string;
  name: string;
  designation: string;
  constellation: string | null;
  constellationName: string | null;
  spectralType: string;
  spectralClass: SpectralClass;
  luminosityClass: LuminosityClass;
  kind: StarKind;
  ra: number;
  dec: number;
  distanceLy: number;
  apparentMag: number;
  absoluteMag: number;
  massSun: number;
  radiusSun: number;
  luminositySun: number;
  temperatureK: number;
  ageGyr: number | null;
  summary: string;
  facts: string[];
  variable?: boolean;
  binary?: boolean;
  notable: NotableTag[];
}

export interface Constellation {
  slug: string;
  name: string;
  genitive: string;
  abbreviation: string;
  meaning: string;
  hemisphere: "N" | "S" | "EQ";
  family: string;
  brightest: string;
  lore: string;
}

export interface SpectralInfo {
  class: SpectralClass;
  name: string;
  colorName: string;
  tempRange: string;
  tempK: [number, number];
  summary: string;
  specimen: string;
}

export interface KindInfo {
  id: StarKind;
  label: string;
  summary: string;
}

export type PlanetKind =
  | "terrestrial"
  | "gas-giant"
  | "ice-giant"
  | "dwarf"
  | "super-earth"
  | "hot-jupiter"
  | "mini-neptune";

export type PlanetPalette =
  | "mercury"
  | "venus"
  | "earth"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune"
  | "pluto"
  | "ceres"
  | "ice"
  | "lava"
  | "haze"
  | "ocean";

export type PlanetTag =
  | "habitable-zone"
  | "rings"
  | "life"
  | "first"
  | "extreme"
  | "visited"
  | "transiting"
  | "imaged";

export type DiscoveryMethod =
  | "visual"
  | "transit"
  | "radial-velocity"
  | "imaging"
  | "timing";

export interface Planet {
  slug: string;
  name: string;
  designation: string;
  kind: PlanetKind;
  solar: boolean;
  hostSlug: string | null;
  hostName: string;
  palette: PlanetPalette;
  au: number;
  periodDays: number;
  radiusEarth: number;
  massEarth: number;
  temperatureK: number | null;
  moons: number;
  discovered: string;
  rings?: boolean;
  discoveryMethod?: DiscoveryMethod;
  summary: string;
  facts: string[];
  notable: PlanetTag[];
}

export type MoonKind = "rocky" | "icy" | "volcanic" | "irregular";

export type MoonTag =
  | "galilean"
  | "ocean-world"
  | "atmosphere"
  | "captured"
  | "visited"
  | "binary"
  | "inner"
  | "largest";

export interface Moon {
  slug: string;
  name: string;
  designation: string;
  planetSlug: string;
  planetName: string;
  kind: MoonKind;
  palette: PlanetPalette;
  radiusKm: number;
  massKg: number | null;
  periodDays: number;
  semiMajorKm: number;
  discovered: string;
  discoverer?: string;
  retrograde?: boolean;
  irregular?: boolean;
  summary: string;
  facts: string[];
  notable: MoonTag[];
}

export type NebulaKind =
  | "emission"
  | "reflection"
  | "planetary"
  | "remnant"
  | "dark"
  | "mixed";

export type NebulaShape =
  | "cloud"
  | "ring"
  | "helix"
  | "bipolar"
  | "filaments"
  | "silhouette"
  | "shell"
  | "pillars";

export type NebulaTag =
  | "messier"
  | "naked-eye"
  | "stellar-nursery"
  | "imaged"
  | "extreme"
  | "historical";

export interface Nebula {
  slug: string;
  name: string;
  designation: string;
  kind: NebulaKind;
  shape: NebulaShape;
  constellation: string;
  constellationName: string;
  ra: number;
  dec: number;
  distanceLy: number;
  sizeLy: number | null;
  angularArcmin: number;
  discovered: string;
  illuminatorSlug: string | null;
  illuminatorName: string | null;
  colors: [string, string, string];
  summary: string;
  facts: string[];
  notable: NebulaTag[];
}

