import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { Starfield } from "@/components/starfield";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-bg text-fg">
      <Starfield />
      <div className="vignette pointer-events-none fixed inset-0 z-[1]" />
      <SiteHeader />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="flex flex-col gap-4 border-t border-border pt-8 text-sm text-subtle sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <p>Astrion — stars, worlds, moons, and the clouds that make them.</p>
          <p className="font-display text-base tracking-tight text-muted">
            Crafted with curiosity by Zakaria Shagor.
          </p>
        </div>
        <p className="sm:text-right">
          Distances in light-years. Orbits in astronomical units. Moons in kilometres.
        </p>
      </div>
    </footer>
  );
}

