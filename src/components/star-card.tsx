import { Link } from "@tanstack/react-router";
import { Bookmark } from "lucide-react";
import { StarOrb } from "@/components/star-orb";
import { formatLy, formatMag, KIND_LABEL, SPECTRAL_TEXT } from "@/data/catalog";
import type { Star } from "@/data/types";
import { useFavorites } from "@/lib/favorites";
import { cn } from "@/lib/utils";

export function StarCard({ star, index = 0 }: { star: Star; index?: number }) {
  const saved = useFavorites((s) => s.slugs.includes(star.slug));
  const toggle = useFavorites((s) => s.toggle);

  return (
    <article
      className="group relative rounded-xl bg-bg-elevated/80 p-4 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-border-hover)]"
      style={{ animationDelay: `${Math.min(index, 12) * 40}ms` }}
    >
      <Link
        to="/star/$slug"
        params={{ slug: star.slug }}
        className="flex gap-4 text-fg"
      >
        <StarOrb spectral={star.spectralClass} size="lg" />
        <div className="min-w-0 flex-1 pr-10">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-xl leading-snug tracking-tight text-fg">
              {star.name}
            </h3>
          </div>
          <p className="mt-0.5 truncate font-mono text-xs text-muted">
            {star.designation}
          </p>
          <p className="mt-3 line-clamp-2 text-sm leading-normal text-muted">
            {star.summary}
          </p>
          <dl className="mt-4 grid grid-cols-3 gap-2 font-mono text-[11px] tracking-wide text-subtle">
            <div>
              <dt className="uppercase">Type</dt>
              <dd className={cn("mt-0.5 text-xs", SPECTRAL_TEXT[star.spectralClass])}>
                {star.spectralType}
              </dd>
            </div>
            <div>
              <dt className="uppercase">Dist.</dt>
              <dd className="mt-0.5 text-xs text-fg tabular">{formatLy(star.distanceLy)}</dd>
            </div>
            <div>
              <dt className="uppercase">Mag</dt>
              <dd className="mt-0.5 text-xs text-fg tabular">{formatMag(star.apparentMag)}</dd>
            </div>
          </dl>
          <p className="mt-3 text-xs text-subtle">
            {KIND_LABEL[star.kind]}
            {star.constellationName ? ` · ${star.constellationName}` : ""}
          </p>
        </div>
      </Link>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggle(star.slug);
        }}
        className={cn(
          "absolute top-3 right-3 grid size-11 place-items-center rounded-sm text-subtle transition-colors duration-150 hover:text-fg",
          saved && "text-accent",
        )}
        aria-label={saved ? `Remove ${star.name} from observatory` : `Save ${star.name}`}
      >
        <Bookmark className={cn("size-4", saved && "fill-current")} />
      </button>
    </article>
  );
}
