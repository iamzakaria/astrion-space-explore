import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Bookmark, s as ArrowLeft } from "../_libs/lucide-react.mjs";
import { A as PLANET_BG, C as Button, F as PLANET_KIND_LABEL, I as PLANET_TAG_LABEL, T as DISCOVERY_LABEL, U as cn, V as SiteFooter, W as discoveryOf, _ as formatTemp, v as getStar } from "./catalog-N4vBopjS.mjs";
import { r as Route$1 } from "./router-krysFcP6.mjs";
import { t as useFavorites } from "./favorites-Bh8adyw5.mjs";
import { i as MoonCard } from "./moon-card-BZs-S2DU.mjs";
import { t as MoonOrbits } from "./moon-orbits-DjInY0fK.mjs";
import { c as formatAu, i as PlanetCard, l as formatEarth, u as formatPeriod } from "./planet-card-CuzkX50g.mjs";
import { t as SystemOrbits } from "./system-orbits-CmzK5iRm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/planet._slug-BMycO4gS.js
var import_jsx_runtime = require_jsx_runtime();
function PlanetPortrait({ planet }) {
	const v = `--color-planet-${planet.palette}`;
	const giant = planet.kind === "gas-giant" || planet.kind === "ice-giant" || planet.kind === "hot-jupiter";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto grid aspect-square w-full max-w-md place-items-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "orb-breathe absolute inset-[12%] rounded-full opacity-50",
				style: { background: `radial-gradient(circle at 35% 32%, color-mix(in oklab, var(${v}) 55%, transparent) 0%, transparent 70%)` }
			}),
			planet.rings ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-[4%] right-[4%] top-1/2 z-[2] h-[22%] -translate-y-1/2 rounded-full",
				style: {
					transform: "translateY(-50%) rotate(-22deg)",
					boxShadow: `inset 0 0 0 1px color-mix(in oklab, var(${v}) 0%, transparent), 0 0 0 10px color-mix(in oklab, var(${v}) 22%, transparent), 0 0 0 14px color-mix(in oklab, var(${v}) 10%, transparent)`
				}
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("relative z-10 rounded-full", PLANET_BG[planet.palette], giant ? "size-[42%]" : "size-[34%]"),
				style: {
					backgroundImage: planet.palette === "earth" ? `radial-gradient(circle at 32% 28%, color-mix(in oklab, var(${v}) 70%, white) 0%, var(${v}) 42%, color-mix(in oklab, var(--color-planet-ocean) 80%, #1a3a28) 100%)` : giant ? `linear-gradient(180deg, color-mix(in oklab, var(${v}) 70%, white) 0%, var(${v}) 38%, color-mix(in oklab, var(${v}) 80%, black) 62%, var(${v}) 100%)` : `radial-gradient(circle at 32% 28%, color-mix(in oklab, var(${v}) 80%, white) 0%, var(${v}) 55%, color-mix(in oklab, var(${v}) 70%, black) 100%)`,
					boxShadow: `inset -18px -12px 28px rgb(0 0 0 / 0.35), 0 0 48px color-mix(in oklab, var(${v}) 40%, transparent)`
				}
			})
		]
	});
}
function PlanetPage() {
	const { planet, system, related, moons } = Route$1.useLoaderData();
	const saved = useFavorites((s) => s.slugs.includes(`p:${planet.slug}`));
	const toggle = useFavorites((s) => s.toggle);
	const host = planet.hostSlug ? getStar(planet.hostSlug) : void 0;
	const found = discoveryOf(planet);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/planets",
					className: "inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Planets"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: saved ? "primary" : "secondary",
					onClick: () => toggle(`p:${planet.slug}`),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: cn("size-4", saved && "fill-current") }), saved ? "Saved" : "Save"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,22rem)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[11px] tracking-[0.2em] text-muted uppercase",
						children: [
							planet.designation,
							" · ",
							planet.solar ? "Solar System" : "Exoplanet"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-5xl tracking-tight md:text-6xl",
						children: planet.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-lg leading-relaxed text-muted",
						children: planet.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-bg-elevated px-3 py-1.5 text-xs text-muted shadow-border",
								children: PLANET_KIND_LABEL[planet.kind]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-bg-elevated px-3 py-1.5 text-xs text-muted shadow-border",
								children: DISCOVERY_LABEL[found]
							}),
							planet.notable.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-bg-elevated px-3 py-1.5 text-xs text-muted shadow-border",
								children: PLANET_TAG_LABEL[tag]
							}, tag))
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanetPortrait, { planet })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Semi-major axis",
						value: formatAu(planet.au)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Period",
						value: formatPeriod(planet.periodDays)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Radius",
						value: formatEarth(planet.radiusEarth, "R⊕")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Mass",
						value: formatEarth(planet.massEarth, "M⊕")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Temperature",
						value: planet.temperatureK == null ? "—" : formatTemp(planet.temperatureK)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Moons",
						value: String(planet.moons),
						href: moons.length > 0 ? "#moons" : void 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Found",
						value: planet.discovered
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Host",
						value: planet.hostName
					})
				]
			}),
			system.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-tight",
						children: "System"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							system.length,
							" known worlds around ",
							planet.hostName,
							". Click a point."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemOrbits, {
							planets: system,
							highlight: planet.slug
						})
					})
				]
			}) : null,
			moons.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "moons",
				className: "mt-16 scroll-mt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl tracking-tight",
							children: "Moons"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted",
							children: [
								planet.moons,
								" known",
								planet.moons > moons.length ? ` · ${moons.length} major moons in this atlas` : moons.length === 1 ? " · the one in this atlas" : ` · all ${moons.length} in this atlas`,
								". Click a point."
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/moons",
							search: { planet: planet.slug },
							className: "text-sm text-muted hover:text-fg",
							children: ["All moons of ", planet.name]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoonOrbits, {
							moons,
							planet
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4 md:grid-cols-2",
						children: moons.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoonCard, {
							moon: m,
							index: i
						}, m.slug))
					})
				]
			}) : planet.solar ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "Moons"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted",
					children: [planet.name, " has no known moons."]
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "Notes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3",
					children: planet.facts.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm leading-relaxed text-muted",
						children: fact
					}, fact))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "Census"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-4 space-y-3 font-mono text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4 border-b border-border py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Star"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-fg",
								children: host ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/star/$slug",
									params: { slug: host.slug },
									className: "hover:underline",
									children: host.name
								}) : planet.hostName
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4 border-b border-border py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Class"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-fg",
								children: PLANET_KIND_LABEL[planet.kind]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4 border-b border-border py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Discovery"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-fg",
								children: DISCOVERY_LABEL[found]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Rings"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-fg",
								children: planet.rings ? "Yes" : "None known"
							})]
						})
					]
				})] })]
			}),
			related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "Related worlds"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 md:grid-cols-2",
					children: related.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanetCard, {
						planet: p,
						index: i
					}, p.slug))
				})]
			}) : null
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})] });
}
function Fact({ label, value, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-bg-elevated px-4 py-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "font-mono text-[11px] tracking-[0.14em] text-subtle uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 font-display text-2xl tracking-tight tabular",
			children: href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href,
				className: "hover:underline",
				children: value
			}) : value
		})]
	});
}
//#endregion
export { PlanetPage as component };
