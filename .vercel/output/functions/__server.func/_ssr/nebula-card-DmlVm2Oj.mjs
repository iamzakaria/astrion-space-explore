import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Bookmark } from "../_libs/lucide-react.mjs";
import { U as cn, p as formatLy } from "./catalog-N4vBopjS.mjs";
import { f as NEBULAE, g as NEBULA_KIND_LABEL } from "./router-krysFcP6.mjs";
import { t as useFavorites } from "./favorites-Bh8adyw5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nebula-card-DmlVm2Oj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function filterNebulae(filters) {
	const q = filters.q.trim().toLowerCase();
	let list = NEBULAE.filter((n) => {
		if (filters.kind && n.kind !== filters.kind) return false;
		if (filters.notable && !n.notable.includes(filters.notable)) return false;
		if (q) {
			if (![
				n.name,
				n.designation,
				n.constellationName,
				n.illuminatorName ?? "",
				n.summary,
				...n.facts
			].join(" ").toLowerCase().includes(q)) return false;
		}
		return true;
	});
	list = [...list].sort((a, b) => {
		switch (filters.sort) {
			case "name": return a.name.localeCompare(b.name);
			case "size": return (b.sizeLy ?? 0) - (a.sizeLy ?? 0);
			default: return a.distanceLy - b.distanceLy;
		}
	});
	return list;
}
function formatArcmin(arcmin) {
	if (arcmin >= 60) {
		const deg = arcmin / 60;
		return deg >= 10 ? `${Math.round(deg)}°` : `${deg.toFixed(1)}°`;
	}
	if (arcmin >= 1) return `${arcmin % 1 === 0 ? arcmin.toFixed(0) : arcmin.toFixed(1)}′`;
	return `${Math.round(arcmin * 60)}″`;
}
function formatSizeLy(ly) {
	if (ly == null) return "—";
	if (ly < 1) return `${ly.toFixed(1)} ly`;
	if (ly < 10) return `${ly.toFixed(1)} ly`;
	return `${Math.round(ly).toLocaleString()} ly`;
}
function hash(s) {
	let h = 2166136261;
	for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
	return h >>> 0;
}
function mulberry32(seed) {
	let a = seed || 1;
	return () => {
		a |= 0;
		a = a + 1831565813 | 0;
		let t = Math.imul(a ^ a >>> 15, 1 | a);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function rgba(hex, a) {
	const n = hex.replace("#", "");
	return `rgba(${parseInt(n.slice(0, 2), 16)}, ${parseInt(n.slice(2, 4), 16)}, ${parseInt(n.slice(4, 6), 16)}, ${a})`;
}
function seedScene(nebula, count) {
	const rng = mulberry32(hash(nebula.slug));
	const blobs = [];
	const filaments = [];
	const stars = [];
	const specks = [];
	const [c0, c1, c2] = nebula.colors;
	for (let i = 0; i < count; i++) blobs.push({
		x: .28 + rng() * .44 + (rng() - .5) * .2,
		y: .32 + rng() * .4 + (rng() - .5) * .18,
		rx: .08 + rng() * .28,
		ry: .05 + rng() * .2,
		rot: rng() * Math.PI * 2,
		c: i % 3 === 0 ? c0 : i % 3 === 1 ? c1 : c2,
		a: .12 + rng() * .28,
		s: .15 + rng() * .45,
		p: rng() * Math.PI * 2
	});
	const filCount = nebula.shape === "filaments" ? Math.round(count * 1.4) : nebula.shape === "pillars" ? 6 : 0;
	for (let i = 0; i < filCount; i++) filaments.push({
		x: .2 + rng() * .6,
		y: .2 + rng() * .6,
		len: .12 + rng() * .38,
		ang: rng() * Math.PI * 2,
		c: i % 2 === 0 ? c0 : c1,
		w: 1 + rng() * 2.4,
		p: rng() * Math.PI * 2
	});
	const starN = 18 + Math.round(rng() * 28);
	for (let i = 0; i < starN; i++) stars.push({
		x: rng(),
		y: rng(),
		r: rng() < .12 ? 1.4 : .5 + rng() * .7,
		a: .35 + rng() * .65,
		tw: rng() * Math.PI * 2
	});
	const speckN = 40 + Math.round(rng() * 50);
	for (let i = 0; i < speckN; i++) specks.push({
		x: .15 + rng() * .7,
		y: .15 + rng() * .7,
		r: .4 + rng() * 1.2,
		a: .04 + rng() * .1,
		p: rng() * Math.PI * 2
	});
	return {
		blobs,
		filaments,
		stars,
		specks,
		rng
	};
}
function NebulaPortrait({ nebula, variant = "card", className }) {
	const wrapRef = (0, import_react.useRef)(null);
	const canvasRef = (0, import_react.useRef)(null);
	const [live, setLive] = (0, import_react.useState)(variant === "hero");
	(0, import_react.useEffect)(() => {
		if (live) return;
		const wrap = wrapRef.current;
		if (!wrap) return;
		const io = new IntersectionObserver((entries) => {
			if (entries[0]?.isIntersecting) setLive(true);
		}, {
			rootMargin: "160px",
			threshold: .01
		});
		io.observe(wrap);
		return () => io.disconnect();
	}, [live]);
	(0, import_react.useEffect)(() => {
		if (!live) return;
		const canvas = canvasRef.current;
		const wrap = wrapRef.current;
		if (!canvas || !wrap) return;
		const ctx = canvas.getContext("2d", { alpha: true });
		if (!ctx) return;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const scene = seedScene(nebula, variant === "hero" ? 28 : variant === "card" ? 18 : 10);
		let raf = 0;
		let running = true;
		let visible = true;
		let t = 0;
		let w = 0;
		let h = 0;
		let dpr = 1;
		let frameN = 0;
		const skip = variant === "hero" ? 1 : variant === "card" ? 2 : 3;
		function resize() {
			dpr = Math.min(window.devicePixelRatio || 1, 2);
			w = wrap.clientWidth;
			h = wrap.clientHeight;
			canvas.width = Math.max(1, Math.floor(w * dpr));
			canvas.height = Math.max(1, Math.floor(h * dpr));
			canvas.style.width = `${w}px`;
			canvas.style.height = `${h}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		}
		function blob(b, time) {
			const drift = reduced ? 0 : Math.sin(time * 35e-5 * b.s + b.p);
			const x = (b.x + drift * .03) * w;
			const y = (b.y + Math.cos(time * 28e-5 * b.s + b.p) * .025) * h;
			const rx = b.rx * Math.min(w, h) * (1 + (reduced ? 0 : Math.sin(time * 4e-4 + b.p) * .08));
			const ry = b.ry * Math.min(w, h);
			ctx.save();
			ctx.translate(x, y);
			ctx.rotate(b.rot + (reduced ? 0 : time * 4e-5 * b.s));
			const g = ctx.createRadialGradient(0, 0, 0, 0, 0, Math.max(rx, ry));
			g.addColorStop(0, rgba(b.c, b.a));
			g.addColorStop(.45, rgba(b.c, b.a * .45));
			g.addColorStop(1, rgba(b.c, 0));
			ctx.fillStyle = g;
			ctx.beginPath();
			ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
			ctx.fill();
			ctx.restore();
		}
		function drawStructure(time) {
			const cx = w * .5;
			const cy = h * .48;
			const pulse = reduced ? 1 : 1 + Math.sin(time * 6e-4) * .04;
			const [c0, c1, c2] = nebula.colors;
			if (nebula.shape === "ring" || nebula.shape === "helix" || nebula.shape === "shell") {
				const r = Math.min(w, h) * (nebula.shape === "shell" ? .32 : .22) * pulse;
				ctx.save();
				ctx.translate(cx, cy);
				ctx.rotate(-.15);
				ctx.scale(1.15, nebula.shape === "helix" ? .78 : .92);
				const ring = ctx.createRadialGradient(0, 0, r * .45, 0, 0, r * 1.35);
				ring.addColorStop(0, "rgba(0,0,0,0)");
				ring.addColorStop(.42, "rgba(0,0,0,0)");
				ring.addColorStop(.62, rgba(c0, .55));
				ring.addColorStop(.78, rgba(c1, .35));
				ring.addColorStop(1, rgba(c2, 0));
				ctx.fillStyle = ring;
				ctx.beginPath();
				ctx.arc(0, 0, r * 1.35, 0, Math.PI * 2);
				ctx.fill();
				if (nebula.shape === "helix") {
					ctx.rotate(.6);
					ctx.scale(.86, .86);
					ctx.globalAlpha = .7;
					ctx.beginPath();
					ctx.arc(0, 0, r * 1.15, 0, Math.PI * 2);
					ctx.fill();
				}
				const core = ctx.createRadialGradient(0, 0, 0, 0, 0, r * .22);
				core.addColorStop(0, "rgba(255,255,255,0.9)");
				core.addColorStop(.4, rgba(c1, .5));
				core.addColorStop(1, "rgba(0,0,0,0)");
				ctx.fillStyle = core;
				ctx.beginPath();
				ctx.arc(0, 0, r * .22, 0, Math.PI * 2);
				ctx.fill();
				ctx.restore();
			}
			if (nebula.shape === "bipolar") {
				for (const side of [-1, 1]) {
					ctx.save();
					ctx.translate(cx + side * w * .12, cy);
					ctx.rotate(side * .35);
					const lobe = ctx.createRadialGradient(0, 0, 0, 0, 0, Math.min(w, h) * .32);
					lobe.addColorStop(0, rgba(c1, .45));
					lobe.addColorStop(.45, rgba(c0, .28));
					lobe.addColorStop(1, rgba(c0, 0));
					ctx.fillStyle = lobe;
					ctx.beginPath();
					ctx.ellipse(0, 0, Math.min(w, h) * .28, Math.min(w, h) * .16, 0, 0, Math.PI * 2);
					ctx.fill();
					ctx.restore();
				}
				const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, 16);
				core.addColorStop(0, "#fff");
				core.addColorStop(1, "rgba(0,0,0,0)");
				ctx.fillStyle = core;
				ctx.beginPath();
				ctx.arc(cx, cy, 16, 0, Math.PI * 2);
				ctx.fill();
			}
			if (nebula.shape === "pillars") for (let i = 0; i < 3; i++) {
				const px = w * (.38 + i * .1);
				const py = h * .72;
				const ph = h * (.28 + i * .06) * pulse;
				const pw = w * (.045 + i * .008);
				const g = ctx.createLinearGradient(px, py, px, py - ph);
				g.addColorStop(0, rgba(c2, .15));
				g.addColorStop(.4, rgba(c0, .5));
				g.addColorStop(1, rgba(c1, .05));
				ctx.fillStyle = g;
				ctx.beginPath();
				ctx.moveTo(px - pw, py);
				ctx.bezierCurveTo(px - pw * 1.4, py - ph * .5, px + pw * .2, py - ph * .75, px, py - ph);
				ctx.bezierCurveTo(px + pw, py - ph * .7, px + pw * 1.3, py - ph * .4, px + pw, py);
				ctx.closePath();
				ctx.fill();
			}
			if (nebula.shape === "silhouette") {
				ctx.globalCompositeOperation = "source-over";
				for (const b of scene.blobs.slice(0, 8)) {
					const x = b.x * w;
					const y = b.y * h;
					const g = ctx.createRadialGradient(x, y, 0, x, y, b.rx * Math.min(w, h) * 1.1);
					g.addColorStop(0, rgba(c0, .85));
					g.addColorStop(.6, rgba(c0, .4));
					g.addColorStop(1, rgba(c0, 0));
					ctx.fillStyle = g;
					ctx.beginPath();
					ctx.ellipse(x, y, b.rx * w * .55, b.ry * h * .9, b.rot, 0, Math.PI * 2);
					ctx.fill();
				}
				if (nebula.slug === "horsehead") {
					ctx.fillStyle = rgba(c0, .92);
					ctx.beginPath();
					const hx = w * .5;
					const hy = h * .52;
					ctx.moveTo(hx, hy + h * .22);
					ctx.bezierCurveTo(hx - w * .08, hy + h * .05, hx - w * .12, hy - h * .05, hx - w * .02, hy - h * .18);
					ctx.bezierCurveTo(hx + w * .02, hy - h * .28, hx + w * .1, hy - h * .18, hx + w * .06, hy - h * .04);
					ctx.bezierCurveTo(hx + w * .14, hy + h * .02, hx + w * .04, hy + h * .16, hx, hy + h * .22);
					ctx.fill();
				}
			}
		}
		function frame(now) {
			if (!running) return;
			t = now;
			frameN += 1;
			if (!reduced && frameN % skip !== 0) {
				if (visible) raf = requestAnimationFrame(frame);
				return;
			}
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			ctx.clearRect(0, 0, w, h);
			ctx.fillStyle = "#07070a";
			ctx.fillRect(0, 0, w, h);
			ctx.globalCompositeOperation = nebula.kind === "dark" ? "source-over" : "screen";
			for (const b of scene.blobs) blob(b, t);
			ctx.globalCompositeOperation = "screen";
			for (const f of scene.filaments) {
				const wob = reduced ? 0 : Math.sin(t * 5e-4 + f.p) * .12;
				const x = f.x * w;
				const y = f.y * h;
				const ang = f.ang + wob;
				const len = f.len * Math.min(w, h);
				ctx.strokeStyle = rgba(f.c, .45);
				ctx.lineWidth = f.w;
				ctx.lineCap = "round";
				ctx.beginPath();
				ctx.moveTo(x, y);
				ctx.quadraticCurveTo(x + Math.cos(ang + .6) * len * .5, y + Math.sin(ang + .6) * len * .5, x + Math.cos(ang) * len, y + Math.sin(ang) * len);
				ctx.stroke();
			}
			drawStructure(t);
			ctx.globalCompositeOperation = nebula.kind === "dark" ? "source-over" : "screen";
			const [dust] = nebula.colors;
			for (const s of scene.specks) {
				const dx = reduced ? 0 : Math.sin(t * 3e-4 + s.p) * 6;
				ctx.fillStyle = rgba(dust, s.a);
				ctx.beginPath();
				ctx.arc(s.x * w + dx, s.y * h, s.r, 0, Math.PI * 2);
				ctx.fill();
			}
			ctx.globalCompositeOperation = "source-over";
			for (const s of scene.stars) {
				const tw = reduced ? 1 : .55 + .45 * Math.sin(s.tw + t * .002);
				ctx.fillStyle = `rgba(236,236,241,${s.a * tw})`;
				ctx.beginPath();
				ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2);
				ctx.fill();
			}
			if (!reduced && visible) raf = requestAnimationFrame(frame);
		}
		const ro = new ResizeObserver(() => {
			resize();
			if (reduced) frame(0);
		});
		ro.observe(wrap);
		const io = new IntersectionObserver((entries) => {
			visible = entries[0]?.isIntersecting ?? true;
			if (visible && !reduced) {
				cancelAnimationFrame(raf);
				raf = requestAnimationFrame(frame);
			}
		}, { threshold: .05 });
		io.observe(wrap);
		resize();
		raf = requestAnimationFrame(frame);
		return () => {
			running = false;
			cancelAnimationFrame(raf);
			ro.disconnect();
			io.disconnect();
		};
	}, [
		nebula,
		variant,
		live
	]);
	const [c0, c1] = nebula.colors;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: wrapRef,
		className: cn("relative overflow-hidden bg-bg", variant === "hero" && "aspect-video w-full rounded-xl shadow-border", variant === "card" && "aspect-video w-full", variant === "thumb" && "aspect-square w-full rounded-md", className),
		style: { background: `radial-gradient(ellipse at 48% 46%, ${c0}66, ${c1}24, var(--color-bg) 72%)` },
		"aria-hidden": "true",
		children: live ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			className: "absolute inset-0 size-full"
		}) : null
	});
}
function NebulaCard({ nebula, index = 0 }) {
	const saved = useFavorites((s) => s.slugs.includes(`n:${nebula.slug}`));
	const toggle = useFavorites((s) => s.toggle);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group relative overflow-hidden rounded-xl bg-bg-elevated/80 shadow-border transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-border-hover",
		style: { animationDelay: `${Math.min(index, 12) * 40}ms` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/nebula/$slug",
			params: { slug: nebula.slug },
			className: "block text-fg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NebulaPortrait, {
				nebula,
				variant: "card"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4 pr-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl leading-snug tracking-tight",
						children: nebula.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 truncate font-mono text-xs text-muted",
						children: nebula.designation
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 line-clamp-2 text-sm leading-normal text-muted",
						children: nebula.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 grid grid-cols-3 gap-2 font-mono text-[11px] tracking-wide text-subtle",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "uppercase",
								children: "Distance"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-0.5 text-xs text-fg tabular",
								children: formatLy(nebula.distanceLy)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "uppercase",
								children: "Span"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-0.5 text-xs text-fg tabular",
								children: formatSizeLy(nebula.sizeLy)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "uppercase",
								children: "On sky"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-0.5 text-xs text-fg tabular",
								children: formatArcmin(nebula.angularArcmin)
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs text-subtle",
						children: [
							NEBULA_KIND_LABEL[nebula.kind],
							" · ",
							nebula.constellationName
						]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: (e) => {
				e.preventDefault();
				e.stopPropagation();
				toggle(`n:${nebula.slug}`);
			},
			className: cn("absolute top-3 right-3 grid size-11 place-items-center rounded-sm bg-bg/50 text-subtle transition-colors duration-150 hover:text-fg", saved && "text-accent"),
			"aria-label": saved ? `Remove ${nebula.name} from observatory` : `Save ${nebula.name}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: cn("size-4", saved && "fill-current") })
		})]
	});
}
//#endregion
export { formatSizeLy as a, formatArcmin as i, NebulaPortrait as n, filterNebulae as r, NebulaCard as t };
