import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Search, t as X } from "../_libs/lucide-react.mjs";
import { U as cn, V as SiteFooter } from "./catalog-N4vBopjS.mjs";
import { _ as NEBULA_TAG_LABEL, c as Route$8, h as NEBULA_KIND_INFO, m as NEBULA_COUNT, v as getNebula, y as kindCountNebulae } from "./router-krysFcP6.mjs";
import { n as NebulaPortrait, r as filterNebulae, t as NebulaCard } from "./nebula-card-DmlVm2Oj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nebulae-Hbp1OC3h.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SORTS = [
	{
		id: "distance",
		label: "Distance"
	},
	{
		id: "name",
		label: "Name"
	},
	{
		id: "size",
		label: "Span"
	}
];
var TAGS = [
	"messier",
	"naked-eye",
	"stellar-nursery",
	"imaged",
	"extreme",
	"historical"
];
function NebulaFiltersBar({ value, onChange, resultCount }) {
	const set = (patch) => onChange({
		...value,
		...patch
	});
	const hasFilters = value.q || value.kind || value.notable;
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
				label: "Type",
				children: NEBULA_KIND_INFO.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: value.kind === k.id,
					onClick: () => set({ kind: value.kind === k.id ? "" : k.id }),
					children: k.label
				}, k.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, {
				label: "Catalog tags",
				children: TAGS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: value.notable === t,
					onClick: () => set({ notable: value.notable === t ? "" : t }),
					children: NEBULA_TAG_LABEL[t]
				}, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs tracking-wide text-muted tabular",
					children: [
						resultCount,
						" ",
						resultCount === 1 ? "nebula" : "nebulae"
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
		kind: search.kind ?? "",
		notable: search.notable ?? "",
		sort: search.sort ?? "distance"
	};
}
function toSearch(filters) {
	const next = {};
	if (filters.q) next.q = filters.q;
	if (filters.kind) next.kind = filters.kind;
	if (filters.notable) next.notable = filters.notable;
	if (filters.sort && filters.sort !== "distance") next.sort = filters.sort;
	return next;
}
function NebulaePage() {
	const search = Route$8.useSearch();
	const navigate = Route$8.useNavigate();
	const filters = asFilters(search);
	const results = (0, import_react.useMemo)(() => filterNebulae(asFilters(search)), [search]);
	const featured = getNebula("orion");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] tracking-[0.2em] text-muted uppercase",
				children: "Clouds"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl tracking-tight md:text-5xl",
				children: "Nebulae"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: [NEBULA_COUNT, " named clouds — nurseries, death shrouds, and dark dust that hides the next generation. Colour is chemistry. Motion is the wind of stars."]
			}),
			featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/nebula/$slug",
				params: { slug: featured.slug },
				className: "relative mt-10 block overflow-hidden rounded-xl shadow-border transition-[box-shadow] duration-200 hover:shadow-border-hover",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NebulaPortrait, {
					nebula: featured,
					variant: "hero",
					className: "rounded-none"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg via-bg/70 to-transparent px-5 py-5 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-[11px] tracking-[0.16em] text-subtle uppercase",
							children: ["Featured · ", featured.designation]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-2xl tracking-tight",
							children: featured.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 max-w-2xl text-sm text-muted",
							children: featured.summary
						})
					]
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "Kinds of cloud"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: NEBULA_KIND_INFO.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/nebulae",
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
								children: [kindCountNebulae(k.id), " in atlas"]
							})
						]
					}, k.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NebulaFiltersBar, {
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
				children: ["No nebulae match those filters.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
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
				children: results.map((nebula, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NebulaCard, {
					nebula,
					index: i
				}, nebula.slug))
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})] });
}
//#endregion
export { NebulaePage as component };
