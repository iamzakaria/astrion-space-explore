const SUP: Record<string, string> = {
  "0": "⁰",
  "1": "¹",
  "2": "²",
  "3": "³",
  "4": "⁴",
  "5": "⁵",
  "6": "⁶",
  "7": "⁷",
  "8": "⁸",
  "9": "⁹",
  "-": "⁻",
};

function toSup(n: number): string {
  return String(n)
    .split("")
    .map((ch) => SUP[ch] ?? ch)
    .join("");
}

export function formatSci(n: number | null, unit: string): string {
  if (n === null || Number.isNaN(n)) return "—";
  const abs = Math.abs(n);
  if (abs === 0) return `0 ${unit}`;
  if (abs >= 0.01 && abs < 10000) {
    const digits = abs >= 100 ? 3 : abs >= 10 ? 3 : 3;
    return `${Number(n.toPrecision(digits)).toString()} ${unit}`;
  }
  const exp = Math.floor(Math.log10(abs));
  const mant = n / 10 ** exp;
  return `${mant.toFixed(1)} × 10${toSup(exp)} ${unit}`;
}

export function formatLy(ly: number): string {
  if (ly <= 0) return "—";
  if (ly < 0.0001) return "8.3 light minutes";
  if (ly < 1) return `${(ly * 63241).toFixed(1)} AU`;
  if (ly < 10) return `${ly.toFixed(2)} ly`;
  if (ly < 100) return `${ly.toFixed(1)} ly`;
  return `${Math.round(ly).toLocaleString("en-US")} ly`;
}

export function formatTemp(k: number): string {
  return `${Math.round(k).toLocaleString("en-US")} K`;
}

export function formatMag(m: number): string {
  const sign = m > 0 ? "+" : "";
  return `${sign}${m.toFixed(2)}`;
}
