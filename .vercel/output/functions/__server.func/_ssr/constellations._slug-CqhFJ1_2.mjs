import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, b as require_jsx_runtime, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ArrowRight, s as ArrowLeft } from "../_libs/lucide-react.mjs";
import { V as SiteFooter, a as CONSTELLATION_LINES, l as STAR_BY_SLUG, m as formatMag, z as SPECTRAL_HEX } from "./catalog-N4vBopjS.mjs";
import { o as Route$4 } from "./router-krysFcP6.mjs";
import { t as StarCard } from "./star-card-DgqAuVOe.mjs";
import { t as NebulaCard } from "./nebula-card-DmlVm2Oj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/constellations._slug-CqhFJ1_2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function wrapRa(stars) {
	const ras = stars.map((s) => s.ra);
	const shift = Math.max(...ras) - Math.min(...ras) > 12;
	return stars.map((star) => ({
		star,
		ra: shift && star.ra < 12 ? star.ra + 24 : star.ra
	}));
}
function ConstellationFigure({ slug, stars, lucida }) {
	const navigate = useNavigate();
	const [hover, setHover] = (0, import_react.useState)(null);
	if (stars.length === 0) return null;
	const width = 1100;
	const height = 420;
	const pad = 48;
	const wrapped = wrapRa(stars);
	const ras = wrapped.map((w) => w.ra);
	const decs = stars.map((s) => s.dec);
	const minRa = Math.min(...ras);
	const maxRa = Math.max(...ras);
	const minDec = Math.min(...decs);
	const maxDec = Math.max(...decs);
	const raPad = Math.max((maxRa - minRa) * .18, .4);
	const decPad = Math.max((maxDec - minDec) * .22, 2);
	const ra0 = minRa - raPad;
	const ra1 = maxRa + raPad;
	const dec0 = minDec - decPad;
	const dec1 = maxDec + decPad;
	function xy(ra, dec) {
		return {
			x: Math.round(pad + (1 - (ra - ra0) / (ra1 - ra0)) * 1004),
			y: Math.round(pad + (dec1 - dec) / (dec1 - dec0) * 324)
		};
	}
	const bySlug = new Map(wrapped.map((w) => [w.star.slug, w]));
	const lines = CONSTELLATION_LINES[slug] ?? [];
	const hoverStar = stars.find((s) => s.slug === hover);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-xl bg-bg-elevated/70 shadow-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: `0 0 ${width} ${height}`,
			className: "h-auto w-full",
			role: "img",
			"aria-label": `Figure of the constellation`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width,
					height,
					fill: "var(--color-bg)"
				}),
				lines.map(([a, b]) => {
					const sa = bySlug.get(a);
					const sb = bySlug.get(b);
					if (!sa || !sb) return null;
					const pa = xy(sa.ra, sa.star.dec);
					const pb = xy(sb.ra, sb.star.dec);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: pa.x,
						y1: pa.y,
						x2: pb.x,
						y2: pb.y,
						stroke: "color-mix(in oklab, var(--color-fg) 22%, transparent)",
						strokeWidth: 1.2
					}, `${a}-${b}`);
				}),
				wrapped.map(({ star, ra }) => {
					const { x, y } = xy(ra, star.dec);
					const active = hover === star.slug || lucida === star.slug;
					const r = star.apparentMag < 1 ? 6 : star.apparentMag < 2 ? 4.5 : star.apparentMag < 4 ? 3.2 : 2.2;
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
								r: r * 2.4,
								fill: SPECTRAL_HEX[star.spectralClass],
								opacity: active ? .35 : .1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: x,
								cy: y,
								r: active ? r + 1.2 : r,
								fill: SPECTRAL_HEX[star.spectralClass]
							}),
							hover === star.slug || lucida === star.slug ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								x: x + r + 6,
								y: y + 4,
								fill: "color-mix(in oklab, var(--color-fg) 75%, transparent)",
								fontSize: 13,
								fontFamily: "Outfit, sans-serif",
								children: star.name
							}) : null
						]
					}, star.slug);
				})
			]
		}), hoverStar ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
			className: "pointer-events-none absolute bottom-4 left-4 font-mono text-xs text-subtle",
			children: "Click a star"
		})]
	});
}
function ConstellationPage() {
	const { constellation, stars, nebulae } = Route$4.useLoaderData();
	const lucida = STAR_BY_SLUG[constellation.brightest];
	const hemisphere = constellation.hemisphere === "N" ? "Northern" : constellation.hemisphere === "S" ? "Southern" : "Equatorial";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/constellations",
				className: "inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "All constellations"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 font-mono text-[11px] tracking-[0.2em] text-muted uppercase",
				children: [
					constellation.abbreviation,
					" · ",
					constellation.genitive,
					" · ",
					constellation.family,
					" ·",
					" ",
					hemisphere
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl tracking-tight md:text-6xl",
				children: constellation.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-lg text-muted",
				children: constellation.meaning
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-2xl text-base leading-relaxed text-muted",
				children: constellation.lore
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/atlas",
					search: { constellation: constellation.slug },
					className: "inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg",
					children: ["Filter the atlas", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
				}), lucida ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/star/$slug",
					params: { slug: lucida.slug },
					className: "inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg",
					children: [
						"Lucida: ",
						lucida.name,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })
					]
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConstellationFigure, {
					slug: constellation.slug,
					stars,
					lucida: constellation.brightest
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-10 font-mono text-xs text-subtle",
				children: [
					stars.length,
					" ",
					stars.length === 1 ? "star" : "stars",
					" in this atlas"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 md:grid-cols-2",
				children: stars.map((star, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarCard, {
					star,
					index: i
				}, star.slug))
			}),
			stars.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-muted",
				children: "No catalog stars in this figure yet."
			}) : null,
			nebulae.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-tight",
						children: "Nebulae"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							nebulae.length,
							" ",
							nebulae.length === 1 ? "cloud" : "clouds",
							" in this figure"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4 md:grid-cols-2",
						children: nebulae.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NebulaCard, {
							nebula: n,
							index: i
						}, n.slug))
					})
				]
			}) : null
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})] });
}
//#endregion
export { ConstellationPage as component };
