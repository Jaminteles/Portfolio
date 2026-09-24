/**
 * Gera o SVG de curvas de nível usado como fundo decorativo.
 * É servido uma única vez em /contours.svg (ver src/pages/contours.svg.ts) e aplicado
 * via CSS mask-image, então a cor vem do tema e o arquivo fica em cache no navegador.
 */
type Hill = { cx: number; cy: number; rings: number; step: number; seed: number; sx: number; sy: number };

const HILLS: Hill[] = [
  { cx: 900, cy: 180, rings: 11, step: 34, seed: 1.3, sx: 1.25, sy: 0.85 },
  { cx: 1340, cy: 560, rings: 7, step: 30, seed: 4.1, sx: 1, sy: 1.1 },
  { cx: 260, cy: 640, rings: 6, step: 32, seed: 2.6, sx: 1.1, sy: 0.9 },
];

function ring(h: Hill, i: number): string {
  const n = 36;
  const base = 24 + i * h.step;
  const pts: [number, number][] = [];
  for (let k = 0; k < n; k++) {
    const a = (k / n) * Math.PI * 2;
    // Ruído suave e determinístico: curvas internas mais regulares, externas mais irregulares.
    const wobble =
      1 +
      (0.1 + i * 0.012) * Math.sin(3 * a + h.seed + i * 0.35) +
      0.07 * Math.sin(5 * a - h.seed * 1.7 + i * 0.2) +
      0.04 * Math.cos(7 * a + h.seed * 0.5);
    const r = base * wobble;
    pts.push([h.cx + Math.cos(a) * r * h.sx, h.cy + Math.sin(a) * r * h.sy]);
  }
  const f = (v: number) => Math.round(v);
  // Catmull-Rom fechado → Bézier cúbica
  let d = `M${f(pts[0][0])} ${f(pts[0][1])}`;
  for (let k = 0; k < n; k++) {
    const p0 = pts[(k - 1 + n) % n];
    const p1 = pts[k];
    const p2 = pts[(k + 1) % n];
    const p3 = pts[(k + 2) % n];
    d += `C${f(p1[0] + (p2[0] - p0[0]) / 6)} ${f(p1[1] + (p2[1] - p0[1]) / 6)} ${f(p2[0] - (p3[0] - p1[0]) / 6)} ${f(p2[1] - (p3[1] - p1[1]) / 6)} ${f(p2[0])} ${f(p2[1])}`;
  }
  return d + 'Z';
}

export function contoursSvg(baseElevation = 900): string {
  const thin: string[] = [];
  const master: string[] = [];
  const labels: string[] = [];

  for (const h of HILLS) {
    for (let i = 0; i < h.rings; i++) {
      const fromTop = h.rings - 1 - i;
      // Curvas "mestras" a cada 5, como em planta topográfica
      if (fromTop % 5 === 0) {
        master.push(ring(h, i));
        const x = Math.round(h.cx + (24 + i * h.step) * h.sx * 1.08);
        labels.push(`<text x="${x}" y="${h.cy + 4}">${baseElevation + fromTop * 5}</text>`);
      } else {
        thin.push(ring(h, i));
      }
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 800" preserveAspectRatio="xMidYMid slice">
<g fill="none" stroke="#000"><path stroke-width="0.9" d="${thin.join('')}"/><path stroke-width="1.6" d="${master.join('')}"/></g>
<g font-family="monospace" font-size="11" text-anchor="middle">${labels.join('')}</g>
</svg>`;
}
