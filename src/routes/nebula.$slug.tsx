import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Bookmark } from "lucide-react";
import { NebulaCard } from "@/components/nebula-card";
import { NebulaPortrait } from "@/components/nebula-portrait";
import { SiteFooter } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { CONSTELLATION_BY_SLUG, formatLy, getStar } from "@/data/catalog";
import {
  formatArcmin,
  formatSizeLy,
  getNebula,
  NEBULA_KIND_LABEL,
  NEBULA_TAG_LABEL,
  nebulaeInConstellation,
} from "@/data/nebula-catalog";
import { useFavorites } from "@/lib/favorites";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/nebula/$slug")({
  loader: ({ params }) => {
    const nebula = getNebula(params.slug);
    if (!nebula) throw notFound();
    const illuminator = nebula.illuminatorSlug ? getStar(nebula.illuminatorSlug) : undefined;
    const constellation = CONSTELLATION_BY_SLUG[nebula.constellation];
    const siblings = nebulaeInConstellation(nebula.constellation).filter(
      (n) => n.slug !== nebula.slug,
    );
    return { nebula, illuminator, constellation, siblings };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData ? `${loaderData.nebula.name} — Astrion` : "Astrion" }],
  }),
  component: NebulaPage,
});

function NebulaPage() {
  const { nebula, illuminator, constellation, siblings } = Route.useLoaderData();
  const saved = useFavorites((s) => s.slugs.includes(`n:${nebula.slug}`));
  const toggle = useFavorites((s) => s.toggle);

  return (
    <>
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/nebulae"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg"
          >
            <ArrowLeft className="size-4" />
            Nebulae
          </Link>
          <Button variant={saved ? "primary" : "secondary"} onClick={() => toggle(`n:${nebula.slug}`)}>
            <Bookmark className={cn("size-4", saved && "fill-current")} />
            {saved ? "Saved" : "Save"}
          </Button>
        </div>

        <p className="mt-8 font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
          {nebula.designation} · {NEBULA_KIND_LABEL[nebula.kind]}
        </p>
        <h1 className="mt-3 font-display text-5xl tracking-tight md:text-6xl">{nebula.name}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{nebula.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-bg-elevated px-3 py-1.5 text-xs text-muted shadow-border">
            {NEBULA_KIND_LABEL[nebula.kind]}
          </span>
          {nebula.notable.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-bg-elevated px-3 py-1.5 text-xs text-muted shadow-border"
            >
              {NEBULA_TAG_LABEL[tag]}
            </span>
          ))}
        </div>

        <div className="mt-10">
          <NebulaPortrait nebula={nebula} variant="hero" />
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-4">
          <Fact label="Distance" value={formatLy(nebula.distanceLy)} />
          <Fact label="Span" value={formatSizeLy(nebula.sizeLy)} />
          <Fact label="On sky" value={formatArcmin(nebula.angularArcmin)} />
          <Fact label="Found" value={nebula.discovered} />
        </dl>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <section>
            <h2 className="font-display text-2xl tracking-tight">Notes</h2>
            <ul className="mt-4 space-y-3">
              {nebula.facts.map((fact) => (
                <li key={fact} className="text-sm leading-relaxed text-muted">
                  {fact}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-display text-2xl tracking-tight">Place</h2>
            <dl className="mt-4 space-y-3 font-mono text-sm">
              <div className="flex justify-between gap-4 border-b border-border py-2">
                <dt className="text-subtle">Constellation</dt>
                <dd className="text-fg">
                  {constellation ? (
                    <Link
                      to="/constellations/$slug"
                      params={{ slug: constellation.slug }}
                      className="hover:underline"
                    >
                      {constellation.name}
                    </Link>
                  ) : (
                    nebula.constellationName
                  )}
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-border py-2">
                <dt className="text-subtle">Lit by</dt>
                <dd className="text-fg">
                  {illuminator ? (
                    <Link
                      to="/star/$slug"
                      params={{ slug: illuminator.slug }}
                      className="hover:underline"
                    >
                      {illuminator.name}
                    </Link>
                  ) : (
                    nebula.illuminatorName ?? "—"
                  )}
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-border py-2">
                <dt className="text-subtle">Class</dt>
                <dd className="text-fg">{NEBULA_KIND_LABEL[nebula.kind]}</dd>
              </div>
              <div className="flex justify-between gap-4 py-2">
                <dt className="text-subtle">Designation</dt>
                <dd className="text-right text-fg">{nebula.designation}</dd>
              </div>
            </dl>
          </section>
        </div>

        {siblings.length > 0 ? (
          <section className="mt-16">
            <h2 className="font-display text-2xl tracking-tight">
              Also in {nebula.constellationName}
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {siblings.slice(0, 4).map((n, i) => (
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

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-bg-elevated px-4 py-5">
      <dt className="font-mono text-[11px] tracking-[0.14em] text-subtle uppercase">{label}</dt>
      <dd className="mt-1 font-display text-2xl tracking-tight tabular">{value}</dd>
    </div>
  );
}
