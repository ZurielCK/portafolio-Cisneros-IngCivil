import { useState } from "react";
import { Plus } from "lucide-react";
import styles from "./Galeria.module.css";
import Eyebrow from "../ui/Eyebrow.jsx";
import Lightbox from "./Lightbox.jsx";

const VISIBLES = 4;

export default function Galeria({ galeria = [] }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const visibles = galeria.slice(0, VISIBLES);
  const restantes = Math.max(galeria.length - VISIBLES, 0);

  const abrir = (i) => setLightboxIndex(i);
  const cerrar = () => setLightboxIndex(null);

  return (
    <section id="galeria" className={styles.section}>
      <Eyebrow>Galería</Eyebrow>
      <h2 className={styles.title}>Galería del proyecto</h2>

      <ul className={styles.grid}>
        {visibles.map((img, i) => (
          <li key={img.src} className={styles.cell}>
            <button
              type="button"
              className={styles.thumb}
              onClick={() => abrir(i)}
            >
              <img
                src={img.src}
                alt={img.caption || `Imagen ${i + 1} de la galería`}
                width="400"
                height="400"
                loading="lazy"
              />
              {img.caption && (
                <span className={styles.caption}>{img.caption}</span>
              )}
            </button>
          </li>
        ))}

        {restantes > 0 && (
          <li className={styles.cell}>
            <button
              type="button"
              className={styles.more}
              onClick={() => abrir(VISIBLES)}
              aria-label={`Ver ${restantes} imágenes más`}
            >
              <Plus size={26} strokeWidth={1.5} />
              <span className={styles.moreNum}>+{restantes}</span>
              <span className={styles.moreLabel}>Ver más</span>
            </button>
          </li>
        )}
      </ul>

      {lightboxIndex !== null && (
        <Lightbox
          imagenes={galeria}
          index={lightboxIndex}
          onIndexChange={setLightboxIndex}
          onClose={cerrar}
        />
      )}
    </section>
  );
}
