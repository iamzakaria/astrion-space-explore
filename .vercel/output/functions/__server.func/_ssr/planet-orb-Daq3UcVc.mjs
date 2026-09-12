import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as PLANET_BG, U as cn } from "./catalog-N4vBopjS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/planet-orb-Daq3UcVc.js
var import_jsx_runtime = require_jsx_runtime();
var SIZE = {
	sm: "size-3",
	md: "size-8",
	lg: "size-14",
	xl: "size-24"
};
function PlanetOrb({ palette, rings = false, size = "md", className }) {
	const v = `--color-planet-${palette}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("relative inline-grid place-items-center", SIZE[size], className),
		"aria-hidden": "true",
		children: [rings ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute inset-x-[-18%] top-1/2 h-[18%] -translate-y-1/2 rounded-full opacity-70",
			style: {
				boxShadow: `0 0 0 1px color-mix(in oklab, var(${v}) 55%, transparent)`,
				transform: "translateY(-50%) rotate(-18deg)"
			}
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("relative z-10 block size-[58%] rounded-full", PLANET_BG[palette]),
			style: { boxShadow: `inset -4px -3px 8px rgb(0 0 0 / 0.35), 0 0 14px color-mix(in oklab, var(${v}) 45%, transparent)` }
		})]
	});
}
//#endregion
export { PlanetOrb as t };
