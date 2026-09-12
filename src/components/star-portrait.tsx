import { SPECTRAL_BG, spectralVar } from "@/data/catalog";
import type { Star } from "@/data/types";
import { cn } from "@/lib/utils";

export function StarPortrait({ star }: { star: Star }) {
  const v = spectralVar(star.spectralClass);
  const isCompact = star.kind === "white-dwarf" || star.kind === "neutron-star";
  const isGiant =
    star.kind === "giant" ||
    star.kind === "supergiant" ||
    star.kind === "hypergiant" ||
    star.kind === "bright-giant";

  return (
    <div className="relative mx-auto grid aspect-square w-full max-w-md place-items-center">
      <span
        className={cn("corona-spin absolute inset-[8%] rounded-full opacity-40", isCompact && "opacity-70")}
        style={{
          background: `conic-gradient(from 0deg, transparent, color-mix(in oklab, var(${v}) 35%, transparent), transparent 40%, color-mix(in oklab, var(${v}) 22%, transparent), transparent)`,
        }}
      />
      <span
        className="orb-breathe absolute inset-[18%] rounded-full"
        style={{
          background: `radial-gradient(circle at 35% 32%, color-mix(in oklab, var(${v}) 90%, white) 0%, var(${v}) 38%, color-mix(in oklab, var(${v}) 30%, transparent) 70%, transparent 78%)`,
        }}
      />
      <span
        className={cn(
          "relative z-10 rounded-full",
          SPECTRAL_BG[star.spectralClass],
          isCompact ? "size-[18%]" : isGiant ? "size-[34%]" : "size-[26%]",
        )}
        style={{
          boxShadow: `0 0 48px color-mix(in oklab, var(${v}) 70%, transparent)`,
        }}
      />
    </div>
  );
}
