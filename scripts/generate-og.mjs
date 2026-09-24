/**
 * Gera public/og-default.png (1200×630), a imagem de preview dos links compartilhados.
 * Rode com: npm run og
 * Edite os textos abaixo e rode de novo quando quiser atualizar.
 */
import sharp from 'sharp';

const W = 1200;
const H = 630;

const TITLE = 'Jamínteles Desus';
const ROLE = 'Desenvolvedor Full-Stack';
const TAGLINE = ['Resolvo problemas reais de negócio —', 'inclusive fora da bolha do software.'];
const FOOT = 'Web  ·  Automação Civil 3D  ·  AutoLISP';

// Curvas de nível (mesma ideia do hero do site)
function ring(cx, cy, r, seed, i) {
  const n = 48;
  const pts = [];
  for (let k = 0; k < n; k++) {
    const a = (k / n) * Math.PI * 2;
    const w = 1 + (0.1 + i * 0.012) * Math.sin(3 * a + seed + i * 0.35) + 0.07 * Math.sin(5 * a - seed * 1.7 + i * 0.2);
    pts.push([cx + Math.cos(a) * r * w * 1.25, cy + Math.sin(a) * r * w * 0.85]);
  }
  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  for (let k = 0; k < n; k++) {
    const p0 = pts[(k - 1 + n) % n], p1 = pts[k], p2 = pts[(k + 1) % n], p3 = pts[(k + 2) % n];
    d += `C${(p1[0] + (p2[0] - p0[0]) / 6).toFixed(1)},${(p1[1] + (p2[1] - p0[1]) / 6).toFixed(1)} ${(p2[0] - (p3[0] - p1[0]) / 6).toFixed(1)},${(p2[1] - (p3[1] - p1[1]) / 6).toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d + 'Z';
}
const contours = Array.from({ length: 12 }, (_, i) => ring(1000, 170, 24 + i * 34, 1.3, i))
  .map((d, i) => `<path d="${d}" fill="none" stroke="#fb923c" stroke-opacity="${i % 5 === 1 ? 0.35 : 0.18}" stroke-width="${i % 5 === 1 ? 2 : 1.2}"/>`)
  .join('');

const grid = [];
for (let x = 0; x <= W; x += 40) grid.push(`<line x1="${x}" y1="0" x2="${x}" y2="${H}"/>`);
for (let y = 0; y <= H; y += 40) grid.push(`<line x1="0" y1="${y}" x2="${W}" y2="${y}"/>`);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#0f1113"/>
  <g stroke="#ecebe7" stroke-opacity="0.045" stroke-width="1">${grid.join('')}</g>
  ${contours}
  <rect x="0" y="0" width="12" height="${H}" fill="#fb923c"/>
  <g font-family="Segoe UI, Inter, Helvetica, Arial, sans-serif">
    <text x="80" y="120" font-family="Consolas, 'JetBrains Mono', monospace" font-size="22" letter-spacing="4" fill="#fb923c">// ${ROLE.toUpperCase()}</text>
    <text x="76" y="260" font-size="96" font-weight="700" fill="#ecebe7">${TITLE}<tspan fill="#fb923c">.</tspan></text>
    <text x="80" y="345" font-size="38" fill="#ecebe7">${TAGLINE[0]}</text>
    <text x="80" y="395" font-size="38" fill="#ecebe7">${TAGLINE[1]}</text>
    <line x1="80" y1="500" x2="1120" y2="500" stroke="#2c3136" stroke-width="2"/>
    <text x="80" y="550" font-family="Consolas, 'JetBrains Mono', monospace" font-size="24" fill="#a3a7ad">${FOOT}</text>
    <text x="1120" y="550" text-anchor="end" font-family="Consolas, 'JetBrains Mono', monospace" font-size="24" fill="#fb923c">github.com/Jaminteles</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/og-default.png');
console.log('✔ public/og-default.png gerado');
