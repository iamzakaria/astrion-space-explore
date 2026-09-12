import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, b as require_jsx_runtime, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as SPECTRAL_TEXT, E as KIND_INFO, R as SPECTRAL_CLASSES, V as SiteFooter, c as STARS, l as STAR_BY_SLUG, x as spectralCount, y as kindCount, z as SPECTRAL_HEX } from "./catalog-N4vBopjS.mjs";
import { t as StarOrb } from "./star-orb-CiYZ4sK2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/classes-C4kG3bNS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function round(n) {
	return Math.round(n * 10) / 10;
}
function xOf(temp, w) {
	const minT = Math.log10(2200);
	const maxT = Math.log10(52e3);
	return round(48 + (maxT - Math.min(Math.max(Math.log10(temp), minT), maxT)) / (maxT - minT) * (w - 80));
}
function yOf(lum, h) {
	const minL = Math.log10(1e-4);
	const maxL = Math.log10(8e6);
	return round(20 + (maxL - Math.min(Math.max(Math.log10(Math.max(lum, 5e-5)), minL), maxL)) / (maxL - minL) * (h - 56));
}
function HrDiagram() {
	const navigate = useNavigate();
	const [hover, setHover] = (0, import_react.useState)(null);
	const width = 920;
	const height = 560;
	const hoverStar = (0, import_react.useMemo)(() => STARS.find((s) => s.slug === hover), [hover]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-xl bg-bg-elevated/70 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: `0 0 ${width} ${height}`,
			className: "h-auto w-full",
			role: "img",
			"aria-label": "Hertzsprung–Russell diagram of the catalog",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width,
					height,
					fill: "#0b0b10"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: width / 2,
					y: 18,
					textAnchor: "middle",
					fill: "rgba(236,236,241,0.4)",
					fontSize: 11,
					fontFamily: "IBM Plex Mono, monospace",
					children: "Temperature → cooler"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: 16,
					y: height / 2,
					fill: "rgba(236,236,241,0.4)",
					fontSize: 11,
					fontFamily: "IBM Plex Mono, monospace",
					transform: `rotate(-90 16 ${height / 2})`,
					children: "Luminosity (L☉)"
				}),
				[
					4e4,
					1e4,
					6e3,
					4e3,
					3e3
				].map((k) => {
					const x = xOf(k, width);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: x,
						y1: 24,
						x2: x,
						y2: 524,
						stroke: "rgba(236,236,241,0.06)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
						x,
						y: 544,
						textAnchor: "middle",
						fill: "rgba(236,236,241,0.35)",
						fontSize: 10,
						fontFamily: "IBM Plex Mono, monospace",
						children: [k >= 1e3 ? `${k / 1e3}k` : k, "K"]
					})] }, k);
				}),
				[
					.001,
					1,
					1e3,
					1e5
				].map((l) => {
					const y = yOf(l, height);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: 48,
						y1: y,
						x2: 896,
						y2: y,
						stroke: "rgba(236,236,241,0.06)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: 44,
						y: y + 3,
						textAnchor: "end",
						fill: "rgba(236,236,241,0.35)",
						fontSize: 10,
						fontFamily: "IBM Plex Mono, monospace",
						children: l >= 1 ? l.toLocaleString() : l
					})] }, l);
				}),
				STARS.map((star) => {
					const x = xOf(star.temperatureK, width);
					const y = yOf(star.luminositySun, height);
					const r = star.kind === "neutron-star" ? 3.2 : star.radiusSun > 100 ? 6 : star.radiusSun > 10 ? 4.5 : 3.2;
					const active = hover === star.slug;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: x,
						cy: y,
						r: active ? r + 2 : r,
						fill: SPECTRAL_HEX[star.spectralClass],
						opacity: active ? 1 : .88,
						className: "cursor-pointer",
						onMouseEnter: () => setHover(star.slug),
						onMouseLeave: () => setHover(null),
						onClick: () => navigate({
							to: "/star/$slug",
							params: { slug: star.slug }
						})
					}, star.slug);
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverCard, { star: hoverStar })]
	});
}
function HoverCard({ star }) {
	if (!star) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "pointer-events-none absolute bottom-4 left-4 text-xs text-subtle",
		children: "Hot stars left · luminous stars up · click any point"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute bottom-4 left-4 rounded-md bg-bg/90 px-3 py-2 text-sm shadow-[var(--shadow-panel)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-base text-fg",
			children: star.name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-mono text-xs text-muted",
			children: [
				star.spectralType,
				" · ",
				star.temperatureK.toLocaleString(),
				" K · ",
				star.luminositySun.toLocaleString(),
				" L☉"
			]
		})]
	});
}
function ClassesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] tracking-[0.2em] text-muted uppercase",
				children: "Classification"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-3xl font-display text-4xl tracking-tight md:text-5xl",
				children: "How a star is named for what it is"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-muted",
				children: "Spectral class is a temperature sequence — O B A F G K M — read from a star’s absorption lines. Luminosity class is a size sequence, from hypergiants to dwarfs. Together they pin a sun on the Hertzsprung–Russell diagram."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-tight",
						children: "Hertzsprung–Russell"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm text-muted",
						children: "Main sequence runs diagonally from hot luminous O stars to cool faint M dwarfs. Giants sit above it; white dwarfs below. Click any point."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HrDiagram, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "Spectral classes"
				}), SPECTRAL_CLASSES.map((s) => {
					const specimen = STAR_BY_SLUG[s.specimen];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "grid gap-4 rounded-xl bg-bg-elevated/80 p-5 shadow-[var(--shadow-border)] md:grid-cols-[auto_1fr_auto] md:items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarOrb, {
								spectral: s.class,
								size: "lg"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: `font-display text-2xl ${SPECTRAL_TEXT[s.class]}`,
									children: s.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
									children: s.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 font-mono text-xs text-subtle",
									children: [
										s.tempRange,
										" · ",
										spectralCount(s.class),
										" in this atlas ·",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/atlas",
											search: { spectral: s.class },
											className: "text-muted hover:text-fg",
											children: "Filter"
										})
									]
								})
							] }),
							specimen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/star/$slug",
								params: { slug: specimen.slug },
								className: "text-sm text-muted hover:text-fg",
								children: ["Specimen: ", specimen.name]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/atlas",
								search: { spectral: s.class },
								className: "text-sm text-muted hover:text-fg",
								children: "Open in atlas"
							})
						]
					}, s.class);
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "Evolutionary stages"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 md:grid-cols-2",
					children: KIND_INFO.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/atlas",
						search: { kind: k.id },
						className: "rounded-xl bg-bg-elevated/80 p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl tracking-tight",
								children: k.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: k.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 font-mono text-xs text-subtle",
								children: [kindCount(k.id), " in this atlas"]
							})
						]
					}, k.id))
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})] });
}
//#endregion
export { ClassesPage as component };
