import type { KindInfo, SpectralClass, SpectralInfo, StarKind } from "./types";

export const SPECTRAL_HEX: Record<SpectralClass, string> = {
  O: "#9bb0ff",
  B: "#aabfff",
  A: "#cad7ff",
  F: "#f4f3ff",
  G: "#fff4ea",
  K: "#ffd2a1",
  M: "#ffaa66",
  W: "#8ec8ff",
  D: "#dce6f0",
  N: "#c4d0ff",
  L: "#ff8a4c",
  C: "#ffb38a",
};

export const SPECTRAL_BG: Record<SpectralClass, string> = {
  O: "bg-spectral-o",
  B: "bg-spectral-b",
  A: "bg-spectral-a",
  F: "bg-spectral-f",
  G: "bg-spectral-g",
  K: "bg-spectral-k",
  M: "bg-spectral-m",
  W: "bg-spectral-w",
  D: "bg-spectral-d",
  N: "bg-spectral-n",
  L: "bg-spectral-l",
  C: "bg-spectral-c",
};

export const SPECTRAL_TEXT: Record<SpectralClass, string> = {
  O: "text-spectral-o",
  B: "text-spectral-b",
  A: "text-spectral-a",
  F: "text-spectral-f",
  G: "text-spectral-g",
  K: "text-spectral-k",
  M: "text-spectral-m",
  W: "text-spectral-w",
  D: "text-spectral-d",
  N: "text-spectral-n",
  L: "text-spectral-l",
  C: "text-spectral-c",
};

export const SPECTRAL_CLASSES: SpectralInfo[] = [
  {
    class: "O",
    name: "O — Blue",
    colorName: "Blue",
    tempRange: "≥ 30,000 K",
    tempK: [30000, 50000],
    specimen: "naos",
    summary:
      "The rarest of the classical sequence. O stars are massive, short-lived, and flood their neighborhoods with ultraviolet light that carves bubbles in the interstellar medium.",
  },
  {
    class: "B",
    name: "B — Blue-white",
    colorName: "Blue-white",
    tempRange: "10,000–30,000 K",
    tempK: [10000, 30000],
    specimen: "rigel",
    summary:
      "Hot, luminous, and common in young associations. Many of the night sky’s brightest beacons — Rigel, Spica, Regulus — burn in class B.",
  },
  {
    class: "A",
    name: "A — White",
    colorName: "White",
    tempRange: "7,500–10,000 K",
    tempK: [7500, 10000],
    specimen: "sirius",
    summary:
      "White stars with strong hydrogen lines. Sirius, Vega, and Altair — three of the navigational pillars of the sky — are A-type dwarfs.",
  },
  {
    class: "F",
    name: "F — Yellow-white",
    colorName: "Yellow-white",
    tempRange: "6,000–7,500 K",
    tempK: [6000, 7500],
    specimen: "procyon",
    summary:
      "A bridge between the hot white stars and the Sun-like G class. Procyon and Polaris sit here, one nearby, one a yellow-white supergiant at the pole.",
  },
  {
    class: "G",
    name: "G — Yellow",
    colorName: "Yellow",
    tempRange: "5,200–6,000 K",
    tempK: [5200, 6000],
    specimen: "sun",
    summary:
      "The Sun’s class. G dwarfs are long-lived and common in the thin disk; their spectra are a forest of metal lines against a yellow continuum.",
  },
  {
    class: "K",
    name: "K — Orange",
    colorName: "Orange",
    tempRange: "3,700–5,200 K",
    tempK: [3700, 5200],
    specimen: "arcturus",
    summary:
      "Cooler than the Sun, whether as orange dwarfs like Epsilon Eridani or as the great giants Arcturus and Aldebaran that dominate autumn evenings.",
  },
  {
    class: "M",
    name: "M — Red",
    colorName: "Red",
    tempRange: "2,400–3,700 K",
    tempK: [2400, 3700],
    specimen: "betelgeuse",
    summary:
      "The most common stars in the Galaxy are M dwarfs, too faint to see. The M stars that are famous are the other kind: swollen red giants and supergiants.",
  },
];

export const KIND_INFO: KindInfo[] = [
  {
    id: "main-sequence",
    label: "Main sequence",
    summary:
      "Stars fusing hydrogen in their cores — the long middle of a stellar life. The Sun, Sirius, and Proxima Centauri all sit on this sequence, at wildly different masses.",
  },
  {
    id: "subgiant",
    label: "Subgiant",
    summary:
      "Hydrogen in the core is exhausted. The star has begun to swell and cool, climbing off the main sequence toward the giant branch.",
  },
  {
    id: "giant",
    label: "Giant",
    summary:
      "Inflated envelopes around a shell of fusion. Orange and red giants like Arcturus are among the brightest nearby stars despite modest mass.",
  },
  {
    id: "bright-giant",
    label: "Bright giant",
    summary:
      "Luminosity class II: more luminous than ordinary giants, not yet the extreme of the supergiants. Adhara is a textbook example.",
  },
  {
    id: "supergiant",
    label: "Supergiant",
    summary:
      "Massive stars in late life, hundreds of solar radii across. Betelgeuse, Antares, Rigel, and Deneb light their constellations from this brief, unstable stage.",
  },
  {
    id: "hypergiant",
    label: "Hypergiant",
    summary:
      "The most luminous, most unstable stars known. They shed mass in vast winds and eruptions — VY Canis Majoris, RW Cephei, the Carina monsters.",
  },
  {
    id: "white-dwarf",
    label: "White dwarf",
    summary:
      "The exposed core of a Sun-like star, Earth-sized and cooling for billions of years. Sirius B and Van Maanen’s Star are nearby specimens.",
  },
  {
    id: "neutron-star",
    label: "Neutron star",
    summary:
      "The collapsed remnant of a massive-star supernova, a city-sized sphere of degenerate neutrons. The Crab Pulsar still flashes 30 times a second.",
  },
  {
    id: "wolf-rayet",
    label: "Wolf–Rayet",
    summary:
      "Stripped, helium-burning giants with dense stellar winds. Their spectra are emission-line fireworks; R136a1 and Gamma Velorum belong here.",
  },
  {
    id: "luminous-blue-variable",
    label: "Luminous blue variable",
    summary:
      "Rare, eruptive hypergiants that swing in brightness and spectrum. Eta Carinae’s 19th-century Great Eruption made it briefly the second-brightest star in the sky.",
  },
];

export const KIND_LABEL: Record<StarKind, string> = Object.fromEntries(
  KIND_INFO.map((k) => [k.id, k.label]),
) as Record<StarKind, string>;

export const NOTABLE_LABEL: Record<string, string> = {
  nearest: "Nearest",
  brightest: "Brightest",
  navigational: "Navigational",
  variable: "Variable",
  binary: "Binary",
  historical: "Historical",
  extreme: "Extreme",
  "north-star": "Pole star",
};

export function spectralVar(cls: SpectralClass): string {
  return `--color-spectral-${cls.toLowerCase()}`;
}
