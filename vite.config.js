import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { seo } from "./src/data/site.js";

const escapeHtml = value => value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), {
    name: "portfolio-metadata",
    transformIndexHtml(html) {
      return html.replace(/<title>.*?<\/title>/, `<title>${escapeHtml(seo.titulo)}</title>`)
        .replace(/(<meta\s+name="description"\s+content=")[^"]*("\s*\/?>)/, (_, start, end) => `${start}${escapeHtml(seo.descripcion)}${end}`);
    },
  }],
});
