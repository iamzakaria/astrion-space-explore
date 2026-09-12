import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Search, t as X } from "../_libs/lucide-react.mjs";
import { U as cn, V as SiteFooter, j as PLANET_BY_SLUG } from "./catalog-N4vBopjS.mjs";
import { D as MOON_PLANET_LABEL, E as MOON_PLANETS, O as MOON_TAG_LABEL, l as Route$9, w as MOON_KIND_INFO } from "./router-krysFcP6.mjs";
import { t as PlanetOrb } from "./planet-orb-Daq3UcVc.mjs";
import { a as filterMoons, d as planetMoonCount, i as MoonCard, n as MOON_COUNT, r as MOON_SYSTEM_COUNT, u as kindCountMoons } from "./moon-card-BZs-S2DU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/moons-DW36Bwsn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SORTS = [
	{
		id: "orbit",
		label: "Orbit"
	},
	{
		id: "name",
		label: "Name"
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
	"galilean",
	"ocean-world",
	"atmosphere",
	"captured",
	"visited",
	"binary",
	"inner",
	"largest"
];
function MoonFiltersBar({ value, onChange, resultCount }) {
	const set = (patch) => onChange({
		...value,
		...patch
	});
	const hasFilters = value.q || value.planet || value.kind || value.notable;
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
						placeholder: "Search name, planet, designation…",
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
				label: "Planet",
				children: MOON_PLANETS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: value.planet === p,
					onClick: () => set({ planet: value.planet === p ? "" : p }),
					children: MOON_PLANET_LABEL[p]
				}, p))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, {
				label: "Type",
				children: MOON_KIND_INFO.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: value.kind === k.id,
					onClick: () => set({ kind: value.kind === k.id ? "" : k.id }),
					children: k.label
				}, k.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, {
				label: "Tags",
				children: TAGS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: value.notable === t,
					onClick: () => set({ notable: value.notable === t ? "" : t }),
					children: MOON_TAG_LABEL[t]
				}, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs tracking-wide text-muted tabular",
					children: [
						resultCount,
						" ",
						resultCount === 1 ? "moon" : "moons"
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
							planet: "",
							kind: "",
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
		planet: search.planet ?? "",
		kind: search.kind ?? "",
		notable: search.notable ?? "",
		sort: search.sort ?? "orbit"
	};
}
function toSearch(filters) {
	const next = {};
	if (filters.q) next.q = filters.q;
	if (filters.planet) next.planet = filters.planet;
	if (filters.kind) next.kind = filters.kind;
	if (filters.notable) next.notable = filters.notable;
	if (filters.sort && filters.sort !== "orbit") next.sort = filters.sort;
	return next;
}
function MoonsPage() {
	const search = Route$9.useSearch();
	const navigate = Route$9.useNavigate();
	const filters = asFilters(search);
	const results = (0, import_react.useMemo)(() => filterMoons(asFilters(search)), [search]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] tracking-[0.2em] text-muted uppercase",
				children: "Satellites"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl tracking-tight md:text-5xl",
				children: "Moons"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: [
					MOON_COUNT,
					" named moons around ",
					MOON_SYSTEM_COUNT,
					" Solar System worlds — the Galileans, Titan, Triton, and the ice chips of the Kuiper belt. Jupiter and Saturn hold dozens more irregulars not listed here."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-tight",
						children: "By planet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm text-muted",
						children: "Mercury and Venus have none. The giants keep courts. Click a world."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5",
						children: MOON_PLANETS.map((slug) => {
							const planet = PLANET_BY_SLUG[slug];
							const count = planetMoonCount(slug);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/moons",
								search: { planet: slug },
								className: "rounded-xl bg-bg-elevated/80 p-4 shadow-border transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-border-hover",
								children: [
									planet ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanetOrb, {
										palette: planet.palette,
										rings: planet.rings,
										size: "md"
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 font-display text-lg tracking-tight",
										children: MOON_PLANET_LABEL[slug]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 font-mono text-[11px] text-subtle tabular",
										children: [
											count,
											" in atlas",
											planet && planet.moons > count ? ` · ${planet.moons} known` : ""
										]
									})
								]
							}, slug);
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "Kinds of moon"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
					children: MOON_KIND_INFO.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/moons",
						search: { kind: k.id },
						className: "rounded-xl bg-bg-elevated/80 p-5 shadow-border transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-border-hover",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl tracking-tight",
								children: k.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: k.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 font-mono text-[11px] text-subtle tabular",
								children: [kindCountMoons(k.id), " in atlas"]
							})
						]
					}, k.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoonFiltersBar, {
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
				children: ["No moons match those filters.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
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
				children: results.map((moon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoonCard, {
					moon,
					index: i
				}, moon.slug))
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})] });
}
//#endregion
export { MoonsPage as component };
