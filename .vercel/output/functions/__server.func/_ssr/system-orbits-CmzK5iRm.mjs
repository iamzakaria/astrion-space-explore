import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { M as PLANET_HEX } from "./catalog-N4vBopjS.mjs";
import { c as formatAu, u as formatPeriod } from "./planet-card-CuzkX50g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/system-orbits-CmzK5iRm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function orbitR(au, maxAu, maxR) {
	const span = Math.max(maxAu, .05);
	return Math.round(28 + Math.sqrt(Math.min(au, span) / span) * (maxR - 40));
}
function SystemOrbits({ planets, highlight }) {
	const navigate = useNavigate();
	const [hover, setHover] = (0, import_react.useState)(null);
	if (planets.length === 0) return null;
	const width = 1100;
	const height = 360;
	const cx = width / 2;
	const cy = height / 2;
	const maxR = Math.min(cx, cy) - 10;
	const maxAu = Math.max(...planets.map((p) => p.au));
	const hoverWorld = planets.find((p) => p.slug === (hover ?? highlight));
	const host = planets[0]?.hostName ?? "Host";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-xl bg-bg-elevated/70 shadow-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: `0 0 ${width} ${height}`,
			className: "h-auto w-full",
			role: "img",
			"aria-label": `Orbits around ${host}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width,
					height,
					fill: "#07070a"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx,
					cy,
					r: 8,
					fill: "#fff4ea"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx,
					cy,
					r: 16,
					fill: "#fff4ea",
					opacity: .16
				}),
				planets.map((p) => {
					const r = orbitR(p.au, maxAu, maxR);
					const period = Math.max(10, Math.sqrt(p.periodDays) * 1.6);
					const size = p.kind === "gas-giant" || p.kind === "hot-jupiter" ? 8 : p.kind === "ice-giant" || p.kind === "mini-neptune" ? 6.5 : p.kind === "dwarf" ? 3.2 : 5;
					const active = hover === p.slug || highlight === p.slug;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx,
						cy,
						r,
						fill: "none",
						stroke: highlight === p.slug ? "rgba(236,236,241,0.28)" : "rgba(236,236,241,0.1)",
						strokeWidth: highlight === p.slug ? 1.6 : 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
						className: "orbit-spin",
						style: {
							animationDuration: `${period}s`,
							transformOrigin: `${cx}px ${cy}px`
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: cx + r,
							cy,
							r: active ? size + 2 : size,
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
					formatAu(hoverWorld.au),
					" · ",
					formatPeriod(hoverWorld.periodDays)
				]
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "pointer-events-none absolute bottom-4 left-4 font-mono text-xs text-subtle",
			children: host
		})]
	});
}
//#endregion
export { SystemOrbits as t };
