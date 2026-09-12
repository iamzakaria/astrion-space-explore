import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Bookmark, s as ArrowLeft } from "../_libs/lucide-react.mjs";
import { B as SPECTRAL_TEXT, C as Button, D as KIND_LABEL, L as SPECTRAL_BG, O as NOTABLE_LABEL, U as cn, V as SiteFooter, _ as formatTemp, f as formatDec, g as formatSolar, h as formatRa, m as formatMag, p as formatLy, q as spectralVar } from "./catalog-N4vBopjS.mjs";
import { n as Route } from "./router-krysFcP6.mjs";
import { t as useFavorites } from "./favorites-Bh8adyw5.mjs";
import { t as StarCard } from "./star-card-DgqAuVOe.mjs";
import { t as NebulaCard } from "./nebula-card-DmlVm2Oj.mjs";
import { i as PlanetCard } from "./planet-card-CuzkX50g.mjs";
import { t as SystemOrbits } from "./system-orbits-CmzK5iRm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/star._slug-CJDqUeRr.js
var import_jsx_runtime = require_jsx_runtime();
function StarPortrait({ star }) {
	const v = spectralVar(star.spectralClass);
	const isCompact = star.kind === "white-dwarf" || star.kind === "neutron-star";
	const isGiant = star.kind === "giant" || star.kind === "supergiant" || star.kind === "hypergiant" || star.kind === "bright-giant";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto grid aspect-square w-full max-w-md place-items-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("corona-spin absolute inset-[8%] rounded-full opacity-40", isCompact && "opacity-70"),
				style: { background: `conic-gradient(from 0deg, transparent, color-mix(in oklab, var(${v}) 35%, transparent), transparent 40%, color-mix(in oklab, var(${v}) 22%, transparent), transparent)` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "orb-breathe absolute inset-[18%] rounded-full",
				style: { background: `radial-gradient(circle at 35% 32%, color-mix(in oklab, var(${v}) 90%, white) 0%, var(${v}) 38%, color-mix(in oklab, var(${v}) 30%, transparent) 70%, transparent 78%)` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("relative z-10 rounded-full", SPECTRAL_BG[star.spectralClass], isCompact ? "size-[18%]" : isGiant ? "size-[34%]" : "size-[26%]"),
				style: { boxShadow: `0 0 48px color-mix(in oklab, var(${v}) 70%, transparent)` }
			})
		]
	});
}
function StarPage() {
	const { star, related, planets, nebulae } = Route.useLoaderData();
	const saved = useFavorites((s) => s.slugs.includes(star.slug));
	const toggle = useFavorites((s) => s.toggle);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/atlas",
					className: "inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Atlas"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: saved ? "primary" : "secondary",
					onClick: () => toggle(star.slug),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: cn("size-4", saved && "fill-current") }), saved ? "Saved" : "Save"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,22rem)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[11px] tracking-[0.2em] text-muted uppercase",
						children: [star.designation, star.constellationName ? ` · ${star.constellationName}` : ""]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-5xl tracking-tight md:text-6xl",
						children: star.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-lg leading-relaxed text-muted",
						children: star.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("rounded-full bg-bg-elevated px-3 py-1.5 font-mono text-xs shadow-[var(--shadow-border)]", SPECTRAL_TEXT[star.spectralClass]),
								children: star.spectralType
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-bg-elevated px-3 py-1.5 text-xs text-muted shadow-[var(--shadow-border)]",
								children: KIND_LABEL[star.kind]
							}),
							star.notable.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-bg-elevated px-3 py-1.5 text-xs text-muted shadow-[var(--shadow-border)]",
								children: NOTABLE_LABEL[tag] ?? tag
							}, tag))
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarPortrait, { star })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Distance",
						value: formatLy(star.distanceLy)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Apparent mag",
						value: formatMag(star.apparentMag)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Absolute mag",
						value: formatMag(star.absoluteMag)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Temperature",
						value: formatTemp(star.temperatureK)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Mass",
						value: `${formatSolar(star.massSun)} M☉`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Radius",
						value: `${formatSolar(star.radiusSun)} R☉`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Luminosity",
						value: `${formatSolar(star.luminositySun, 1)} L☉`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Age",
						value: star.ageGyr == null ? "—" : `${star.ageGyr} Gyr`
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
					children: star.facts.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm leading-relaxed text-muted",
						children: fact
					}, fact))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "Position"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-4 space-y-3 font-mono text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4 border-b border-border py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Right ascension"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "tabular text-fg",
								children: formatRa(star.ra)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4 border-b border-border py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Declination"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "tabular text-fg",
								children: formatDec(star.dec)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4 border-b border-border py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Constellation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-fg",
								children: star.constellation ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/constellations/$slug",
									params: { slug: star.constellation },
									className: "hover:underline",
									children: star.constellationName
								}) : "—"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "System"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "text-fg",
								children: [star.binary ? "Multiple" : "Single", star.variable ? " · Variable" : ""]
							})]
						})
					]
				})] })]
			}),
			planets.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-tight",
						children: "Planets"
					}),
					planets.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemOrbits, { planets })
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4 md:grid-cols-2",
						children: planets.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanetCard, {
							planet: p,
							index: i
						}, p.slug))
					})
				]
			}) : null,
			nebulae.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-tight",
						children: "Nebulae"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Clouds this star lights, or sits beside."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4 md:grid-cols-2",
						children: nebulae.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NebulaCard, {
							nebula: n,
							index: i
						}, n.slug))
					})
				]
			}) : null,
			related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "Nearby in the catalog"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 md:grid-cols-2",
					children: related.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarCard, {
						star: s,
						index: i
					}, s.slug))
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
export { StarPage as component };
