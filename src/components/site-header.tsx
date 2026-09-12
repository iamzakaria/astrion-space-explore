import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/atlas", label: "Atlas" },
  { to: "/planets", label: "Planets" },
  { to: "/moons", label: "Moons" },
  { to: "/nebulae", label: "Nebulae" },
  { to: "/sky", label: "Sky" },
  { to: "/classes", label: "Classes" },
  { to: "/constellations", label: "Constellations" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2.5 text-fg"
          onClick={() => setOpen(false)}
        >
          <span className="grid size-8 place-items-center rounded-sm bg-bg-elevated shadow-[var(--shadow-border)]">
            <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
              <path
                fill="currentColor"
                d="M8 1.2 8.9 6.2 14 8 8.9 9.8 8 14.8 7.1 9.8 2 8 7.1 6.2Z"
              />
            </svg>
          </span>
          <span className="font-display text-xl tracking-tight">Astrion</span>
        </Link>

        <nav className="hidden items-center gap-0.5 overflow-x-auto md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="shrink-0 rounded-sm px-2 py-2 text-sm text-muted transition-colors duration-150 hover:text-fg"
              activeProps={{ className: "text-fg" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-border bg-bg/95 transition-[max-height,opacity] duration-200 ease-out",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col px-4 py-3" aria-label="Mobile">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center text-base text-muted"
              activeProps={{ className: "text-fg" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
