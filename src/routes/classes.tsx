import { createFileRoute, Link } from "@tanstack/react-router";
import { HrDiagram } from "@/components/hr-diagram";
import { SiteFooter } from "@/components/site-shell";
import { StarOrb } from "@/components/star-orb";
import {
  KIND_INFO,
  SPECTRAL_CLASSES,
  SPECTRAL_TEXT,
  STAR_BY_SLUG,
  kindCount,
  spectralCount,
} from "@/data/catalog";

export const Route = createFileRoute("/classes")({ component: ClassesPage });

function ClassesPage() {
  return (
    <>
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
          Classification
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-tight md:text-5xl">
          How a star is named for what it is
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Spectral class is a temperature sequence — O B A F G K M — read from a
          star’s absorption lines. Luminosity class is a size sequence, from
          hypergiants to dwarfs. Together they pin a sun on the Hertzsprung–Russell diagram.
        </p>

        <div className="mt-12">
          <h2 className="font-display text-2xl tracking-tight">Hertzsprung–Russell</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Main sequence runs diagonally from hot luminous O stars to cool faint M
            dwarfs. Giants sit above it; white dwarfs below. Click any point.
          </p>
          <div className="mt-6">
            <HrDiagram />
          </div>
        </div>

        <div className="mt-16 space-y-6">
          <h2 className="font-display text-2xl tracking-tight">Spectral classes</h2>
          {SPECTRAL_CLASSES.map((s) => {
            const specimen = STAR_BY_SLUG[s.specimen];
            return (
              <article
                key={s.class}
                className="grid gap-4 rounded-xl bg-bg-elevated/80 p-5 shadow-[var(--shadow-border)] md:grid-cols-[auto_1fr_auto] md:items-center"
              >
                <StarOrb spectral={s.class} size="lg" />
                <div>
                  <h3 className={`font-display text-2xl ${SPECTRAL_TEXT[s.class]}`}>
                    {s.name}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                    {s.summary}
                  </p>
                  <p className="mt-2 font-mono text-xs text-subtle">
                    {s.tempRange} · {spectralCount(s.class)} in this atlas ·{" "}
                    <Link
                      to="/atlas"
                      search={{ spectral: s.class }}
                      className="text-muted hover:text-fg"
                    >
                      Filter
                    </Link>
                  </p>
                </div>
                {specimen ? (
                  <Link
                    to="/star/$slug"
                    params={{ slug: specimen.slug }}
                    className="text-sm text-muted hover:text-fg"
                  >
                    Specimen: {specimen.name}
                  </Link>
                ) : (
                  <Link
                    to="/atlas"
                    search={{ spectral: s.class }}
                    className="text-sm text-muted hover:text-fg"
                  >
                    Open in atlas
                  </Link>
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl tracking-tight">Evolutionary stages</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {KIND_INFO.map((k) => (
              <Link
                key={k.id}
                to="/atlas"
                search={{ kind: k.id }}
                className="rounded-xl bg-bg-elevated/80 p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
              >
                <h3 className="font-display text-xl tracking-tight">{k.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{k.summary}</p>
                <p className="mt-3 font-mono text-xs text-subtle">
                  {kindCount(k.id)} in this atlas
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
