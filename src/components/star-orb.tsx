import { SPECTRAL_BG, spectralVar } from "@/data/catalog";
import type { SpectralClass } from "@/data/types";
import { cn } from "@/lib/utils";

interface StarOrbProps {
  spectral: SpectralClass;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  breathe?: boolean;
  className?: string;
}

const SIZE: Record<NonNullable<StarOrbProps["size"]>, string> = {
  sm: "size-3",
  md: "size-8",
  lg: "size-14",
  xl: "size-24",
  hero: "size-40 md:size-52",
};

export function StarOrb({
  spectral,
  size = "md",
  breathe = false,
  className,
}: StarOrbProps) {
  const v = spectralVar(spectral);
  return (
    <span
      className={cn("relative inline-grid place-items-center", SIZE[size], className)}
      aria-hidden="true"
    >
      <span
        className={cn(
          "absolute inset-[-40%] rounded-full opacity-50",
          breathe && "orb-breathe",
        )}
        style={{
          background: `radial-gradient(circle, color-mix(in oklab, var(${v}) 55%, transparent) 0%, transparent 70%)`,
        }}
      />
      <span
        className={cn("relative z-10 block size-[42%] rounded-full", SPECTRAL_BG[spectral])}
        style={{
          boxShadow: `0 0 18px color-mix(in oklab, var(${v}) 80%, transparent)`,
        }}
      />
    </span>
  );
}
