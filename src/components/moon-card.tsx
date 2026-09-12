import { Link } from "@tanstack/react-router";
import { Bookmark } from "lucide-react";
import { PlanetOrb } from "@/components/planet-orb";
import { formatKm, formatMoonPeriod, MOON_KIND_LABEL } from "@/data/moon-catalog";
import type { Moon } from "@/data/types";
import { useFavorites } from "@/lib/favorites";
import { cn } from "@/lib/utils";

export function MoonCard({ moon, index = 0 }: { moon: Moon; index?: number }) {
  const saved = useFavorites((s) => s.slugs.includes(`m:${moon.slug}`));
  const toggle = useFavorites((s) => s.toggle);

  return (
    <article
      className="group relative rounded-xl bg-bg-elevated/80 p-4 shadow-border transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-border-hover"
      style={{ animationDelay: `${Math.min(index, 12) * 40}ms` }}
    >
      <Link to="/moon/$slug" params={{ slug: moon.slug }} className="flex gap-4 text-fg">
        <PlanetOrb palette={moon.palette} size="lg" />
        <div className="min-w-0 flex-1 pr-10">
          <h3 className="font-display text-xl leading-snug tracking-tight text-fg">{moon.name}</h3>
          <p className="mt-0.5 truncate font-mono text-xs text-muted">{moon.designation}</p>
          <p className="mt-3 line-clamp-2 text-sm leading-normal text-muted">{moon.summary}</p>
          <dl className="mt-4 grid grid-cols-3 gap-2 font-mono text-[11px] tracking-wide text-subtle">
            <div>
              <dt className="uppercase">Orbit</dt>
              <dd className="mt-0.5 text-xs text-fg tabular">{formatKm(moon.semiMajorKm)}</dd>
            </div>
            <div>
              <dt className="uppercase">Radius</dt>
              <dd className="mt-0.5 text-xs text-fg tabular">{formatKm(moon.radiusKm)}</dd>
            </div>
            <div>
              <dt className="uppercase">Period</dt>
              <dd className="mt-0.5 text-xs text-fg tabular">{formatMoonPeriod(moon.periodDays)}</dd>
            </div>
          </dl>
          <p className="mt-3 text-xs text-subtle">
            {MOON_KIND_LABEL[moon.kind]} · {moon.planetName}
          </p>
        </div>
      </Link>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggle(`m:${moon.slug}`);
        }}
        className={cn(
          "absolute top-3 right-3 grid size-11 place-items-center rounded-sm text-subtle transition-colors duration-150 hover:text-fg",
          saved && "text-accent",
        )}
        aria-label={saved ? `Remove ${moon.name} from observatory` : `Save ${moon.name}`}
      >
        <Bookmark className={cn("size-4", saved && "fill-current")} />
      </button>
    </article>
  );
}
