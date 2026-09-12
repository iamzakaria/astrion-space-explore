import { PLANET_BG } from "@/data/planets";
import type { Moon } from "@/data/types";
import { cn } from "@/lib/utils";

export function MoonPortrait({ moon }: { moon: Moon }) {
  const v = `--color-planet-${moon.palette}`;
  const t = Math.log10(Math.max(moon.radiusKm, 6));
  const min = Math.log10(6);
  const max = Math.log10(2634);
  const pct = 16 + ((t - min) / (max - min)) * 28;

  return (
    <div className="relative mx-auto grid aspect-square w-full max-w-md place-items-center">
      <span
        className="orb-breathe absolute inset-[14%] rounded-full opacity-40"
        style={{
          background: `radial-gradient(circle at 35% 32%, color-mix(in oklab, var(${v}) 45%, transparent) 0%, transparent 70%)`,
        }}
      />
      <span
        className={cn("relative z-10 rounded-full", PLANET_BG[moon.palette])}
        style={{
          width: `${pct}%`,
          height: `${pct}%`,
          backgroundImage: `radial-gradient(circle at 32% 28%, color-mix(in oklab, var(${v}) 80%, white) 0%, var(${v}) 55%, color-mix(in oklab, var(${v}) 70%, black) 100%)`,
          boxShadow: `inset -18px -12px 28px rgb(0 0 0 / 0.35), 0 0 48px color-mix(in oklab, var(${v}) 40%, transparent)`,
        }}
      />
    </div>
  );
}
