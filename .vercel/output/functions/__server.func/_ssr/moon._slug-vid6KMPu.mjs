import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Bookmark, s as ArrowLeft } from "../_libs/lucide-react.mjs";
import { A as PLANET_BG, C as Button, U as cn, V as SiteFooter } from "./catalog-N4vBopjS.mjs";
import { O as MOON_TAG_LABEL, T as MOON_KIND_LABEL, a as Route$3 } from "./router-krysFcP6.mjs";
import { t as useFavorites } from "./favorites-Bh8adyw5.mjs";
import { c as formatMoonPeriod, i as MoonCard, l as formatMoonRadius, o as formatKm, s as formatMoonMass } from "./moon-card-BZs-S2DU.mjs";
import { t as MoonOrbits } from "./moon-orbits-DjInY0fK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/moon._slug-vid6KMPu.js
var import_jsx_runtime = require_jsx_runtime();
function MoonPortrait({ moon }) {
	const v = `--color-planet-${moon.palette}`;
	const t = Math.log10(Math.max(moon.radiusKm, 6));
	const min = Math.log10(6);
	const max = Math.log10(2634);
	const pct = 16 + (t - min) / (max - min) * 28;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto grid aspect-square w-full max-w-md place-items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "orb-breathe absolute inset-[14%] rounded-full opacity-40",
			style: { background: `radial-gradient(circle at 35% 32%, color-mix(in oklab, var(${v}) 45%, transparent) 0%, transparent 70%)` }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("relative z-10 rounded-full", PLANET_BG[moon.palette]),
			style: {
				width: `${pct}%`,
				height: `${pct}%`,
				backgroundImage: `radial-gradient(circle at 32% 28%, color-mix(in oklab, var(${v}) 80%, white) 0%, var(${v}) 55%, color-mix(in oklab, var(${v}) 70%, black) 100%)`,
				boxShadow: `inset -18px -12px 28px rgb(0 0 0 / 0.35), 0 0 48px color-mix(in oklab, var(${v}) 40%, transparent)`
			}
		})]
	});
}
function MoonPage() {
	const { moon, planet, siblings } = Route$3.useLoaderData();
	const saved = useFavorites((s) => s.slugs.includes(`m:${moon.slug}`));
	const toggle = useFavorites((s) => s.toggle);
	const system = planet ? [moon, ...siblings].sort((a, b) => a.semiMajorKm - b.semiMajorKm) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/moons",
					className: "inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Moons"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: saved ? "primary" : "secondary",
					onClick: () => toggle(`m:${moon.slug}`),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: cn("size-4", saved && "fill-current") }), saved ? "Saved" : "Save"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,22rem)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[11px] tracking-[0.2em] text-muted uppercase",
						children: [
							moon.designation,
							" · ",
							moon.planetName
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-5xl tracking-tight md:text-6xl",
						children: moon.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-lg leading-relaxed text-muted",
						children: moon.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-bg-elevated px-3 py-1.5 text-xs text-muted shadow-border",
								children: MOON_KIND_LABEL[moon.kind]
							}),
							moon.retrograde ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-bg-elevated px-3 py-1.5 text-xs text-muted shadow-border",
								children: "Retrograde"
							}) : null,
							moon.notable.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-bg-elevated px-3 py-1.5 text-xs text-muted shadow-border",
								children: MOON_TAG_LABEL[tag]
							}, tag))
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoonPortrait, { moon })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Orbit",
						value: formatKm(moon.semiMajorKm)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Period",
						value: formatMoonPeriod(moon.periodDays)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Radius",
						value: formatMoonRadius(moon.radiusKm)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Mass",
						value: formatMoonMass(moon.massKg)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Found",
						value: moon.discovered
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Discoverer",
						value: moon.discoverer ?? "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Host",
						value: moon.planetName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Path",
						value: moon.retrograde ? "Retrograde" : "Prograde"
					})
				]
			}),
			planet && system.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-2xl tracking-tight",
						children: ["Around ", planet.name]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							system.length,
							" moons in this atlas",
							planet.moons > system.length ? ` of ${planet.moons} known` : "",
							". Click a point."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoonOrbits, {
							moons: system,
							planet,
							highlight: moon.slug
						})
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "Notes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3",
					children: moon.facts.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
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
								children: "Planet"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-fg",
								children: planet ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/planet/$slug",
									params: { slug: planet.slug },
									className: "hover:underline",
									children: planet.name
								}) : moon.planetName
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4 border-b border-border py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Class"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-fg",
								children: MOON_KIND_LABEL[moon.kind]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4 border-b border-border py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Discoverer"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-right text-fg",
								children: moon.discoverer ?? "—"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Captured"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-fg",
								children: moon.notable.includes("captured") ? "Likely" : "Native"
							})]
						})
					]
				})] })]
			}),
			siblings.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "Sibling moons"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 md:grid-cols-2",
					children: siblings.slice(0, 4).map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoonCard, {
						moon: m,
						index: i
					}, m.slug))
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
export { MoonPage as component };
