import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { L as SPECTRAL_BG, U as cn, q as spectralVar } from "./catalog-N4vBopjS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/star-orb-CiYZ4sK2.js
var import_jsx_runtime = require_jsx_runtime();
var SIZE = {
	sm: "size-3",
	md: "size-8",
	lg: "size-14",
	xl: "size-24",
	hero: "size-40 md:size-52"
};
function StarOrb({ spectral, size = "md", breathe = false, className }) {
	const v = spectralVar(spectral);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("relative inline-grid place-items-center", SIZE[size], className),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("absolute inset-[-40%] rounded-full opacity-50", breathe && "orb-breathe"),
			style: { background: `radial-gradient(circle, color-mix(in oklab, var(${v}) 55%, transparent) 0%, transparent 70%)` }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("relative z-10 block size-[42%] rounded-full", SPECTRAL_BG[spectral]),
			style: { boxShadow: `0 0 18px color-mix(in oklab, var(${v}) 80%, transparent)` }
		})]
	});
}
//#endregion
export { StarOrb as t };
