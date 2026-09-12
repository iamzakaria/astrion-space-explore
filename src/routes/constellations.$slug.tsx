import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ConstellationFigure } from "@/components/constellation-figure";
import { NebulaCard } from "@/components/nebula-card";
import { SiteFooter } from "@/components/site-shell";
import { StarCard } from "@/components/star-card";
import { CONSTELLATION_BY_SLUG, STAR_BY_SLUG, starsInConstellation } from "@/data/catalog";
import { nebulaeInConstellation } from "@/data/nebula-catalog";

export const Route = createFileRoute("/constellations/$slug")({
  loader: ({ params }) => {
    const constellation = CONSTELLATION_BY_SLUG[params.slug];
    if (!constellation) throw notFound();
    return {
      constellation,
      stars: starsInConstellation(params.slug),
      nebulae: nebulaeInConstellation(params.slug),
    };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.constellation.name} — Astrion` : "Astrion" },
    ],
  }),
  component: ConstellationPage,
});

function ConstellationPage() {
  const { constellation, stars, nebulae } = Route.useLoaderData();
  const lucida = STAR_BY_SLUG[constellation.brightest];
  const hemisphere =
    constellation.hemisphere === "N"
      ? "Northern"
      : constellation.hemisphere === "S"
        ? "Southern"
        : "Equatorial";

  return (
    <>
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <Link
          to="/constellations"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg"
        >
          <ArrowLeft className="size-4" />
          All constellations
        </Link>
        <p className="mt-8 font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
          {constellation.abbreviation} · {constellation.genitive} · {constellation.family} ·{" "}
          {hemisphere}
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight md:text-6xl">
          {constellation.name}
        </h1>
        <p className="mt-2 text-lg text-muted">{constellation.meaning}</p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
          {constellation.lore}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/atlas"
            search={{ constellation: constellation.slug }}
            className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg"
          >
            Filter the atlas
            <ArrowRight className="size-3.5" />
          </Link>
          {lucida ? (
            <Link
              to="/star/$slug"
              params={{ slug: lucida.slug }}
              className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg"
            >
              Lucida: {lucida.name}
              <ArrowRight className="size-3.5" />
            </Link>
          ) : null}
        </div>

        <div className="mt-10">
          <ConstellationFigure
            slug={constellation.slug}
            stars={stars}
            lucida={constellation.brightest}
          />
        </div>

        <p className="mt-10 font-mono text-xs text-subtle">
          {stars.length} {stars.length === 1 ? "star" : "stars"} in this atlas
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {stars.map((star, i) => (
            <StarCard key={star.slug} star={star} index={i} />
          ))}
        </div>
        {stars.length === 0 ? (
          <p className="mt-8 text-muted">No catalog stars in this figure yet.</p>
        ) : null}

        {nebulae.length > 0 ? (
          <section className="mt-16">
            <h2 className="font-display text-2xl tracking-tight">Nebulae</h2>
            <p className="mt-2 text-sm text-muted">
              {nebulae.length} {nebulae.length === 1 ? "cloud" : "clouds"} in this figure
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {nebulae.map((n, i) => (
                <NebulaCard key={n.slug} nebula={n} index={i} />
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </>
  );
}
