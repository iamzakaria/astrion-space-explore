import { Link } from "@tanstack/react-router";
import { Bookmark } from "lucide-react";
import { NebulaPortrait } from "@/components/nebula-portrait";
import { formatArcmin, formatSizeLy, NEBULA_KIND_LABEL } from "@/data/nebula-catalog";
import { formatLy } from "@/data/catalog";
import type { Nebula } from "@/data/types";
import { useFavorites } from "@/lib/favorites";
import { cn } from "@/lib/utils";

export function NebulaCard({ nebula, index = 0 }: { nebula: Nebula; index?: number }) {
  const saved = useFavorites((s) => s.slugs.includes(`n:${nebula.slug}`));
  const toggle = useFavorites((s) => s.toggle);

  return (
    <article
      className="group relative overflow-hidden rounded-xl bg-bg-elevated/80 shadow-border transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-border-hover"
      style={{ animationDelay: `${Math.min(index, 12) * 40}ms` }}
    >
      <Link to="/nebula/$slug" params={{ slug: nebula.slug }} className="block text-fg">
        <NebulaPortrait nebula={nebula} variant="card" />
        <div className="p-4 pr-12">
          <h3 className="font-display text-xl leading-snug tracking-tight">{nebula.name}</h3>
          <p className="mt-0.5 truncate font-mono text-xs text-muted">{nebula.designation}</p>
          <p className="mt-3 line-clamp-2 text-sm leading-normal text-muted">{nebula.summary}</p>
          <dl className="mt-4 grid grid-cols-3 gap-2 font-mono text-[11px] tracking-wide text-subtle">
            <div>
              <dt className="uppercase">Distance</dt>
              <dd className="mt-0.5 text-xs text-fg tabular">{formatLy(nebula.distanceLy)}</dd>
            </div>
            <div>
              <dt className="uppercase">Span</dt>
              <dd className="mt-0.5 text-xs text-fg tabular">{formatSizeLy(nebula.sizeLy)}</dd>
            </div>
            <div>
              <dt className="uppercase">On sky</dt>
              <dd className="mt-0.5 text-xs text-fg tabular">{formatArcmin(nebula.angularArcmin)}</dd>
            </div>
          </dl>
          <p className="mt-3 text-xs text-subtle">
            {NEBULA_KIND_LABEL[nebula.kind]} · {nebula.constellationName}
          </p>
        </div>
      </Link>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggle(`n:${nebula.slug}`);
        }}
        className={cn(
          "absolute top-3 right-3 grid size-11 place-items-center rounded-sm bg-bg/50 text-subtle transition-colors duration-150 hover:text-fg",
          saved && "text-accent",
        )}
        aria-label={saved ? `Remove ${nebula.name} from observatory` : `Save ${nebula.name}`}
      >
        <Bookmark className={cn("size-4", saved && "fill-current")} />
      </button>
    </article>
  );
}
