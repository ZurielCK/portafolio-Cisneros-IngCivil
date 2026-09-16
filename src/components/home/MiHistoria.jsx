import { Award, Users, GraduationCap, Compass } from "lucide-react";
import styles from "./MiHistoria.module.css";
import Eyebrow from "../ui/Eyebrow.jsx";

const valores = [
  {
    icon: Award,
    titulo: "Competencias estatales",
    descripcion:
      "Representación universitaria en concursos de diseño e ingeniería a nivel estatal.",
  },
  {
    icon: Users,
    titulo: "Trabajo colaborativo",
    descripcion:
      "Experiencia coordinando equipos multidisciplinarios hacia un objetivo común.",
  },
  {
    icon: GraduationCap,
    titulo: "Aprendizaje continuo",
    descripcion:
      "Formación constante en normativas, software y buenas prácticas del sector.",
  },
  {
    icon: Compass,
    titulo: "Visión técnica",
    descripcion:
      "Enfoque analítico para traducir requerimientos en soluciones estructurales.",
  },
];

export default function MiHistoria() {
  return (
    <section id="trayectoria" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.media}>
          <div className={styles.photo}>
            <img
              src="/img/historia.jpg"
              alt="Andrés Martínez en actividad académica de ingeniería civil"
              width="480"
              height="600"
              loading="lazy"
            />
          </div>
        </div>

        <div className={styles.content}>
          <Eyebrow>Mi historia</Eyebrow>
          <h2 className={styles.title}>Ingeniería con propósito</h2>

          <div className={styles.copy}>
            <p>
              Desde el inicio de mi carrera entendí que la ingeniería civil es,
              ante todo, una herramienta para mejorar la vida de las personas.
              Esa convicción me ha llevado a buscar experiencias que combinen
              teoría, práctica y responsabilidad social.
            </p>
            <p>
              He participado en competencias académicas junto a estudiantes de
              distintas universidades, enfrentando retos reales de diseño
              estructural, análisis de costos y sostenibilidad bajo la presión
              de un jurado profesional.
            </p>
            <p>
              Cada proyecto me ha enseñado que los buenos resultados nacen de la
              disciplina, la comunicación clara y la disposición a seguir
              aprendiendo. Ese es el enfoque con el que asumo cada nuevo reto.
            </p>
          </div>

          <ul className={styles.valores}>
            {valores.map(({ icon: Icon, titulo, descripcion }) => (
              <li key={titulo} className={styles.valor}>
                <span className={styles.valorIcon}>
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className={styles.valorTitle}>{titulo}</h3>
                  <p className={styles.valorText}>{descripcion}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
