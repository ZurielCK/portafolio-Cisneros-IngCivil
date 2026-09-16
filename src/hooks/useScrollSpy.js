import { useEffect, useState } from "react";

/**
 * Devuelve el id de la sección actualmente visible entre `ids`.
 * Usado por la navegación por anclas (navbar y sidebar) para resaltar
 * el enlace activo mientras se hace scroll.
 */
export function useScrollSpy(ids, { offset = 96 } = {}) {
  const [activeId, setActiveId] = useState(ids[0] ?? null);
  // Clave estable: evita re-ejecutar el efecto cuando el llamador pasa un
  // array nuevo con el mismo contenido en cada render.
  const key = ids.join("|");

  useEffect(() => {
    if (!ids.length) return;

    const handler = () => {
      const scrollY = window.scrollY + offset + 1;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      // Si estamos al final de la página, activa la última sección.
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 4
      ) {
        current = ids[ids.length - 1];
      }
      setActiveId(current);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, offset]);

  return activeId;
}
