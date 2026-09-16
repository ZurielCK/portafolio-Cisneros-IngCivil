import { Check } from "lucide-react";
import styles from "./Resultados.module.css";
import Eyebrow from "../ui/Eyebrow.jsx";

export default function Resultados({ resultados }) {
  return (
    <section id="resultados" className={styles.section}>
      <Eyebrow>Resultados</Eyebrow>
      <h2 className={styles.title}>Resultados y aprendizajes</h2>
      <p className={styles.intro}>{resultados.intro}</p>

      <ul className={styles.list}>
        {resultados.logros.map((logro, i) => (
          <li key={i} className={styles.item}>
            <span className={styles.check}>
              <Check size={16} strokeWidth={2.5} />
            </span>
            <span>{logro}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
