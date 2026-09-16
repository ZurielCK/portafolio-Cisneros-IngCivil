import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Al cambiar de ruta:
 * - Si la URL trae hash (#proyectos), hace scroll a ese elemento.
 * - Si no, sube al inicio de la página.
 * Necesario porque React Router no restaura el scroll ni salta a anclas
 * cuando se navega entre páginas distintas (p. ej. de detalle a /#proyectos).
 */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Espera al render del contenido destino antes de saltar.
      const id = hash.replace("#", "");
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
}
