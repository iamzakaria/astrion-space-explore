import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { V as SiteFooter, l as STAR_BY_SLUG, n as CONSTELLATIONS, u as constellationStarCount } from "./catalog-N4vBopjS.mjs";
import { t as StarOrb } from "./star-orb-CiYZ4sK2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/constellations.index-Cd6om2Zh.js
var import_jsx_runtime = require_jsx_runtime();
function ConstellationsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] tracking-[0.2em] text-muted uppercase",
				children: "Figures"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl tracking-tight md:text-5xl",
				children: "Constellations"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: "Eighty-eight official figures tile the sphere. This atlas keeps the ones that hold its stars — myth, genitive, and the lucida of each. Click a figure to open it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: CONSTELLATIONS.map((c) => {
					const n = constellationStarCount(c.slug);
					const lucida = STAR_BY_SLUG[c.brightest];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/constellations/$slug",
						params: { slug: c.slug },
						className: "rounded-xl bg-bg-elevated/80 p-5 shadow-border transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-border-hover",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-mono text-[11px] tracking-[0.16em] text-subtle uppercase",
										children: [
											c.abbreviation,
											" ·",
											" ",
											c.hemisphere === "N" ? "North" : c.hemisphere === "S" ? "South" : "Equatorial"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-1 font-display text-2xl tracking-tight",
										children: c.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted",
										children: c.meaning
									})
								] }), lucida ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarOrb, {
									spectral: lucida.spectralClass,
									size: "md"
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 line-clamp-3 text-sm leading-relaxed text-muted",
								children: c.lore
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 font-mono text-xs text-subtle",
								children: [
									n,
									" ",
									n === 1 ? "star" : "stars",
									" · ",
									c.genitive
								]
							})
						]
					}, c.slug);
				})
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})] });
}
//#endregion
export { ConstellationsPage as component };
