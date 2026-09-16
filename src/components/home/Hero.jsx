import { ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";
import Eyebrow from "../ui/Eyebrow.jsx";
import Button from "../ui/Button.jsx";

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <Eyebrow onDark>Estudiante de Ingeniería Civil</Eyebrow>
          <h1 className={styles.title}>
            Estudiante de Ingeniería Civil con visión, disciplina y
            experiencia académica destacada.
          </h1>
          <p className={styles.lead}>
            Apasionado por la infraestructura y el diseño estructural. He
            representado a mi universidad en competencias estatales y
            proyectos académicos, combinando el rigor técnico con el trabajo
            en equipo para construir soluciones con propósito.
          </p>
          <div className={styles.ctas}>
            <Button
              href="#trayectoria"
              variant="primary"
              onNavy
              icon={ArrowRight}
              iconRight
            >
              Ver trayectoria
            </Button>
            <Button href="#proyectos" variant="secondary" onNavy>
              Explorar proyectos
            </Button>
          </div>
        </div>

        <div className={styles.media}>
          <div className={styles.portrait}>
            <img
              src="/img/retrato.jpg"
              alt="Retrato de Andrés Martínez"
              width="640"
              height="800"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
