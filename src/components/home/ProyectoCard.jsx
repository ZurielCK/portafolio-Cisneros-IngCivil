import { ArrowRight } from "lucide-react";
import styles from "./ProyectoCard.module.css";
import Button from "../ui/Button.jsx";
import PhotoCarousel from "../ui/PhotoCarousel.jsx";

/**
 * Tarjeta horizontal de proyecto destacado (Home).
 * `reverse` invierte imagen/texto para el patrón zigzag.
 */
export default function ProyectoCard({ proyecto, reverse = false }) {
  const { slug, tituloCorto, anio, resumenCard, imagenCard } = proyecto;

  return (
    <article className={`${styles.card} ${reverse ? styles.reverse : ""} reveal`}>
      <div className={styles.media}>
        {proyecto.imagenesCard ? <PhotoCarousel images={proyecto.imagenesCard} label={`Fotografías: ${tituloCorto}`} showControls={false} /> : <img
          src={imagenCard}
          alt={`Imagen del proyecto: ${tituloCorto}`}
          width="640"
          height="360"
          loading="lazy"
        />}
      </div>

      <div className={styles.body}>
        <span className={styles.badge}>{anio || proyecto.categoria}</span>
        <h3 className={styles.title}>{tituloCorto}</h3>
        <p className={styles.text}>{resumenCard}</p>
        <Button
          to={`/proyecto/${slug}`}
          variant="secondary"
          icon={ArrowRight}
          iconRight
          className={styles.cta}
        >
          Ver proyecto completo
        </Button>
      </div>
    </article>
  );
}
