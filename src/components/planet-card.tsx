import { Link } from "@tanstack/react-router";
import { Bookmark } from "lucide-react";
import { PlanetOrb } from "@/components/planet-orb";
import { formatAu, formatEarth, PLANET_KIND_LABEL } from "@/data/planet-catalog";
import type { Planet } from "@/data/types";
import { useFavorites } from "@/lib/favorites";
import { cn } from "@/lib/utils";

export function PlanetCard({ planet, index = 0 }: { planet: Planet; index?: number }) {
  const saved = useFavorites((s) => s.slugs.includes(`p:${planet.slug}`));
  const toggle = useFavorites((s) => s.toggle);

  return (
    <article
      className="group relative rounded-xl bg-bg-elevated/80 p-4 shadow-border transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-border-hover"
      style={{ animationDelay: `${Math.min(index, 12) * 40}ms` }}
    >
      <Link
        to="/planet/$slug"
        params={{ slug: planet.slug }}
        className="flex gap-4 text-fg"
      >
        <PlanetOrb palette={planet.palette} rings={planet.rings} size="lg" />
        <div className="min-w-0 flex-1 pr-10">
          <h3 className="font-display text-xl leading-snug tracking-tight text-fg">
            {planet.name}
          </h3>
          <p className="mt-0.5 truncate font-mono text-xs text-muted">
            {planet.designation}
          </p>
          <p className="mt-3 line-clamp-2 text-sm leading-normal text-muted">
            {planet.summary}
          </p>
          <dl className="mt-4 grid grid-cols-3 gap-2 font-mono text-[11px] tracking-wide text-subtle">
            <div>
              <dt className="uppercase">Orbit</dt>
              <dd className="mt-0.5 text-xs text-fg tabular">{formatAu(planet.au)}</dd>
            </div>
            <div>
              <dt className="uppercase">Radius</dt>
              <dd className="mt-0.5 text-xs text-fg tabular">
                {formatEarth(planet.radiusEarth, "R⊕")}
              </dd>
            </div>
            <div>
              <dt className="uppercase">Mass</dt>
              <dd className="mt-0.5 text-xs text-fg tabular">
                {formatEarth(planet.massEarth, "M⊕")}
              </dd>
            </div>
          </dl>
          <p className="mt-3 text-xs text-subtle">
            {PLANET_KIND_LABEL[planet.kind]} · {planet.hostName}
            {planet.moons > 0 ? ` · ${planet.moons} ${planet.moons === 1 ? "moon" : "moons"}` : ""}
          </p>
        </div>
      </Link>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggle(`p:${planet.slug}`);
        }}
        className={cn(
          "absolute top-3 right-3 grid size-11 place-items-center rounded-sm text-subtle transition-colors duration-150 hover:text-fg",
          saved && "text-accent",
        )}
        aria-label={saved ? `Remove ${planet.name} from observatory` : `Save ${planet.name}`}
      >
        <Bookmark className={cn("size-4", saved && "fill-current")} />
      </button>
    </article>
  );
}
