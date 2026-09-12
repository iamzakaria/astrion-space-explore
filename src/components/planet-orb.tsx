import { PLANET_BG } from "@/data/planets";
import type { PlanetPalette } from "@/data/types";
import { cn } from "@/lib/utils";

interface PlanetOrbProps {
  palette: PlanetPalette;
  rings?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const SIZE: Record<NonNullable<PlanetOrbProps["size"]>, string> = {
  sm: "size-3",
  md: "size-8",
  lg: "size-14",
  xl: "size-24",
};

export function PlanetOrb({
  palette,
  rings = false,
  size = "md",
  className,
}: PlanetOrbProps) {
  const v = `--color-planet-${palette}`;
  return (
    <span
      className={cn("relative inline-grid place-items-center", SIZE[size], className)}
      aria-hidden="true"
    >
      {rings ? (
        <span
          className="absolute inset-x-[-18%] top-1/2 h-[18%] -translate-y-1/2 rounded-full opacity-70"
          style={{
            boxShadow: `0 0 0 1px color-mix(in oklab, var(${v}) 55%, transparent)`,
            transform: "translateY(-50%) rotate(-18deg)",
          }}
        />
      ) : null}
      <span
        className={cn("relative z-10 block size-[58%] rounded-full", PLANET_BG[palette])}
        style={{
          boxShadow: `inset -4px -3px 8px rgb(0 0 0 / 0.35), 0 0 14px color-mix(in oklab, var(${v}) 45%, transparent)`,
        }}
      />
    </span>
  );
}
