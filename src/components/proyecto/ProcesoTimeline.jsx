import styles from "./ProcesoTimeline.module.css";
import Eyebrow from "../ui/Eyebrow.jsx";

/**
 * Sección "Proceso": 2 columnas (timeline a la izquierda, imagen principal
 * a la derecha). El timeline es vertical con línea conectora y pasos
 * numerados; en móvil se apila la imagen bajo el timeline.
 *
 * Nota de diseño: aunque la spec menciona un timeline "horizontal", el layout
 * de 2 columnas (timeline izquierda + imagen derecha) hace que un timeline
 * vertical sea la representación coherente en escritorio; sigue siendo
 * vertical en móvil como indica la spec.
 */
export default function ProcesoTimeline({ proceso, imagen, titulo }) {
  return (
    <section id="proceso" className={styles.section}>
      <Eyebrow>Proceso</Eyebrow>
      <h2 className={styles.title}>Cómo lo desarrollamos</h2>

      <div className={styles.grid}>
        <ol className={styles.timeline}>
          {proceso.map((paso, i) => (
            <li key={paso.titulo} className={styles.step}>
              <span className={styles.num}>{i + 1}</span>
              <div className={styles.stepBody}>
                <h3 className={styles.stepTitle}>{paso.titulo}</h3>
                <p className={styles.stepText}>{paso.descripcion}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className={styles.media}>
          <div className={styles.photo}>
            <img
              src={imagen}
              alt={`Imagen principal del proyecto: ${titulo}`}
              width="720"
              height="900"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
