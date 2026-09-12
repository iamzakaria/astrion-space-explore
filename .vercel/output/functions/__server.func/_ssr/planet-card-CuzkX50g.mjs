import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Bookmark } from "../_libs/lucide-react.mjs";
import { F as PLANET_KIND_LABEL, U as cn, W as discoveryOf, k as PLANETS } from "./catalog-N4vBopjS.mjs";
import { t as useFavorites } from "./favorites-Bh8adyw5.mjs";
import { t as PlanetOrb } from "./planet-orb-Daq3UcVc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/planet-card-CuzkX50g.js
var import_jsx_runtime = require_jsx_runtime();
var PLANET_COUNT = PLANETS.length;
var SOLAR_COUNT = PLANETS.filter((p) => p.solar).length;
var EXO_COUNT = PLANETS.filter((p) => !p.solar).length;
function filterPlanets(filters) {
	const q = filters.q.trim().toLowerCase();
	let list = PLANETS.filter((p) => {
		if (filters.kind && p.kind !== filters.kind) return false;
		if (filters.system === "solar" && !p.solar) return false;
		if (filters.system === "exoplanet" && p.solar) return false;
		if (filters.notable && !p.notable.includes(filters.notable)) return false;
		if (filters.discovery && discoveryOf(p) !== filters.discovery) return false;
		if (q) {
			if (![
				p.name,
				p.designation,
				p.hostName,
				p.summary,
				...p.facts
			].join(" ").toLowerCase().includes(q)) return false;
		}
		return true;
	});
	list = [...list].sort((a, b) => {
		switch (filters.sort) {
			case "name": return a.name.localeCompare(b.name);
			case "mass": return b.massEarth - a.massEarth;
			case "radius": return b.radiusEarth - a.radiusEarth;
			case "period": return a.periodDays - b.periodDays;
			default:
				if (a.solar !== b.solar) return a.solar ? -1 : 1;
				return a.au - b.au;
		}
	});
	return list;
}
function formatAu(au) {
	if (au < .1) return `${au.toFixed(3)} au`;
	if (au < 10) return `${au.toFixed(2)} au`;
	return `${au.toFixed(1)} au`;
}
function formatEarth(n, unit) {
	if (n >= 100) return `${Math.round(n).toLocaleString()} ${unit}`;
	if (n >= 10) return `${n.toFixed(1)} ${unit}`;
	if (n >= 1) return `${n.toFixed(2)} ${unit}`;
	if (n >= .01) return `${n.toFixed(3)} ${unit}`;
	return `${n.toExponential(1)} ${unit}`;
}
function formatPeriod(days) {
	if (days < 2) return `${(days * 24).toFixed(1)} hours`;
	if (days < 370) return `${days < 10 ? days.toFixed(2) : days.toFixed(1)} days`;
	const years = days / 365.25;
	if (years < 10) return `${years.toFixed(2)} yr`;
	return `${years.toFixed(1)} yr`;
}
function kindCountPlanets(kind) {
	return PLANETS.filter((p) => p.kind === kind).length;
}
var FEATURED_PLANETS = [
	"earth",
	"jupiter",
	"saturn",
	"proxima-b"
];
var SOLAR_PLANETS = PLANETS.filter((p) => p.solar && p.kind !== "dwarf");
PLANETS.filter((p) => p.kind === "dwarf");
function PlanetCard({ planet, index = 0 }) {
	const saved = useFavorites((s) => s.slugs.includes(`p:${planet.slug}`));
	const toggle = useFavorites((s) => s.toggle);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group relative rounded-xl bg-bg-elevated/80 p-4 shadow-border transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-border-hover",
		style: { animationDelay: `${Math.min(index, 12) * 40}ms` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/planet/$slug",
			params: { slug: planet.slug },
			className: "flex gap-4 text-fg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanetOrb, {
				palette: planet.palette,
				rings: planet.rings,
				size: "lg"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1 pr-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl leading-snug tracking-tight text-fg",
						children: planet.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 truncate font-mono text-xs text-muted",
						children: planet.designation
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 line-clamp-2 text-sm leading-normal text-muted",
						children: planet.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 grid grid-cols-3 gap-2 font-mono text-[11px] tracking-wide text-subtle",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "uppercase",
								children: "Orbit"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-0.5 text-xs text-fg tabular",
								children: formatAu(planet.au)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "uppercase",
								children: "Radius"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-0.5 text-xs text-fg tabular",
								children: formatEarth(planet.radiusEarth, "R⊕")
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "uppercase",
								children: "Mass"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-0.5 text-xs text-fg tabular",
								children: formatEarth(planet.massEarth, "M⊕")
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs text-subtle",
						children: [
							PLANET_KIND_LABEL[planet.kind],
							" · ",
							planet.hostName,
							planet.moons > 0 ? ` · ${planet.moons} ${planet.moons === 1 ? "moon" : "moons"}` : ""
						]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: (e) => {
				e.preventDefault();
				e.stopPropagation();
				toggle(`p:${planet.slug}`);
			},
			className: cn("absolute top-3 right-3 grid size-11 place-items-center rounded-sm text-subtle transition-colors duration-150 hover:text-fg", saved && "text-accent"),
			"aria-label": saved ? `Remove ${planet.name} from observatory` : `Save ${planet.name}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: cn("size-4", saved && "fill-current") })
		})]
	});
}
//#endregion
export { SOLAR_COUNT as a, formatAu as c, kindCountPlanets as d, PlanetCard as i, formatEarth as l, FEATURED_PLANETS as n, SOLAR_PLANETS as o, PLANET_COUNT as r, filterPlanets as s, EXO_COUNT as t, formatPeriod as u };
