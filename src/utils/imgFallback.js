/**
 * Placeholder global de imágenes.
 *
 * Mientras el usuario no coloque las imágenes reales en /public/img/, cualquier
 * <img> que falle al cargar se sustituye por un SVG generado (con las mismas
 * proporciones y un rótulo) en lugar de mostrar el ícono de imagen rota.
 * Cuando existan los archivos reales, este listener nunca se dispara.
 *
 * Se escucha en fase de captura porque el evento `error` de <img> no se propaga.
 */
const PLACED = "data-ph"; // evita bucles si el propio placeholder fallara

function svgPlaceholder(w, h, label) {
  const texto = (label || "Imagen").slice(0, 40);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="100%" height="100%" fill="#F4F6F9"/>
  <rect x="1" y="1" width="${w - 2}" height="${h - 2}" fill="none" stroke="#E5E7EB" stroke-width="2"/>
  <g fill="none" stroke="#9AA6B8" stroke-width="${Math.max(w, h) / 90}" stroke-linecap="round" stroke-linejoin="round" opacity="0.9">
    <line x1="${w * 0.5}" y1="${h * 0.62}" x2="${w * 0.5}" y2="${h * 0.3}"/>
    <path d="M${w * 0.2} ${h * 0.5} Q${w * 0.5} ${h * 0.28} ${w * 0.8} ${h * 0.5}"/>
    <line x1="${w * 0.2} " y1="${h * 0.62}" x2="${w * 0.8}" y2="${h * 0.62}"/>
  </g>
  <text x="50%" y="${h * 0.82}" text-anchor="middle" fill="#6B7280"
        font-family="Inter, Arial, sans-serif" font-size="${Math.round(Math.min(w, h) / 12)}" font-weight="600">${escapeXml(texto)}</text>
</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function escapeXml(s) {
  return s.replace(/[<>&"]/g, (c) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    '"': "&quot;",
  }[c]));
}

export function installImageFallback() {
  document.addEventListener(
    "error",
    (e) => {
      const el = e.target;
      if (!(el instanceof HTMLImageElement)) return;
      if (el.hasAttribute(PLACED)) return;
      el.setAttribute(PLACED, "");

      const w = el.getAttribute("width") || el.clientWidth || 400;
      const h = el.getAttribute("height") || el.clientHeight || 300;
      el.src = svgPlaceholder(Number(w), Number(h), el.alt);
    },
    true // captura
  );
}
