import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Bookmark, s as ArrowLeft } from "../_libs/lucide-react.mjs";
import { C as Button, U as cn, V as SiteFooter, p as formatLy } from "./catalog-N4vBopjS.mjs";
import { _ as NEBULA_TAG_LABEL, g as NEBULA_KIND_LABEL, i as Route$2 } from "./router-krysFcP6.mjs";
import { t as useFavorites } from "./favorites-Bh8adyw5.mjs";
import { a as formatSizeLy, i as formatArcmin, n as NebulaPortrait, t as NebulaCard } from "./nebula-card-DmlVm2Oj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nebula._slug-Dj-LEDmG.js
var import_jsx_runtime = require_jsx_runtime();
function NebulaPage() {
	const { nebula, illuminator, constellation, siblings } = Route$2.useLoaderData();
	const saved = useFavorites((s) => s.slugs.includes(`n:${nebula.slug}`));
	const toggle = useFavorites((s) => s.toggle);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/nebulae",
					className: "inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Nebulae"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: saved ? "primary" : "secondary",
					onClick: () => toggle(`n:${nebula.slug}`),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: cn("size-4", saved && "fill-current") }), saved ? "Saved" : "Save"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 font-mono text-[11px] tracking-[0.2em] text-muted uppercase",
				children: [
					nebula.designation,
					" · ",
					NEBULA_KIND_LABEL[nebula.kind]
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-5xl tracking-tight md:text-6xl",
				children: nebula.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-lg leading-relaxed text-muted",
				children: nebula.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-bg-elevated px-3 py-1.5 text-xs text-muted shadow-border",
					children: NEBULA_KIND_LABEL[nebula.kind]
				}), nebula.notable.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-bg-elevated px-3 py-1.5 text-xs text-muted shadow-border",
					children: NEBULA_TAG_LABEL[tag]
				}, tag))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NebulaPortrait, {
					nebula,
					variant: "hero"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Distance",
						value: formatLy(nebula.distanceLy)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Span",
						value: formatSizeLy(nebula.sizeLy)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "On sky",
						value: formatArcmin(nebula.angularArcmin)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Found",
						value: nebula.discovered
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "Notes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3",
					children: nebula.facts.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm leading-relaxed text-muted",
						children: fact
					}, fact))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "Place"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-4 space-y-3 font-mono text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4 border-b border-border py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Constellation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-fg",
								children: constellation ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/constellations/$slug",
									params: { slug: constellation.slug },
									className: "hover:underline",
									children: constellation.name
								}) : nebula.constellationName
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4 border-b border-border py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Lit by"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-fg",
								children: illuminator ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/star/$slug",
									params: { slug: illuminator.slug },
									className: "hover:underline",
									children: illuminator.name
								}) : nebula.illuminatorName ?? "—"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4 border-b border-border py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Class"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-fg",
								children: NEBULA_KIND_LABEL[nebula.kind]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Designation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-right text-fg",
								children: nebula.designation
							})]
						})
					]
				})] })]
			}),
			siblings.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: ["Also in ", nebula.constellationName]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 md:grid-cols-2",
					children: siblings.slice(0, 4).map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NebulaCard, {
						nebula: n,
						index: i
					}, n.slug))
				})]
			}) : null
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})] });
}
function Fact({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-bg-elevated px-4 py-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "font-mono text-[11px] tracking-[0.14em] text-subtle uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 font-display text-2xl tracking-tight tabular",
			children: value
		})]
	});
}
//#endregion
export { NebulaPage as component };
