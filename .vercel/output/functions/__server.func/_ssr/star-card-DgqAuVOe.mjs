import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Bookmark } from "../_libs/lucide-react.mjs";
import { B as SPECTRAL_TEXT, D as KIND_LABEL, U as cn, m as formatMag, p as formatLy } from "./catalog-N4vBopjS.mjs";
import { t as StarOrb } from "./star-orb-CiYZ4sK2.mjs";
import { t as useFavorites } from "./favorites-Bh8adyw5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/star-card-DgqAuVOe.js
var import_jsx_runtime = require_jsx_runtime();
function StarCard({ star, index = 0 }) {
	const saved = useFavorites((s) => s.slugs.includes(star.slug));
	const toggle = useFavorites((s) => s.toggle);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group relative rounded-xl bg-bg-elevated/80 p-4 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-border-hover)]",
		style: { animationDelay: `${Math.min(index, 12) * 40}ms` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/star/$slug",
			params: { slug: star.slug },
			className: "flex gap-4 text-fg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarOrb, {
				spectral: star.spectralClass,
				size: "lg"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1 pr-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-start justify-between gap-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl leading-snug tracking-tight text-fg",
							children: star.name
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 truncate font-mono text-xs text-muted",
						children: star.designation
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 line-clamp-2 text-sm leading-normal text-muted",
						children: star.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 grid grid-cols-3 gap-2 font-mono text-[11px] tracking-wide text-subtle",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "uppercase",
								children: "Type"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: cn("mt-0.5 text-xs", SPECTRAL_TEXT[star.spectralClass]),
								children: star.spectralType
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "uppercase",
								children: "Dist."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-0.5 text-xs text-fg tabular",
								children: formatLy(star.distanceLy)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "uppercase",
								children: "Mag"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-0.5 text-xs text-fg tabular",
								children: formatMag(star.apparentMag)
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs text-subtle",
						children: [KIND_LABEL[star.kind], star.constellationName ? ` · ${star.constellationName}` : ""]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: (e) => {
				e.preventDefault();
				e.stopPropagation();
				toggle(star.slug);
			},
			className: cn("absolute top-3 right-3 grid size-11 place-items-center rounded-sm text-subtle transition-colors duration-150 hover:text-fg", saved && "text-accent"),
			"aria-label": saved ? `Remove ${star.name} from observatory` : `Save ${star.name}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: cn("size-4", saved && "fill-current") })
		})]
	});
}
//#endregion
export { StarCard as t };
