import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, b as require_jsx_runtime, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Search, t as X } from "../_libs/lucide-react.mjs";
import { F as PLANET_KIND_LABEL, I as PLANET_TAG_LABEL, M as PLANET_HEX, N as PLANET_KIND_HEX, P as PLANET_KIND_INFO, U as cn, V as SiteFooter, k as PLANETS, w as DISCOVERY_INFO } from "./catalog-N4vBopjS.mjs";
import { s as Route$7 } from "./router-krysFcP6.mjs";
import { t as PlanetOrb } from "./planet-orb-Daq3UcVc.mjs";
import { a as SOLAR_COUNT, d as kindCountPlanets, i as PlanetCard, o as SOLAR_PLANETS, r as PLANET_COUNT, s as filterPlanets, t as EXO_COUNT } from "./planet-card-CuzkX50g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/planets-gDp19HJj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function round(n) {
	return Math.round(n * 10) / 10;
}
function xOf(mass, w) {
	const minM = Math.log10(1e-4);
	const maxM = Math.log10(5e3);
	return round(52 + (Math.min(Math.max(Math.log10(Math.max(mass, 8e-5)), minM), maxM) - minM) / (maxM - minM) * (w - 84));
}
function yOf(radius, h) {
	const minR = Math.log10(.05);
	const maxR = Math.log10(28);
	return round(24 + (maxR - Math.min(Math.max(Math.log10(Math.max(radius, .04)), minR), maxR)) / (maxR - minR) * (h - 60));
}
function PlanetDiagram() {
	const navigate = useNavigate();
	const [hover, setHover] = (0, import_react.useState)(null);
	const width = 920;
	const height = 520;
	const hoverPlanet = (0, import_react.useMemo)(() => PLANETS.find((p) => p.slug === hover), [hover]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-xl bg-bg-elevated/70 shadow-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: `0 0 ${width} ${height}`,
			className: "h-auto w-full",
			role: "img",
			"aria-label": "Mass–radius diagram of the planet catalog",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width,
					height,
					fill: "#0b0b10"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: width / 2,
					y: 18,
					textAnchor: "middle",
					fill: "rgba(236,236,241,0.4)",
					fontSize: 11,
					fontFamily: "IBM Plex Mono, monospace",
					children: "Mass (M⊕) →"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: 16,
					y: height / 2,
					fill: "rgba(236,236,241,0.4)",
					fontSize: 11,
					fontFamily: "IBM Plex Mono, monospace",
					transform: `rotate(-90 16 ${height / 2})`,
					children: "Radius (R⊕)"
				}),
				[
					.001,
					.1,
					1,
					10,
					100,
					1e3
				].map((m) => {
					const x = xOf(m, width);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: x,
						y1: 28,
						x2: x,
						y2: 484,
						stroke: "rgba(236,236,241,0.06)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x,
						y: 504,
						textAnchor: "middle",
						fill: "rgba(236,236,241,0.35)",
						fontSize: 10,
						fontFamily: "IBM Plex Mono, monospace",
						children: m >= 1 ? m.toLocaleString() : m
					})] }, m);
				}),
				[
					.1,
					1,
					4,
					11
				].map((r) => {
					const y = yOf(r, height);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: 52,
						y1: y,
						x2: 896,
						y2: y,
						stroke: "rgba(236,236,241,0.06)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: 48,
						y: y + 3,
						textAnchor: "end",
						fill: "rgba(236,236,241,0.35)",
						fontSize: 10,
						fontFamily: "IBM Plex Mono, monospace",
						children: r
					})] }, r);
				}),
				PLANETS.map((planet) => {
					const x = xOf(planet.massEarth, width);
					const y = yOf(planet.radiusEarth, height);
					const active = hover === planet.slug;
					const rad = planet.kind === "dwarf" ? 3.2 : planet.kind === "hot-jupiter" || planet.kind === "gas-giant" ? 5.4 : 4;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: x,
						cy: y,
						r: active ? rad + 2 : rad,
						fill: PLANET_KIND_HEX[planet.kind],
						opacity: active ? 1 : .88,
						className: "cursor-pointer",
						onMouseEnter: () => setHover(planet.slug),
						onMouseLeave: () => setHover(null),
						onClick: () => navigate({
							to: "/planet/$slug",
							params: { slug: planet.slug }
						})
					}, planet.slug);
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverCard, { planet: hoverPlanet })]
	});
}
function HoverCard({ planet }) {
	if (!planet) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "pointer-events-none absolute bottom-4 left-4 text-xs text-subtle",
		children: "Rock lower-left · giants upper-right · click any world"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute bottom-4 left-4 rounded-md bg-bg/90 px-3 py-2 text-sm shadow-panel",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-base text-fg",
			children: planet.name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-mono text-xs text-muted",
			children: [
				PLANET_KIND_LABEL[planet.kind],
				" · ",
				planet.massEarth >= 10 ? planet.massEarth.toFixed(0) : planet.massEarth,
				" M⊕ ·",
				" ",
				planet.radiusEarth.toFixed(2),
				" R⊕"
			]
		})]
	});
}
var SORTS = [
	{
		id: "au",
		label: "Orbit"
	},
	{
		id: "name",
		label: "Name"
	},
	{
		id: "mass",
		label: "Mass"
	},
	{
		id: "radius",
		label: "Radius"
	},
	{
		id: "period",
		label: "Period"
	}
];
var TAGS = [
	"habitable-zone",
	"rings",
	"life",
	"first",
	"extreme",
	"visited",
	"transiting",
	"imaged"
];
function PlanetFiltersBar({ value, onChange, resultCount }) {
	const set = (patch) => onChange({
		...value,
		...patch
	});
	const hasFilters = value.q || value.kind || value.system || value.notable || value.discovery;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-subtle" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "search",
						value: value.q,
						onChange: (e) => set({ q: e.target.value }),
						placeholder: "Search name, host star, designation…",
						className: "h-12 w-full rounded-lg bg-bg-elevated pr-12 pl-11 text-sm text-fg shadow-border placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
					}),
					value.q ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "absolute top-1/2 right-2 grid size-9 -translate-y-1/2 place-items-center rounded-sm text-subtle hover:text-fg",
						onClick: () => set({ q: "" }),
						"aria-label": "Clear search",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FilterRow, {
				label: "Family",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: value.system === "solar",
					onClick: () => set({ system: value.system === "solar" ? "" : "solar" }),
					children: "Solar System"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: value.system === "exoplanet",
					onClick: () => set({ system: value.system === "exoplanet" ? "" : "exoplanet" }),
					children: "Exoplanet"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, {
				label: "Type",
				children: PLANET_KIND_INFO.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: value.kind === k.id,
					onClick: () => set({ kind: value.kind === k.id ? "" : k.id }),
					children: k.label
				}, k.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, {
				label: "Found by",
				children: DISCOVERY_INFO.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: value.discovery === d.id,
					onClick: () => set({ discovery: value.discovery === d.id ? "" : d.id }),
					children: d.label
				}, d.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, {
				label: "Tags",
				children: TAGS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: value.notable === t,
					onClick: () => set({ notable: value.notable === t ? "" : t }),
					children: PLANET_TAG_LABEL[t]
				}, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs tracking-wide text-muted tabular",
					children: [
						resultCount,
						" ",
						resultCount === 1 ? "world" : "worlds"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 text-xs text-muted",
						children: ["Sort", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: value.sort,
							onChange: (e) => set({ sort: e.target.value }),
							className: "h-11 rounded-sm bg-bg-elevated px-3 text-sm text-fg shadow-border",
							children: SORTS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: s.id,
								children: s.label
							}, s.id))
						})]
					}), hasFilters ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "h-11 rounded-sm px-3 text-sm text-muted hover:text-fg",
						onClick: () => onChange({
							...value,
							q: "",
							kind: "",
							system: "",
							notable: "",
							discovery: ""
						}),
						children: "Clear filters"
					}) : null]
				})]
			})
		]
	});
}
function FilterRow({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-2 font-mono text-[11px] tracking-[0.16em] text-subtle uppercase",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
		children
	})] });
}
function Chip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("inline-flex h-11 shrink-0 items-center gap-2 rounded-full px-3.5 text-sm transition-colors duration-150", active ? "bg-accent text-accent-fg" : "bg-bg-elevated text-muted shadow-border hover:text-fg"),
		children
	});
}
function orbitR(au, maxR) {
	return Math.round(36 + Math.sqrt(Math.min(au, 40) / 40) * (maxR - 48));
}
function SolarSystem() {
	const navigate = useNavigate();
	const [hover, setHover] = (0, import_react.useState)(null);
	const [showDwarfs, setShowDwarfs] = (0, import_react.useState)(false);
	const worlds = (0, import_react.useMemo)(() => {
		const list = [...SOLAR_PLANETS];
		if (showDwarfs) list.push(...PLANETS.filter((p) => p.solar && p.kind === "dwarf"));
		return list;
	}, [showDwarfs]);
	const width = 1100;
	const height = 560;
	const cx = width / 2;
	const cy = height / 2;
	const maxR = Math.min(cx, cy) - 8;
	const hoverWorld = worlds.find((p) => p.slug === hover);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4 flex flex-wrap items-center justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Orbits scaled by square root of distance. Click a world."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-pressed": showDwarfs,
			onClick: () => setShowDwarfs((v) => !v),
			className: showDwarfs ? "h-11 rounded-full bg-accent px-4 text-sm text-accent-fg" : "h-11 rounded-full bg-bg-elevated px-4 text-sm text-muted shadow-border hover:text-fg",
			children: "Dwarf planets"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-xl bg-bg-elevated/70 shadow-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: `0 0 ${width} ${height}`,
			className: "h-auto w-full",
			role: "img",
			"aria-label": "Solar System orbits",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width,
					height,
					fill: "#07070a"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx,
					cy,
					r: 10,
					fill: "#fff4ea"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx,
					cy,
					r: 18,
					fill: "#fff4ea",
					opacity: .18
				}),
				worlds.map((p) => {
					const r = orbitR(p.au, maxR);
					const period = Math.max(8, Math.sqrt(p.periodDays) * 1.8);
					const size = p.kind === "gas-giant" ? 9 : p.kind === "ice-giant" ? 7 : p.kind === "dwarf" ? 3.4 : 5.2;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx,
						cy,
						r,
						fill: "none",
						stroke: "rgba(236,236,241,0.1)",
						strokeWidth: 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
						className: "orbit-spin",
						style: {
							animationDuration: `${period}s`,
							transformOrigin: `${cx}px ${cy}px`
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: cx + r,
							cy,
							r: hover === p.slug ? size + 2 : size,
							fill: PLANET_HEX[p.palette],
							className: "cursor-pointer",
							onMouseEnter: () => setHover(p.slug),
							onMouseLeave: () => setHover(null),
							onClick: () => navigate({
								to: "/planet/$slug",
								params: { slug: p.slug }
							})
						})
					})] }, p.slug);
				})
			]
		}), hoverWorld ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute bottom-4 left-4 rounded-md bg-bg/90 px-3 py-2 text-sm shadow-panel",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-base text-fg",
				children: hoverWorld.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-xs text-muted",
				children: [
					hoverWorld.au.toFixed(2),
					" au · ",
					hoverWorld.periodDays < 400 ? `${Math.round(hoverWorld.periodDays)} d` : `${(hoverWorld.periodDays / 365.25).toFixed(1)} yr`,
					hoverWorld.moons > 0 ? ` · ${hoverWorld.moons} ${hoverWorld.moons === 1 ? "moon" : "moons"}` : ""
				]
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "pointer-events-none absolute bottom-4 left-4 font-mono text-xs text-subtle",
			children: "Sol"
		})]
	})] });
}
function asFilters(search) {
	return {
		q: search.q ?? "",
		kind: search.kind ?? "",
		system: search.system ?? "",
		notable: search.notable ?? "",
		discovery: search.discovery ?? "",
		sort: search.sort ?? "au"
	};
}
function toSearch(filters) {
	const next = {};
	if (filters.q) next.q = filters.q;
	if (filters.kind) next.kind = filters.kind;
	if (filters.system) next.system = filters.system;
	if (filters.notable) next.notable = filters.notable;
	if (filters.discovery) next.discovery = filters.discovery;
	if (filters.sort && filters.sort !== "au") next.sort = filters.sort;
	return next;
}
function PlanetsPage() {
	const search = Route$7.useSearch();
	const navigate = Route$7.useNavigate();
	const filters = asFilters(search);
	const results = (0, import_react.useMemo)(() => filterPlanets(asFilters(search)), [search]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] tracking-[0.2em] text-muted uppercase",
				children: "Worlds"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl tracking-tight md:text-5xl",
				children: "Planets"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: [
					SOLAR_COUNT,
					" Solar System worlds and ",
					EXO_COUNT,
					" exoplanets — rocky, gassy, ice-wrapped, and boiling. ",
					PLANET_COUNT,
					" in this atlas.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/moons",
						className: "text-fg underline-offset-4 hover:underline",
						children: "Browse their moons"
					}),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SolarSystem, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-tight",
						children: "Families of worlds"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm text-muted",
						children: "Seven kinds, from the rocks underfoot to giants that never formed a surface."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
						children: PLANET_KIND_INFO.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/planets",
							search: { kind: k.id },
							className: "rounded-xl bg-bg-elevated/80 p-5 shadow-border transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-border-hover",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanetOrb, {
									palette: k.id === "terrestrial" ? "earth" : k.id === "gas-giant" ? "jupiter" : k.id === "ice-giant" ? "neptune" : k.id === "dwarf" ? "pluto" : k.id === "super-earth" ? "venus" : k.id === "hot-jupiter" ? "lava" : "haze",
									rings: k.id === "gas-giant",
									size: "md"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 font-display text-xl tracking-tight",
									children: k.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: k.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 font-mono text-[11px] text-subtle tabular",
									children: [kindCountPlanets(k.id), " in atlas"]
								})
							]
						}, k.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-tight",
						children: "Mass and radius"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm text-muted",
						children: "Earth sits at 1, 1. Dwarfs cluster bottom-left; inflated hot Jupiters climb the right. Click a point."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanetDiagram, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanetFiltersBar, {
					value: filters,
					onChange: (next) => navigate({
						search: toSearch(next),
						replace: true
					}),
					resultCount: results.length
				})
			}),
			results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-16 text-center text-muted",
				children: ["No worlds match those filters.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "ml-2 text-fg underline-offset-4 hover:underline",
					onClick: () => navigate({
						search: {},
						replace: true
					}),
					children: "Reset"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-2",
				children: results.map((planet, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanetCard, {
					planet,
					index: i
				}, planet.slug))
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})] });
}
//#endregion
export { PlanetsPage as component };
