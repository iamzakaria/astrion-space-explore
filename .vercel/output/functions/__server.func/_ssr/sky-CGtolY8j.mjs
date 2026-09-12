import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { V as SiteFooter, a as CONSTELLATION_LINES, c as STARS, m as formatMag, z as SPECTRAL_HEX } from "./catalog-N4vBopjS.mjs";
import { f as NEBULAE } from "./router-krysFcP6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sky-CGtolY8j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function project(ra, dec, w, h) {
	return {
		x: 28 + (1 - ra / 24) * (w - 56),
		y: 28 + (90 - dec) / 180 * (h - 56)
	};
}
function magRadius(mag) {
	if (mag < -1) return 7;
	if (mag < 0) return 5.5;
	if (mag < 1) return 4.4;
	if (mag < 2) return 3.4;
	if (mag < 3) return 2.6;
	if (mag < 6) return 1.8;
	return 1.2;
}
function nebulaRadius(arcmin) {
	return Math.min(34, Math.max(7, Math.sqrt(Math.max(arcmin, 1)) * 1.5));
}
function SkyMap() {
	const navigate = useNavigate();
	const [limit, setLimit] = (0, import_react.useState)(6);
	const [linesOn, setLinesOn] = (0, import_react.useState)(true);
	const [labelsOn, setLabelsOn] = (0, import_react.useState)(true);
	const [cloudsOn, setCloudsOn] = (0, import_react.useState)(true);
	const [hover, setHover] = (0, import_react.useState)(null);
	const [hoverNeb, setHoverNeb] = (0, import_react.useState)(null);
	const width = 1100;
	const height = 620;
	const visible = (0, import_react.useMemo)(() => STARS.filter((s) => s.slug !== "sun" && s.apparentMag <= limit), [limit]);
	const bySlug = (0, import_react.useMemo)(() => {
		const m = /* @__PURE__ */ new Map();
		for (const s of visible) m.set(s.slug, s);
		return m;
	}, [visible]);
	const hoverStar = hover ? visible.find((s) => s.slug === hover) : void 0;
	const hoverCloud = hoverNeb ? NEBULAE.find((n) => n.slug === hoverNeb) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "flex items-center gap-3 text-sm text-muted",
			children: [
				"Magnitude ≤",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 1,
					max: 17,
					step: 1,
					value: limit,
					onChange: (e) => setLimit(Number(e.target.value)),
					className: "w-40 accent-accent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-fg tabular",
					children: limit
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
					pressed: cloudsOn,
					onPressed: () => setCloudsOn((v) => !v),
					children: "Clouds"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
					pressed: linesOn,
					onPressed: () => setLinesOn((v) => !v),
					children: "Figures"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
					pressed: labelsOn,
					onPressed: () => setLabelsOn((v) => !v),
					children: "Labels"
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-xl bg-bg-elevated/70 shadow-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: `0 0 ${width} ${height}`,
			className: "h-auto w-full",
			role: "img",
			"aria-label": "Equirectangular map of catalog stars and nebulae",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width,
					height,
					fill: "#07070a"
				}),
				[
					-60,
					-30,
					0,
					30,
					60
				].map((dec) => {
					const y = 28 + (90 - dec) / 180 * 564;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: 28,
						x2: 1072,
						y1: y,
						y2: y,
						stroke: "rgba(236,236,241,0.06)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
						x: 8,
						y: y + 3,
						fill: "rgba(236,236,241,0.28)",
						fontSize: 10,
						fontFamily: "IBM Plex Mono, monospace",
						children: [dec > 0 ? `+${dec}` : dec, "°"]
					})] }, dec);
				}),
				[
					0,
					6,
					12,
					18
				].map((ra) => {
					const x = 28 + (1 - ra / 24) * 1044;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						y1: 28,
						y2: 592,
						x1: x,
						x2: x,
						stroke: "rgba(236,236,241,0.06)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
						x: x + 4,
						y: 610,
						fill: "rgba(236,236,241,0.28)",
						fontSize: 10,
						fontFamily: "IBM Plex Mono, monospace",
						children: [ra, "h"]
					})] }, ra);
				}),
				cloudsOn ? NEBULAE.map((n) => {
					const { x, y } = project(n.ra, n.dec, width, height);
					const r = nebulaRadius(n.angularArcmin);
					const active = hoverNeb === n.slug;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						className: "cursor-pointer",
						onMouseEnter: () => setHoverNeb(n.slug),
						onMouseLeave: () => setHoverNeb(null),
						onClick: () => navigate({
							to: "/nebula/$slug",
							params: { slug: n.slug }
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
							cx: x,
							cy: y,
							rx: r * 1.45,
							ry: r * .82,
							fill: n.colors[0],
							opacity: active ? .32 : .16
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
							cx: x,
							cy: y,
							rx: r * .72,
							ry: r * .42,
							fill: n.colors[1],
							opacity: active ? .28 : .12
						})]
					}, `n-${n.slug}`);
				}) : null,
				linesOn ? Object.values(CONSTELLATION_LINES).flatMap((pairs) => pairs.map(([a, b]) => {
					const sa = bySlug.get(a);
					const sb = bySlug.get(b);
					if (!sa || !sb) return null;
					const pa = project(sa.ra, sa.dec, width, height);
					const pb = project(sb.ra, sb.dec, width, height);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: pa.x,
						y1: pa.y,
						x2: pb.x,
						y2: pb.y,
						stroke: "rgba(197,206,216,0.22)",
						strokeWidth: 1
					}, `${a}-${b}`);
				})) : null,
				visible.map((star) => {
					const { x, y } = project(star.ra, star.dec, width, height);
					const r = magRadius(star.apparentMag);
					const color = SPECTRAL_HEX[star.spectralClass];
					const active = hover === star.slug;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						className: "cursor-pointer",
						onMouseEnter: () => setHover(star.slug),
						onMouseLeave: () => setHover(null),
						onClick: () => navigate({
							to: "/star/$slug",
							params: { slug: star.slug }
						}),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: x,
								cy: y,
								r: r * 3,
								fill: color,
								opacity: active ? .28 : .08
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: x,
								cy: y,
								r,
								fill: color
							}),
							labelsOn && star.apparentMag < 1.6 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								x: x + r + 4,
								y: y + 3,
								fill: "rgba(236,236,241,0.72)",
								fontSize: 11,
								fontFamily: "Outfit, sans-serif",
								children: star.name
							}) : null
						]
					}, star.slug);
				}),
				linesOn ? [...new Map(visible.filter((s) => s.constellation && s.constellationName).map((s) => [s.constellation, s])).values()].map((s) => {
					const pts = visible.filter((m) => m.constellation === s.constellation).map((m) => project(m.ra, m.dec, width, height));
					const x = pts.reduce((a, p) => a + p.x, 0) / pts.length;
					const y = pts.reduce((a, p) => a + p.y, 0) / pts.length - 16;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x,
						y,
						textAnchor: "middle",
						fill: "rgba(197,206,216,0.45)",
						fontSize: 11,
						fontFamily: "IBM Plex Mono, monospace",
						className: "cursor-pointer",
						onClick: (e) => {
							e.stopPropagation();
							if (s.constellation) navigate({
								to: "/constellations/$slug",
								params: { slug: s.constellation }
							});
						},
						children: s.constellationName
					}, `fig-${s.constellation}`);
				}) : null
			]
		}), hoverCloud ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute bottom-4 left-4 rounded-md bg-bg/90 px-3 py-2 text-sm shadow-panel",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-base text-fg",
				children: hoverCloud.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-xs text-muted",
				children: [hoverCloud.designation, " · nebula"]
			})]
		}) : hoverStar ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute bottom-4 left-4 rounded-md bg-bg/90 px-3 py-2 text-sm shadow-panel",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-base text-fg",
				children: hoverStar.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-xs text-muted",
				children: [
					hoverStar.spectralType,
					" · ",
					formatMag(hoverStar.apparentMag)
				]
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "pointer-events-none absolute bottom-4 left-4 text-xs text-subtle",
			children: "Equirectangular · RA leftward · click a star or a cloud"
		})]
	})] });
}
function Toggle({ pressed, onPressed, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-pressed": pressed,
		onClick: onPressed,
		className: pressed ? "h-11 rounded-full bg-accent px-4 text-sm text-accent-fg" : "h-11 rounded-full bg-bg-elevated px-4 text-sm text-muted shadow-border hover:text-fg",
		children
	});
}
function SkyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] tracking-[0.2em] text-muted uppercase",
				children: "Chart"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl tracking-tight md:text-5xl",
				children: "Sky"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: "An equirectangular chart of the atlas. Right ascension runs right to left, as it does on the celestial sphere. Brightness is magnitude. Colour is spectral class. Soft patches are nebulae — click a cloud."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkyMap, {})
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})] });
}
//#endregion
export { SkyPage as component };
