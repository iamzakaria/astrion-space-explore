import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Bookmark } from "../_libs/lucide-react.mjs";
import { U as cn } from "./catalog-N4vBopjS.mjs";
import { E as MOON_PLANETS, S as MOONS, T as MOON_KIND_LABEL, b as LUNA_MASS_KG, x as LUNA_RADIUS_KM } from "./router-krysFcP6.mjs";
import { t as useFavorites } from "./favorites-Bh8adyw5.mjs";
import { t as PlanetOrb } from "./planet-orb-Daq3UcVc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/moon-card-BZs-S2DU.js
var import_jsx_runtime = require_jsx_runtime();
var MOON_COUNT = MOONS.length;
var MOON_SYSTEM_COUNT = MOON_PLANETS.length;
var FEATURED_MOONS = [
	"luna",
	"io",
	"europa",
	"titan",
	"triton",
	"charon"
];
function filterMoons(filters) {
	const q = filters.q.trim().toLowerCase();
	let list = MOONS.filter((m) => {
		if (filters.planet && m.planetSlug !== filters.planet) return false;
		if (filters.kind && m.kind !== filters.kind) return false;
		if (filters.notable && !m.notable.includes(filters.notable)) return false;
		if (q) {
			if (![
				m.name,
				m.designation,
				m.planetName,
				m.summary,
				...m.facts
			].join(" ").toLowerCase().includes(q)) return false;
		}
		return true;
	});
	list = [...list].sort((a, b) => {
		switch (filters.sort) {
			case "name": return a.name.localeCompare(b.name);
			case "radius": return b.radiusKm - a.radiusKm;
			case "period": return a.periodDays - b.periodDays;
			default:
				if (a.planetSlug !== b.planetSlug) {
					const ia = MOON_PLANETS.indexOf(a.planetSlug);
					const ib = MOON_PLANETS.indexOf(b.planetSlug);
					return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
				}
				return a.semiMajorKm - b.semiMajorKm;
		}
	});
	return list;
}
function kindCountMoons(kind) {
	return MOONS.filter((m) => m.kind === kind).length;
}
function planetMoonCount(planetSlug) {
	return MOONS.filter((m) => m.planetSlug === planetSlug).length;
}
function formatKm(km) {
	if (km >= 1e6) {
		const m = km / 1e6;
		return `${m >= 10 ? m.toFixed(1) : m.toFixed(2)} million km`;
	}
	if (km >= 1e4) return `${Math.round(km).toLocaleString()} km`;
	if (km >= 100) return `${Math.round(km).toLocaleString()} km`;
	if (km >= 10) return `${km.toFixed(1)} km`;
	return `${km.toFixed(0)} km`;
}
function formatMoonRadius(km) {
	const luna = km / LUNA_RADIUS_KM;
	if (luna >= .15) return `${formatKm(km)} · ${luna.toFixed(2)} R☾`;
	return formatKm(km);
}
function formatMoonMass(kg) {
	if (kg == null) return "Unknown";
	const luna = kg / LUNA_MASS_KG;
	if (luna >= .05) return `${luna.toFixed(2)} M☾`;
	if (luna >= .001) return `${luna.toFixed(3)} M☾`;
	return `${luna.toExponential(1)} M☾`;
}
function formatMoonPeriod(days) {
	if (days < 1) return `${(days * 24).toFixed(1)} hours`;
	if (days < 2) return `${days.toFixed(3)} days`;
	if (days < 370) return `${days < 10 ? days.toFixed(2) : days.toFixed(1)} days`;
	return `${(days / 365.25).toFixed(2)} yr`;
}
function MoonCard({ moon, index = 0 }) {
	const saved = useFavorites((s) => s.slugs.includes(`m:${moon.slug}`));
	const toggle = useFavorites((s) => s.toggle);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group relative rounded-xl bg-bg-elevated/80 p-4 shadow-border transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-border-hover",
		style: { animationDelay: `${Math.min(index, 12) * 40}ms` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/moon/$slug",
			params: { slug: moon.slug },
			className: "flex gap-4 text-fg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanetOrb, {
				palette: moon.palette,
				size: "lg"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1 pr-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl leading-snug tracking-tight text-fg",
						children: moon.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 truncate font-mono text-xs text-muted",
						children: moon.designation
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 line-clamp-2 text-sm leading-normal text-muted",
						children: moon.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 grid grid-cols-3 gap-2 font-mono text-[11px] tracking-wide text-subtle",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "uppercase",
								children: "Orbit"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-0.5 text-xs text-fg tabular",
								children: formatKm(moon.semiMajorKm)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "uppercase",
								children: "Radius"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-0.5 text-xs text-fg tabular",
								children: formatKm(moon.radiusKm)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "uppercase",
								children: "Period"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-0.5 text-xs text-fg tabular",
								children: formatMoonPeriod(moon.periodDays)
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs text-subtle",
						children: [
							MOON_KIND_LABEL[moon.kind],
							" · ",
							moon.planetName
						]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: (e) => {
				e.preventDefault();
				e.stopPropagation();
				toggle(`m:${moon.slug}`);
			},
			className: cn("absolute top-3 right-3 grid size-11 place-items-center rounded-sm text-subtle transition-colors duration-150 hover:text-fg", saved && "text-accent"),
			"aria-label": saved ? `Remove ${moon.name} from observatory` : `Save ${moon.name}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: cn("size-4", saved && "fill-current") })
		})]
	});
}
//#endregion
export { filterMoons as a, formatMoonPeriod as c, planetMoonCount as d, MoonCard as i, formatMoonRadius as l, MOON_COUNT as n, formatKm as o, MOON_SYSTEM_COUNT as r, formatMoonMass as s, FEATURED_MOONS as t, kindCountMoons as u };
