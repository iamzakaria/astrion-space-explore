import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-shell";
import { SkyMap } from "@/components/sky-map";

export const Route = createFileRoute("/sky")({ component: SkyPage });

function SkyPage() {
  return (
    <>
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
          Chart
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">Sky</h1>
        <p className="mt-3 max-w-2xl text-muted">
          An equirectangular chart of the atlas. Right ascension runs right to left,
          as it does on the celestial sphere. Brightness is magnitude. Colour is spectral
          class. Soft patches are nebulae — click a cloud.
        </p>
        <div className="mt-8">
          <SkyMap />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
