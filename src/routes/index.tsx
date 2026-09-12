import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { MoonCard } from "@/components/moon-card";
import { NebulaCard } from "@/components/nebula-card";
import { PlanetCard } from "@/components/planet-card";
import { PlanetOrb } from "@/components/planet-orb";
import { SiteFooter } from "@/components/site-shell";
import { StarCard } from "@/components/star-card";
import { Button } from "@/components/ui/button";
import {
  CATALOG_COUNT,
  CONSTELLATION_COUNT,
  FEATURED_SLUGS,
  SPECTRAL_BG,
  SPECTRAL_CLASSES,
  SPECTRAL_TEXT,
  STAR_BY_SLUG,
  spectralCount,
} from "@/data/catalog";
import { FEATURED_MOONS, MOON_BY_SLUG, MOON_COUNT } from "@/data/moon-catalog";
import { FEATURED_NEBULAE, NEBULA_BY_SLUG, NEBULA_COUNT } from "@/data/nebula-catalog";
import {
  FEATURED_PLANETS,
  PLANET_COUNT,
  PLANET_KIND_INFO,
  PLANET_BY_SLUG,
  kindCountPlanets,
} from "@/data/planet-catalog";
import type { Moon, Nebula, Planet, PlanetKind, Star } from "@/data/types";

const KIND_SAMPLE: Record<PlanetKind, string> = {
  terrestrial: "earth",
  "gas-giant": "saturn",
  "ice-giant": "neptune",
  dwarf: "pluto",
  "super-earth": "lhs-1140-b",
  "hot-jupiter": "51-pegasi-b",
  "mini-neptune": "gj-1214-b",
};

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const featured = FEATURED_SLUGS.map((s) => STAR_BY_SLUG[s]).filter(
    (s): s is Star => Boolean(s),
  );
  const featuredPlanets = FEATURED_PLANETS.map((s) => PLANET_BY_SLUG[s]).filter(
    (p): p is Planet => Boolean(p),
  );
  const featuredMoons = FEATURED_MOONS.map((s) => MOON_BY_SLUG[s]).filter(
    (m): m is Moon => Boolean(m),
  );
  const featuredNebulae = FEATURED_NEBULAE.map((s) => NEBULA_BY_SLUG[s]).filter(
    (n): n is Nebula => Boolean(n),
  );

  return (
    <>
      <main>
        <section className="relative mx-auto flex min-h-[calc(100dvh-4.5rem)] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6">
          <div className="stagger-in max-w-3xl">
            <p className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
              Stellar atlas · {CATALOG_COUNT} suns · {PLANET_COUNT} worlds · {MOON_COUNT} moons · {NEBULA_COUNT} nebulae
            </p>
            <h1 className="mt-5 font-display text-hero tracking-tight text-fg">
              The sky, named and measured.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Astrion is a living catalog of the stars you can point to, the planets that
              circle them, the moons of those planets, and the nebulae still making the next
              generation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/atlas">
                  Open the atlas
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/planets">Browse planets</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/nebulae">Browse nebulae</Link>
              </Button>
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-5">
            <Stat label="Stars" value={String(CATALOG_COUNT)} />
            <Stat label="Planets" value={String(PLANET_COUNT)} />
            <Stat label="Moons" value={String(MOON_COUNT)} />
            <Stat label="Nebulae" value={String(NEBULA_COUNT)} />
            <Stat label="Constellations" value={String(CONSTELLATION_COUNT)} />
          </dl>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-subtle uppercase">
                Harvard sequence
              </p>
              <h2 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">
                Seven colours of fire
              </h2>
            </div>
            <Link
              to="/classes"
              className="hidden items-center gap-1 text-sm text-muted hover:text-fg sm:flex"
            >
              Classification
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {SPECTRAL_CLASSES.map((s) => (
              <Link
                key={s.class}
                to="/atlas"
                search={{ spectral: s.class }}
                className="rounded-lg bg-bg-elevated/80 p-4 shadow-border transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-border-hover"
              >
                <span className={`block size-3 rounded-full ${SPECTRAL_BG[s.class]}`} />
                <p className={`mt-4 font-display text-3xl ${SPECTRAL_TEXT[s.class]}`}>{s.class}</p>
                <p className="mt-1 text-sm text-muted">{s.colorName}</p>
                <p className="mt-3 font-mono text-[11px] text-subtle tabular">
                  {spectralCount(s.class)} in atlas · {s.tempRange}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-subtle uppercase">
                Worlds
              </p>
              <h2 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">
                Planets, named and classed
              </h2>
            </div>
            <Link
              to="/planets"
              className="hidden items-center gap-1 text-sm text-muted hover:text-fg sm:flex"
            >
              All planets
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {PLANET_KIND_INFO.map((k) => {
              const sampleSlug = KIND_SAMPLE[k.id];
              const sample = sampleSlug ? PLANET_BY_SLUG[sampleSlug] : undefined;
              return (
                <Link
                  key={k.id}
                  to="/planets"
                  search={{ kind: k.id }}
                  className="rounded-lg bg-bg-elevated/80 p-4 shadow-border transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-border-hover"
                >
                  {sample ? (
                    <PlanetOrb palette={sample.palette} rings={sample.rings} size="sm" />
                  ) : null}
                  <p className="mt-4 font-display text-lg leading-snug tracking-tight">{k.label}</p>
                  <p className="mt-3 font-mono text-[11px] text-subtle tabular">
                    {kindCountPlanets(k.id)} in atlas
                  </p>
                </Link>
              );
            })}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {featuredPlanets.map((planet, i) => (
              <PlanetCard key={planet.slug} planet={planet} index={i} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-subtle uppercase">
                Satellites
              </p>
              <h2 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">
                Moons that are worlds
              </h2>
            </div>
            <Link
              to="/moons"
              className="hidden items-center gap-1 text-sm text-muted hover:text-fg sm:flex"
            >
              All moons
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {featuredMoons.map((moon, i) => (
              <MoonCard key={moon.slug} moon={moon} index={i} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-subtle uppercase">
                Clouds
              </p>
              <h2 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">
                Nebulae, still in motion
              </h2>
            </div>
            <Link
              to="/nebulae"
              className="hidden items-center gap-1 text-sm text-muted hover:text-fg sm:flex"
            >
              All nebulae
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {featuredNebulae.map((nebula, i) => (
              <NebulaCard key={nebula.slug} nebula={nebula} index={i} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="font-mono text-[11px] tracking-[0.2em] text-subtle uppercase">
            Featured
          </p>
          <h2 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">
            Six to know by name
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {featured.map((star, i) => (
              <StarCard key={star.slug} star={star} index={i} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">{label}</dt>
      <dd className="mt-1 font-display text-2xl tracking-tight">{value}</dd>
    </div>
  );
}
