import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { M as PLANET_HEX } from "./catalog-N4vBopjS.mjs";
import { c as formatMoonPeriod, o as formatKm } from "./moon-card-BZs-S2DU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/moon-orbits-DjInY0fK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function orbitR(km, maxKm, maxR) {
	const span = Math.max(maxKm, 1);
	return Math.round(36 + Math.sqrt(Math.min(km, span) / span) * (maxR - 48));
}
function moonSize(radiusKm) {
	if (radiusKm >= 1500) return 7;
	if (radiusKm >= 500) return 5.4;
	if (radiusKm >= 150) return 4.2;
	if (radiusKm >= 40) return 3.2;
	return 2.4;
}
function MoonOrbits({ moons, planet, highlight }) {
	const navigate = useNavigate();
	const [hover, setHover] = (0, import_react.useState)(null);
	const [showIrregulars, setShowIrregulars] = (0, import_react.useState)(false);
	const hasIrregulars = moons.some((m) => m.irregular);
	const visible = (0, import_react.useMemo)(() => showIrregulars ? moons : moons.filter((m) => !m.irregular), [moons, showIrregulars]);
	if (moons.length === 0) return null;
	const width = 1100;
	const height = 360;
	const cx = width / 2;
	const cy = height / 2;
	const maxR = Math.min(cx, cy) - 10;
	const maxKm = Math.max(...visible.map((m) => m.semiMajorKm), 1);
	const hoverMoon = visible.find((m) => m.slug === (hover ?? highlight));
	const planetSize = planet.kind === "gas-giant" ? 14 : planet.kind === "ice-giant" ? 11 : planet.kind === "dwarf" ? 7 : 9;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [hasIrregulars ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4 flex flex-wrap items-center justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm text-muted",
			children: ["Distances scaled by square root. ", showIrregulars ? "Including captured irregulars." : "Regular satellites."]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-pressed": showIrregulars,
			onClick: () => setShowIrregulars((v) => !v),
			className: showIrregulars ? "h-11 rounded-full bg-accent px-4 text-sm text-accent-fg" : "h-11 rounded-full bg-bg-elevated px-4 text-sm text-muted shadow-border hover:text-fg",
			children: "Irregulars"
		})]
	}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-xl bg-bg-elevated/70 shadow-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: `0 0 ${width} ${height}`,
			className: "h-auto w-full",
			role: "img",
			"aria-label": `Moons of ${planet.name}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width,
					height,
					fill: "var(--color-bg)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx,
					cy,
					r: planetSize + 8,
					fill: PLANET_HEX[planet.palette],
					opacity: .18
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx,
					cy,
					r: planetSize,
					fill: PLANET_HEX[planet.palette]
				}),
				visible.map((m) => {
					const r = orbitR(m.semiMajorKm, maxKm, maxR);
					const period = Math.max(8, Math.sqrt(m.periodDays) * 2.2);
					const size = moonSize(m.radiusKm);
					const active = hover === m.slug || highlight === m.slug;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx,
						cy,
						r,
						fill: "none",
						stroke: highlight === m.slug ? "color-mix(in oklab, var(--color-fg) 28%, transparent)" : "color-mix(in oklab, var(--color-fg) 10%, transparent)",
						strokeWidth: highlight === m.slug ? 1.6 : 1,
						strokeDasharray: m.retrograde ? "4 4" : void 0
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
						className: "orbit-spin",
						style: {
							animationDuration: `${period}s`,
							animationDirection: m.retrograde ? "reverse" : "normal",
							transformOrigin: `${cx}px ${cy}px`
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: cx + r,
							cy,
							r: active ? size + 1.6 : size,
							fill: PLANET_HEX[m.palette],
							className: "cursor-pointer",
							onMouseEnter: () => setHover(m.slug),
							onMouseLeave: () => setHover(null),
							onClick: () => navigate({
								to: "/moon/$slug",
								params: { slug: m.slug }
							})
						})
					})] }, m.slug);
				})
			]
		}), hoverMoon ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute bottom-4 left-4 rounded-md bg-bg/90 px-3 py-2 text-sm shadow-panel",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-base text-fg",
				children: hoverMoon.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-xs text-muted",
				children: [
					formatKm(hoverMoon.semiMajorKm),
					" · ",
					formatMoonPeriod(hoverMoon.periodDays),
					hoverMoon.retrograde ? " · retrograde" : ""
				]
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "pointer-events-none absolute bottom-4 left-4 font-mono text-xs text-subtle",
			children: planet.name
		})]
	})] });
}
//#endregion
export { MoonOrbits as t };
