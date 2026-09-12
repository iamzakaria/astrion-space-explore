import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/favorites-Bh8adyw5.js
var useFavorites = create()(persist((set, get) => ({
	slugs: [],
	toggle: (slug) => set((state) => ({ slugs: state.slugs.includes(slug) ? state.slugs.filter((s) => s !== slug) : [...state.slugs, slug] })),
	has: (slug) => get().slugs.includes(slug)
}), { name: "astrion-observatory" }));
//#endregion
export { useFavorites as t };
