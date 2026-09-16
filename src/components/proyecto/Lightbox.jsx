import { useEffect, useRef, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Lightbox.module.css";

/**
 * Lightbox simple y accesible: navegación con flechas del teclado, Esc para
 * cerrar, clic en el fondo para cerrar. Bloquea el scroll del body mientras
 * está abierto y devuelve el foco al cerrar.
 */
export default function Lightbox({ imagenes, index, onIndexChange, onClose }) {
  const closeRef = useRef(null);
  const total = imagenes.length;
  const img = imagenes[index];

  const prev = useCallback(
    () => onIndexChange((index - 1 + total) % total),
    [index, total, onIndexChange]
  );
  const next = useCallback(
    () => onIndexChange((index + 1) % total),
    [index, total, onIndexChange]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Galería de imágenes"
      onClick={onClose}
    >
      <button
        type="button"
        ref={closeRef}
        className={`${styles.iconBtn} ${styles.close}`}
        onClick={onClose}
        aria-label="Cerrar galería"
      >
        <X size={26} strokeWidth={1.5} />
      </button>

      {total > 1 && (
        <button
          type="button"
          className={`${styles.iconBtn} ${styles.nav} ${styles.prev}`}
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          aria-label="Imagen anterior"
        >
          <ChevronLeft size={30} strokeWidth={1.5} />
        </button>
      )}

      <figure className={styles.figure} onClick={(e) => e.stopPropagation()}>
        <img src={img.src} alt={img.caption || `Imagen ${index + 1}`} />
        <figcaption className={styles.caption}>
          <span>{img.caption}</span>
          <span className={styles.counter}>
            {index + 1} / {total}
          </span>
        </figcaption>
      </figure>

      {total > 1 && (
        <button
          type="button"
          className={`${styles.iconBtn} ${styles.nav} ${styles.next}`}
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          aria-label="Imagen siguiente"
        >
          <ChevronRight size={30} strokeWidth={1.5} />
        </button>
      )}
    </div>
  );
}
