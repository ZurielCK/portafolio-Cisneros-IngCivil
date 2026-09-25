import { Award, Users, GraduationCap } from "lucide-react";
import styles from "./MiHistoria.module.css";
import Eyebrow from "../ui/Eyebrow.jsx";
import PhotoCarousel from "../ui/PhotoCarousel.jsx";
import { historia } from "../../data/site.js";
import { trayectoria } from "../../data/imagenes.js";

const iconos = { award: Award, users: Users, graduation: GraduationCap };

export default function MiHistoria() {
  return (
    <section id="trayectoria" className={styles.section}>
      <PhotoCarousel images={trayectoria} label="Fotografías de trayectoria" background showControls={false}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <Eyebrow onDark>{historia.etiqueta}</Eyebrow>
          <h2 className={styles.title}>{historia.titulo}</h2>

          <div className={styles.copy}>
            {historia.parrafos.map((parrafo, index) => <p key={index}>{parrafo}</p>)}
          </div>

        </div>
          <ul className={styles.valores}>
            {historia.valores.map(({ icono, titulo, descripcion }) => {
              const Icon = iconos[icono] || Award;
              return (
              <li key={titulo} className={styles.valor}>
                <span className={styles.valorIcon}>
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className={styles.valorTitle}>{titulo}</h3>
                  <p className={styles.valorText}>{descripcion}</p>
                </div>
              </li>
            ); })}
          </ul>
      </div>
      </PhotoCarousel>
    </section>
  );
}
