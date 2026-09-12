import { PLANET_BG } from "@/data/planets";
import type { Planet } from "@/data/types";
import { cn } from "@/lib/utils";

export function PlanetPortrait({ planet }: { planet: Planet }) {
  const v = `--color-planet-${planet.palette}`;
  const giant = planet.kind === "gas-giant" || planet.kind === "ice-giant" || planet.kind === "hot-jupiter";

  return (
    <div className="relative mx-auto grid aspect-square w-full max-w-md place-items-center">
      <span
        className="orb-breathe absolute inset-[12%] rounded-full opacity-50"
        style={{
          background: `radial-gradient(circle at 35% 32%, color-mix(in oklab, var(${v}) 55%, transparent) 0%, transparent 70%)`,
        }}
      />
      {planet.rings ? (
        <span
          className="absolute left-[4%] right-[4%] top-1/2 z-[2] h-[22%] -translate-y-1/2 rounded-full"
          style={{
            transform: "translateY(-50%) rotate(-22deg)",
            boxShadow: `inset 0 0 0 1px color-mix(in oklab, var(${v}) 0%, transparent), 0 0 0 10px color-mix(in oklab, var(${v}) 22%, transparent), 0 0 0 14px color-mix(in oklab, var(${v}) 10%, transparent)`,
          }}
        />
      ) : null}
      <span
        className={cn(
          "relative z-10 rounded-full",
          PLANET_BG[planet.palette],
          giant ? "size-[42%]" : "size-[34%]",
        )}
        style={{
          backgroundImage:
            planet.palette === "earth"
              ? `radial-gradient(circle at 32% 28%, color-mix(in oklab, var(${v}) 70%, white) 0%, var(${v}) 42%, color-mix(in oklab, var(--color-planet-ocean) 80%, #1a3a28) 100%)`
              : giant
                ? `linear-gradient(180deg, color-mix(in oklab, var(${v}) 70%, white) 0%, var(${v}) 38%, color-mix(in oklab, var(${v}) 80%, black) 62%, var(${v}) 100%)`
                : `radial-gradient(circle at 32% 28%, color-mix(in oklab, var(${v}) 80%, white) 0%, var(${v}) 55%, color-mix(in oklab, var(${v}) 70%, black) 100%)`,
          boxShadow: `inset -18px -12px 28px rgb(0 0 0 / 0.35), 0 0 48px color-mix(in oklab, var(${v}) 40%, transparent)`,
        }}
      />
    </div>
  );
}
