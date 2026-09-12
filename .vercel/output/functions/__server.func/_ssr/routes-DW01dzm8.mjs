import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ArrowRight } from "../_libs/lucide-react.mjs";
import { B as SPECTRAL_TEXT, C as Button, L as SPECTRAL_BG, P as PLANET_KIND_INFO, R as SPECTRAL_CLASSES, V as SiteFooter, i as CONSTELLATION_COUNT, j as PLANET_BY_SLUG, l as STAR_BY_SLUG, s as FEATURED_SLUGS, t as CATALOG_COUNT, x as spectralCount } from "./catalog-N4vBopjS.mjs";
import { C as MOON_BY_SLUG, d as FEATURED_NEBULAE, m as NEBULA_COUNT, p as NEBULA_BY_SLUG } from "./router-krysFcP6.mjs";
import { t as StarCard } from "./star-card-DgqAuVOe.mjs";
import { t as NebulaCard } from "./nebula-card-DmlVm2Oj.mjs";
import { t as PlanetOrb } from "./planet-orb-Daq3UcVc.mjs";
import { i as MoonCard, n as MOON_COUNT, t as FEATURED_MOONS } from "./moon-card-BZs-S2DU.mjs";
import { d as kindCountPlanets, i as PlanetCard, n as FEATURED_PLANETS, r as PLANET_COUNT } from "./planet-card-CuzkX50g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DW01dzm8.js
var import_jsx_runtime = require_jsx_runtime();
var KIND_SAMPLE = {
	terrestrial: "earth",
	"gas-giant": "saturn",
	"ice-giant": "neptune",
	dwarf: "pluto",
	"super-earth": "lhs-1140-b",
	"hot-jupiter": "51-pegasi-b",
	"mini-neptune": "gj-1214-b"
};
function Home() {
	const featured = FEATURED_SLUGS.map((s) => STAR_BY_SLUG[s]).filter((s) => Boolean(s));
	const featuredPlanets = FEATURED_PLANETS.map((s) => PLANET_BY_SLUG[s]).filter((p) => Boolean(p));
	const featuredMoons = FEATURED_MOONS.map((s) => MOON_BY_SLUG[s]).filter((m) => Boolean(m));
	const featuredNebulae = FEATURED_NEBULAE.map((s) => NEBULA_BY_SLUG[s]).filter((n) => Boolean(n));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative mx-auto flex min-h-[calc(100dvh-4.5rem)] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stagger-in max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[11px] tracking-[0.22em] text-muted uppercase",
						children: [
							"Stellar atlas · ",
							CATALOG_COUNT,
							" suns · ",
							PLANET_COUNT,
							" worlds · ",
							MOON_COUNT,
							" moons · ",
							NEBULA_COUNT,
							" nebulae"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 font-display text-hero tracking-tight text-fg",
						children: "The sky, named and measured."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-lg leading-relaxed text-muted",
						children: "Astrion is a living catalog of the stars you can point to, the planets that circle them, the moons of those planets, and the nebulae still making the next generation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/atlas",
									children: ["Open the atlas", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "secondary",
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/planets",
									children: "Browse planets"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "secondary",
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/nebulae",
									children: "Browse nebulae"
								})
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-16 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Stars",
						value: String(CATALOG_COUNT)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Planets",
						value: String(PLANET_COUNT)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Moons",
						value: String(MOON_COUNT)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Nebulae",
						value: String(NEBULA_COUNT)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Constellations",
						value: String(CONSTELLATION_COUNT)
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-[0.2em] text-subtle uppercase",
					children: "Harvard sequence"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl tracking-tight md:text-4xl",
					children: "Seven colours of fire"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/classes",
					className: "hidden items-center gap-1 text-sm text-muted hover:text-fg sm:flex",
					children: ["Classification", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7",
				children: SPECTRAL_CLASSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/atlas",
					search: { spectral: s.class },
					className: "rounded-lg bg-bg-elevated/80 p-4 shadow-border transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-border-hover",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block size-3 rounded-full ${SPECTRAL_BG[s.class]}` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `mt-4 font-display text-3xl ${SPECTRAL_TEXT[s.class]}`,
							children: s.class
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: s.colorName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 font-mono text-[11px] text-subtle tabular",
							children: [
								spectralCount(s.class),
								" in atlas · ",
								s.tempRange
							]
						})
					]
				}, s.class))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.2em] text-subtle uppercase",
						children: "Worlds"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl tracking-tight md:text-4xl",
						children: "Planets, named and classed"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/planets",
						className: "hidden items-center gap-1 text-sm text-muted hover:text-fg sm:flex",
						children: ["All planets", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7",
					children: PLANET_KIND_INFO.map((k) => {
						const sampleSlug = KIND_SAMPLE[k.id];
						const sample = sampleSlug ? PLANET_BY_SLUG[sampleSlug] : void 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/planets",
							search: { kind: k.id },
							className: "rounded-lg bg-bg-elevated/80 p-4 shadow-border transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-border-hover",
							children: [
								sample ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanetOrb, {
									palette: sample.palette,
									rings: sample.rings,
									size: "sm"
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 font-display text-lg leading-snug tracking-tight",
									children: k.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 font-mono text-[11px] text-subtle tabular",
									children: [kindCountPlanets(k.id), " in atlas"]
								})
							]
						}, k.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-2",
					children: featuredPlanets.map((planet, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanetCard, {
						planet,
						index: i
					}, planet.slug))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-[0.2em] text-subtle uppercase",
					children: "Satellites"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl tracking-tight md:text-4xl",
					children: "Moons that are worlds"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/moons",
					className: "hidden items-center gap-1 text-sm text-muted hover:text-fg sm:flex",
					children: ["All moons", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-2",
				children: featuredMoons.map((moon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoonCard, {
					moon,
					index: i
				}, moon.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-[0.2em] text-subtle uppercase",
					children: "Clouds"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl tracking-tight md:text-4xl",
					children: "Nebulae, still in motion"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/nebulae",
					className: "hidden items-center gap-1 text-sm text-muted hover:text-fg sm:flex",
					children: ["All nebulae", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-2",
				children: featuredNebulae.map((nebula, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NebulaCard, {
					nebula,
					index: i
				}, nebula.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-[0.2em] text-subtle uppercase",
					children: "Featured"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl tracking-tight md:text-4xl",
					children: "Six to know by name"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-2",
					children: featured.map((star, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarCard, {
						star,
						index: i
					}, star.slug))
				})
			]
		})
	] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})] });
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "font-mono text-[11px] tracking-[0.16em] text-subtle uppercase",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-1 font-display text-2xl tracking-tight",
		children: value
	})] });
}
//#endregion
export { Home as component };
