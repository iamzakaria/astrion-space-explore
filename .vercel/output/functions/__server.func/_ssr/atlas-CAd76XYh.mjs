import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Search, t as X } from "../_libs/lucide-react.mjs";
import { E as KIND_INFO, L as SPECTRAL_BG, O as NOTABLE_LABEL, R as SPECTRAL_CLASSES, U as cn, V as SiteFooter, d as filterStars, n as CONSTELLATIONS, o as DISTANCE_INFO, r as CONSTELLATION_BY_SLUG } from "./catalog-N4vBopjS.mjs";
import { u as Route$12 } from "./router-krysFcP6.mjs";
import { t as StarCard } from "./star-card-DgqAuVOe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/atlas-CAd76XYh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SORTS = [
	{
		id: "magnitude",
		label: "Brightness"
	},
	{
		id: "distance",
		label: "Distance"
	},
	{
		id: "name",
		label: "Name"
	},
	{
		id: "temperature",
		label: "Temperature"
	},
	{
		id: "luminosity",
		label: "Luminosity"
	}
];
var NOTABLES = [
	"nearest",
	"brightest",
	"navigational",
	"variable",
	"binary",
	"historical",
	"extreme",
	"north-star"
];
function CatalogFiltersBar({ value, onChange, resultCount }) {
	const set = (patch) => onChange({
		...value,
		...patch
	});
	const hasFilters = value.q || value.spectral || value.kind || value.constellation || value.distance || value.notable;
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
						placeholder: "Search name, designation, constellation…",
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, {
				label: "Spectral class",
				children: SPECTRAL_CLASSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
					active: value.spectral === s.class,
					onClick: () => set({ spectral: value.spectral === s.class ? "" : s.class }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2 rounded-full", SPECTRAL_BG[s.class]) }), s.class]
				}, s.class))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, {
				label: "Constellation",
				children: CONSTELLATIONS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: value.constellation === c.slug,
					onClick: () => set({ constellation: value.constellation === c.slug ? "" : c.slug }),
					children: c.name
				}, c.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, {
				label: "Stage",
				children: KIND_INFO.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: value.kind === k.id,
					onClick: () => set({ kind: value.kind === k.id ? "" : k.id }),
					children: k.label
				}, k.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, {
				label: "Distance",
				children: DISTANCE_INFO.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
					active: value.distance === d.id,
					onClick: () => set({ distance: value.distance === d.id ? "" : d.id }),
					children: [d.label, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-subtle",
						children: [" ", d.range]
					})]
				}, d.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, {
				label: "Catalog tags",
				children: NOTABLES.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: value.notable === n,
					onClick: () => set({ notable: value.notable === n ? "" : n }),
					children: NOTABLE_LABEL[n]
				}, n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs tracking-wide text-muted tabular",
					children: [
						resultCount,
						" ",
						resultCount === 1 ? "star" : "stars"
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
							spectral: "",
							kind: "",
							constellation: "",
							distance: "",
							notable: ""
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
function asFilters(search) {
	return {
		q: search.q ?? "",
		spectral: search.spectral ?? "",
		kind: search.kind ?? "",
		constellation: search.constellation ?? "",
		distance: search.distance ?? "",
		notable: search.notable ?? "",
		sort: search.sort ?? "magnitude"
	};
}
function toSearch(filters) {
	const next = {};
	if (filters.q) next.q = filters.q;
	if (filters.spectral) next.spectral = filters.spectral;
	if (filters.kind) next.kind = filters.kind;
	if (filters.constellation) next.constellation = filters.constellation;
	if (filters.distance) next.distance = filters.distance;
	if (filters.notable) next.notable = filters.notable;
	if (filters.sort && filters.sort !== "magnitude") next.sort = filters.sort;
	return next;
}
function AtlasPage() {
	const search = Route$12.useSearch();
	const navigate = Route$12.useNavigate();
	const filters = asFilters(search);
	const results = (0, import_react.useMemo)(() => filterStars(asFilters(search)), [search]);
	const constellation = search.constellation ? CONSTELLATION_BY_SLUG[search.constellation] : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] tracking-[0.2em] text-muted uppercase",
				children: "Catalog"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl tracking-tight md:text-5xl",
				children: "Atlas"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: "Filter by colour, evolutionary stage, distance, or the tags that made a star famous. Every entry is a real sun with measured numbers."
			}),
			constellation ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-sm text-muted",
				children: [
					"Showing",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/constellations/$slug",
						params: { slug: constellation.slug },
						className: "text-fg underline-offset-4 hover:underline",
						children: constellation.name
					}),
					".",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-fg underline-offset-4 hover:underline",
						onClick: () => navigate({
							search: toSearch({
								...filters,
								constellation: ""
							}),
							replace: true
						}),
						children: "Clear"
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatalogFiltersBar, {
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
				children: ["No stars match those filters.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
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
				children: results.map((star, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarCard, {
					star,
					index: i
				}, star.slug))
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})] });
}
//#endregion
export { AtlasPage as component };
