import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-CCAolKQW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-[opacity,transform,background-color,box-shadow,color] duration-150 ease-out disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-fg hover:opacity-90",
			secondary: "bg-bg-elevated text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			ghost: "text-muted hover:bg-bg-subtle hover:text-fg",
			outline: "text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)] hover:bg-bg-subtle"
		},
		size: {
			sm: "h-9 rounded-sm px-3 text-sm",
			md: "h-11 rounded-md px-4 text-sm",
			lg: "h-12 rounded-md px-5 text-base",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var NAV = [
	{
		to: "/atlas",
		label: "Atlas"
	},
	{
		to: "/planets",
		label: "Planets"
	},
	{
		to: "/moons",
		label: "Moons"
	},
	{
		to: "/nebulae",
		label: "Nebulae"
	},
	{
		to: "/sky",
		label: "Sky"
	},
	{
		to: "/classes",
		label: "Classes"
	},
	{
		to: "/constellations",
		label: "Constellations"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "relative z-30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5 text-fg",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-8 place-items-center rounded-sm bg-bg-elevated shadow-[var(--shadow-border)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							viewBox: "0 0 16 16",
							className: "size-4",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								fill: "currentColor",
								d: "M8 1.2 8.9 6.2 14 8 8.9 9.8 8 14.8 7.1 9.8 2 8 7.1 6.2Z"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl tracking-tight",
						children: "Astrion"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-0.5 overflow-x-auto md:flex",
					"aria-label": "Primary",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "shrink-0 rounded-sm px-2 py-2 text-sm text-muted transition-colors duration-150 hover:text-fg",
						activeProps: { className: "text-fg" },
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "md:hidden",
					"aria-expanded": open,
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("md:hidden overflow-hidden border-t border-border bg-bg/95 transition-[max-height,opacity] duration-200 ease-out", open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col px-4 py-3",
				"aria-label": "Mobile",
				children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					className: "flex min-h-11 items-center text-base text-muted",
					activeProps: { className: "text-fg" },
					children: item.label
				}, item.to))
			})
		})]
	});
}
var SPECTRAL_HEX = {
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
	C: "#ffb38a"
};
var SPECTRAL_BG = {
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
	C: "bg-spectral-c"
};
var SPECTRAL_TEXT = {
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
	C: "text-spectral-c"
};
var SPECTRAL_CLASSES = [
	{
		class: "O",
		name: "O — Blue",
		colorName: "Blue",
		tempRange: "≥ 30,000 K",
		tempK: [3e4, 5e4],
		specimen: "naos",
		summary: "The rarest of the classical sequence. O stars are massive, short-lived, and flood their neighborhoods with ultraviolet light that carves bubbles in the interstellar medium."
	},
	{
		class: "B",
		name: "B — Blue-white",
		colorName: "Blue-white",
		tempRange: "10,000–30,000 K",
		tempK: [1e4, 3e4],
		specimen: "rigel",
		summary: "Hot, luminous, and common in young associations. Many of the night sky’s brightest beacons — Rigel, Spica, Regulus — burn in class B."
	},
	{
		class: "A",
		name: "A — White",
		colorName: "White",
		tempRange: "7,500–10,000 K",
		tempK: [7500, 1e4],
		specimen: "sirius",
		summary: "White stars with strong hydrogen lines. Sirius, Vega, and Altair — three of the navigational pillars of the sky — are A-type dwarfs."
	},
	{
		class: "F",
		name: "F — Yellow-white",
		colorName: "Yellow-white",
		tempRange: "6,000–7,500 K",
		tempK: [6e3, 7500],
		specimen: "procyon",
		summary: "A bridge between the hot white stars and the Sun-like G class. Procyon and Polaris sit here, one nearby, one a yellow-white supergiant at the pole."
	},
	{
		class: "G",
		name: "G — Yellow",
		colorName: "Yellow",
		tempRange: "5,200–6,000 K",
		tempK: [5200, 6e3],
		specimen: "sun",
		summary: "The Sun’s class. G dwarfs are long-lived and common in the thin disk; their spectra are a forest of metal lines against a yellow continuum."
	},
	{
		class: "K",
		name: "K — Orange",
		colorName: "Orange",
		tempRange: "3,700–5,200 K",
		tempK: [3700, 5200],
		specimen: "arcturus",
		summary: "Cooler than the Sun, whether as orange dwarfs like Epsilon Eridani or as the great giants Arcturus and Aldebaran that dominate autumn evenings."
	},
	{
		class: "M",
		name: "M — Red",
		colorName: "Red",
		tempRange: "2,400–3,700 K",
		tempK: [2400, 3700],
		specimen: "betelgeuse",
		summary: "The most common stars in the Galaxy are M dwarfs, too faint to see. The M stars that are famous are the other kind: swollen red giants and supergiants."
	}
];
var KIND_INFO = [
	{
		id: "main-sequence",
		label: "Main sequence",
		summary: "Stars fusing hydrogen in their cores — the long middle of a stellar life. The Sun, Sirius, and Proxima Centauri all sit on this sequence, at wildly different masses."
	},
	{
		id: "subgiant",
		label: "Subgiant",
		summary: "Hydrogen in the core is exhausted. The star has begun to swell and cool, climbing off the main sequence toward the giant branch."
	},
	{
		id: "giant",
		label: "Giant",
		summary: "Inflated envelopes around a shell of fusion. Orange and red giants like Arcturus are among the brightest nearby stars despite modest mass."
	},
	{
		id: "bright-giant",
		label: "Bright giant",
		summary: "Luminosity class II: more luminous than ordinary giants, not yet the extreme of the supergiants. Adhara is a textbook example."
	},
	{
		id: "supergiant",
		label: "Supergiant",
		summary: "Massive stars in late life, hundreds of solar radii across. Betelgeuse, Antares, Rigel, and Deneb light their constellations from this brief, unstable stage."
	},
	{
		id: "hypergiant",
		label: "Hypergiant",
		summary: "The most luminous, most unstable stars known. They shed mass in vast winds and eruptions — VY Canis Majoris, RW Cephei, the Carina monsters."
	},
	{
		id: "white-dwarf",
		label: "White dwarf",
		summary: "The exposed core of a Sun-like star, Earth-sized and cooling for billions of years. Sirius B and Van Maanen’s Star are nearby specimens."
	},
	{
		id: "neutron-star",
		label: "Neutron star",
		summary: "The collapsed remnant of a massive-star supernova, a city-sized sphere of degenerate neutrons. The Crab Pulsar still flashes 30 times a second."
	},
	{
		id: "wolf-rayet",
		label: "Wolf–Rayet",
		summary: "Stripped, helium-burning giants with dense stellar winds. Their spectra are emission-line fireworks; R136a1 and Gamma Velorum belong here."
	},
	{
		id: "luminous-blue-variable",
		label: "Luminous blue variable",
		summary: "Rare, eruptive hypergiants that swing in brightness and spectrum. Eta Carinae’s 19th-century Great Eruption made it briefly the second-brightest star in the sky."
	}
];
var KIND_LABEL = Object.fromEntries(KIND_INFO.map((k) => [k.id, k.label]));
var NOTABLE_LABEL = {
	nearest: "Nearest",
	brightest: "Brightest",
	navigational: "Navigational",
	variable: "Variable",
	binary: "Binary",
	historical: "Historical",
	extreme: "Extreme",
	"north-star": "Pole star"
};
function spectralVar(cls) {
	return `--color-spectral-${cls.toLowerCase()}`;
}
var PLANET_HEX = {
	mercury: "#9a9590",
	venus: "#e4d6b8",
	earth: "#6b8cae",
	mars: "#c4845a",
	jupiter: "#d2c3a6",
	saturn: "#d5ccb4",
	uranus: "#9bb8c4",
	neptune: "#4d6d9a",
	pluto: "#c4b8ae",
	ceres: "#b3aea6",
	ice: "#c5d4dc",
	lava: "#c4785a",
	haze: "#c9b89a",
	ocean: "#5f8aa8"
};
var PLANET_BG = {
	mercury: "bg-planet-mercury",
	venus: "bg-planet-venus",
	earth: "bg-planet-earth",
	mars: "bg-planet-mars",
	jupiter: "bg-planet-jupiter",
	saturn: "bg-planet-saturn",
	uranus: "bg-planet-uranus",
	neptune: "bg-planet-neptune",
	pluto: "bg-planet-pluto",
	ceres: "bg-planet-ceres",
	ice: "bg-planet-ice",
	lava: "bg-planet-lava",
	haze: "bg-planet-haze",
	ocean: "bg-planet-ocean"
};
var PLANET_KIND_INFO = [
	{
		id: "terrestrial",
		label: "Terrestrial",
		summary: "Rocky worlds with solid surfaces — Mercury, Venus, Earth, Mars, and their cousins around other suns."
	},
	{
		id: "gas-giant",
		label: "Gas giant",
		summary: "Hydrogen-helium worlds without a solid surface. Jupiter and Saturn set the type; hot Jupiters are the close-in version."
	},
	{
		id: "ice-giant",
		label: "Ice giant",
		summary: "Uranus and Neptune: envelopes of hydrogen over mantles of water, ammonia, and methane ices."
	},
	{
		id: "dwarf",
		label: "Dwarf planet",
		summary: "Round enough to be worlds, not massive enough to clear their orbits. Pluto, Ceres, Eris, and the rest of the belt and disc."
	},
	{
		id: "super-earth",
		label: "Super-Earth",
		summary: "Rocky or water-rich planets larger than Earth and smaller than Neptune — the most common class in the exoplanet census."
	},
	{
		id: "hot-jupiter",
		label: "Hot Jupiter",
		summary: "Gas giants parked a few stellar radii from their stars, bloated and irradiated, often the first to be found."
	},
	{
		id: "mini-neptune",
		label: "Mini-Neptune",
		summary: "Worlds with thick volatile envelopes on cores a few times Earth’s mass. None exist in the Solar System."
	}
];
var PLANET_KIND_LABEL = Object.fromEntries(PLANET_KIND_INFO.map((k) => [k.id, k.label]));
var PLANET_TAG_LABEL = {
	"habitable-zone": "Habitable zone",
	rings: "Rings",
	life: "Known life",
	first: "First of its kind",
	extreme: "Extreme",
	visited: "Visited",
	transiting: "Transiting",
	imaged: "Directly imaged"
};
var DISCOVERY_INFO = [
	{
		id: "visual",
		label: "Seen in the sky",
		summary: "Naked-eye or telescope. The Solar System was mapped this way."
	},
	{
		id: "transit",
		label: "Transit",
		summary: "The planet crosses its star and the light dips. Kepler, TESS, and JWST live here."
	},
	{
		id: "radial-velocity",
		label: "Radial velocity",
		summary: "The star wobbles. The first exoplanets around Sun-like stars were weighed this way."
	},
	{
		id: "imaging",
		label: "Direct image",
		summary: "A planet photographed beside its star — young, wide, and still glowing from formation."
	},
	{
		id: "timing",
		label: "Timing",
		summary: "Pulse delays around a pulsar. The first confirmed planets beyond the Sun."
	}
];
var DISCOVERY_LABEL = Object.fromEntries(DISCOVERY_INFO.map((d) => [d.id, d.label]));
var PLANET_KIND_HEX = {
	terrestrial: "#6b8cae",
	"gas-giant": "#d2c3a6",
	"ice-giant": "#4d6d9a",
	dwarf: "#c4b8ae",
	"super-earth": "#e4d6b8",
	"hot-jupiter": "#c4785a",
	"mini-neptune": "#c9b89a"
};
function discoveryOf(planet) {
	if (planet.discoveryMethod) return planet.discoveryMethod;
	if (planet.notable.includes("imaged")) return "imaging";
	if (planet.notable.includes("transiting")) return "transit";
	if (planet.solar) return "visual";
	if (planet.hostName.includes("PSR") || planet.slug.startsWith("psr")) return "timing";
	return "radial-velocity";
}
var PLANETS = [
	{
		slug: "mercury",
		name: "Mercury",
		designation: "Sol I",
		kind: "terrestrial",
		solar: true,
		hostSlug: "sun",
		hostName: "The Sun",
		palette: "mercury",
		au: .387,
		periodDays: 87.97,
		radiusEarth: .383,
		massEarth: .055,
		temperatureK: 440,
		moons: 0,
		discovered: "Antiquity",
		summary: "The innermost planet: a cratered, iron-rich world that races around the Sun in 88 days and bakes on one face while the other drops below −170 °C.",
		facts: [
			"A day on Mercury (sunrise to sunrise) lasts 176 Earth days.",
			"Its iron core takes up about 85% of the radius — a relic of a stripped mantle, or of a very metal-rich birth.",
			"MESSENGER mapped it from 2011–15; BepiColombo is on the way."
		],
		notable: ["visited", "extreme"]
	},
	{
		slug: "venus",
		name: "Venus",
		designation: "Sol II",
		kind: "terrestrial",
		solar: true,
		hostSlug: "sun",
		hostName: "The Sun",
		palette: "venus",
		au: .723,
		periodDays: 224.7,
		radiusEarth: .949,
		massEarth: .815,
		temperatureK: 737,
		moons: 0,
		discovered: "Antiquity",
		summary: "Earth’s twin in size, and its opposite in climate. A runaway greenhouse of carbon dioxide and sulfuric clouds keeps the surface hotter than Mercury, at 90 atmospheres.",
		facts: [
			"Rotates backward, once every 243 Earth days — longer than its year.",
			"The hottest planetary surface in the Solar System.",
			"Soviet Venera landers survived minutes on the ground in the 1970s and 80s."
		],
		notable: ["visited", "extreme"]
	},
	{
		slug: "earth",
		name: "Earth",
		designation: "Sol III",
		kind: "terrestrial",
		solar: true,
		hostSlug: "sun",
		hostName: "The Sun",
		palette: "earth",
		au: 1,
		periodDays: 365.25,
		radiusEarth: 1,
		massEarth: 1,
		temperatureK: 288,
		moons: 1,
		discovered: "—",
		summary: "The only world known to host life. A silicate planet with a magnetic field, plate tectonics, and an ocean that has persisted for four billion years in the Sun’s habitable zone.",
		facts: [
			"71% of the surface is ocean; the rest is seven continents on moving plates.",
			"The Moon stabilises the tilt that makes the seasons.",
			"Every other planet in this atlas is measured against it."
		],
		notable: [
			"life",
			"habitable-zone",
			"visited"
		]
	},
	{
		slug: "mars",
		name: "Mars",
		designation: "Sol IV",
		kind: "terrestrial",
		solar: true,
		hostSlug: "sun",
		hostName: "The Sun",
		palette: "mars",
		au: 1.524,
		periodDays: 687,
		radiusEarth: .532,
		massEarth: .107,
		temperatureK: 210,
		moons: 2,
		discovered: "Antiquity",
		summary: "The rusted world. Once wetter, with rivers and a thicker air; now a cold desert of iron oxide, polar ice, and the tallest volcano in the Solar System.",
		facts: [
			"Olympus Mons stands 22 km high; Valles Marineris would span a continent.",
			"Two captured asteroids, Phobos and Deimos, serve as moons.",
			"Rovers have found ancient lakebeds and organic molecules, not yet life."
		],
		notable: ["visited", "habitable-zone"]
	},
	{
		slug: "jupiter",
		name: "Jupiter",
		designation: "Sol V",
		kind: "gas-giant",
		solar: true,
		hostSlug: "sun",
		hostName: "The Sun",
		palette: "jupiter",
		au: 5.203,
		periodDays: 4332.6,
		radiusEarth: 11.21,
		massEarth: 317.8,
		temperatureK: 165,
		moons: 95,
		discovered: "Antiquity",
		summary: "The Solar System’s failed star: a hydrogen-helium giant that swallowed most of the leftover disk. Its Great Red Spot is an anticyclone older than any living person.",
		facts: [
			"Contains more than twice the mass of all the other planets combined.",
			"The Galilean moons — Io, Europa, Ganymede, Callisto — are worlds in their own right.",
			"A faint ring system was found by Voyager 1 in 1979."
		],
		notable: ["visited", "rings"]
	},
	{
		slug: "saturn",
		name: "Saturn",
		designation: "Sol VI",
		kind: "gas-giant",
		solar: true,
		hostSlug: "sun",
		hostName: "The Sun",
		palette: "saturn",
		au: 9.537,
		periodDays: 10759,
		radiusEarth: 9.45,
		massEarth: 95.16,
		temperatureK: 134,
		moons: 146,
		discovered: "Antiquity",
		rings: true,
		summary: "The ringed planet. A gas giant so light it would float in a sufficiently large ocean, wrapped in ice-and-rock rings that are the Solar System’s most famous ornament.",
		facts: [
			"The main rings span about 280,000 km and are only tens of metres thick.",
			"Titan has a thick nitrogen atmosphere and lakes of methane.",
			"Cassini orbited for 13 years and ended in the atmosphere in 2017."
		],
		notable: ["visited", "rings"]
	},
	{
		slug: "uranus",
		name: "Uranus",
		designation: "Sol VII",
		kind: "ice-giant",
		solar: true,
		hostSlug: "sun",
		hostName: "The Sun",
		palette: "uranus",
		au: 19.191,
		periodDays: 30687,
		radiusEarth: 4.01,
		massEarth: 14.54,
		temperatureK: 76,
		moons: 28,
		discovered: "1781",
		rings: true,
		summary: "The sideways ice giant, rolled onto its side by an ancient impact. Methane in the haze makes it pale green-blue. William Herschel found it in 1781 — the first planet added in modern times.",
		facts: [
			"The axis tilts 98°, so each pole spends 42 years in sunlight, then 42 in night.",
			"Narrow dark rings were found in 1977 during a stellar occultation.",
			"Voyager 2 is still the only spacecraft to have visited, in 1986."
		],
		notable: [
			"visited",
			"rings",
			"first"
		]
	},
	{
		slug: "neptune",
		name: "Neptune",
		designation: "Sol VIII",
		kind: "ice-giant",
		solar: true,
		hostSlug: "sun",
		hostName: "The Sun",
		palette: "neptune",
		au: 30.07,
		periodDays: 60190,
		radiusEarth: 3.88,
		massEarth: 17.15,
		temperatureK: 72,
		moons: 16,
		discovered: "1846",
		rings: true,
		summary: "The outermost planet, predicted from Uranus’s wanderings before it was seen. A deep blue ice giant with the fastest winds in the Solar System, and Triton as a captured Kuiper-belt world.",
		facts: [
			"Discovered by Galle in 1846 from Le Verrier’s calculation.",
			"Winds exceed 2,000 km/h; a Great Dark Spot came and went between Voyager and Hubble.",
			"Triton orbits backward and is slowly spiralling in."
		],
		notable: [
			"visited",
			"rings",
			"first"
		]
	},
	{
		slug: "pluto",
		name: "Pluto",
		designation: "134340 Pluto",
		kind: "dwarf",
		solar: true,
		hostSlug: "sun",
		hostName: "The Sun",
		palette: "pluto",
		au: 39.48,
		periodDays: 90560,
		radiusEarth: .186,
		massEarth: .0022,
		temperatureK: 44,
		moons: 5,
		discovered: "1930",
		summary: "The first of the Kuiper-belt worlds, found by Tombaugh in 1930 and reclassified as a dwarf planet in 2006. New Horizons showed a heart of nitrogen ice and mountains of water ice.",
		facts: [
			"Charon is so large the two barycentre-dance outside Pluto’s body.",
			"The orbit is eccentric and tilted; Pluto is closer than Neptune for 20 years of each 248-year circuit.",
			"Sputnik Planitia, the bright heart, is a convecting nitrogen glacier."
		],
		notable: ["visited", "first"]
	},
	{
		slug: "ceres",
		name: "Ceres",
		designation: "1 Ceres",
		kind: "dwarf",
		solar: true,
		hostSlug: "sun",
		hostName: "The Sun",
		palette: "ceres",
		au: 2.77,
		periodDays: 1682,
		radiusEarth: .074,
		massEarth: 15e-5,
		temperatureK: 168,
		moons: 0,
		discovered: "1801",
		summary: "The largest body in the asteroid belt and the only dwarf planet of the inner system. Dawn found bright salt deposits in Occator crater — brine that still seeps.",
		facts: [
			"Discovered by Piazzi on the first day of the 19th century.",
			"Contains about a third of the asteroid belt’s mass.",
			"A relic ocean world: ice in the crust, salts at the surface."
		],
		notable: ["visited", "first"]
	},
	{
		slug: "eris",
		name: "Eris",
		designation: "136199 Eris",
		kind: "dwarf",
		solar: true,
		hostSlug: "sun",
		hostName: "The Sun",
		palette: "ice",
		au: 67.9,
		periodDays: 204960,
		radiusEarth: .183,
		massEarth: .0028,
		temperatureK: 30,
		moons: 1,
		discovered: "2005",
		summary: "The scattered-disc world that dethroned Pluto. Slightly smaller, slightly heavier, and far colder, Eris forced the 2006 rewrite of what a planet is.",
		facts: [
			"Its moon Dysnomia let astronomers weigh it more accurately than Pluto at the time.",
			"Surface methane ice makes it one of the most reflective bodies known.",
			"Named for the Greek goddess of strife — aptly, given the classification fight."
		],
		notable: ["first", "extreme"]
	},
	{
		slug: "haumea",
		name: "Haumea",
		designation: "136108 Haumea",
		kind: "dwarf",
		solar: true,
		hostSlug: "sun",
		hostName: "The Sun",
		palette: "ice",
		au: 43.1,
		periodDays: 103774,
		radiusEarth: .12,
		massEarth: 66e-5,
		temperatureK: 50,
		moons: 2,
		discovered: "2004",
		rings: true,
		summary: "A stretched ice world spinning once every four hours, shaped like a rugby ball by that rotation. It has a ring and two moons, children of an ancient collision.",
		facts: [
			"The fastest-rotating large body in the Solar System.",
			"A family of icy fragments shares its orbit — the smash that made the shape.",
			"Named for the Hawaiian goddess of childbirth."
		],
		notable: ["rings", "extreme"]
	},
	{
		slug: "makemake",
		name: "Makemake",
		designation: "136472 Makemake",
		kind: "dwarf",
		solar: true,
		hostSlug: "sun",
		hostName: "The Sun",
		palette: "haze",
		au: 45.8,
		periodDays: 111845,
		radiusEarth: .12,
		massEarth: 5e-4,
		temperatureK: 32,
		moons: 1,
		discovered: "2005",
		summary: "A bright Kuiper-belt dwarf, second only to Pluto in apparent size from Earth. Methane and ethane ices redden its surface. A small moon was found in 2016.",
		facts: [
			"Named for the Rapa Nui creator of humanity.",
			"No atmosphere was detected during a 2011 stellar occultation.",
			"One of the five IAU-recognised dwarf planets."
		],
		notable: []
	},
	{
		slug: "proxima-b",
		name: "Proxima Centauri b",
		designation: "Proxima b",
		kind: "terrestrial",
		solar: false,
		hostSlug: "proxima-centauri",
		hostName: "Proxima Centauri",
		palette: "earth",
		au: .049,
		periodDays: 11.19,
		radiusEarth: 1.07,
		massEarth: 1.07,
		temperatureK: 234,
		moons: 0,
		discovered: "2016",
		summary: "The nearest exoplanet, a roughly Earth-mass world in the habitable zone of a flare-prone red dwarf. Whether it keeps an atmosphere under that radiation is still an open question.",
		facts: [
			"4.24 light-years away — the closest known planet around another star.",
			"Receives about 65% of Earth’s insolation, but in X-rays the flares are brutal.",
			"Found by radial velocity at the European Southern Observatory."
		],
		notable: ["habitable-zone", "first"]
	},
	{
		slug: "proxima-d",
		name: "Proxima Centauri d",
		designation: "Proxima d",
		kind: "terrestrial",
		solar: false,
		hostSlug: "proxima-centauri",
		hostName: "Proxima Centauri",
		palette: "mercury",
		au: .029,
		periodDays: 5.12,
		radiusEarth: .81,
		massEarth: .26,
		temperatureK: 360,
		moons: 0,
		discovered: "2022",
		summary: "A sub-Earth on a five-day orbit, one of the lightest exoplanets yet measured. Too close to Proxima for liquid water, it completes the inner architecture of the nearest system.",
		facts: [
			"Mass is about a quarter of Earth’s — among the smallest weighed around a red dwarf.",
			"Sits inside the habitable zone’s inner edge.",
			"Confirmed with ESPRESSO radial velocities."
		],
		notable: ["extreme"]
	},
	{
		slug: "51-pegasi-b",
		name: "51 Pegasi b",
		designation: "Dimidium",
		kind: "hot-jupiter",
		solar: false,
		hostSlug: null,
		hostName: "51 Pegasi",
		palette: "jupiter",
		au: .0527,
		periodDays: 4.23,
		radiusEarth: 13.4,
		massEarth: 150,
		temperatureK: 1284,
		moons: 0,
		discovered: "1995",
		summary: "The first planet found around a Sun-like star. A hot Jupiter on a four-day orbit, it broke the textbooks and opened the radial-velocity flood. IAU name: Dimidium.",
		facts: [
			"Mayor and Queloz announced it in 1995; they shared the 2019 Nobel Prize.",
			"The star is a G-type dwarf 50 light-years away in Pegasus.",
			"Its existence proved giant planets can migrate inward."
		],
		notable: ["first", "extreme"]
	},
	{
		slug: "hd-209458-b",
		name: "HD 209458 b",
		designation: "Osiris",
		kind: "hot-jupiter",
		solar: false,
		hostSlug: null,
		hostName: "HD 209458",
		palette: "haze",
		au: .047,
		periodDays: 3.52,
		radiusEarth: 15.1,
		massEarth: 220,
		temperatureK: 1450,
		moons: 0,
		discovered: "1999",
		summary: "The first transiting exoplanet, and the first with a detected atmosphere. Hydrogen is boiling off into space, leaving a comet-like tail. Informal name: Osiris.",
		facts: [
			"The 1999 transit turned exoplanets from wobbles into measured radii.",
			"Sodium, water, and escaping hydrogen have been seen in the spectrum.",
			"The inflated radius is typical of highly irradiated giants."
		],
		notable: [
			"first",
			"transiting",
			"extreme"
		]
	},
	{
		slug: "hd-189733-b",
		name: "HD 189733 b",
		designation: "HD 189733 b",
		kind: "hot-jupiter",
		solar: false,
		hostSlug: null,
		hostName: "HD 189733",
		palette: "neptune",
		au: .031,
		periodDays: 2.22,
		radiusEarth: 12.8,
		massEarth: 365,
		temperatureK: 1200,
		moons: 0,
		discovered: "2005",
		summary: "A deep-blue hot Jupiter 64 light-years away, coloured by silicate haze. Its weather includes molten-glass rain blown sideways at several thousand kilometres an hour.",
		facts: [
			"One of the nearest transiting hot Jupiters, a favourite of Hubble and JWST.",
			"The blue comes from scattering in high-altitude silicate particles, not ocean.",
			"The host is a K dwarf in Vulpecula, visible in binoculars."
		],
		notable: ["transiting", "extreme"]
	},
	{
		slug: "wasp-12b",
		name: "WASP-12b",
		designation: "WASP-12b",
		kind: "hot-jupiter",
		solar: false,
		hostSlug: null,
		hostName: "WASP-12",
		palette: "lava",
		au: .0234,
		periodDays: 1.09,
		radiusEarth: 21.7,
		massEarth: 450,
		temperatureK: 2500,
		moons: 0,
		discovered: "2008",
		summary: "A planet being eaten. WASP-12b orbits so close that the star’s gravity has stretched it into an egg and is stripping its atmosphere on a million-year timer.",
		facts: [
			"Orbital period is just 26 hours.",
			"The equilibrium temperature is high enough to melt iron.",
			"Tidal decay has been measured; the planet is spiralling in."
		],
		notable: ["transiting", "extreme"]
	},
	{
		slug: "55-cancri-e",
		name: "55 Cancri e",
		designation: "Janssen",
		kind: "super-earth",
		solar: false,
		hostSlug: null,
		hostName: "55 Cancri",
		palette: "lava",
		au: .0154,
		periodDays: .74,
		radiusEarth: 1.88,
		massEarth: 7.99,
		temperatureK: 2700,
		moons: 0,
		discovered: "2004",
		summary: "A super-Earth on an 18-hour orbit, hot enough that the dayside may be a magma ocean. Early claims of a carbon-diamond interior have cooled; lava and a thin atmosphere remain.",
		facts: [
			"IAU name Janssen, after the telescope pioneer.",
			"JWST has reported a possible carbon-rich atmosphere, still debated.",
			"The host is a naked-eye binary in Cancer, 41 light-years away."
		],
		notable: ["transiting", "extreme"]
	},
	{
		slug: "gj-1214-b",
		name: "GJ 1214 b",
		designation: "GJ 1214 b",
		kind: "mini-neptune",
		solar: false,
		hostSlug: null,
		hostName: "GJ 1214",
		palette: "haze",
		au: .014,
		periodDays: 1.58,
		radiusEarth: 2.74,
		massEarth: 8.2,
		temperatureK: 530,
		moons: 0,
		discovered: "2009",
		summary: "The prototype mini-Neptune: a water-rich world wrapped in a hazy envelope, too puffy to be rock, too small to be Neptune. JWST finally peered through the haze to steam.",
		facts: [
			"Orbits a faint M dwarf 48 light-years away in Ophiuchus.",
			"The atmosphere is likely a high-metallicity mix of steam and hydrogen.",
			"A benchmark for the most common planet size Kepler found."
		],
		notable: ["transiting", "first"]
	},
	{
		slug: "k2-18b",
		name: "K2-18b",
		designation: "K2-18b",
		kind: "mini-neptune",
		solar: false,
		hostSlug: null,
		hostName: "K2-18",
		palette: "ocean",
		au: .143,
		periodDays: 33,
		radiusEarth: 2.61,
		massEarth: 8.6,
		temperatureK: 265,
		moons: 0,
		discovered: "2015",
		summary: "A temperate sub-Neptune in the habitable zone of a red dwarf 124 light-years away. JWST found methane and carbon dioxide; a claimed DMS biosignature remains unconfirmed.",
		facts: [
			"May be a hycean world — a hydrogen atmosphere over a global ocean — or a mini-Neptune without a surface.",
			"Sits in the star’s habitable zone but is much larger than Earth.",
			"The biosignature debate made it one of the most watched targets of 2023–25."
		],
		notable: ["habitable-zone", "transiting"]
	},
	{
		slug: "kepler-22b",
		name: "Kepler-22b",
		designation: "Kepler-22b",
		kind: "super-earth",
		solar: false,
		hostSlug: null,
		hostName: "Kepler-22",
		palette: "ocean",
		au: .85,
		periodDays: 289.9,
		radiusEarth: 2.4,
		massEarth: 9,
		temperatureK: 262,
		moons: 0,
		discovered: "2011",
		summary: "Kepler’s first confirmed habitable-zone transiting planet around a Sun-like star. A super-Earth or mini-Neptune 635 light-years away, it became the public face of the Kepler haul.",
		facts: [
			"Year is 290 days around a G-type dwarf slightly smaller than the Sun.",
			"Radius is firm; mass is only loosely bounded, so composition is open.",
			"Announced in 2011 as Kepler’s first habitable-zone catch."
		],
		notable: [
			"habitable-zone",
			"transiting",
			"first"
		]
	},
	{
		slug: "kepler-186f",
		name: "Kepler-186f",
		designation: "Kepler-186f",
		kind: "terrestrial",
		solar: false,
		hostSlug: null,
		hostName: "Kepler-186",
		palette: "mars",
		au: .36,
		periodDays: 129.9,
		radiusEarth: 1.17,
		massEarth: 1.4,
		temperatureK: 188,
		moons: 0,
		discovered: "2014",
		summary: "The first Earth-sized planet found in a habitable zone. It orbits a red dwarf 580 light-years away and receives about a third of Earth’s light — a cooler, dimmer cousin.",
		facts: [
			"Radius is 1.17 Earths; mass is estimated, not measured.",
			"The outer of five known planets in the Kepler-186 system.",
			"A milestone: Earth-size plus habitable-zone, not a bloated super-Earth."
		],
		notable: [
			"habitable-zone",
			"transiting",
			"first"
		]
	},
	{
		slug: "kepler-452b",
		name: "Kepler-452b",
		designation: "Kepler-452b",
		kind: "super-earth",
		solar: false,
		hostSlug: null,
		hostName: "Kepler-452",
		palette: "earth",
		au: 1.05,
		periodDays: 384.8,
		radiusEarth: 1.6,
		massEarth: 5,
		temperatureK: 265,
		moons: 0,
		discovered: "2015",
		summary: "Often nicknamed Earth’s cousin: a 385-day orbit around a G-type star 1,800 light-years away. Larger than Earth, it may be a super-Earth rather than a true twin.",
		facts: [
			"The host is 1.5 billion years older than the Sun.",
			"Insolation is only a little higher than Earth’s.",
			"Planet mass is inferred from radius, not from a wobble."
		],
		notable: ["habitable-zone", "transiting"]
	},
	{
		slug: "trappist-1e",
		name: "TRAPPIST-1e",
		designation: "TRAPPIST-1e",
		kind: "terrestrial",
		solar: false,
		hostSlug: null,
		hostName: "TRAPPIST-1",
		palette: "earth",
		au: .029,
		periodDays: 6.1,
		radiusEarth: .92,
		massEarth: .69,
		temperatureK: 251,
		moons: 0,
		discovered: "2017",
		summary: "The most Earth-like of the seven-planet TRAPPIST-1 chain. A cool, dense rocky world in the habitable zone of an ultra-cool dwarf 40 light-years away in Aquarius.",
		facts: [
			"Seven Earth-sized planets orbit the same tiny star, packed closer than Mercury.",
			"TRAPPIST-1e is the densest of the set and the best current bet for surface water.",
			"JWST is watching for atmospheres; none is confirmed yet."
		],
		notable: ["habitable-zone", "transiting"]
	},
	{
		slug: "toi-700-d",
		name: "TOI-700 d",
		designation: "TOI-700 d",
		kind: "terrestrial",
		solar: false,
		hostSlug: null,
		hostName: "TOI-700",
		palette: "ocean",
		au: .163,
		periodDays: 37.4,
		radiusEarth: 1.19,
		massEarth: 1.7,
		temperatureK: 269,
		moons: 0,
		discovered: "2020",
		summary: "TESS’s first Earth-sized habitable-zone planet. It circles a quiet red dwarf 101 light-years away in Dorado, a kinder radiation environment than Proxima.",
		facts: [
			"Year is 37 days; insolation is close to Earth’s.",
			"The star is an M dwarf with relatively mild flares.",
			"A second habitable-zone planet, TOI-700 e, was added in 2023."
		],
		notable: [
			"habitable-zone",
			"transiting",
			"first"
		]
	},
	{
		slug: "lhs-1140-b",
		name: "LHS 1140 b",
		designation: "LHS 1140 b",
		kind: "super-earth",
		solar: false,
		hostSlug: null,
		hostName: "LHS 1140",
		palette: "ice",
		au: .087,
		periodDays: 24.7,
		radiusEarth: 1.73,
		massEarth: 5.6,
		temperatureK: 226,
		moons: 0,
		discovered: "2017",
		summary: "A dense super-Earth in the habitable zone of a quiet M dwarf 49 light-years away. JWST data hint at a nitrogen-rich atmosphere or a water world with a possible substellar ocean.",
		facts: [
			"Mass and radius imply a rocky bulk, perhaps with a thick water layer.",
			"The star is old and inactive, kinder than most M dwarfs.",
			"A 2024 analysis raised the possibility of a temperate ocean on the dayside."
		],
		notable: ["habitable-zone", "transiting"]
	},
	{
		slug: "tau-ceti-e",
		name: "Tau Ceti e",
		designation: "τ Cet e",
		kind: "super-earth",
		solar: false,
		hostSlug: "tau-ceti",
		hostName: "Tau Ceti",
		palette: "venus",
		au: .55,
		periodDays: 168,
		radiusEarth: 1.8,
		massEarth: 3.9,
		temperatureK: 340,
		moons: 0,
		discovered: "2012",
		summary: "A super-Earth candidate on the warm inner edge of Tau Ceti’s habitable zone, 12 light-years away. If real, it would be a Venus-like world around the nearest solitary G-class star.",
		facts: [
			"Detected in radial-velocity data; some analyses still debate the signal.",
			"Receives about 1.5 times Earth’s insolation.",
			"Tau Ceti’s debris disk implies a heavy bombardment environment."
		],
		notable: ["habitable-zone"]
	},
	{
		slug: "epsilon-eridani-b",
		name: "Epsilon Eridani b",
		designation: "AEgir",
		kind: "gas-giant",
		solar: false,
		hostSlug: "epsilon-eridani",
		hostName: "Epsilon Eridani",
		palette: "jupiter",
		au: 3.5,
		periodDays: 2670,
		radiusEarth: 12,
		massEarth: 240,
		temperatureK: 150,
		moons: 0,
		discovered: "2000",
		summary: "A Jupiter analog around a young K dwarf only 10.5 light-years away. IAU name AEgir. A dusty debris disk still surrounds the star, a Solar System in the making.",
		facts: [
			"One of the nearest giant planets to the Sun.",
			"Orbit is wide and likely eccentric; imaging has not yet resolved it cleanly.",
			"The debris belts are analogs of an asteroid belt and a Kuiper belt."
		],
		notable: ["first"]
	},
	{
		slug: "psr-b1257-12-b",
		name: "PSR B1257+12 b",
		designation: "Phobetor",
		kind: "super-earth",
		solar: false,
		hostSlug: null,
		hostName: "PSR B1257+12",
		palette: "ice",
		au: .36,
		periodDays: 66.5,
		radiusEarth: 1.5,
		massEarth: 4.3,
		temperatureK: null,
		moons: 0,
		discovered: "1992",
		summary: "One of the first planets ever confirmed beyond the Sun — not around a living star, but a millisecond pulsar. The system proved planets can survive, or be reborn after, a supernova.",
		facts: [
			"Wolszczan and Frail announced the pulsar planets in 1992, three years before 51 Pegasi b.",
			"IAU name Phobetor; two siblings are Draugr and Poltergeist.",
			"The pulsar’s timing is so precise the planets were weighed from pulse delays."
		],
		notable: ["first", "extreme"],
		discoveryMethod: "timing"
	},
	{
		slug: "trappist-1b",
		name: "TRAPPIST-1b",
		designation: "TRAPPIST-1b",
		kind: "terrestrial",
		solar: false,
		hostSlug: null,
		hostName: "TRAPPIST-1",
		palette: "lava",
		au: .0115,
		periodDays: 1.51,
		radiusEarth: 1.12,
		massEarth: 1.37,
		temperatureK: 400,
		moons: 0,
		discovered: "2016",
		summary: "The innermost of seven Earth-sized worlds packed around an ultra-cool dwarf 40 light-years away. Dayside is likely a baked rock; JWST has not found a thick atmosphere.",
		facts: [
			"Year is 36 hours. The chain is so tight the planets tug each other into lockstep.",
			"Receives about four times Earth’s insolation.",
			"A 2023 JWST look favoured a bare rock over a CO₂-rich air."
		],
		notable: ["transiting", "extreme"]
	},
	{
		slug: "trappist-1c",
		name: "TRAPPIST-1c",
		designation: "TRAPPIST-1c",
		kind: "terrestrial",
		solar: false,
		hostSlug: null,
		hostName: "TRAPPIST-1",
		palette: "venus",
		au: .0158,
		periodDays: 2.42,
		radiusEarth: 1.1,
		massEarth: 1.31,
		temperatureK: 342,
		moons: 0,
		discovered: "2016",
		summary: "A Venus analog in size and heat, second from the tiny star. Early JWST spectra suggest any atmosphere is thin — not the runaway greenhouse twin some expected.",
		facts: [
			"Radius and mass are both within 10% of Venus.",
			"The 2.4-day year is still inside the inner edge of the habitable zone.",
			"Part of the original 2016 TRAPPIST-South announcement."
		],
		notable: ["transiting"]
	},
	{
		slug: "trappist-1d",
		name: "TRAPPIST-1d",
		designation: "TRAPPIST-1d",
		kind: "terrestrial",
		solar: false,
		hostSlug: null,
		hostName: "TRAPPIST-1",
		palette: "mars",
		au: .0223,
		periodDays: 4.05,
		radiusEarth: .79,
		massEarth: .39,
		temperatureK: 288,
		moons: 0,
		discovered: "2016",
		summary: "The lightest of the seven, sitting on the warm inner rim of the habitable zone. Small enough that a hydrogen envelope would have been lost long ago.",
		facts: [
			"Mass is about 40% of Earth’s — closer to Mars than to Venus.",
			"Equilibrium temperature is near Earth’s, but the star is a flare factory.",
			"Transit timing variations weighed the whole chain."
		],
		notable: ["transiting", "habitable-zone"]
	},
	{
		slug: "trappist-1f",
		name: "TRAPPIST-1f",
		designation: "TRAPPIST-1f",
		kind: "terrestrial",
		solar: false,
		hostSlug: null,
		hostName: "TRAPPIST-1",
		palette: "ocean",
		au: .0385,
		periodDays: 9.21,
		radiusEarth: 1.05,
		massEarth: 1.04,
		temperatureK: 219,
		moons: 0,
		discovered: "2017",
		summary: "An Earth-mass world in the heart of TRAPPIST-1’s habitable zone. Cooler than Earth; if it kept water, much of it may be ice, with a possible temperate belt.",
		facts: [
			"Receives about 30% of Earth’s sunlight.",
			"Density is consistent with rock and a modest water layer.",
			"Announced with the outer four in the 2017 Nature paper."
		],
		notable: ["transiting", "habitable-zone"]
	},
	{
		slug: "trappist-1g",
		name: "TRAPPIST-1g",
		designation: "TRAPPIST-1g",
		kind: "terrestrial",
		solar: false,
		hostSlug: null,
		hostName: "TRAPPIST-1",
		palette: "ice",
		au: .0468,
		periodDays: 12.35,
		radiusEarth: 1.13,
		massEarth: 1.32,
		temperatureK: 199,
		moons: 0,
		discovered: "2017",
		summary: "The largest of the seven, just outside the conservative habitable zone. A cold Earth, or an ice world, depending on greenhouse gases that have not yet been seen.",
		facts: [
			"Radius is 13% larger than Earth; mass is about a third higher.",
			"Year is 12 days. The planets would loom large in one another’s skies.",
			"A candidate for a thick ice shell over a sub-surface ocean."
		],
		notable: ["transiting"]
	},
	{
		slug: "trappist-1h",
		name: "TRAPPIST-1h",
		designation: "TRAPPIST-1h",
		kind: "terrestrial",
		solar: false,
		hostSlug: null,
		hostName: "TRAPPIST-1",
		palette: "ice",
		au: .0619,
		periodDays: 18.77,
		radiusEarth: .76,
		massEarth: .33,
		temperatureK: 173,
		moons: 0,
		discovered: "2017",
		summary: "The outermost, a frozen mini-Earth on a 19-day orbit. Too cold for surface water unless a thick hydrogen blanket remains — unlikely for a world this small.",
		facts: [
			"The smallest and lightest of the seven.",
			"Completes the near-resonant chain that let astronomers weigh every planet.",
			"An analog of a packed inner Solar System that ours never kept."
		],
		notable: ["transiting"]
	},
	{
		slug: "toi-700-e",
		name: "TOI-700 e",
		designation: "TOI-700 e",
		kind: "terrestrial",
		solar: false,
		hostSlug: null,
		hostName: "TOI-700",
		palette: "earth",
		au: .134,
		periodDays: 27.8,
		radiusEarth: .95,
		massEarth: .85,
		temperatureK: 269,
		moons: 0,
		discovered: "2023",
		summary: "The second Earth-sized habitable-zone planet in the TOI-700 system, found after TESS stared longer. It sits inward of TOI-700 d around a quiet red dwarf.",
		facts: [
			"About 95% of Earth’s radius — as close to a twin as TESS has delivered.",
			"The star is 101 light-years away in Dorado.",
			"Two habitable-zone Earth-size worlds around the same quiet M dwarf."
		],
		notable: ["habitable-zone", "transiting"]
	},
	{
		slug: "proxima-c",
		name: "Proxima Centauri c",
		designation: "Proxima c",
		kind: "super-earth",
		solar: false,
		hostSlug: "proxima-centauri",
		hostName: "Proxima Centauri",
		palette: "ice",
		au: 1.49,
		periodDays: 1928,
		radiusEarth: 1.9,
		massEarth: 7,
		temperatureK: 39,
		moons: 0,
		discovered: "2020",
		summary: "A cold super-Earth (or mini-Neptune) on a five-year orbit around the nearest star. Far outside the habitable zone; any moons would be ice.",
		facts: [
			"Minimum mass is about seven Earths; the radius is estimated, not measured.",
			"A candidate for a dust belt and a possible ring system.",
			"The outer architecture of the nearest planetary system."
		],
		notable: ["extreme"]
	},
	{
		slug: "kepler-16b",
		name: "Kepler-16b",
		designation: "Kepler-16b",
		kind: "gas-giant",
		solar: false,
		hostSlug: null,
		hostName: "Kepler-16",
		palette: "saturn",
		au: .705,
		periodDays: 228.8,
		radiusEarth: 8.45,
		massEarth: 106,
		temperatureK: 200,
		moons: 0,
		discovered: "2011",
		rings: true,
		summary: "A Saturn analog that orbits two stars at once. The first confirmed circumbinary planet — a real Tatooine, 200 light-years away in Cygnus.",
		facts: [
			"The two suns are a K dwarf and a red dwarf eclipsing each other.",
			"Year is 229 days; sunsets would be double, and sometimes single.",
			"Proved that planets can form and survive in a binary’s circumbinary disk."
		],
		notable: [
			"transiting",
			"first",
			"rings"
		]
	},
	{
		slug: "kepler-10b",
		name: "Kepler-10b",
		designation: "Kepler-10b",
		kind: "terrestrial",
		solar: false,
		hostSlug: null,
		hostName: "Kepler-10",
		palette: "lava",
		au: .0168,
		periodDays: .838,
		radiusEarth: 1.47,
		massEarth: 3.72,
		temperatureK: 1833,
		moons: 0,
		discovered: "2011",
		summary: "Kepler’s first rocky planet: a lava world on a 20-hour orbit around a Sun-like star. Density says iron and silicate, not gas.",
		facts: [
			"The first Kepler planet with a measured rocky density.",
			"Dayside is hot enough to melt rock into a magma ocean.",
			"A sibling, Kepler-10c, sits farther out."
		],
		notable: [
			"transiting",
			"first",
			"extreme"
		]
	},
	{
		slug: "corot-7b",
		name: "CoRoT-7b",
		designation: "CoRoT-7b",
		kind: "terrestrial",
		solar: false,
		hostSlug: null,
		hostName: "CoRoT-7",
		palette: "lava",
		au: .0172,
		periodDays: .854,
		radiusEarth: 1.58,
		massEarth: 4.8,
		temperatureK: 1800,
		moons: 0,
		discovered: "2009",
		summary: "The first super-Earth with a measured radius. A tidally locked lava world found by the CoRoT satellite, years before Kepler’s rocky haul.",
		facts: [
			"Discovered in 2009; the radius came from transit, the mass from wobble.",
			"One face may be a magma ocean, the other solid rock.",
			"Opened the class that Kepler would fill by the thousand."
		],
		notable: [
			"transiting",
			"first",
			"extreme"
		]
	},
	{
		slug: "wasp-39b",
		name: "WASP-39b",
		designation: "WASP-39b",
		kind: "hot-jupiter",
		solar: false,
		hostSlug: null,
		hostName: "WASP-39",
		palette: "haze",
		au: .0486,
		periodDays: 4.06,
		radiusEarth: 14.3,
		massEarth: 89,
		temperatureK: 1116,
		moons: 0,
		discovered: "2011",
		summary: "A Saturn-mass hot Jupiter whose atmosphere JWST cracked open: water, carbon dioxide, and the first clear detection of sulfur dioxide on an exoplanet.",
		facts: [
			"The 2022 JWST Early Release spectrum became a textbook transmission plot.",
			"SO₂ is photochemistry — starlight cooking the upper air.",
			"Puffy for its mass, a clean target against a quiet G-type star."
		],
		notable: ["transiting", "first"]
	},
	{
		slug: "hd-80606-b",
		name: "HD 80606 b",
		designation: "HD 80606 b",
		kind: "gas-giant",
		solar: false,
		hostSlug: null,
		hostName: "HD 80606",
		palette: "lava",
		au: .45,
		periodDays: 111.4,
		radiusEarth: 11,
		massEarth: 1270,
		temperatureK: 1500,
		moons: 0,
		discovered: "2001",
		summary: "A four-Jupiter-mass world on a comet-like ellipse. At periapsis it is roasted in hours; at apoapsis it freezes. The most violent climate in the catalog.",
		facts: [
			"Eccentricity is 0.93 — closer than Mercury, then out past the asteroid belt.",
			"The 2009 transit and secondary eclipse mapped a dayside that heats by 700 K in hours.",
			"A laboratory for flash heating and superrotating winds."
		],
		notable: ["transiting", "extreme"]
	},
	{
		slug: "kepler-442b",
		name: "Kepler-442b",
		designation: "Kepler-442b",
		kind: "super-earth",
		solar: false,
		hostSlug: null,
		hostName: "Kepler-442",
		palette: "earth",
		au: .409,
		periodDays: 112.3,
		radiusEarth: 1.34,
		massEarth: 2.3,
		temperatureK: 233,
		moons: 0,
		discovered: "2015",
		summary: "A super-Earth in the habitable zone of a K dwarf 1,200 light-years away. Often ranked among Kepler’s most Earth-like worlds on the Earth Similarity Index.",
		facts: [
			"Receives about 70% of Earth’s light from a quieter-than-M-dwarf star.",
			"Radius is firm; mass is modeled from the mass–radius relation.",
			"Year is 112 days — a long spring if the air allows it."
		],
		notable: ["habitable-zone", "transiting"]
	},
	{
		slug: "gliese-667-cc",
		name: "Gliese 667 Cc",
		designation: "GJ 667 Cc",
		kind: "super-earth",
		solar: false,
		hostSlug: null,
		hostName: "Gliese 667 C",
		palette: "ocean",
		au: .125,
		periodDays: 28.1,
		radiusEarth: 1.5,
		massEarth: 3.8,
		temperatureK: 277,
		moons: 0,
		discovered: "2011",
		summary: "A super-Earth in the habitable zone of a red dwarf in a triple-star system 22 light-years away. Two brighter suns would hang in its sky as brilliant points.",
		facts: [
			"The host is the faintest of three stars bound together in Scorpius.",
			"Insolation is close to Earth’s; the year is 28 days.",
			"Found by radial velocity; transits have not been seen."
		],
		notable: ["habitable-zone"]
	},
	{
		slug: "ross-128-b",
		name: "Ross 128 b",
		designation: "Ross 128 b",
		kind: "terrestrial",
		solar: false,
		hostSlug: null,
		hostName: "Ross 128",
		palette: "earth",
		au: .0496,
		periodDays: 9.86,
		radiusEarth: 1.1,
		massEarth: 1.4,
		temperatureK: 294,
		moons: 0,
		discovered: "2017",
		summary: "A temperate Earth-mass planet around a quiet red dwarf only 11 light-years away — one of the nearest worlds that could, in principle, hold surface water.",
		facts: [
			"The star is an inactive M dwarf, kinder than Proxima.",
			"Minimum mass is 1.4 Earths; it does not transit.",
			"A prime target for a next-generation direct-imaging flagship."
		],
		notable: ["habitable-zone"]
	},
	{
		slug: "teegarden-b",
		name: "Teegarden’s Star b",
		designation: "Teegarden b",
		kind: "terrestrial",
		solar: false,
		hostSlug: null,
		hostName: "Teegarden's Star",
		palette: "earth",
		au: .0259,
		periodDays: 4.91,
		radiusEarth: 1.05,
		massEarth: 1.05,
		temperatureK: 264,
		moons: 0,
		discovered: "2019",
		summary: "An Earth-mass planet in the habitable zone of an ultra-cool dwarf 12.5 light-years away. For a few years it topped lists of the most Earth-like worlds known.",
		facts: [
			"Mass is 1.05 Earths from CARMENES radial velocities.",
			"The star is only 8% of the Sun’s mass — a late M dwarf in Aries.",
			"A second planet, Teegarden c, sits farther out and colder."
		],
		notable: ["habitable-zone"]
	},
	{
		slug: "pds-70-b",
		name: "PDS 70 b",
		designation: "PDS 70 b",
		kind: "gas-giant",
		solar: false,
		hostSlug: null,
		hostName: "PDS 70",
		palette: "jupiter",
		au: 20.6,
		periodDays: 43500,
		radiusEarth: 20,
		massEarth: 950,
		temperatureK: 1200,
		moons: 0,
		discovered: "2018",
		summary: "A giant planet caught in the act of forming, photographed inside a gap in its star’s disk. Still accreting gas, with a possible circumplanetary disk that could birth moons.",
		facts: [
			"One of the first (and still rare) planets directly imaged while forming.",
			"A sibling, PDS 70 c, sits farther out and also still glows.",
			"The star is a young T Tauri analog 370 light-years away in Centaurus."
		],
		notable: ["imaged", "first"],
		discoveryMethod: "imaging"
	},
	{
		slug: "beta-pictoris-b",
		name: "Beta Pictoris b",
		designation: "β Pic b",
		kind: "gas-giant",
		solar: false,
		hostSlug: null,
		hostName: "Beta Pictoris",
		palette: "haze",
		au: 9.9,
		periodDays: 8030,
		radiusEarth: 16.4,
		massEarth: 3700,
		temperatureK: 1600,
		moons: 0,
		discovered: "2008",
		summary: "A super-Jupiter imaged in the debris disk of a young A star 63 light-years away. It helped prove that giant planets can be photographed in thermal glow.",
		facts: [
			"Mass is about twelve Jupiters; it still shines from formation heat.",
			"The disk of Beta Pictoris had been famous for decades before the planet was seen.",
			"A second giant, Beta Pictoris c, was found later by radial velocity and then imaged."
		],
		notable: ["imaged", "first"],
		discoveryMethod: "imaging"
	},
	{
		slug: "wasp-17b",
		name: "WASP-17b",
		designation: "WASP-17b",
		kind: "hot-jupiter",
		solar: false,
		hostSlug: null,
		hostName: "WASP-17",
		palette: "haze",
		au: .0515,
		periodDays: 3.74,
		radiusEarth: 22.3,
		massEarth: 154,
		temperatureK: 1770,
		moons: 0,
		discovered: "2009",
		summary: "One of the puffiest planets known: a retrograde hot Jupiter bloated to twice Jupiter’s radius on a 3.7-day orbit. A weather of oxides and a tenuous, evaporating air.",
		facts: [
			"It orbits backward relative to the star’s spin — a relic of a violent scattering.",
			"Density is comparable to expanded polystyrene.",
			"JWST has watched water and haze in transmission."
		],
		notable: ["transiting", "extreme"]
	},
	{
		slug: "gj-367-b",
		name: "GJ 367 b",
		designation: "Tahay",
		kind: "terrestrial",
		solar: false,
		hostSlug: null,
		hostName: "GJ 367",
		palette: "mercury",
		au: .0071,
		periodDays: .322,
		radiusEarth: .72,
		massEarth: .55,
		temperatureK: 1365,
		moons: 0,
		discovered: "2021",
		summary: "An iron world on an eight-hour orbit. Density matches a stripped core — a Mercury analog around a red dwarf 30 light-years away. IAU name: Tahay.",
		facts: [
			"One of the densest exoplanets measured; rock has been boiled or blasted away.",
			"The year is 7.7 hours.",
			"Two outer siblings were added in 2023."
		],
		notable: ["transiting", "extreme"]
	},
	{
		slug: "kepler-1649c",
		name: "Kepler-1649c",
		designation: "Kepler-1649c",
		kind: "terrestrial",
		solar: false,
		hostSlug: null,
		hostName: "Kepler-1649",
		palette: "earth",
		au: .065,
		periodDays: 19.5,
		radiusEarth: 1.06,
		massEarth: 1.2,
		temperatureK: 234,
		moons: 0,
		discovered: "2020",
		summary: "An Earth-size planet in the habitable zone, missed by the original Kepler pipeline and recovered in 2020. Often called one of Kepler’s closest Earth analogs.",
		facts: [
			"Radius is 1.06 Earths; it receives about 75% of Earth’s light.",
			"Orbits a faint red dwarf 300 light-years away.",
			"Found in archival Kepler data after a citizen-science and pipeline rethink."
		],
		notable: ["habitable-zone", "transiting"]
	},
	{
		slug: "barnards-star-b",
		name: "Barnard's Star b",
		designation: "Barnard b",
		kind: "terrestrial",
		solar: false,
		hostSlug: "barnards-star",
		hostName: "Barnard's Star",
		palette: "mercury",
		au: .0229,
		periodDays: 3.15,
		radiusEarth: .7,
		massEarth: .37,
		temperatureK: 400,
		moons: 0,
		discovered: "2024",
		summary: "A sub-Earth around the nearest single star to the Sun. Too close in for liquid water, it is the first confirmed planet in a system astronomers have watched for a century.",
		facts: [
			"Mass is about a third of Earth’s; the year is 3.15 days.",
			"Earlier planet claims around Barnard’s Star were withdrawn; 2024 radial velocities held.",
			"At 6 light-years, only the Alpha Centauri triple is closer."
		],
		notable: ["first", "extreme"]
	}
];
var PLANET_BY_SLUG = Object.fromEntries(PLANETS.map((p) => [p.slug, p]));
function getPlanet(slug) {
	return PLANET_BY_SLUG[slug];
}
function planetsForStar(starSlug) {
	return PLANETS.filter((p) => p.hostSlug === starSlug).sort((a, b) => a.au - b.au);
}
function systemOf(planet) {
	return PLANETS.filter((p) => {
		if (planet.hostSlug) return p.hostSlug === planet.hostSlug;
		return p.hostName === planet.hostName;
	}).sort((a, b) => a.au - b.au);
}
var COLORS = [
	SPECTRAL_HEX.A,
	SPECTRAL_HEX.B,
	SPECTRAL_HEX.F,
	SPECTRAL_HEX.G,
	"#ffffff",
	SPECTRAL_HEX.K
];
var SKY_CLOUDS = [
	{
		xf: .2,
		yf: .36,
		rx: .22,
		ry: .12,
		rot: -.5,
		c: "#ff5b7a",
		a: .07,
		p: .4
	},
	{
		xf: .74,
		yf: .26,
		rx: .18,
		ry: .14,
		rot: .55,
		c: "#7eb6ff",
		a: .06,
		p: 1.7
	},
	{
		xf: .58,
		yf: .72,
		rx: .16,
		ry: .09,
		rot: .2,
		c: "#5ad0c8",
		a: .055,
		p: 2.8
	}
];
var SKY_WORLDS = [
	{
		xf: .93,
		yf: .16,
		r: 32,
		z: .2,
		hex: PLANET_HEX.jupiter,
		bands: true,
		rings: false
	},
	{
		xf: .9,
		yf: .84,
		r: 28,
		z: .16,
		hex: PLANET_HEX.saturn,
		bands: true,
		rings: true
	},
	{
		xf: .07,
		yf: .8,
		r: 16,
		z: .4,
		hex: PLANET_HEX.earth,
		bands: false,
		rings: false
	},
	{
		xf: .08,
		yf: .14,
		r: 10,
		z: .52,
		hex: PLANET_HEX.mars,
		bands: false,
		rings: false
	},
	{
		xf: .95,
		yf: .48,
		r: 13,
		z: .32,
		hex: PLANET_HEX.neptune,
		bands: false,
		rings: false
	}
];
function prefersReduced() {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function shade(hex, amt) {
	const n = hex.replace("#", "");
	return `rgb(${Math.min(255, Math.max(0, parseInt(n.slice(0, 2), 16) + amt))}, ${Math.min(255, Math.max(0, parseInt(n.slice(2, 4), 16) + amt))}, ${Math.min(255, Math.max(0, parseInt(n.slice(4, 6), 16) + amt))})`;
}
function Starfield() {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d", { alpha: true });
		if (!ctx) return;
		let width = 0;
		let height = 0;
		let dpr = 1;
		let raf = 0;
		let running = true;
		const reduced = prefersReduced();
		const particles = [];
		const meteors = [];
		const worlds = SKY_WORLDS.map((w) => ({
			...w,
			phase: Math.random() * Math.PI * 2
		}));
		let mouseX = 0;
		let mouseY = 0;
		let parX = 0;
		let parY = 0;
		let lastMeteor = 0;
		let t = 0;
		function resize() {
			dpr = Math.min(window.devicePixelRatio || 1, 2);
			width = window.innerWidth;
			height = window.innerHeight;
			canvas.width = Math.floor(width * dpr);
			canvas.height = Math.floor(height * dpr);
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		}
		function seed() {
			particles.length = 0;
			const count = width < 640 ? 180 : width < 1024 ? 320 : 460;
			for (let i = 0; i < count; i++) {
				const z = Math.random();
				particles.push({
					x: Math.random() * width,
					y: Math.random() * height,
					z,
					r: z > .92 ? 1.6 + Math.random() * 1.4 : z > .7 ? .8 + Math.random() * .7 : .35 + Math.random() * .45,
					a: .25 + z * .75,
					tw: Math.random() * Math.PI * 2,
					tws: .004 + Math.random() * .012,
					c: COLORS[Math.floor(Math.random() * COLORS.length)] ?? "#ffffff"
				});
			}
		}
		function spawnMeteor() {
			const fromLeft = Math.random() > .4;
			meteors.push({
				x: fromLeft ? -20 : Math.random() * width,
				y: fromLeft ? Math.random() * height * .45 : -20,
				vx: 6 + Math.random() * 5,
				vy: 3 + Math.random() * 3,
				life: 0,
				max: 55 + Math.random() * 30
			});
		}
		function drawMilkyWay() {
			ctx.save();
			ctx.translate(width * .5, height * .42);
			ctx.rotate(-.42);
			const band = ctx.createLinearGradient(0, -height * .18, 0, height * .18);
			band.addColorStop(0, "rgba(180, 196, 220, 0)");
			band.addColorStop(.5, "rgba(180, 196, 220, 0.045)");
			band.addColorStop(1, "rgba(180, 196, 220, 0)");
			ctx.fillStyle = band;
			ctx.fillRect(-width, -height * .18, width * 2, height * .36);
			ctx.restore();
		}
		function drawClouds() {
			ctx.save();
			ctx.globalCompositeOperation = "screen";
			for (const c of SKY_CLOUDS) {
				const drift = reduced ? 0 : Math.sin(t * 25e-5 + c.p) * 18;
				const x = c.xf * width + parX * 8 + drift;
				const y = c.yf * height + parY * 5;
				const rx = c.rx * width * (width < 640 ? .7 : 1);
				const ry = c.ry * height;
				ctx.save();
				ctx.translate(x, y);
				ctx.rotate(c.rot);
				const g = ctx.createRadialGradient(0, 0, 0, 0, 0, Math.max(rx, ry));
				g.addColorStop(0, c.c);
				g.addColorStop(1, "rgba(7,7,10,0)");
				ctx.globalAlpha = c.a * (reduced ? 1 : .85 + .15 * Math.sin(t * 4e-4 + c.p));
				ctx.fillStyle = g;
				ctx.beginPath();
				ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
				ctx.fill();
				ctx.restore();
			}
			ctx.restore();
		}
		function drawWorlds() {
			for (const w of worlds) {
				const ox = parX * (6 + w.z * 22);
				const oy = parY * (4 + w.z * 16);
				const drift = reduced ? 0 : Math.sin(t * 35e-5 + w.phase) * 10;
				const x = w.xf * width + ox + drift;
				const y = w.yf * height + oy;
				const r = w.r * (width < 640 ? .55 : 1);
				ctx.save();
				ctx.globalAlpha = .58;
				const glow = ctx.createRadialGradient(x, y, r * .15, x, y, r * 1.7);
				glow.addColorStop(0, shade(w.hex, 10));
				glow.addColorStop(1, "rgba(7,7,10,0)");
				ctx.fillStyle = glow;
				ctx.beginPath();
				ctx.arc(x, y, r * 1.7, 0, Math.PI * 2);
				ctx.fill();
				if (w.rings) {
					ctx.save();
					ctx.translate(x, y);
					ctx.rotate(-.32);
					ctx.scale(1, .28);
					ctx.beginPath();
					ctx.ellipse(0, 0, r * 1.85, r * 1.85, 0, 0, Math.PI * 2);
					ctx.strokeStyle = shade(w.hex, 50);
					ctx.globalAlpha = .55;
					ctx.lineWidth = 4;
					ctx.stroke();
					ctx.beginPath();
					ctx.ellipse(0, 0, r * 1.55, r * 1.55, 0, 0, Math.PI * 2);
					ctx.lineWidth = 2;
					ctx.stroke();
					ctx.restore();
					ctx.globalAlpha = .58;
				}
				const body = ctx.createRadialGradient(x - r * .38, y - r * .42, r * .06, x + r * .1, y + r * .15, r);
				body.addColorStop(0, shade(w.hex, 85));
				body.addColorStop(.42, w.hex);
				body.addColorStop(1, shade(w.hex, -95));
				ctx.beginPath();
				ctx.arc(x, y, r, 0, Math.PI * 2);
				ctx.fillStyle = body;
				ctx.fill();
				if (w.bands) {
					ctx.save();
					ctx.beginPath();
					ctx.arc(x, y, r, 0, Math.PI * 2);
					ctx.clip();
					ctx.globalAlpha = .18;
					ctx.fillStyle = shade(w.hex, -40);
					for (let i = -3; i <= 3; i++) ctx.fillRect(x - r, y + i * r * .28 - r * .05, r * 2, r * .1);
					ctx.restore();
				}
				ctx.restore();
			}
			ctx.globalAlpha = 1;
		}
		function frame(now) {
			if (!running) return;
			t += 1;
			parX += (mouseX - parX) * .04;
			parY += (mouseY - parY) * .04;
			ctx.clearRect(0, 0, width, height);
			ctx.fillStyle = "#07070a";
			ctx.fillRect(0, 0, width, height);
			drawMilkyWay();
			drawClouds();
			for (const p of particles) {
				const ox = parX * (.8 + p.z * 14);
				const oy = parY * (.5 + p.z * 10);
				let x = p.x + ox;
				let y = p.y + oy;
				if (!reduced) {
					x += Math.sin(t * 8e-4 + p.tw) * p.z * 6;
					y += Math.cos(t * 6e-4 + p.tw) * p.z * 4;
				}
				const twinkle = reduced ? 1 : .65 + .35 * Math.sin(p.tw + t * p.tws);
				ctx.beginPath();
				ctx.fillStyle = p.c;
				ctx.globalAlpha = p.a * twinkle;
				ctx.arc(x, y, p.r, 0, Math.PI * 2);
				ctx.fill();
				if (p.r > 1.3) {
					ctx.globalAlpha = p.a * twinkle * .25;
					ctx.beginPath();
					ctx.arc(x, y, p.r * 3.4, 0, Math.PI * 2);
					ctx.fill();
				}
			}
			ctx.globalAlpha = 1;
			drawWorlds();
			if (!reduced) {
				if (now - lastMeteor > 4200 + Math.random() * 5e3) {
					spawnMeteor();
					lastMeteor = now;
				}
				for (let i = meteors.length - 1; i >= 0; i--) {
					const m = meteors[i];
					m.x += m.vx;
					m.y += m.vy;
					m.life += 1;
					const fade = 1 - m.life / m.max;
					ctx.strokeStyle = `rgba(236, 236, 241, ${.55 * fade})`;
					ctx.lineWidth = 1.2;
					ctx.beginPath();
					ctx.moveTo(m.x, m.y);
					ctx.lineTo(m.x - m.vx * 8, m.y - m.vy * 8);
					ctx.stroke();
					if (m.life > m.max || m.x > width + 40 || m.y > height + 40) meteors.splice(i, 1);
				}
			}
			raf = requestAnimationFrame(frame);
		}
		function onMove(e) {
			mouseX = (e.clientX / width - .5) * 2;
			mouseY = (e.clientY / height - .5) * 2;
		}
		function onVis() {
			running = document.visibilityState !== "hidden";
			if (running) raf = requestAnimationFrame(frame);
			else cancelAnimationFrame(raf);
		}
		function onResize() {
			resize();
			seed();
		}
		resize();
		seed();
		window.addEventListener("resize", onResize);
		window.addEventListener("pointermove", onMove, { passive: true });
		document.addEventListener("visibilitychange", onVis);
		lastMeteor = performance.now();
		raf = requestAnimationFrame(frame);
		return () => {
			running = false;
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", onResize);
			window.removeEventListener("pointermove", onMove);
			document.removeEventListener("visibilitychange", onVis);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		className: "pointer-events-none fixed inset-0 z-0",
		"aria-hidden": "true"
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh overflow-x-hidden bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Starfield, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vignette pointer-events-none fixed inset-0 z-[1]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10",
				children
			})
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 border-t border-border pt-8 text-sm text-subtle sm:flex-row sm:items-end sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Astrion — stars, worlds, moons, and the clouds that make them." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-base tracking-tight text-muted",
					children: "Crafted with curiosity by Zakaria Shagor."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "sm:text-right",
				children: "Distances in light-years. Orbits in astronomical units. Moons in kilometres."
			})]
		})
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/catalog-N4vBopjS.js
var CONSTELLATIONS = [
	{
		slug: "orion",
		name: "Orion",
		genitive: "Orionis",
		abbreviation: "Ori",
		meaning: "The Hunter",
		hemisphere: "EQ",
		family: "Orion",
		brightest: "rigel",
		lore: "The hunter who faces Taurus with a belt of three blue supergiants. Betelgeuse marks the shoulder, Rigel the knee, and the Great Nebula hangs from the sword — a nursery still making stars."
	},
	{
		slug: "ursa-major",
		name: "Ursa Major",
		genitive: "Ursae Majoris",
		abbreviation: "UMa",
		meaning: "The Great Bear",
		hemisphere: "N",
		family: "Ursa Major",
		brightest: "alioth",
		lore: "Home of the Plough, or Big Dipper — seven stars that have guided northern travelers for millennia. Five of the bowl and handle are a true moving group, born together and still traveling as one."
	},
	{
		slug: "ursa-minor",
		name: "Ursa Minor",
		genitive: "Ursae Minoris",
		abbreviation: "UMi",
		meaning: "The Little Bear",
		hemisphere: "N",
		family: "Ursa Major",
		brightest: "polaris",
		lore: "A smaller dipper whose handle ends on Polaris, the current north star. Kochab and Pherkad, the Guardians of the Pole, held that role three thousand years ago."
	},
	{
		slug: "cassiopeia",
		name: "Cassiopeia",
		genitive: "Cassiopeiae",
		abbreviation: "Cas",
		meaning: "The Queen",
		hemisphere: "N",
		family: "Perseus",
		brightest: "schedar",
		lore: "A W of bright stars sitting in the Milky Way’s rich northern stream. The boastful queen of Ethiopia is chained to her chair, circling the pole forever."
	},
	{
		slug: "cygnus",
		name: "Cygnus",
		genitive: "Cygni",
		abbreviation: "Cyg",
		meaning: "The Swan",
		hemisphere: "N",
		family: "Hercules",
		brightest: "deneb",
		lore: "The Northern Cross, flying down the summer Milky Way. Deneb is its tail; the black-hole binary Cygnus X-1 hides near the neck, and 61 Cygni was the first star to have its distance measured."
	},
	{
		slug: "lyra",
		name: "Lyra",
		genitive: "Lyrae",
		abbreviation: "Lyr",
		meaning: "The Lyre",
		hemisphere: "N",
		family: "Hercules",
		brightest: "vega",
		lore: "A small, brilliant constellation ruled by Vega, once the pole star and destined to be so again. The Ring Nebula lies here, a Sun-like star’s last envelope, already shed."
	},
	{
		slug: "aquila",
		name: "Aquila",
		genitive: "Aquilae",
		abbreviation: "Aql",
		meaning: "The Eagle",
		hemisphere: "EQ",
		family: "Hercules",
		brightest: "altair",
		lore: "The eagle of Zeus, carrying Altair as its heart. Together with Vega and Deneb it forms the Summer Triangle, the great navigational landmark of northern July nights."
	},
	{
		slug: "scorpius",
		name: "Scorpius",
		genitive: "Scorpii",
		abbreviation: "Sco",
		meaning: "The Scorpion",
		hemisphere: "S",
		family: "Zodiac",
		brightest: "antares",
		lore: "A true scorpion shape, with Antares as a red heart and Shaula in the sting. The hunter Orion sets as Scorpius rises — the old story of the beast that felled him."
	},
	{
		slug: "taurus",
		name: "Taurus",
		genitive: "Tauri",
		abbreviation: "Tau",
		meaning: "The Bull",
		hemisphere: "N",
		family: "Zodiac",
		brightest: "aldebaran",
		lore: "Aldebaran is the angry eye, the Hyades the face, the Pleiades a cluster on the shoulder. The Crab Pulsar still ticks in the wreckage of the supernova of 1054."
	},
	{
		slug: "gemini",
		name: "Gemini",
		genitive: "Geminorum",
		abbreviation: "Gem",
		meaning: "The Twins",
		hemisphere: "N",
		family: "Zodiac",
		brightest: "pollux",
		lore: "Castor and Pollux, the twin heads. They are not twins in physics: Pollux is an orange giant, Castor a tight multiple of A-type stars. Both were lucky stars of sailors."
	},
	{
		slug: "leo",
		name: "Leo",
		genitive: "Leonis",
		abbreviation: "Leo",
		meaning: "The Lion",
		hemisphere: "N",
		family: "Zodiac",
		brightest: "regulus",
		lore: "A crouching lion whose heart is Regulus, one of the four royal stars of antiquity. Denebola is the tuft of the tail; Wolf 359, a faint red dwarf, hides in the flank."
	},
	{
		slug: "virgo",
		name: "Virgo",
		genitive: "Virginis",
		abbreviation: "Vir",
		meaning: "The Maiden",
		hemisphere: "EQ",
		family: "Zodiac",
		brightest: "spica",
		lore: "The largest zodiacal constellation, with Spica — a tight, hot binary — as its ear of wheat. Behind the maiden lies the Virgo Cluster, a city of galaxies."
	},
	{
		slug: "centaurus",
		name: "Centaurus",
		genitive: "Centauri",
		abbreviation: "Cen",
		meaning: "The Centaur",
		hemisphere: "S",
		family: "Hercules",
		brightest: "hadar",
		lore: "Holds both the Southern Pointers to the Cross and the nearest star system to the Sun: Alpha Centauri, with Proxima as its distant red attendant."
	},
	{
		slug: "crux",
		name: "Crux",
		genitive: "Crucis",
		abbreviation: "Cru",
		meaning: "The Southern Cross",
		hemisphere: "S",
		family: "Hercules",
		brightest: "acrux",
		lore: "The smallest constellation and one of the most used. Four bright stars mark south for the whole southern hemisphere; the Coalsack nebula sits beside them like a hole in the Milky Way."
	},
	{
		slug: "carina",
		name: "Carina",
		genitive: "Carinae",
		abbreviation: "Car",
		meaning: "The Keel",
		hemisphere: "S",
		family: "Heavenly Waters",
		brightest: "canopus",
		lore: "Once part of the great ship Argo. Canopus, second only to Sirius, is the keel; Eta Carinae, a wounded hypergiant, still lights the Carina Nebula with eruptions."
	},
	{
		slug: "canis-major",
		name: "Canis Major",
		genitive: "Canis Majoris",
		abbreviation: "CMa",
		meaning: "The Greater Dog",
		hemisphere: "S",
		family: "Orion",
		brightest: "sirius",
		lore: "Orion’s hunting dog, with Sirius — the brightest star in the night sky — as the collar jewel. Behind it stand Adhara, Wezen, and the bloated hypergiant VY Canis Majoris."
	},
	{
		slug: "canis-minor",
		name: "Canis Minor",
		genitive: "Canis Minoris",
		abbreviation: "CMi",
		meaning: "The Lesser Dog",
		hemisphere: "N",
		family: "Orion",
		brightest: "procyon",
		lore: "A two-star constellation whose lucida, Procyon, rises before Sirius and completes the Winter Triangle with Betelgeuse."
	},
	{
		slug: "pegasus",
		name: "Pegasus",
		genitive: "Pegasi",
		abbreviation: "Peg",
		meaning: "The Winged Horse",
		hemisphere: "N",
		family: "Perseus",
		brightest: "enif",
		lore: "The Great Square of Pegasus is an autumn landmark. Enif, an orange supergiant, is the muzzle; the square’s northeast corner is shared with Andromeda."
	},
	{
		slug: "andromeda",
		name: "Andromeda",
		genitive: "Andromedae",
		abbreviation: "And",
		meaning: "The Chained Princess",
		hemisphere: "N",
		family: "Perseus",
		brightest: "alpheratz",
		lore: "Cassiopeia’s daughter, chained for a sea monster and rescued by Perseus. The Andromeda Galaxy — the most distant object visible to the unaided eye — rests in her chains."
	},
	{
		slug: "perseus",
		name: "Perseus",
		genitive: "Persei",
		abbreviation: "Per",
		meaning: "The Hero",
		hemisphere: "N",
		family: "Perseus",
		brightest: "mirfak",
		lore: "The hero with Medusa’s head in his hand: Algol, the Demon Star, winks every 2.87 days as its companion eclipses it. Mirfak anchors a surrounding association of young stars."
	},
	{
		slug: "bootes",
		name: "Boötes",
		genitive: "Boötis",
		abbreviation: "Boo",
		meaning: "The Herdsman",
		hemisphere: "N",
		family: "Ursa Major",
		brightest: "arcturus",
		lore: "A kite-shaped figure driving the bears around the pole. Arcturus, a red-orange giant and the brightest star of the northern celestial hemisphere, is its only first-magnitude light."
	},
	{
		slug: "eridanus",
		name: "Eridanus",
		genitive: "Eridani",
		abbreviation: "Eri",
		meaning: "The River",
		hemisphere: "S",
		family: "Heavenly Waters",
		brightest: "achernar",
		lore: "A long celestial river running from Orion’s foot to Achernar, one of the most flattened stars known, spinning so fast it is an oval. Epsilon Eridani, nearby and dusty, may host planets."
	},
	{
		slug: "sagittarius",
		name: "Sagittarius",
		genitive: "Sagittarii",
		abbreviation: "Sgr",
		meaning: "The Archer",
		hemisphere: "S",
		family: "Zodiac",
		brightest: "kaus-australis",
		lore: "The teapot that pours onto the heart of the Milky Way. Behind the steam of the galactic center sits Sagittarius A*, the four-million-solar-mass black hole of our Galaxy."
	},
	{
		slug: "cetus",
		name: "Cetus",
		genitive: "Ceti",
		abbreviation: "Cet",
		meaning: "The Sea Monster",
		hemisphere: "EQ",
		family: "Perseus",
		brightest: "mira",
		lore: "The beast sent to devour Andromeda. Mira, its most famous star, disappears and returns on an eleven-month breath — the first named variable, and still the prototype of its class."
	},
	{
		slug: "draco",
		name: "Draco",
		genitive: "Draconis",
		abbreviation: "Dra",
		meaning: "The Dragon",
		hemisphere: "N",
		family: "Ursa Major",
		brightest: "thuban",
		lore: "A winding dragon between the bears. Thuban, in the tail, was the pole star when the pyramids were raised; the pole has since drifted to Polaris and will return this way again."
	},
	{
		slug: "auriga",
		name: "Auriga",
		genitive: "Aurigae",
		abbreviation: "Aur",
		meaning: "The Charioteer",
		hemisphere: "N",
		family: "Perseus",
		brightest: "capella",
		lore: "A pentagon of winter stars with Capella, a pair of yellow giants, as its goat. The kids — a tight triangle of fainter stars — sit on the charioteer’s shoulder."
	},
	{
		slug: "puppis",
		name: "Puppis",
		genitive: "Puppis",
		abbreviation: "Pup",
		meaning: "The Stern",
		hemisphere: "S",
		family: "Heavenly Waters",
		brightest: "naos",
		lore: "The stern of the dismantled Argo. Naos is one of the hottest stars visible to the naked eye, an O4 supergiant pouring out a million times the Sun’s light."
	},
	{
		slug: "vela",
		name: "Vela",
		genitive: "Velorum",
		abbreviation: "Vel",
		meaning: "The Sails",
		hemisphere: "S",
		family: "Heavenly Waters",
		brightest: "suhail",
		lore: "The sails of Argo, holding Gamma Velorum — the brightest Wolf–Rayet star in the sky — and the Gum Nebula, a vast supernova remnant."
	},
	{
		slug: "phoenix",
		name: "Phoenix",
		genitive: "Phoenicis",
		abbreviation: "Phe",
		meaning: "The Phoenix",
		hemisphere: "S",
		family: "Bayer",
		brightest: "ankaa",
		lore: "A southern autumn bird named in the age of exploration. Ankaa, an orange giant, is its only bright star; the rest of the figure is a quiet scattering."
	},
	{
		slug: "grus",
		name: "Grus",
		genitive: "Gruis",
		abbreviation: "Gru",
		meaning: "The Crane",
		hemisphere: "S",
		family: "Bayer",
		brightest: "alnair",
		lore: "A modern southern bird, introduced by Keyser and de Houtman. Alnair, a hot blue-white subgiant, stands at the crane’s wingtip."
	},
	{
		slug: "pavo",
		name: "Pavo",
		genitive: "Pavonis",
		abbreviation: "Pav",
		meaning: "The Peacock",
		hemisphere: "S",
		family: "Bayer",
		brightest: "peacock",
		lore: "The peacock of the southern sky. Its lucida, simply called Peacock, is a hot binary used as a navigational star for southern ocean crossings."
	},
	{
		slug: "dorado",
		name: "Dorado",
		genitive: "Doradus",
		abbreviation: "Dor",
		meaning: "The Dolphinfish",
		hemisphere: "S",
		family: "Bayer",
		brightest: "r136a1",
		lore: "A faint constellation with an enormous guest: the Large Magellanic Cloud. Inside that satellite galaxy sits R136a1, the most massive star yet measured."
	},
	{
		slug: "ophiuchus",
		name: "Ophiuchus",
		genitive: "Ophiuchi",
		abbreviation: "Oph",
		meaning: "The Serpent Bearer",
		hemisphere: "EQ",
		family: "Hercules",
		brightest: "barnards-star",
		lore: "The healer who holds the serpent. Barnard's Star, the second-closest star system and the sky’s fastest-moving naked-eye object (if you could see it), crawls through this figure."
	},
	{
		slug: "aries",
		name: "Aries",
		genitive: "Arietis",
		abbreviation: "Ari",
		meaning: "The Ram",
		hemisphere: "N",
		family: "Zodiac",
		brightest: "hamal",
		lore: "The ram of the golden fleece, and the old vernal equinox. Hamal, an orange giant, is the ram’s forehead; the first point of Aries has since slid into Pisces."
	},
	{
		slug: "pisces",
		name: "Pisces",
		genitive: "Piscium",
		abbreviation: "Psc",
		meaning: "The Fishes",
		hemisphere: "N",
		family: "Zodiac",
		brightest: "van-maanen",
		lore: "Two fishes tied at the tails. Van Maanen’s Star, a nearby white dwarf, sits here — a quiet remnant, Earth-sized, already done with fusion."
	},
	{
		slug: "pictor",
		name: "Pictor",
		genitive: "Pictoris",
		abbreviation: "Pic",
		meaning: "The Easel",
		hemisphere: "S",
		family: "La Caille",
		brightest: "kapteyns-star",
		lore: "A faint southern easel named by Lacaille. Kapteyn’s Star, an ancient halo subdwarf on a retrograde orbit, is the catalogue’s reason to stop here."
	},
	{
		slug: "piscis-austrinus",
		name: "Piscis Austrinus",
		genitive: "Piscis Austrini",
		abbreviation: "PsA",
		meaning: "The Southern Fish",
		hemisphere: "S",
		family: "Heavenly Waters",
		brightest: "fomalhaut",
		lore: "The fish that drinks the stream of Aquarius. Fomalhaut, the lonely first-magnitude star of autumn, is its mouth — and one of the four royal stars of Persia."
	}
];
var CONSTELLATION_BY_SLUG = Object.fromEntries(CONSTELLATIONS.map((c) => [c.slug, c]));
/** Pairs of star slugs that form constellation figure lines. */
var CONSTELLATION_LINES = {
	orion: [
		["betelgeuse", "bellatrix"],
		["betelgeuse", "alnitak"],
		["bellatrix", "mintaka"],
		["alnitak", "alnilam"],
		["alnilam", "mintaka"],
		["alnitak", "saiph"],
		["mintaka", "rigel"],
		["saiph", "rigel"]
	],
	"ursa-major": [
		["dubhe", "merak"],
		["merak", "phecda"],
		["phecda", "megrez"],
		["megrez", "alioth"],
		["alioth", "mizar"],
		["mizar", "alkaid"],
		["megrez", "dubhe"]
	],
	"ursa-minor": [["polaris", "kochab"]],
	cassiopeia: [
		["caph", "schedar"],
		["schedar", "gamma-cassiopeiae"],
		["gamma-cassiopeiae", "ruchbah"],
		["ruchbah", "segin"]
	],
	cygnus: [["deneb", "sadr"], ["sadr", "albireo"]],
	lyra: [],
	aquila: [],
	scorpius: [["antares", "shaula"]],
	taurus: [["aldebaran", "elnath"]],
	gemini: [["castor", "pollux"]],
	leo: [["regulus", "denebola"]],
	crux: [["acrux", "gacrux"], ["mimosa", "delta-crucis"]],
	pegasus: [
		["markab", "scheat"],
		["scheat", "alpheratz"],
		["alpheratz", "algenib"],
		["algenib", "markab"],
		["enif", "markab"]
	],
	"canis-major": [
		["sirius", "adhara"],
		["sirius", "wezen"],
		["adhara", "wezen"]
	],
	centaurus: [["alpha-centauri-a", "hadar"], ["alpha-centauri-a", "alpha-centauri-b"]],
	carina: [["canopus", "avior"], ["canopus", "eta-carinae"]]
};
var STARS = [
	{
		slug: "sun",
		name: "The Sun",
		designation: "Sol",
		constellation: null,
		constellationName: null,
		spectralType: "G2V",
		spectralClass: "G",
		luminosityClass: "V",
		kind: "main-sequence",
		ra: 0,
		dec: 0,
		distanceLy: 16e-6,
		apparentMag: -26.74,
		absoluteMag: 4.83,
		massSun: 1,
		radiusSun: 1,
		luminositySun: 1,
		temperatureK: 5772,
		ageGyr: 4.6,
		summary: "The star this atlas is written under. A G2V dwarf holding eight planets in a quiet arm of the Milky Way. Every other entry is measured against it.",
		facts: [
			"Contains 99.8% of the Solar System’s mass.",
			"Fuses about 600 million tonnes of hydrogen each second.",
			"Will swell into a red giant in roughly five billion years."
		],
		notable: ["nearest", "historical"]
	},
	{
		slug: "proxima-centauri",
		name: "Proxima Centauri",
		designation: "α Centauri C",
		constellation: "centaurus",
		constellationName: "Centaurus",
		spectralType: "M5.5Ve",
		spectralClass: "M",
		luminosityClass: "V",
		kind: "main-sequence",
		ra: 14.495,
		dec: -62.679,
		distanceLy: 4.24,
		apparentMag: 11.13,
		absoluteMag: 15.6,
		massSun: .12,
		radiusSun: .15,
		luminositySun: .0017,
		temperatureK: 3042,
		ageGyr: 4.85,
		summary: "The nearest star to the Sun, a flare-prone red dwarf gravitationally bound to Alpha Centauri A and B. Invisible to the unaided eye, it hosts at least one Earth-sized planet in its habitable zone.",
		facts: [
			"Flares can multiply its X-ray output by hundreds of times.",
			"Proxima b orbits in 11.2 days at 0.05 au.",
			"Proper motion will slowly swing it around the Alpha Centauri pair."
		],
		variable: true,
		notable: ["nearest", "extreme"]
	},
	{
		slug: "alpha-centauri-a",
		name: "Alpha Centauri A",
		designation: "α Centauri A",
		constellation: "centaurus",
		constellationName: "Centaurus",
		spectralType: "G2V",
		spectralClass: "G",
		luminosityClass: "V",
		kind: "main-sequence",
		ra: 14.661,
		dec: -60.834,
		distanceLy: 4.37,
		apparentMag: -.01,
		absoluteMag: 4.38,
		massSun: 1.08,
		radiusSun: 1.22,
		luminositySun: 1.52,
		temperatureK: 5790,
		ageGyr: 5.3,
		summary: "The brighter member of the nearest Sun-like system. With Rigil Kentaurus as its proper name, it is a near twin of the Sun, slightly older and more luminous, locked in a long dance with Alpha Centauri B.",
		facts: [
			"The A–B pair orbits in about 80 years.",
			"Together they appear as a single first-magnitude star to the unaided eye.",
			"One of the Southern Pointers toward Crux."
		],
		binary: true,
		notable: [
			"nearest",
			"brightest",
			"navigational"
		]
	},
	{
		slug: "alpha-centauri-b",
		name: "Alpha Centauri B",
		designation: "α Centauri B",
		constellation: "centaurus",
		constellationName: "Centaurus",
		spectralType: "K1V",
		spectralClass: "K",
		luminosityClass: "V",
		kind: "main-sequence",
		ra: 14.661,
		dec: -60.838,
		distanceLy: 4.37,
		apparentMag: 1.33,
		absoluteMag: 5.71,
		massSun: .91,
		radiusSun: .86,
		luminositySun: .5,
		temperatureK: 5260,
		ageGyr: 5.3,
		summary: "An orange dwarf slightly cooler than the Sun, orbiting Alpha Centauri A at a distance that varies from Saturn-like to Pluto-like. From a planet around A, B would be a brilliant second sun.",
		facts: [
			"Separated from A by 11 to 36 au over the orbit.",
			"More magnetically active than the Sun.",
			"Candidate planets have been claimed and withdrawn; the question remains open."
		],
		binary: true,
		notable: ["nearest"]
	},
	{
		slug: "barnards-star",
		name: "Barnard's Star",
		designation: "V2500 Ophiuchi",
		constellation: "ophiuchus",
		constellationName: "Ophiuchus",
		spectralType: "M4.0V",
		spectralClass: "M",
		luminosityClass: "V",
		kind: "main-sequence",
		ra: 17.963,
		dec: 4.693,
		distanceLy: 5.96,
		apparentMag: 9.51,
		absoluteMag: 13.22,
		massSun: .16,
		radiusSun: .2,
		luminositySun: .0035,
		temperatureK: 3134,
		ageGyr: 10,
		summary: "The second-closest star system and the fastest-moving star in the apparent sky. E. E. Barnard measured its huge proper motion in 1916; it is an ancient, metal-poor red dwarf sliding past the Sun.",
		facts: [
			"Proper motion of 10.3 arcseconds per year — a lunar diameter in 180 years.",
			"Hosts at least one confirmed planet, Barnard's Star b.",
			"Will pass within about 3.8 light-years of the Sun in 11,800 years."
		],
		notable: [
			"nearest",
			"historical",
			"extreme"
		]
	},
	{
		slug: "wolf-359",
		name: "Wolf 359",
		designation: "CN Leonis",
		constellation: "leo",
		constellationName: "Leo",
		spectralType: "M6.5V",
		spectralClass: "M",
		luminosityClass: "V",
		kind: "main-sequence",
		ra: 10.937,
		dec: 7.081,
		distanceLy: 7.86,
		apparentMag: 13.54,
		absoluteMag: 16.65,
		massSun: .09,
		radiusSun: .16,
		luminositySun: .001,
		temperatureK: 2749,
		ageGyr: .4,
		summary: "A tiny, flare-active red dwarf in Leo, among the least luminous stars known. It is a favorite of science fiction because of its closeness and its violence.",
		facts: [
			"Luminosity is about one thousandth of the Sun’s.",
			"Flares have been recorded that outshine the star’s quiet output.",
			"One of the few stars with a well-measured magnetic field topology."
		],
		variable: true,
		notable: ["nearest", "extreme"]
	},
	{
		slug: "lalande-21185",
		name: "Lalande 21185",
		designation: "HD 95735",
		constellation: "ursa-major",
		constellationName: "Ursa Major",
		spectralType: "M2V",
		spectralClass: "M",
		luminosityClass: "V",
		kind: "main-sequence",
		ra: 11.056,
		dec: 35.969,
		distanceLy: 8.3,
		apparentMag: 7.52,
		absoluteMag: 10.48,
		massSun: .39,
		radiusSun: .39,
		luminositySun: .02,
		temperatureK: 3547,
		ageGyr: 8,
		summary: "The brightest red dwarf in the northern sky that a small telescope can show, catalogued by Lalande in 1801. It has a planetary system and a large proper motion across Ursa Major.",
		facts: [
			"Fourth-nearest known planetary system.",
			"Two (possibly three) planets have been detected by radial velocity.",
			"Would be visible to the unaided eye if it were a G dwarf at this distance."
		],
		notable: ["nearest"]
	},
	{
		slug: "sirius",
		name: "Sirius",
		designation: "α Canis Majoris A",
		constellation: "canis-major",
		constellationName: "Canis Major",
		spectralType: "A1V",
		spectralClass: "A",
		luminosityClass: "V",
		kind: "main-sequence",
		ra: 6.753,
		dec: -16.716,
		distanceLy: 8.6,
		apparentMag: -1.46,
		absoluteMag: 1.42,
		massSun: 2.06,
		radiusSun: 1.71,
		luminositySun: 25.4,
		temperatureK: 9940,
		ageGyr: .24,
		summary: "The brightest star in the night sky. An A-type main-sequence star with a white-dwarf companion, it has been a calendar marker for Egypt, a dog star for Greece, and a navigational pillar for every seafaring culture.",
		facts: [
			"Outshines the next-brightest night star, Canopus, by a factor of two.",
			"The companion, Sirius B, was predicted from orbital wobble in 1844.",
			"Will remain the brightest night star for the next 60,000 years."
		],
		binary: true,
		notable: [
			"nearest",
			"brightest",
			"navigational",
			"historical"
		]
	},
	{
		slug: "sirius-b",
		name: "Sirius B",
		designation: "α Canis Majoris B",
		constellation: "canis-major",
		constellationName: "Canis Major",
		spectralType: "DA2",
		spectralClass: "D",
		luminosityClass: "D",
		kind: "white-dwarf",
		ra: 6.753,
		dec: -16.716,
		distanceLy: 8.6,
		apparentMag: 8.44,
		absoluteMag: 11.18,
		massSun: 1.02,
		radiusSun: .0084,
		luminositySun: .056,
		temperatureK: 25e3,
		ageGyr: .12,
		summary: "A white dwarf the mass of the Sun packed into a sphere the size of Earth. Once the more massive of the Sirius pair, it shed its envelope and now orbits Sirius A every 50 years.",
		facts: [
			"Surface gravity is 400,000 times Earth’s.",
			"First white dwarf whose mass was measured from an orbit.",
			"Will take tens of billions of years to cool to a black dwarf."
		],
		binary: true,
		notable: [
			"nearest",
			"historical",
			"extreme"
		]
	},
	{
		slug: "epsilon-eridani",
		name: "Epsilon Eridani",
		designation: "ε Eridani",
		constellation: "eridanus",
		constellationName: "Eridanus",
		spectralType: "K2V",
		spectralClass: "K",
		luminosityClass: "V",
		kind: "main-sequence",
		ra: 3.548,
		dec: -9.458,
		distanceLy: 10.5,
		apparentMag: 3.73,
		absoluteMag: 6.19,
		massSun: .82,
		radiusSun: .74,
		luminositySun: .34,
		temperatureK: 5084,
		ageGyr: .8,
		summary: "A young orange dwarf with a dusty debris disk and at least one giant planet. It is one of the nearest Sun-like stars and a long-standing target in the search for other Earths.",
		facts: [
			"The debris disk is analogous to an outer Kuiper belt.",
			"Epsilon Eridani b is a Jupiter-mass planet on an eccentric orbit.",
			"Featured in countless first-contact stories for its closeness and familiarity."
		],
		notable: ["nearest"]
	},
	{
		slug: "procyon",
		name: "Procyon",
		designation: "α Canis Minoris A",
		constellation: "canis-minor",
		constellationName: "Canis Minor",
		spectralType: "F5IV–V",
		spectralClass: "F",
		luminosityClass: "IV",
		kind: "subgiant",
		ra: 7.655,
		dec: 5.225,
		distanceLy: 11.46,
		apparentMag: .34,
		absoluteMag: 2.66,
		massSun: 1.5,
		radiusSun: 2.05,
		luminositySun: 6.9,
		temperatureK: 6530,
		ageGyr: 1.9,
		summary: "The eighth-brightest star in the night sky and a subgiant just leaving the main sequence. Its name means “before the dog”: it rises ahead of Sirius and completes the Winter Triangle.",
		facts: [
			"Has a white-dwarf companion, Procyon B, of 0.6 solar masses.",
			"One of the 57 navigational stars.",
			"Will swell into a red giant within about 10–100 million years."
		],
		binary: true,
		notable: [
			"nearest",
			"brightest",
			"navigational"
		]
	},
	{
		slug: "procyon-b",
		name: "Procyon B",
		designation: "α Canis Minoris B",
		constellation: "canis-minor",
		constellationName: "Canis Minor",
		spectralType: "DQZ",
		spectralClass: "D",
		luminosityClass: "D",
		kind: "white-dwarf",
		ra: 7.655,
		dec: 5.225,
		distanceLy: 11.46,
		apparentMag: 10.7,
		absoluteMag: 13,
		massSun: .6,
		radiusSun: .012,
		luminositySun: 55e-5,
		temperatureK: 7740,
		ageGyr: 1.4,
		summary: "The faint white-dwarf companion of Procyon, discovered in 1896. It is cooler and less massive than Sirius B, a carbon-rich remnant of a star that once outshone its partner.",
		facts: [
			"Orbital period around Procyon A is 40.8 years.",
			"Atmosphere is helium-dominated with carbon traces.",
			"At 11 light-years it is among the nearest white dwarfs."
		],
		binary: true,
		notable: ["nearest"]
	},
	{
		slug: "61-cygni-a",
		name: "61 Cygni A",
		designation: "61 Cygni A",
		constellation: "cygnus",
		constellationName: "Cygnus",
		spectralType: "K5V",
		spectralClass: "K",
		luminosityClass: "V",
		kind: "main-sequence",
		ra: 21.107,
		dec: 38.749,
		distanceLy: 11.4,
		apparentMag: 5.21,
		absoluteMag: 7.49,
		massSun: .7,
		radiusSun: .67,
		luminositySun: .15,
		temperatureK: 4526,
		ageGyr: 6,
		summary: "The first star other than the Sun to have its distance measured, by Friedrich Bessel in 1838. It is a binary of orange dwarfs with a large proper motion, sometimes called the Flying Star.",
		facts: [
			"Bessel’s parallax of 0.31″ was the first rung of the cosmic distance ladder.",
			"The pair is visible in binoculars as two orange points.",
			"Both components are slightly metal-poor and magnetically active."
		],
		binary: true,
		notable: ["nearest", "historical"]
	},
	{
		slug: "tau-ceti",
		name: "Tau Ceti",
		designation: "τ Ceti",
		constellation: "cetus",
		constellationName: "Cetus",
		spectralType: "G8.5V",
		spectralClass: "G",
		luminosityClass: "V",
		kind: "main-sequence",
		ra: 1.734,
		dec: -15.94,
		distanceLy: 11.9,
		apparentMag: 3.5,
		absoluteMag: 5.69,
		massSun: .78,
		radiusSun: .79,
		luminositySun: .52,
		temperatureK: 5344,
		ageGyr: 5.8,
		summary: "The nearest solitary G-class star. Quiet, Sun-like, and dust-ringed, Tau Ceti has been an SETI beacon for decades and likely hosts a compact system of planets.",
		facts: [
			"A debris disk implies a heavy bombardment environment.",
			"Several super-Earth candidates have been reported in or near the habitable zone.",
			"Metal content is about a third of the Sun’s."
		],
		notable: ["nearest"]
	},
	{
		slug: "van-maanen",
		name: "Van Maanen's Star",
		designation: "Wolf 28",
		constellation: "pisces",
		constellationName: "Pisces",
		spectralType: "DZ8",
		spectralClass: "D",
		luminosityClass: "D",
		kind: "white-dwarf",
		ra: .828,
		dec: 5.389,
		distanceLy: 14.07,
		apparentMag: 12.37,
		absoluteMag: 14.21,
		massSun: .67,
		radiusSun: .011,
		luminositySun: 17e-5,
		temperatureK: 6220,
		ageGyr: 4.1,
		summary: "The nearest solitary white dwarf and the first degenerate star discovered by its motion, in 1917. It is a cooling ember with a polluted atmosphere — traces of rock that fell in from a surviving debris belt.",
		facts: [
			"Discovered by Adriaan van Maanen from its large proper motion.",
			"Metal lines in the spectrum are the ashes of disrupted asteroids.",
			"At 14 light-years it is the third-nearest white dwarf after Sirius B and Procyon B."
		],
		notable: ["nearest", "historical"]
	},
	{
		slug: "kapteyns-star",
		name: "Kapteyn's Star",
		designation: "HD 33793",
		constellation: "pictor",
		constellationName: "Pictor",
		spectralType: "sdM1",
		spectralClass: "M",
		luminosityClass: "VI",
		kind: "main-sequence",
		ra: 5.194,
		dec: -45.014,
		distanceLy: 12.8,
		apparentMag: 8.89,
		absoluteMag: 10.89,
		massSun: .28,
		radiusSun: .29,
		luminositySun: .012,
		temperatureK: 3550,
		ageGyr: 11.5,
		summary: "A halo subdwarf on a retrograde orbit through the Galaxy, leftover from a dwarf galaxy the Milky Way ate. It is among the oldest stars in the Sun’s neighborhood.",
		facts: [
			"Proper motion is the second-largest of any known star.",
			"Two planet candidates were announced in 2014; their status is debated.",
			"Kinematics suggest it came from the Gaia-Enceladus merger."
		],
		notable: [
			"nearest",
			"historical",
			"extreme"
		]
	},
	{
		slug: "canopus",
		name: "Canopus",
		designation: "α Carinae",
		constellation: "carina",
		constellationName: "Carina",
		spectralType: "A9II",
		spectralClass: "A",
		luminosityClass: "II",
		kind: "bright-giant",
		ra: 6.4,
		dec: -52.696,
		distanceLy: 310,
		apparentMag: -.74,
		absoluteMag: -5.71,
		massSun: 8,
		radiusSun: 71,
		luminositySun: 10700,
		temperatureK: 7280,
		ageGyr: .025,
		summary: "The second-brightest star in the night sky and the lucida of the old ship Argo. A white bright giant, it is a preferred reference for spacecraft attitude control — the Canopus tracker of Voyager and many others.",
		facts: [
			"Not visible north of about 37° N.",
			"Used as a bright southern navigational star and as a spacecraft lock-on.",
			"Has begun helium-core burning on its way toward a supernova or a heavy white dwarf."
		],
		notable: ["brightest", "navigational"]
	},
	{
		slug: "arcturus",
		name: "Arcturus",
		designation: "α Boötis",
		constellation: "bootes",
		constellationName: "Boötes",
		spectralType: "K1.5III",
		spectralClass: "K",
		luminosityClass: "III",
		kind: "giant",
		ra: 14.261,
		dec: 19.182,
		distanceLy: 36.7,
		apparentMag: -.05,
		absoluteMag: -.3,
		massSun: 1.08,
		radiusSun: 25.4,
		luminositySun: 170,
		temperatureK: 4286,
		ageGyr: 7.1,
		summary: "The brightest star of the northern celestial hemisphere: an orange giant, slightly more massive than the Sun, that has already left the main sequence. Arc to Arcturus from the Dipper’s handle and you cannot miss it.",
		facts: [
			"A high-velocity star from the Galaxy’s thick disk.",
			"Will be a white dwarf in under a billion years.",
			"Its light opened the 1933 Chicago World’s Fair, focused by a photocell."
		],
		notable: [
			"brightest",
			"navigational",
			"historical"
		]
	},
	{
		slug: "vega",
		name: "Vega",
		designation: "α Lyrae",
		constellation: "lyra",
		constellationName: "Lyra",
		spectralType: "A0V",
		spectralClass: "A",
		luminosityClass: "V",
		kind: "main-sequence",
		ra: 18.615,
		dec: 38.784,
		distanceLy: 25.04,
		apparentMag: .03,
		absoluteMag: .58,
		massSun: 2.14,
		radiusSun: 2.76,
		luminositySun: 40,
		temperatureK: 9602,
		ageGyr: .45,
		summary: "The standard candle of the old magnitude system and the apex of the Summer Triangle. Vega is a rapidly rotating A star with a debris disk, once the pole star and destined to be so again in 12,000 years.",
		facts: [
			"Defined magnitude 0 in the historical photometric system.",
			"First star photographed (1850) and first with a recorded spectrum.",
			"The disk of Vega is seen nearly pole-on; the equator is cooler than the poles."
		],
		notable: [
			"brightest",
			"navigational",
			"historical",
			"north-star"
		]
	},
	{
		slug: "capella",
		name: "Capella",
		designation: "α Aurigae",
		constellation: "auriga",
		constellationName: "Auriga",
		spectralType: "G8III + G0III",
		spectralClass: "G",
		luminosityClass: "III",
		kind: "giant",
		ra: 5.278,
		dec: 45.998,
		distanceLy: 42.9,
		apparentMag: .08,
		absoluteMag: -.48,
		massSun: 2.57,
		radiusSun: 12,
		luminositySun: 79,
		temperatureK: 4970,
		ageGyr: .6,
		summary: "A pair of yellow giants orbiting every 104 days, so close they cannot be split in amateur telescopes. Capella is the goat star of Auriga and the sixth-brightest star in the night sky.",
		facts: [
			"Two additional red-dwarf companions orbit much farther out.",
			"The giants are just leaving the Hertzsprung gap.",
			"A northern circumpolar star from mid-latitudes."
		],
		binary: true,
		notable: ["brightest", "navigational"]
	},
	{
		slug: "rigel",
		name: "Rigel",
		designation: "β Orionis",
		constellation: "orion",
		constellationName: "Orion",
		spectralType: "B8 Ia",
		spectralClass: "B",
		luminosityClass: "I",
		kind: "supergiant",
		ra: 5.242,
		dec: -8.202,
		distanceLy: 860,
		apparentMag: .13,
		absoluteMag: -7.84,
		massSun: 21,
		radiusSun: 78.9,
		luminositySun: 12e4,
		temperatureK: 12100,
		ageGyr: .008,
		summary: "Orion’s blue-white knee: a luminous supergiant outshining the Sun a hundred thousand times. Despite its Bayer letter β, Rigel is usually brighter than Betelgeuse and is a multiple star in its own right.",
		facts: [
			"Has a close B-star companion visible in a modest telescope.",
			"Illuminates the Witch Head Nebula, several degrees away.",
			"Expected to explode as a supernova within the next few million years."
		],
		binary: true,
		notable: [
			"brightest",
			"navigational",
			"extreme"
		]
	},
	{
		slug: "betelgeuse",
		name: "Betelgeuse",
		designation: "α Orionis",
		constellation: "orion",
		constellationName: "Orion",
		spectralType: "M1–M2 Ia–ab",
		spectralClass: "M",
		luminosityClass: "I",
		kind: "supergiant",
		ra: 5.919,
		dec: 7.407,
		distanceLy: 548,
		apparentMag: .5,
		absoluteMag: -5.85,
		massSun: 16.5,
		radiusSun: 764,
		luminositySun: 126e3,
		temperatureK: 3600,
		ageGyr: .01,
		summary: "A red supergiant at Orion’s shoulder, large enough that if it replaced the Sun it would swallow the asteroid belt. It breathes as a semi-regular variable and will end as a supernova — spectacular, but not on a human timetable.",
		facts: [
			"The Great Dimming of 2019–20 was a dust cloud, not a death rattle.",
			"One of the few stars whose disk has been resolved in images.",
			"Mass loss is already stripping the envelope that will feed the remnant."
		],
		variable: true,
		notable: [
			"brightest",
			"navigational",
			"variable",
			"extreme"
		]
	},
	{
		slug: "achernar",
		name: "Achernar",
		designation: "α Eridani",
		constellation: "eridanus",
		constellationName: "Eridanus",
		spectralType: "B6 Vep",
		spectralClass: "B",
		luminosityClass: "V",
		kind: "main-sequence",
		ra: 1.629,
		dec: -57.237,
		distanceLy: 139,
		apparentMag: .46,
		absoluteMag: -2.77,
		massSun: 6.7,
		radiusSun: 7.3,
		luminositySun: 3150,
		temperatureK: 15e3,
		ageGyr: .037,
		summary: "The end of the river, and one of the most flattened stars known. Achernar spins at a large fraction of breakup speed, so the equator is far hotter and wider than the poles — an oval, not a sphere.",
		facts: [
			"Equatorial radius is about 50% larger than the polar radius.",
			"Has a close A-star companion on a 7-year orbit.",
			"The southernmost first-magnitude star."
		],
		binary: true,
		notable: [
			"brightest",
			"navigational",
			"extreme"
		]
	},
	{
		slug: "hadar",
		name: "Hadar",
		designation: "β Centauri",
		constellation: "centaurus",
		constellationName: "Centaurus",
		spectralType: "B1 III",
		spectralClass: "B",
		luminosityClass: "III",
		kind: "giant",
		ra: 14.063,
		dec: -60.373,
		distanceLy: 390,
		apparentMag: .61,
		absoluteMag: -5.42,
		massSun: 12.5,
		radiusSun: 9,
		luminositySun: 41600,
		temperatureK: 25e3,
		ageGyr: .014,
		summary: "Also called Agena: a triple system of massive B stars and the other Southern Pointer beside Alpha Centauri. Together they aim at the Southern Cross.",
		facts: [
			"The inner pair orbits in 357 days; a third star circles in years.",
			"A Beta Cephei variable with a tiny, rapid pulse.",
			"One of the 57 navigational stars of the southern sky."
		],
		binary: true,
		variable: true,
		notable: ["brightest", "navigational"]
	},
	{
		slug: "altair",
		name: "Altair",
		designation: "α Aquilae",
		constellation: "aquila",
		constellationName: "Aquila",
		spectralType: "A7 V",
		spectralClass: "A",
		luminosityClass: "V",
		kind: "main-sequence",
		ra: 19.846,
		dec: 8.868,
		distanceLy: 16.73,
		apparentMag: .76,
		absoluteMag: 2.22,
		massSun: 1.79,
		radiusSun: 1.63,
		luminositySun: 10.6,
		temperatureK: 6900,
		ageGyr: 1.3,
		summary: "The eagle’s heart and the nearest of the Summer Triangle’s three stars. Altair rotates in under nine hours, so it is flattened at the poles and darkened at the equator by gravity darkening.",
		facts: [
			"One of the first stars to have its oblate disk imaged by interferometry.",
			"Flanked by Tarazed and Alshain, which give the eagle its body.",
			"A navigational star and a Chinese Qixi legend partner with Vega."
		],
		notable: [
			"nearest",
			"brightest",
			"navigational"
		]
	},
	{
		slug: "acrux",
		name: "Acrux",
		designation: "α Crucis",
		constellation: "crux",
		constellationName: "Crux",
		spectralType: "B0.5 IV + B1 V",
		spectralClass: "B",
		luminosityClass: "IV",
		kind: "subgiant",
		ra: 12.443,
		dec: -63.099,
		distanceLy: 320,
		apparentMag: .76,
		absoluteMag: -4.19,
		massSun: 17.8,
		radiusSun: 7.8,
		luminositySun: 25e3,
		temperatureK: 24e3,
		ageGyr: .01,
		summary: "The foot of the Southern Cross: a multiple of hot B stars and the southernmost first-magnitude star after Achernar. To the unaided eye it is a single blue-white point.",
		facts: [
			"The two brightest components are 4 arcseconds apart.",
			"A third, more distant B star shares common motion.",
			"Appears on the flags of Australia, New Zealand, Brazil, Papua New Guinea and Samoa."
		],
		binary: true,
		notable: ["brightest", "navigational"]
	},
	{
		slug: "aldebaran",
		name: "Aldebaran",
		designation: "α Tauri",
		constellation: "taurus",
		constellationName: "Taurus",
		spectralType: "K5 III",
		spectralClass: "K",
		luminosityClass: "III",
		kind: "giant",
		ra: 4.598,
		dec: 16.509,
		distanceLy: 65.3,
		apparentMag: .85,
		absoluteMag: -.64,
		massSun: 1.16,
		radiusSun: 45.1,
		luminositySun: 439,
		temperatureK: 3900,
		ageGyr: 6.4,
		summary: "The fiery eye of the Bull. Aldebaran is an orange giant sitting in front of the Hyades, not in them — a chance alignment that makes Taurus’s face look even angrier.",
		facts: [
			"The name is Arabic for “the follower,” trailing the Pleiades.",
			"A royal star of Persia, marking the vernal watch.",
			"Likely hosts a giant planet on a wide orbit, still unconfirmed."
		],
		notable: [
			"brightest",
			"navigational",
			"historical"
		]
	},
	{
		slug: "antares",
		name: "Antares",
		designation: "α Scorpii",
		constellation: "scorpius",
		constellationName: "Scorpius",
		spectralType: "M1.5 Iab",
		spectralClass: "M",
		luminosityClass: "I",
		kind: "supergiant",
		ra: 16.49,
		dec: -26.432,
		distanceLy: 550,
		apparentMag: .96,
		absoluteMag: -5.28,
		massSun: 12,
		radiusSun: 680,
		luminositySun: 75900,
		temperatureK: 3660,
		ageGyr: .015,
		summary: "The rival of Mars: a red supergiant at the scorpion’s heart, so large that Jupiter’s orbit would fit inside it. A hotter blue companion sits close enough to be lost in the glare.",
		facts: [
			"Name from Greek antares, “like Mars,” for its color and the way it meets Mars in the sky.",
			"A slow irregular variable, swinging by about a magnitude.",
			"Will end as a supernova, possibly leaving a neutron star."
		],
		binary: true,
		variable: true,
		notable: [
			"brightest",
			"navigational",
			"variable",
			"extreme"
		]
	},
	{
		slug: "spica",
		name: "Spica",
		designation: "α Virginis",
		constellation: "virgo",
		constellationName: "Virgo",
		spectralType: "B1 III–IV",
		spectralClass: "B",
		luminosityClass: "III",
		kind: "giant",
		ra: 13.42,
		dec: -11.161,
		distanceLy: 250,
		apparentMag: .97,
		absoluteMag: -3.55,
		massSun: 11.4,
		radiusSun: 7.5,
		luminositySun: 12100,
		temperatureK: 25300,
		ageGyr: .013,
		summary: "Virgo’s ear of wheat: a tight pair of B stars that eclipse and distort each other every four days. Spica is a first-magnitude landmark of spring evenings in the north.",
		facts: [
			"The two stars are only about 18 million kilometres apart.",
			"A rotating ellipsoidal variable — the pair’s changing shape alters the light.",
			"Hipparchus may have discovered precession by comparing Spica’s position over centuries."
		],
		binary: true,
		variable: true,
		notable: [
			"brightest",
			"navigational",
			"historical"
		]
	},
	{
		slug: "pollux",
		name: "Pollux",
		designation: "β Geminorum",
		constellation: "gemini",
		constellationName: "Gemini",
		spectralType: "K0 III",
		spectralClass: "K",
		luminosityClass: "III",
		kind: "giant",
		ra: 7.755,
		dec: 28.026,
		distanceLy: 33.8,
		apparentMag: 1.14,
		absoluteMag: 1.08,
		massSun: 1.91,
		radiusSun: 9.06,
		luminositySun: 43,
		temperatureK: 4666,
		ageGyr: .72,
		summary: "The brighter Twin, an orange giant with a confirmed planet. Castor is the binary; Pollux is the evolved one — a reminder that mythic twins need not share a physics.",
		facts: [
			"Pollux b (Thestias) is a giant planet in a 1.6-year orbit.",
			"The first planet discovered around a star of the first magnitude.",
			"Slightly closer and clearly orange next to Castor."
		],
		notable: ["brightest", "navigational"]
	},
	{
		slug: "fomalhaut",
		name: "Fomalhaut",
		designation: "α Piscis Austrini",
		constellation: "piscis-austrinus",
		constellationName: "Piscis Austrinus",
		spectralType: "A3 V",
		spectralClass: "A",
		luminosityClass: "V",
		kind: "main-sequence",
		ra: 22.961,
		dec: -29.622,
		distanceLy: 25.1,
		apparentMag: 1.16,
		absoluteMag: 1.72,
		massSun: 1.92,
		radiusSun: 1.84,
		luminositySun: 16.6,
		temperatureK: 8590,
		ageGyr: .44,
		summary: "The mouth of the southern fish, a lonely first-magnitude star of autumn. A vast debris ring surrounds it; a once-announced planet in that ring has since been reclassified as a dust cloud.",
		facts: [
			"One of the four royal stars of Persia (the Watcher of the South).",
			"Has two faint proper-motion companions, Fomalhaut B and C.",
			"The disk was one of the first imaged in optical scattered light."
		],
		notable: [
			"brightest",
			"navigational",
			"historical"
		]
	},
	{
		slug: "deneb",
		name: "Deneb",
		designation: "α Cygni",
		constellation: "cygnus",
		constellationName: "Cygnus",
		spectralType: "A2 Ia",
		spectralClass: "A",
		luminosityClass: "I",
		kind: "supergiant",
		ra: 20.69,
		dec: 45.28,
		distanceLy: 2615,
		apparentMag: 1.25,
		absoluteMag: -8.38,
		massSun: 19,
		radiusSun: 203,
		luminositySun: 196e3,
		temperatureK: 8525,
		ageGyr: .01,
		summary: "The tail of the swan and the most distant first-magnitude star. Deneb is a white supergiant so luminous that, at Vega’s distance, it would cast shadows. It is the prototype of the Alpha Cygni variables.",
		facts: [
			"Distance estimates still span a wide range; 1,400–2,600 light-years is typical.",
			"One vertex of the Summer Triangle with Vega and Altair.",
			"Will become a red supergiant, then likely a supernova."
		],
		variable: true,
		notable: [
			"brightest",
			"navigational",
			"extreme"
		]
	},
	{
		slug: "mimosa",
		name: "Mimosa",
		designation: "β Crucis",
		constellation: "crux",
		constellationName: "Crux",
		spectralType: "B0.5 III",
		spectralClass: "B",
		luminosityClass: "III",
		kind: "giant",
		ra: 12.795,
		dec: -59.689,
		distanceLy: 280,
		apparentMag: 1.25,
		absoluteMag: -3.92,
		massSun: 16,
		radiusSun: 8.4,
		luminositySun: 34e3,
		temperatureK: 27e3,
		ageGyr: .01,
		summary: "Also Becrux: the eastern arm of the Southern Cross. A Beta Cephei variable, it pulses in hours, a hot giant still burning hydrogen in a thin shell around the core.",
		facts: [
			"A multiple system; the inner pair orbits in five years.",
			"Too far south to be seen from most of Europe and the northern United States.",
			"Lies near the Coalsack nebula."
		],
		binary: true,
		variable: true,
		notable: ["brightest", "navigational"]
	},
	{
		slug: "regulus",
		name: "Regulus",
		designation: "α Leonis",
		constellation: "leo",
		constellationName: "Leo",
		spectralType: "B8 IVn",
		spectralClass: "B",
		luminosityClass: "IV",
		kind: "subgiant",
		ra: 10.139,
		dec: 11.967,
		distanceLy: 79.3,
		apparentMag: 1.4,
		absoluteMag: -.52,
		massSun: 3.8,
		radiusSun: 3.09,
		luminositySun: 288,
		temperatureK: 12460,
		ageGyr: .15,
		summary: "The little king, heart of the lion. Regulus is a rapidly spinning B star almost at breakup, with a close white-dwarf companion and a more distant K-dwarf pair.",
		facts: [
			"A royal star of Persia, the Watcher of the North.",
			"Lies almost on the ecliptic; the Moon and planets occult it.",
			"The equator is gravity-darkened, like Vega and Altair."
		],
		binary: true,
		notable: [
			"brightest",
			"navigational",
			"historical"
		]
	},
	{
		slug: "adhara",
		name: "Adhara",
		designation: "ε Canis Majoris",
		constellation: "canis-major",
		constellationName: "Canis Major",
		spectralType: "B2 II",
		spectralClass: "B",
		luminosityClass: "II",
		kind: "bright-giant",
		ra: 6.977,
		dec: -28.972,
		distanceLy: 430,
		apparentMag: 1.5,
		absoluteMag: -4.1,
		massSun: 12.6,
		radiusSun: 13.9,
		luminositySun: 38700,
		temperatureK: 22900,
		ageGyr: .023,
		summary: "The brightest source of extreme ultraviolet in the night sky, a blue bright giant in the haunch of the Greater Dog. Four million years ago it was the brightest star in Earth’s sky, at magnitude −3.99.",
		facts: [
			"Has a 7th-magnitude companion 7.5″ away.",
			"Dominated the night sky around 4.7 million years ago during a close pass.",
			"Name from Arabic ʿadhārā, “the maidens.”"
		],
		binary: true,
		notable: ["brightest", "historical"]
	},
	{
		slug: "castor",
		name: "Castor",
		designation: "α Geminorum",
		constellation: "gemini",
		constellationName: "Gemini",
		spectralType: "A1 V + A2 Vm",
		spectralClass: "A",
		luminosityClass: "V",
		kind: "main-sequence",
		ra: 7.577,
		dec: 31.888,
		distanceLy: 51,
		apparentMag: 1.58,
		absoluteMag: .59,
		massSun: 2.4,
		radiusSun: 2.4,
		luminositySun: 34,
		temperatureK: 10286,
		ageGyr: .37,
		summary: "A six-star system posing as Gemini’s second head. Two A stars, each with a red-dwarf spectroscopic companion, are orbited by a more distant red-dwarf binary — six suns in one Bayer letter.",
		facts: [
			"The two bright components are 6″ apart and orbit in 467 years.",
			"All three visual pairs are themselves spectroscopic binaries.",
			"Despite the α designation, Pollux is the brighter Twin."
		],
		binary: true,
		notable: ["brightest", "navigational"]
	},
	{
		slug: "gacrux",
		name: "Gacrux",
		designation: "γ Crucis",
		constellation: "crux",
		constellationName: "Crux",
		spectralType: "M3.5 III",
		spectralClass: "M",
		luminosityClass: "III",
		kind: "giant",
		ra: 12.519,
		dec: -57.113,
		distanceLy: 88.6,
		apparentMag: 1.59,
		absoluteMag: -.56,
		massSun: 1.5,
		radiusSun: 84,
		luminositySun: 820,
		temperatureK: 3626,
		ageGyr: 1.9,
		summary: "The only red star of the Southern Cross, a cool giant at the top of the figure. Against Acrux, Mimosa and Delta Crucis it is the colour that makes the cross a cross.",
		facts: [
			"Nearest first-magnitude red giant after Arcturus and Aldebaran.",
			"A semi-regular variable with a small amplitude.",
			"Has an optical companion that is not physically bound."
		],
		variable: true,
		notable: ["brightest", "navigational"]
	},
	{
		slug: "shaula",
		name: "Shaula",
		designation: "λ Scorpii",
		constellation: "scorpius",
		constellationName: "Scorpius",
		spectralType: "B2 IV",
		spectralClass: "B",
		luminosityClass: "IV",
		kind: "subgiant",
		ra: 17.56,
		dec: -37.104,
		distanceLy: 570,
		apparentMag: 1.62,
		absoluteMag: -5.05,
		massSun: 11,
		radiusSun: 8.8,
		luminositySun: 36e3,
		temperatureK: 25e3,
		ageGyr: .011,
		summary: "The sting of the scorpion. Shaula is a massive triple, a Beta Cephei pulsator, and one of the brightest stars of the southern summer. Lesath sits beside it as the lesser sting.",
		facts: [
			"Name from Arabic shawlah, “the raised tail.”",
			"The inner pair orbits in under 6 days.",
			"A member of the Upper Scorpius association."
		],
		binary: true,
		variable: true,
		notable: ["brightest", "navigational"]
	},
	{
		slug: "bellatrix",
		name: "Bellatrix",
		designation: "γ Orionis",
		constellation: "orion",
		constellationName: "Orion",
		spectralType: "B2 III",
		spectralClass: "B",
		luminosityClass: "III",
		kind: "giant",
		ra: 5.419,
		dec: 6.35,
		distanceLy: 250,
		apparentMag: 1.64,
		absoluteMag: -2.78,
		massSun: 7.7,
		radiusSun: 5.8,
		luminositySun: 9210,
		temperatureK: 21800,
		ageGyr: .025,
		summary: "The Amazon star, Orion’s other shoulder. Bellatrix is a hot giant, less famous than Betelgeuse but a clean blue counterweight, and a standard of the old Amazon-warrior namings.",
		facts: [
			"Slightly variable, possibly a slow ellipsoidal or wind variable.",
			"Will evolve into an orange giant, then a white dwarf — too light for a supernova.",
			"A navigational star of the winter hexagon’s inner figure."
		],
		notable: ["brightest", "navigational"]
	},
	{
		slug: "elnath",
		name: "Elnath",
		designation: "β Tauri",
		constellation: "taurus",
		constellationName: "Taurus",
		spectralType: "B7 III",
		spectralClass: "B",
		luminosityClass: "III",
		kind: "giant",
		ra: 5.438,
		dec: 28.608,
		distanceLy: 134,
		apparentMag: 1.65,
		absoluteMag: -1.34,
		massSun: 4.5,
		radiusSun: 4.2,
		luminositySun: 700,
		temperatureK: 13824,
		ageGyr: .1,
		summary: "The bull’s northern horn, shared historically with Auriga. Elnath is a chemically peculiar B giant, slightly mercury-manganese, sitting on the galactic anticenter.",
		facts: [
			"Also catalogued as γ Aurigae before modern boundaries.",
			"Lies near the opposite point of the galactic centre on the sky.",
			"A navigational star of the winter sky."
		],
		notable: ["brightest", "navigational"]
	},
	{
		slug: "alnilam",
		name: "Alnilam",
		designation: "ε Orionis",
		constellation: "orion",
		constellationName: "Orion",
		spectralType: "B0 Ia",
		spectralClass: "B",
		luminosityClass: "I",
		kind: "supergiant",
		ra: 5.603,
		dec: -1.202,
		distanceLy: 2e3,
		apparentMag: 1.69,
		absoluteMag: -6.95,
		massSun: 32,
		radiusSun: 42,
		luminositySun: 537e3,
		temperatureK: 27e3,
		ageGyr: .006,
		summary: "The centre jewel of Orion’s Belt. Alnilam is a lonely blue supergiant — no bright companion — and the most luminous of the three belt stars, lighting the emission nebula NGC 1990.",
		facts: [
			"Name from Arabic an-niẓām, “the string of pearls.”",
			"A 2-magnitude Alpha Cygni variable.",
			"Will explode as a supernova well before the Sun leaves the main sequence."
		],
		variable: true,
		notable: [
			"brightest",
			"navigational",
			"extreme"
		]
	},
	{
		slug: "alnitak",
		name: "Alnitak",
		designation: "ζ Orionis",
		constellation: "orion",
		constellationName: "Orion",
		spectralType: "O9.5 Iab",
		spectralClass: "O",
		luminosityClass: "I",
		kind: "supergiant",
		ra: 5.679,
		dec: -1.943,
		distanceLy: 1260,
		apparentMag: 1.77,
		absoluteMag: -6,
		massSun: 33,
		radiusSun: 20,
		luminositySun: 25e4,
		temperatureK: 29500,
		ageGyr: .007,
		summary: "The eastern belt star, an O-type supergiant triple. Alnitak lights the Flame Nebula and sits beside the Horsehead — the most photographed dark nebula in the sky.",
		facts: [
			"The only O-class star among the traditional first-magnitude names.",
			"A triple: two hot giants and a fainter B star.",
			"Ionizes the end of the Orion molecular cloud complex."
		],
		binary: true,
		notable: [
			"brightest",
			"navigational",
			"extreme"
		]
	},
	{
		slug: "mintaka",
		name: "Mintaka",
		designation: "δ Orionis",
		constellation: "orion",
		constellationName: "Orion",
		spectralType: "O9.5 II",
		spectralClass: "O",
		luminosityClass: "II",
		kind: "bright-giant",
		ra: 5.533,
		dec: -.299,
		distanceLy: 1200,
		apparentMag: 2.23,
		absoluteMag: -4.99,
		massSun: 24,
		radiusSun: 16.5,
		luminositySun: 19e4,
		temperatureK: 29500,
		ageGyr: .007,
		summary: "The western belt star, almost on the celestial equator, so it rises and sets due east and west. Mintaka is an eclipsing O+B pair and a useful teaching star for the equator’s path.",
		facts: [
			"Lies 0.3° south of the celestial equator.",
			"The main pair eclipses every 5.7 days.",
			"A more distant faint companion makes the system at least triple."
		],
		binary: true,
		variable: true,
		notable: ["navigational"]
	},
	{
		slug: "saiph",
		name: "Saiph",
		designation: "κ Orionis",
		constellation: "orion",
		constellationName: "Orion",
		spectralType: "B0.5 Ia",
		spectralClass: "B",
		luminosityClass: "I",
		kind: "supergiant",
		ra: 5.796,
		dec: -9.67,
		distanceLy: 650,
		apparentMag: 2.09,
		absoluteMag: -4.65,
		massSun: 15.5,
		radiusSun: 22.2,
		luminositySun: 57e3,
		temperatureK: 26500,
		ageGyr: .011,
		summary: "Orion’s other knee, quieter than Rigel but still a blue supergiant. Saiph completes the hunter’s quadrilateral and is slightly more distant than the belt.",
		facts: [
			"Name from Arabic saif, “sword of the giant.”",
			"Less famous than Rigel only because it is a magnitude fainter.",
			"A standard blue-white comparison for Betelgeuse’s colour."
		],
		notable: ["navigational"]
	},
	{
		slug: "meissa",
		name: "Meissa",
		designation: "λ Orionis",
		constellation: "orion",
		constellationName: "Orion",
		spectralType: "O8 III",
		spectralClass: "O",
		luminosityClass: "III",
		kind: "giant",
		ra: 5.585,
		dec: 9.934,
		distanceLy: 1100,
		apparentMag: 3.33,
		absoluteMag: -4.16,
		massSun: 27,
		radiusSun: 10,
		luminositySun: 165e3,
		temperatureK: 37600,
		ageGyr: .005,
		summary: "Orion’s head: a hot O giant lighting a ring of ionized gas, the Lambda Orionis molecular ring. Around it sits a young association of stars still drying off from their birth cloud.",
		facts: [
			"A double with a B-star companion 4″ away.",
			"The surrounding H II region is several degrees across.",
			"Sometimes called Heka, “the white spot.”"
		],
		binary: true,
		notable: ["extreme"]
	},
	{
		slug: "polaris",
		name: "Polaris",
		designation: "α Ursae Minoris",
		constellation: "ursa-minor",
		constellationName: "Ursa Minor",
		spectralType: "F7 Ib",
		spectralClass: "F",
		luminosityClass: "I",
		kind: "supergiant",
		ra: 2.53,
		dec: 89.264,
		distanceLy: 433,
		apparentMag: 1.98,
		absoluteMag: -3.6,
		massSun: 5.4,
		radiusSun: 37.5,
		luminositySun: 1260,
		temperatureK: 6015,
		ageGyr: .07,
		summary: "The current north star: a yellow-white supergiant Cepheid with two companions, sitting less than a degree from the pole. Precession will carry the pole past it around 2100, then slowly away.",
		facts: [
			"A classical Cepheid whose pulsation amplitude has changed over a century.",
			"The closer companion was resolved by Hubble in 2006.",
			"Will be the pole star again in about 26,000 years."
		],
		binary: true,
		variable: true,
		notable: [
			"navigational",
			"historical",
			"north-star",
			"variable"
		]
	},
	{
		slug: "alioth",
		name: "Alioth",
		designation: "ε Ursae Majoris",
		constellation: "ursa-major",
		constellationName: "Ursa Major",
		spectralType: "A1 III-IVp",
		spectralClass: "A",
		luminosityClass: "III",
		kind: "giant",
		ra: 12.9,
		dec: 55.96,
		distanceLy: 82.6,
		apparentMag: 1.77,
		absoluteMag: -.2,
		massSun: 2.9,
		radiusSun: 4.2,
		luminositySun: 102,
		temperatureK: 9020,
		ageGyr: .3,
		summary: "The brightest star of Ursa Major and the first of the Dipper’s handle. Alioth is a chemically peculiar A star whose spectrum and magnetic field rotate every 5.1 days.",
		facts: [
			"Prototype of the variable class ACV (α² Canum Venaticorum).",
			"A member of the Ursa Major moving group.",
			"The name is from Arabic alyat, “the fat tail.”"
		],
		variable: true,
		notable: ["brightest", "navigational"]
	},
	{
		slug: "dubhe",
		name: "Dubhe",
		designation: "α Ursae Majoris",
		constellation: "ursa-major",
		constellationName: "Ursa Major",
		spectralType: "K0 III",
		spectralClass: "K",
		luminosityClass: "III",
		kind: "giant",
		ra: 11.062,
		dec: 61.751,
		distanceLy: 123,
		apparentMag: 1.79,
		absoluteMag: -1.08,
		massSun: 4.25,
		radiusSun: 30,
		luminositySun: 316,
		temperatureK: 4660,
		ageGyr: .28,
		summary: "The pointer star with Merak: a line through them hits Polaris. Dubhe is an orange giant, older and more distant than most of the Dipper, and not a member of the Ursa Major moving group.",
		facts: [
			"Has a close F-star companion on a 44-year orbit.",
			"The two pointers are 5.5° apart.",
			"Name from Arabic dubb, “bear.”"
		],
		binary: true,
		notable: ["navigational", "historical"]
	},
	{
		slug: "merak",
		name: "Merak",
		designation: "β Ursae Majoris",
		constellation: "ursa-major",
		constellationName: "Ursa Major",
		spectralType: "A1 IVps",
		spectralClass: "A",
		luminosityClass: "IV",
		kind: "subgiant",
		ra: 11.031,
		dec: 56.382,
		distanceLy: 79.7,
		apparentMag: 2.37,
		absoluteMag: .41,
		massSun: 2.7,
		radiusSun: 3,
		luminositySun: 68,
		temperatureK: 9480,
		ageGyr: .4,
		summary: "The other pointer. Merak is a white subgiant of the Ursa Major moving group, with a debris disk — a younger, hotter counterpart to Dubhe’s orange giant.",
		facts: [
			"Infrared excess shows a remnant planetesimal belt.",
			"Name from Arabic maraqq, “the loin of the bear.”",
			"A standard jumping-off point for star-hopping to Polaris."
		],
		notable: ["navigational"]
	},
	{
		slug: "phecda",
		name: "Phecda",
		designation: "γ Ursae Majoris",
		constellation: "ursa-major",
		constellationName: "Ursa Major",
		spectralType: "A0 Ve",
		spectralClass: "A",
		luminosityClass: "V",
		kind: "main-sequence",
		ra: 11.897,
		dec: 53.695,
		distanceLy: 83.2,
		apparentMag: 2.44,
		absoluteMag: .4,
		massSun: 2.6,
		radiusSun: 3,
		luminositySun: 65,
		temperatureK: 9355,
		ageGyr: .3,
		summary: "The bottom-left of the Dipper’s bowl. Phecda is an A-type dwarf of the moving group, a fast rotator with emission lines from a disk of gas around its equator.",
		facts: [
			"A member of the Ursa Major moving group with Mizar, Alioth, Merak and Megrez.",
			"Used with Megrez as a hop to Cor Caroli.",
			"Name from Arabic fakhð, “thigh.”"
		],
		notable: ["navigational"]
	},
	{
		slug: "megrez",
		name: "Megrez",
		designation: "δ Ursae Majoris",
		constellation: "ursa-major",
		constellationName: "Ursa Major",
		spectralType: "A3 V",
		spectralClass: "A",
		luminosityClass: "V",
		kind: "main-sequence",
		ra: 12.257,
		dec: 57.033,
		distanceLy: 80.5,
		apparentMag: 3.31,
		absoluteMag: 1.32,
		massSun: 1.7,
		radiusSun: 1.4,
		luminositySun: 14,
		temperatureK: 8373,
		ageGyr: .3,
		summary: "The faintest of the seven Dipper stars, where the handle meets the bowl. Megrez is still a perfectly ordinary A dwarf — the others are simply more luminous.",
		facts: [
			"A moving-group member with a faint debris disk.",
			"The jump from Megrez to Phecda aims at the bowl’s south side.",
			"Name from Arabic maghriz, “the root of the tail.”"
		],
		notable: ["navigational"]
	},
	{
		slug: "mizar",
		name: "Mizar",
		designation: "ζ Ursae Majoris",
		constellation: "ursa-major",
		constellationName: "Ursa Major",
		spectralType: "A2 V",
		spectralClass: "A",
		luminosityClass: "V",
		kind: "main-sequence",
		ra: 13.399,
		dec: 54.925,
		distanceLy: 82.9,
		apparentMag: 2.27,
		absoluteMag: .33,
		massSun: 2.2,
		radiusSun: 2.4,
		luminositySun: 33,
		temperatureK: 9e3,
		ageGyr: .3,
		summary: "The middle of the Dipper’s handle, and the most famous double in the sky. Mizar is itself a pair of binaries; Alcor, the naked-eye companion, makes five (or six) stars in one glance.",
		facts: [
			"First binary resolved by telescope (Riccioli, 1650) and first photographed as a binary (1857).",
			"Alcor is a physically related star 0.3 light-years away.",
			"A test of eyesight in many folk traditions."
		],
		binary: true,
		notable: [
			"navigational",
			"historical",
			"binary"
		]
	},
	{
		slug: "alkaid",
		name: "Alkaid",
		designation: "η Ursae Majoris",
		constellation: "ursa-major",
		constellationName: "Ursa Major",
		spectralType: "B3 V",
		spectralClass: "B",
		luminosityClass: "V",
		kind: "main-sequence",
		ra: 13.792,
		dec: 49.313,
		distanceLy: 103.9,
		apparentMag: 1.86,
		absoluteMag: -.67,
		massSun: 6.1,
		radiusSun: 3.4,
		luminositySun: 594,
		temperatureK: 16800,
		ageGyr: .01,
		summary: "The end of the Dipper’s handle: a hot B dwarf, younger and more distant than the moving-group stars, and not one of them. From Alkaid you arc to Arcturus, then spike to Spica.",
		facts: [
			"Name from Arabic al-qāʾid, “the leader” of the mourners.",
			"The bluest of the Dipper’s seven.",
			"A navigational star and a star-hopping hinge for Boötes and Virgo."
		],
		notable: ["navigational"]
	},
	{
		slug: "algol",
		name: "Algol",
		designation: "β Persei",
		constellation: "perseus",
		constellationName: "Perseus",
		spectralType: "B8 V",
		spectralClass: "B",
		luminosityClass: "V",
		kind: "main-sequence",
		ra: 3.136,
		dec: 40.956,
		distanceLy: 90,
		apparentMag: 2.12,
		absoluteMag: -.07,
		massSun: 3.17,
		radiusSun: 2.73,
		luminositySun: 182,
		temperatureK: 13e3,
		ageGyr: .3,
		summary: "The Demon Star in Medusa’s head. Every 2.87 days Algol fades by more than a magnitude as a cooler companion eclipses it — the prototype of eclipsing binaries, known as a winking star since antiquity.",
		facts: [
			"A triple: the eclipsing pair plus a more distant A star.",
			"Mass transfer has inverted the usual evolution: the less massive star looks more evolved.",
			"Name from Arabic raʾs al-ghūl, “the head of the ogre.”"
		],
		binary: true,
		variable: true,
		notable: [
			"variable",
			"historical",
			"binary"
		]
	},
	{
		slug: "mira",
		name: "Mira",
		designation: "ο Ceti",
		constellation: "cetus",
		constellationName: "Cetus",
		spectralType: "M5–M9 IIIe",
		spectralClass: "M",
		luminosityClass: "III",
		kind: "giant",
		ra: 2.322,
		dec: -2.977,
		distanceLy: 300,
		apparentMag: 3,
		absoluteMag: -3.5,
		massSun: 1.2,
		radiusSun: 332,
		luminositySun: 9360,
		temperatureK: 3e3,
		ageGyr: 6,
		summary: "The wonderful: a pulsing red giant that disappears from the naked-eye sky and returns every eleven months. Fabricius noted it in 1596; it remains the prototype of the long-period variables.",
		facts: [
			"Visual magnitude swings from about 2 to 10 over 332 days.",
			"Has a white-dwarf companion, Mira B, accreting from the giant’s wind.",
			"A 13-light-year tail of shed gas streams behind it as it ploughs through the ISM."
		],
		binary: true,
		variable: true,
		notable: [
			"variable",
			"historical",
			"extreme"
		]
	},
	{
		slug: "naos",
		name: "Naos",
		designation: "ζ Puppis",
		constellation: "puppis",
		constellationName: "Puppis",
		spectralType: "O4 If(n)p",
		spectralClass: "O",
		luminosityClass: "I",
		kind: "supergiant",
		ra: 8.056,
		dec: -40.003,
		distanceLy: 1080,
		apparentMag: 2.25,
		absoluteMag: -6,
		massSun: 56,
		radiusSun: 20,
		luminositySun: 813e3,
		temperatureK: 4e4,
		ageGyr: .003,
		summary: "One of the hottest stars visible to the unaided eye. Naos is a runaway O supergiant, flung from the association that made it, pouring out a fierce stellar wind and a million-fold the Sun’s light.",
		facts: [
			"Effective temperature around 40,000 K — class O4.",
			"A classic “runaway” star with a bow shock in the interstellar medium.",
			"The lucida of Puppis, the stern of the old Argo."
		],
		notable: ["extreme", "brightest"]
	},
	{
		slug: "eta-carinae",
		name: "Eta Carinae",
		designation: "η Carinae",
		constellation: "carina",
		constellationName: "Carina",
		spectralType: "LBV + O",
		spectralClass: "L",
		luminosityClass: "0",
		kind: "luminous-blue-variable",
		ra: 10.751,
		dec: -59.684,
		distanceLy: 7500,
		apparentMag: 4.3,
		absoluteMag: -8.6,
		massSun: 100,
		radiusSun: 60,
		luminositySun: 5e6,
		temperatureK: 15e3,
		ageGyr: .003,
		summary: "A wounded hypergiant binary in the Carina Nebula. During the Great Eruption of the 1840s it became the second-brightest star in the sky and threw off the Homunculus Nebula — two lobes of dust we still photograph.",
		facts: [
			"The primary may exceed 100 solar masses; its companion is a hot O star.",
			"Luminosity is several million times the Sun’s.",
			"A supernova impostor; a true supernova is expected, timing unknown."
		],
		binary: true,
		variable: true,
		notable: [
			"extreme",
			"variable",
			"historical"
		]
	},
	{
		slug: "vy-canis-majoris",
		name: "VY Canis Majoris",
		designation: "VY CMa",
		constellation: "canis-major",
		constellationName: "Canis Major",
		spectralType: "M3–M5 Ia",
		spectralClass: "M",
		luminosityClass: "I",
		kind: "hypergiant",
		ra: 7.385,
		dec: -25.768,
		distanceLy: 3900,
		apparentMag: 6.5,
		absoluteMag: -9.4,
		massSun: 17,
		radiusSun: 1420,
		luminositySun: 27e4,
		temperatureK: 3490,
		ageGyr: .008,
		summary: "A red hypergiant among the largest stars measured, wrapped in a nebula of its own shed skin. If placed at the Sun it would reach beyond Jupiter. It is a candidate for a supernova or a direct collapse.",
		facts: [
			"Radius estimates have ranged from 600 to 2,000 solar radii; ~1,400 is current.",
			"Mass-loss rate is among the highest known for a red star.",
			"Too faint for the unaided eye, but unmistakable in photographs of Canis Major."
		],
		variable: true,
		notable: ["extreme", "variable"]
	},
	{
		slug: "r136a1",
		name: "R136a1",
		designation: "RMC 136a1",
		constellation: "dorado",
		constellationName: "Dorado",
		spectralType: "WN5h",
		spectralClass: "W",
		luminosityClass: "I",
		kind: "wolf-rayet",
		ra: 5.645,
		dec: -69.101,
		distanceLy: 163e3,
		apparentMag: 12.23,
		absoluteMag: -12,
		massSun: 215,
		radiusSun: 28.8,
		luminositySun: 6166e3,
		temperatureK: 46e3,
		ageGyr: .001,
		summary: "The most massive and one of the most luminous stars yet measured, sitting in the core of 30 Doradus in the Large Magellanic Cloud. It is a hydrogen-rich Wolf–Rayet, already shedding the envelope of a monster.",
		facts: [
			"Initial mass may have exceeded 250 solar masses.",
			"Lives in the R136 cluster, a factory of O and Wolf–Rayet stars.",
			"Not visible without a large telescope; its fame is physical, not optical."
		],
		notable: ["extreme"]
	},
	{
		slug: "thuban",
		name: "Thuban",
		designation: "α Draconis",
		constellation: "draco",
		constellationName: "Draco",
		spectralType: "A0 III",
		spectralClass: "A",
		luminosityClass: "III",
		kind: "giant",
		ra: 14.073,
		dec: 64.376,
		distanceLy: 303,
		apparentMag: 3.67,
		absoluteMag: -1.2,
		massSun: 3.4,
		radiusSun: 3.4,
		luminositySun: 120,
		temperatureK: 10100,
		ageGyr: .28,
		summary: "The pole star of the pyramid builders. Around 2700 BCE Thuban sat nearer the pole than Polaris does now. It is an eclipsing A giant, modest to the modern eye, immense in the history of north.",
		facts: [
			"An eclipsing binary with a 51-day period, discovered in 2019 by amateurs and TESS.",
			"Precession will return the pole to Draco in about 20,000 years.",
			"Despite the α Bayer letter it is not Draco’s brightest star."
		],
		binary: true,
		variable: true,
		notable: ["historical", "north-star"]
	},
	{
		slug: "kochab",
		name: "Kochab",
		designation: "β Ursae Minoris",
		constellation: "ursa-minor",
		constellationName: "Ursa Minor",
		spectralType: "K4 III",
		spectralClass: "K",
		luminosityClass: "III",
		kind: "giant",
		ra: 14.845,
		dec: 74.155,
		distanceLy: 130.9,
		apparentMag: 2.08,
		absoluteMag: -.87,
		massSun: 2.5,
		radiusSun: 42,
		luminositySun: 390,
		temperatureK: 4030,
		ageGyr: 1.1,
		summary: "One of the Guardians of the Pole, with Pherkad. Kochab is an orange giant that served as the north star from about 1500 BCE to 500 CE, a waystation of precession between Thuban and Polaris.",
		facts: [
			"A suspected planet of a few Jupiter masses has been proposed.",
			"Slightly variable, as many K giants are.",
			"Forms the bowl of the Little Dipper with Pherkad."
		],
		notable: [
			"historical",
			"north-star",
			"navigational"
		]
	},
	{
		slug: "schedar",
		name: "Schedar",
		designation: "α Cassiopeiae",
		constellation: "cassiopeia",
		constellationName: "Cassiopeia",
		spectralType: "K0 IIIa",
		spectralClass: "K",
		luminosityClass: "III",
		kind: "giant",
		ra: .675,
		dec: 56.537,
		distanceLy: 228,
		apparentMag: 2.24,
		absoluteMag: -1.99,
		massSun: 4.5,
		radiusSun: 42.3,
		luminositySun: 794,
		temperatureK: 4530,
		ageGyr: .1,
		summary: "The brightest star of Cassiopeia’s W, an orange giant at the queen’s breast. Schedar is a slow rotator with a faint companion and a slightly uncertain variability.",
		facts: [
			"A spectroscopic companion on a long orbit.",
			"The W of Cassiopeia is a northern-autumn landmark.",
			"Name from Arabic ṣadr, “breast.”"
		],
		notable: ["navigational"]
	},
	{
		slug: "caph",
		name: "Caph",
		designation: "β Cassiopeiae",
		constellation: "cassiopeia",
		constellationName: "Cassiopeia",
		spectralType: "F2 III–IV",
		spectralClass: "F",
		luminosityClass: "IV",
		kind: "subgiant",
		ra: .153,
		dec: 59.15,
		distanceLy: 54.7,
		apparentMag: 2.27,
		absoluteMag: 1.16,
		massSun: 1.91,
		radiusSun: 3.5,
		luminositySun: 28,
		temperatureK: 7079,
		ageGyr: 1.2,
		summary: "The western end of the W, a Delta Scuti pulsator and a fast-spinning subgiant. Caph is the nearest bright star of Cassiopeia and a useful photometric standard.",
		facts: [
			"Pulses with a period of about 2.5 hours.",
			"Flattened by rotation, like Altair and Vega.",
			"Name from Arabic kaf, “the stained hand.”"
		],
		variable: true,
		notable: ["navigational", "variable"]
	},
	{
		slug: "gamma-cassiopeiae",
		name: "Gamma Cassiopeiae",
		designation: "γ Cassiopeiae",
		constellation: "cassiopeia",
		constellationName: "Cassiopeia",
		spectralType: "B0.5 IVe",
		spectralClass: "B",
		luminosityClass: "IV",
		kind: "subgiant",
		ra: .945,
		dec: 60.717,
		distanceLy: 550,
		apparentMag: 2.47,
		absoluteMag: -4,
		massSun: 13,
		radiusSun: 10,
		luminositySun: 34e3,
		temperatureK: 25e3,
		ageGyr: .008,
		summary: "The middle of the W and the prototype of the Gamma Cassiopeiae variables: a hot Be star with a decretion disk that has, at times, made it the brightest star in Cassiopeia.",
		facts: [
			"An X-ray source, unusual among Be stars.",
			"The disk comes and goes; the star has ranged from mag 1.6 to 3.",
			"Informally called Navi, from the middle name of astronaut Gus Grissom, written backward."
		],
		variable: true,
		notable: ["variable", "historical"]
	},
	{
		slug: "ruchbah",
		name: "Ruchbah",
		designation: "δ Cassiopeiae",
		constellation: "cassiopeia",
		constellationName: "Cassiopeia",
		spectralType: "A5 IV",
		spectralClass: "A",
		luminosityClass: "IV",
		kind: "subgiant",
		ra: 1.43,
		dec: 60.235,
		distanceLy: 99.4,
		apparentMag: 2.68,
		absoluteMag: .24,
		massSun: 2.5,
		radiusSun: 3.9,
		luminositySun: 63,
		temperatureK: 8088,
		ageGyr: .6,
		summary: "The eastern seat of the queen’s chair. Ruchbah is an Algol-type eclipsing binary, fading by a tenth of a magnitude every 759 days — a slow wink.",
		facts: [
			"The eclipse is shallow and easy to miss visually.",
			"A member of the Cassiopeia–Taurus stream.",
			"Name from Arabic rukba, “knee.”"
		],
		binary: true,
		variable: true,
		notable: ["variable"]
	},
	{
		slug: "enif",
		name: "Enif",
		designation: "ε Pegasi",
		constellation: "pegasus",
		constellationName: "Pegasus",
		spectralType: "K2 Ib",
		spectralClass: "K",
		luminosityClass: "I",
		kind: "supergiant",
		ra: 21.736,
		dec: 9.875,
		distanceLy: 690,
		apparentMag: 2.38,
		absoluteMag: -4.19,
		massSun: 12,
		radiusSun: 185,
		luminositySun: 7590,
		temperatureK: 3963,
		ageGyr: .02,
		summary: "The nose of the winged horse, an orange supergiant that has been caught in rare outburst, briefly matching a first-magnitude star. Enif is the lucida of Pegasus, off the Great Square.",
		facts: [
			"A slow irregular variable with occasional flares.",
			"Name from Arabic anf, “nose.”",
			"Has a 12th-magnitude companion that is probably optical."
		],
		variable: true,
		notable: ["variable"]
	},
	{
		slug: "markab",
		name: "Markab",
		designation: "α Pegasi",
		constellation: "pegasus",
		constellationName: "Pegasus",
		spectralType: "B9.5 III",
		spectralClass: "B",
		luminosityClass: "III",
		kind: "giant",
		ra: 23.079,
		dec: 15.205,
		distanceLy: 133,
		apparentMag: 2.49,
		absoluteMag: -.7,
		massSun: 3.1,
		radiusSun: 4.7,
		luminositySun: 204,
		temperatureK: 10700,
		ageGyr: .22,
		summary: "The southwestern corner of the Great Square of Pegasus. Markab is a hot giant that has just left the main sequence, a reliable autumn landmark.",
		facts: [
			"Name from Arabic markab, “the saddle” or “vehicle.”",
			"A navigational star.",
			"The Square is an asterism, not the whole of Pegasus."
		],
		notable: ["navigational"]
	},
	{
		slug: "scheat",
		name: "Scheat",
		designation: "β Pegasi",
		constellation: "pegasus",
		constellationName: "Pegasus",
		spectralType: "M2.5 II–III",
		spectralClass: "M",
		luminosityClass: "II",
		kind: "bright-giant",
		ra: 23.063,
		dec: 28.083,
		distanceLy: 196,
		apparentMag: 2.42,
		absoluteMag: -1.49,
		massSun: 2.1,
		radiusSun: 95,
		luminositySun: 309,
		temperatureK: 3600,
		ageGyr: .1,
		summary: "The northwestern corner of the Square, a red bright giant that varies by half a magnitude. Scheat is cooler and puffier than Markab, giving the Square a mixed colour if you look carefully.",
		facts: [
			"A semi-regular variable with a period near 38 days.",
			"Name from Arabic as-sāq, “the shin.”",
			"Used with Markab as a hop to the Circlet of Pisces."
		],
		variable: true,
		notable: ["variable", "navigational"]
	},
	{
		slug: "alpheratz",
		name: "Alpheratz",
		designation: "α Andromedae",
		constellation: "andromeda",
		constellationName: "Andromeda",
		spectralType: "B8 IV-V HgMn",
		spectralClass: "B",
		luminosityClass: "IV",
		kind: "subgiant",
		ra: .14,
		dec: 29.09,
		distanceLy: 97,
		apparentMag: 2.06,
		absoluteMag: -.3,
		massSun: 3.6,
		radiusSun: 2.7,
		luminositySun: 240,
		temperatureK: 13800,
		ageGyr: .06,
		summary: "The northeastern corner of the Great Square, officially Andromeda’s, historically Pegasus’s. Alpheratz is a mercury-manganese B star, chemically peculiar, and the lucida of the chained princess.",
		facts: [
			"Also catalogued as δ Pegasi before modern boundaries.",
			"A spectroscopic binary with a 96.7-day orbit.",
			"The starting point for star-hopping to the Andromeda Galaxy."
		],
		binary: true,
		notable: ["navigational"]
	},
	{
		slug: "hamal",
		name: "Hamal",
		designation: "α Arietis",
		constellation: "aries",
		constellationName: "Aries",
		spectralType: "K2 III",
		spectralClass: "K",
		luminosityClass: "III",
		kind: "giant",
		ra: 2.12,
		dec: 23.463,
		distanceLy: 65.8,
		apparentMag: 2,
		absoluteMag: .48,
		massSun: 1.5,
		radiusSun: 14.9,
		luminositySun: 91,
		temperatureK: 4480,
		ageGyr: 3.4,
		summary: "The ram’s forehead, an orange giant and the old marker of the vernal equinox’s neighbourhood. Hamal is a high-proper-motion giant with a candidate planet.",
		facts: [
			"A planet of a few Jupiter masses has been reported at 1.2 au.",
			"One of the 57 navigational stars.",
			"Name from Arabic ḥamal, “ram.”"
		],
		notable: ["navigational", "historical"]
	},
	{
		slug: "nunki",
		name: "Nunki",
		designation: "σ Sagittarii",
		constellation: "sagittarius",
		constellationName: "Sagittarius",
		spectralType: "B2.5 V",
		spectralClass: "B",
		luminosityClass: "V",
		kind: "main-sequence",
		ra: 18.921,
		dec: -26.297,
		distanceLy: 228,
		apparentMag: 2.05,
		absoluteMag: -2.02,
		massSun: 7.8,
		radiusSun: 4.5,
		luminositySun: 3300,
		temperatureK: 18900,
		ageGyr: .03,
		summary: "The brightest star of the teapot’s handle, a hot B dwarf sitting in front of the Milky Way’s richest star clouds. Nunki is a Babylonian name that survived when most others were replaced by Arabic.",
		facts: [
			"One of the few bright-star names of Sumerian/Babylonian origin still in use.",
			"A navigational star, especially for southern ocean routes.",
			"Lies near the direction of the galactic centre, but far in the foreground."
		],
		notable: ["navigational", "historical"]
	},
	{
		slug: "kaus-australis",
		name: "Kaus Australis",
		designation: "ε Sagittarii",
		constellation: "sagittarius",
		constellationName: "Sagittarius",
		spectralType: "B9.5 III",
		spectralClass: "B",
		luminosityClass: "III",
		kind: "giant",
		ra: 18.403,
		dec: -34.385,
		distanceLy: 143,
		apparentMag: 1.85,
		absoluteMag: -1.41,
		massSun: 3.5,
		radiusSun: 6.9,
		luminositySun: 375,
		temperatureK: 9960,
		ageGyr: .23,
		summary: "The southern tip of the archer’s bow and the lucida of Sagittarius. Kaus Australis is a helium-weak giant with a 7th-magnitude companion, marking the teapot’s spout.",
		facts: [
			"Name from Arabic qaus, “bow,” plus Latin australis, “southern.”",
			"A navigational star of the southern summer.",
			"The teapot asterism pours onto the galactic centre."
		],
		binary: true,
		notable: ["brightest", "navigational"]
	},
	{
		slug: "ankaa",
		name: "Ankaa",
		designation: "α Phoenicis",
		constellation: "phoenix",
		constellationName: "Phoenix",
		spectralType: "K0.5 IIIb",
		spectralClass: "K",
		luminosityClass: "III",
		kind: "giant",
		ra: .438,
		dec: -42.306,
		distanceLy: 85,
		apparentMag: 2.4,
		absoluteMag: .52,
		massSun: 1.5,
		radiusSun: 15,
		luminositySun: 83,
		temperatureK: 4436,
		ageGyr: 2.5,
		summary: "The lucida of Phoenix, an orange giant binary. Ankaa is a quiet southern autumn star, named for the Arabic phoenix, far from the crowded Milky Way.",
		facts: [
			"A spectroscopic binary with a 10.5-year orbit.",
			"The only bright star of an otherwise sparse constellation.",
			"Visible from the far southern United States on winter evenings."
		],
		binary: true,
		notable: ["navigational"]
	},
	{
		slug: "alnair",
		name: "Alnair",
		designation: "α Gruis",
		constellation: "grus",
		constellationName: "Grus",
		spectralType: "B6 V",
		spectralClass: "B",
		luminosityClass: "V",
		kind: "main-sequence",
		ra: 22.137,
		dec: -46.961,
		distanceLy: 101,
		apparentMag: 1.74,
		absoluteMag: -.73,
		massSun: 4,
		radiusSun: 3.4,
		luminositySun: 380,
		temperatureK: 13920,
		ageGyr: .1,
		summary: "The brightest star of the Crane, a hot blue-white dwarf. Alnair is a southern spring landmark and a navigational star, sitting in a region of sky the Greeks left unnamed.",
		facts: [
			"Name from Arabic al-nayyir, “the bright one” (of the fish’s tail, originally).",
			"A mild mercury-manganese peculiarity in the spectrum.",
			"Forms a wide pair with Beta Gruis to the eye, though they are unrelated."
		],
		notable: ["brightest", "navigational"]
	},
	{
		slug: "peacock",
		name: "Peacock",
		designation: "α Pavonis",
		constellation: "pavo",
		constellationName: "Pavo",
		spectralType: "B2 IV",
		spectralClass: "B",
		luminosityClass: "IV",
		kind: "subgiant",
		ra: 20.427,
		dec: -56.735,
		distanceLy: 179,
		apparentMag: 1.94,
		absoluteMag: -1.81,
		massSun: 6.7,
		radiusSun: 4.8,
		luminositySun: 2200,
		temperatureK: 17700,
		ageGyr: .048,
		summary: "The lucida of Pavo, a spectroscopic binary of hot B stars. Western navigators simply called it Peacock, and the name stuck as a navigational star of the deep south.",
		facts: [
			"The companion orbits in 11.8 days.",
			"One of the 57 navigational stars.",
			"Never rises in Europe or most of North America."
		],
		binary: true,
		notable: ["navigational"]
	},
	{
		slug: "avior",
		name: "Avior",
		designation: "ε Carinae",
		constellation: "carina",
		constellationName: "Carina",
		spectralType: "K3 III + B2 Vp",
		spectralClass: "K",
		luminosityClass: "III",
		kind: "giant",
		ra: 8.375,
		dec: -59.51,
		distanceLy: 610,
		apparentMag: 1.86,
		absoluteMag: -4.58,
		massSun: 9,
		radiusSun: 140,
		luminositySun: 6e3,
		temperatureK: 3523,
		ageGyr: .026,
		summary: "A contrasting double: an orange giant and a hot B star that together make a first-magnitude point in Carina. Avior is a modern navigational name, coined in the 1930s for air almanacs.",
		facts: [
			"The pair is an eclipsing binary with a 785-day period.",
			"The name Avior is not traditional; it was invented for aviation.",
			"Sits near the False Cross asterism."
		],
		binary: true,
		variable: true,
		notable: ["navigational", "binary"]
	},
	{
		slug: "suhail",
		name: "Suhail",
		designation: "λ Velorum",
		constellation: "vela",
		constellationName: "Vela",
		spectralType: "K4 Ib",
		spectralClass: "K",
		luminosityClass: "I",
		kind: "supergiant",
		ra: 9.13,
		dec: -43.433,
		distanceLy: 545,
		apparentMag: 2.21,
		absoluteMag: -3.99,
		massSun: 7,
		radiusSun: 207,
		luminositySun: 7700,
		temperatureK: 4e3,
		ageGyr: .032,
		summary: "An orange supergiant in the sails of Argo, a slow irregular variable. Suhail is one of several stars that inherited a name meaning “the glorious” in Arabic navigational tradition.",
		facts: [
			"A slight variable of the Lc class.",
			"Part of the False Cross with Avior, Aspidiske and Delta Velorum.",
			"Will likely end as a white dwarf after shedding a planetary nebula."
		],
		variable: true,
		notable: ["navigational"]
	},
	{
		slug: "gamma-velorum",
		name: "Gamma Velorum",
		designation: "γ Velorum",
		constellation: "vela",
		constellationName: "Vela",
		spectralType: "WC8 + O7.5",
		spectralClass: "W",
		luminosityClass: "I",
		kind: "wolf-rayet",
		ra: 8.158,
		dec: -47.337,
		distanceLy: 1100,
		apparentMag: 1.83,
		absoluteMag: -5.6,
		massSun: 9,
		radiusSun: 6,
		luminositySun: 17e4,
		temperatureK: 57e3,
		ageGyr: .004,
		summary: "The brightest Wolf–Rayet star in the sky, a stripped carbon-sequence sun paired with a hotter O-star companion. Gamma Velorum is sometimes called Regor, and it dominates Vela in binoculars as a blue-white blaze.",
		facts: [
			"The WR wind is carbon-rich (WC8), a rare naked-eye spectrum.",
			"The O companion is more massive and will likely go supernova first.",
			"Sits in front of the Vela Molecular Ridge."
		],
		binary: true,
		notable: ["extreme", "brightest"]
	},
	{
		slug: "sadr",
		name: "Sadr",
		designation: "γ Cygni",
		constellation: "cygnus",
		constellationName: "Cygnus",
		spectralType: "F8 Ib",
		spectralClass: "F",
		luminosityClass: "I",
		kind: "supergiant",
		ra: 20.37,
		dec: 40.257,
		distanceLy: 1800,
		apparentMag: 2.2,
		absoluteMag: -6.12,
		massSun: 12,
		radiusSun: 150,
		luminositySun: 33e3,
		temperatureK: 5790,
		ageGyr: .012,
		summary: "The heart of the swan, where the Northern Cross’s beams meet. Sadr is a yellow-white supergiant lighting the Gamma Cygni Nebula, a rich stretch of the summer Milky Way.",
		facts: [
			"Sits in a crowded field of emission nebulae and open clusters.",
			"A slight Alpha Cygni-type variable.",
			"Name from Arabic ṣadr, “chest.”"
		],
		variable: true,
		notable: ["navigational"]
	},
	{
		slug: "denebola",
		name: "Denebola",
		designation: "β Leonis",
		constellation: "leo",
		constellationName: "Leo",
		spectralType: "A3 Va",
		spectralClass: "A",
		luminosityClass: "V",
		kind: "main-sequence",
		ra: 11.818,
		dec: 14.572,
		distanceLy: 35.9,
		apparentMag: 2.14,
		absoluteMag: 1.92,
		massSun: 1.78,
		radiusSun: 1.73,
		luminositySun: 15,
		temperatureK: 8500,
		ageGyr: .1,
		summary: "The tuft of the lion’s tail, a nearby A dwarf with a debris disk. Denebola is a vertex of the Spring Triangle with Arcturus and Spica.",
		facts: [
			"Infrared excess indicates a young planetesimal belt.",
			"A mild Delta Scuti pulsator.",
			"Name from Arabic dhanab al-asad, “the lion’s tail.”"
		],
		variable: true,
		notable: ["navigational"]
	},
	{
		slug: "crab-pulsar",
		name: "Crab Pulsar",
		designation: "PSR B0531+21",
		constellation: "taurus",
		constellationName: "Taurus",
		spectralType: "Pulsar",
		spectralClass: "N",
		luminosityClass: "N",
		kind: "neutron-star",
		ra: 5.575,
		dec: 22.015,
		distanceLy: 6500,
		apparentMag: 16.5,
		absoluteMag: 5,
		massSun: 1.4,
		radiusSun: 14e-6,
		luminositySun: 3e4,
		temperatureK: 16e5,
		ageGyr: .001,
		summary: "The neutron-star remnant of SN 1054, flashing 30 times a second at the centre of the Crab Nebula. Chinese and Japanese astronomers recorded the guest star; the pulsar was found in 1968.",
		facts: [
			"Rotation period is 33 milliseconds and slowing by 38 ns per day.",
			"The nebula is still expanding at about 1,500 km/s.",
			"First pulsar identified with an optical counterpart."
		],
		variable: true,
		notable: ["historical", "extreme"]
	},
	{
		slug: "cygnus-x1",
		name: "Cygnus X-1",
		designation: "HDE 226868",
		constellation: "cygnus",
		constellationName: "Cygnus",
		spectralType: "O9.7 Iab",
		spectralClass: "O",
		luminosityClass: "I",
		kind: "supergiant",
		ra: 19.973,
		dec: 35.202,
		distanceLy: 6070,
		apparentMag: 8.95,
		absoluteMag: -6.5,
		massSun: 21,
		radiusSun: 21,
		luminositySun: 2e5,
		temperatureK: 31e3,
		ageGyr: .005,
		summary: "The visible O-supergiant companion of the first black hole discovered. Cygnus X-1 is an X-ray binary: the unseen companion, about 21 solar masses, pulls a wind off the blue star and lights it as X-rays.",
		facts: [
			"Identified as a black-hole candidate in 1971; Stephen Hawking later conceded the bet.",
			"The hole’s spin is near maximal.",
			"Not a naked-eye star; its fame is in X-rays and in the history of relativity."
		],
		binary: true,
		notable: [
			"historical",
			"extreme",
			"binary"
		]
	},
	{
		slug: "wezen",
		name: "Wezen",
		designation: "δ Canis Majoris",
		constellation: "canis-major",
		constellationName: "Canis Major",
		spectralType: "F8 Ia",
		spectralClass: "F",
		luminosityClass: "I",
		kind: "supergiant",
		ra: 7.14,
		dec: -26.393,
		distanceLy: 1600,
		apparentMag: 1.83,
		absoluteMag: -6.87,
		massSun: 17,
		radiusSun: 215,
		luminositySun: 5e4,
		temperatureK: 6e3,
		ageGyr: .01,
		summary: "A yellow-white supergiant in the Greater Dog, already evolving off the main sequence toward a red-supergiant end. Wezen is one of the most luminous F stars in the nearby Galaxy.",
		facts: [
			"Expected to become a red supergiant within the next 100,000 years.",
			"Name from Arabic wazn, “weight.”",
			"Forms a triangle with Adhara and Aludra in the dog’s hindquarters."
		],
		notable: ["extreme"]
	},
	{
		slug: "mirfak",
		name: "Mirfak",
		designation: "α Persei",
		constellation: "perseus",
		constellationName: "Perseus",
		spectralType: "F5 Ib",
		spectralClass: "F",
		luminosityClass: "I",
		kind: "supergiant",
		ra: 3.405,
		dec: 49.861,
		distanceLy: 510,
		apparentMag: 1.8,
		absoluteMag: -4.5,
		massSun: 8.5,
		radiusSun: 68,
		luminositySun: 5e3,
		temperatureK: 6350,
		ageGyr: .04,
		summary: "The lucida of Perseus and the central star of the Alpha Persei Cluster, a nearby association of young B and A stars. Mirfak is a yellow-white supergiant still sitting among its siblings.",
		facts: [
			"The cluster is visible as a hazy spray in binoculars.",
			"A mild pulsating supergiant.",
			"Name from Arabic mirfaq, “elbow.”"
		],
		notable: ["navigational"]
	}
];
var STAR_BY_SLUG = Object.fromEntries(STARS.map((s) => [s.slug, s]));
function getStar(slug) {
	return STAR_BY_SLUG[slug];
}
function starsInConstellation(slug) {
	return STARS.filter((s) => s.constellation === slug).sort((a, b) => a.apparentMag - b.apparentMag);
}
var CATALOG_COUNT = STARS.length;
var CONSTELLATION_COUNT = CONSTELLATIONS.length;
function distanceBucket(ly) {
	if (ly < 20) return "nearby";
	if (ly < 100) return "neighborhood";
	if (ly < 1e3) return "galactic";
	return "distant";
}
var DISTANCE_INFO = [
	{
		id: "nearby",
		label: "Nearby",
		range: "< 20 ly"
	},
	{
		id: "neighborhood",
		label: "Neighborhood",
		range: "20–100 ly"
	},
	{
		id: "galactic",
		label: "Galactic",
		range: "100–1,000 ly"
	},
	{
		id: "distant",
		label: "Distant",
		range: "> 1,000 ly"
	}
];
function filterStars(filters) {
	const q = filters.q.trim().toLowerCase();
	let list = STARS.filter((star) => {
		if (filters.spectral && star.spectralClass !== filters.spectral) return false;
		if (filters.kind && star.kind !== filters.kind) return false;
		if (filters.constellation && star.constellation !== filters.constellation) return false;
		if (filters.distance && distanceBucket(star.distanceLy) !== filters.distance) return false;
		if (filters.notable && !star.notable.includes(filters.notable)) return false;
		if (q) {
			if (![
				star.name,
				star.designation,
				star.spectralType,
				star.constellationName ?? "",
				star.summary,
				...star.facts
			].join(" ").toLowerCase().includes(q)) return false;
		}
		return true;
	});
	list = [...list].sort((a, b) => {
		switch (filters.sort) {
			case "name": return a.name.localeCompare(b.name);
			case "distance": return a.distanceLy - b.distanceLy;
			case "temperature": return b.temperatureK - a.temperatureK;
			case "luminosity": return b.luminositySun - a.luminositySun;
			default: return a.apparentMag - b.apparentMag;
		}
	});
	return list;
}
function formatLy(ly) {
	if (ly < .001) return "8.3 light-minutes";
	if (ly < 1) return `${ly.toFixed(5)} ly`;
	if (ly < 10) return `${ly.toFixed(2)} ly`;
	if (ly < 100) return `${ly.toFixed(1)} ly`;
	if (ly >= 1e3) return `${Math.round(ly).toLocaleString()} ly`;
	return `${Math.round(ly)} ly`;
}
function formatMag(mag) {
	return `${mag > 0 ? "+" : ""}${mag.toFixed(2)}`;
}
function formatSolar(n, digits = 2) {
	if (n === 0) return "0";
	if (n > 0 && n < 1e-4) return n.toExponential(1);
	if (n >= 1e3) return Math.round(n).toLocaleString();
	if (n >= 100) return n.toFixed(0);
	if (n >= 10) return n.toFixed(1);
	return n.toFixed(digits);
}
function formatTemp(k) {
	return `${k.toLocaleString()} K`;
}
function formatRa(hours) {
	const h = Math.floor(hours);
	const mFloat = (hours - h) * 60;
	const m = Math.floor(mFloat);
	const s = Math.round((mFloat - m) * 60);
	return `${String(h).padStart(2, "0")}h ${String(m).padStart(2, "0")}m ${String(s).padStart(2, "0")}s`;
}
function formatDec(deg) {
	const sign = deg < 0 ? "−" : "+";
	const abs = Math.abs(deg);
	const d = Math.floor(abs);
	const mFloat = (abs - d) * 60;
	return `${sign}${d}° ${String(Math.floor(mFloat)).padStart(2, "0")}′`;
}
var FEATURED_SLUGS = [
	"sirius",
	"betelgeuse",
	"vega",
	"proxima-centauri",
	"polaris",
	"rigel"
];
Object.fromEntries(SPECTRAL_CLASSES.map((s) => [s.class, s.specimen]));
function constellationStarCount(slug) {
	return STARS.filter((s) => s.constellation === slug).length;
}
function relatedStars(star, limit = 4) {
	if (!star.constellation) return STARS.filter((s) => s.slug !== star.slug && s.spectralClass === star.spectralClass).slice(0, limit);
	const same = STARS.filter((s) => s.constellation === star.constellation && s.slug !== star.slug);
	if (same.length >= limit) return same.slice(0, limit);
	const rest = STARS.filter((s) => s.slug !== star.slug && s.spectralClass === star.spectralClass && !same.includes(s));
	return [...same, ...rest].slice(0, limit);
}
function kindCount(kind) {
	return STARS.filter((s) => s.kind === kind).length;
}
function spectralCount(cls) {
	return STARS.filter((s) => s.spectralClass === cls).length;
}
//#endregion
export { PLANET_BG as A, SPECTRAL_TEXT as B, Button as C, KIND_LABEL as D, KIND_INFO as E, PLANET_KIND_LABEL as F, getPlanet as G, SiteShell as H, PLANET_TAG_LABEL as I, systemOf as J, planetsForStar as K, SPECTRAL_BG as L, PLANET_HEX as M, PLANET_KIND_HEX as N, NOTABLE_LABEL as O, PLANET_KIND_INFO as P, SPECTRAL_CLASSES as R, starsInConstellation as S, DISCOVERY_LABEL as T, cn as U, SiteFooter as V, discoveryOf as W, formatTemp as _, CONSTELLATION_LINES as a, relatedStars as b, STARS as c, filterStars as d, formatDec as f, formatSolar as g, formatRa as h, CONSTELLATION_COUNT as i, PLANET_BY_SLUG as j, PLANETS as k, STAR_BY_SLUG as l, formatMag as m, CONSTELLATIONS as n, DISTANCE_INFO as o, formatLy as p, spectralVar as q, CONSTELLATION_BY_SLUG as r, FEATURED_SLUGS as s, CATALOG_COUNT as t, constellationStarCount as u, getStar as v, DISCOVERY_INFO as w, spectralCount as x, kindCount as y, SPECTRAL_HEX as z };
