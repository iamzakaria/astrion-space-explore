# Astrion

A stellar atlas of named stars, the planets that circle them, the moons of those planets, and the nebulae still making the next generation.

Distances in light-years. Orbits in astronomical units. Moons in kilometres.

Crafted with curiosity by **Zakaria Shagor**.

## The catalog

| Collection | Count | What you get |
| --- | ---: | --- |
| Stars | 84 | Spectral class, mass, luminosity, HR diagram, sky positions |
| Planets | 54 | Solar System worlds and exoplanets, mass–radius, orbits |
| Moons | 35 | Galileans, Titan, Triton, and the notable rest, with system diagrams |
| Nebulae | 33 | Emission, reflection, planetary, remnant, and dark clouds — animated |
| Constellations | 37 | Figures, lore, lucida, and the stars (and nebulae) they hold |

Every entry is a real object with measured numbers, not a placeholder.

## Walk the sky

- **Atlas** — filter stars by colour, stage, distance, constellation, and the tags that made them famous
- **Planets** — Solar System and exoplanets, classed and comparable
- **Moons** — filter by host world; open a moon and see its siblings in orbit
- **Nebulae** — drifting gas portraits, from Orion’s nursery to the Helix
- **Sky** — equirectangular chart; click a star or a cloud
- **Classes** — Harvard sequence and Hertzsprung–Russell
- **Constellations** — myth, genitive, and a stick-figure of the catalog stars

Saved objects live in the observatory (local to your browser).

## Stack

- [TanStack Start](https://tanstack.com/start) (file-based routing)
- React 19 + TypeScript
- Tailwind CSS v4
- Canvas starfield, planet orbs, and nebula portraits
- Zustand for the observatory

Catalog data lives in `src/data/` — stars, planets, moons, nebulae, constellations — and is typed in `src/data/types.ts`.

## Run it

```bash
npm install
npm run dev
```

Then open the app in a browser. Other useful scripts:

```bash
npm run typecheck
npm run build
npm run preview
```

## Notes

Portraits of stars, planets, moons, and nebulae are painted in code (CSS, SVG, canvas), not photographs. Colour follows spectral type, chemistry, and albedo — a catalog’s honesty, not a Hubble plate.

Motion respects `prefers-reduced-motion`.
