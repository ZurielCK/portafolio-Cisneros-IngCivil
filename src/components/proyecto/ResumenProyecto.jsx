import { MapPin, Users, Clock } from "lucide-react";
import styles from "./ResumenProyecto.module.css";

export default function ResumenProyecto({ proyecto }) {
  const { titulo, anio, categoria, descripcion, meta } = proyecto;

  const metadatos = [
    { icon: MapPin, label: "Ubicación", valor: meta.ubicacion },
    { icon: Users, label: "Equipo", valor: meta.equipo },
    { icon: Clock, label: "Duración", valor: meta.duracion },
  ];

  return (
    <section id="resumen" className={styles.section}>
      <div className={styles.badges}>
        <span className={styles.year}>{anio}</span>
        <span className={styles.cat}>{categoria}</span>
      </div>

      <h1 className={styles.title}>{titulo}</h1>
      <p className={styles.desc}>{descripcion}</p>

      <dl className={styles.meta}>
        {metadatos.map(({ icon: Icon, label, valor }) => (
          <div key={label} className={styles.metaItem}>
            <span className={styles.metaIcon}>
              <Icon size={20} strokeWidth={1.5} />
            </span>
            <div>
              <dt className={styles.metaLabel}>{label}</dt>
              <dd className={styles.metaValue}>{valor}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}
