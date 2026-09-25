import { ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";
import Eyebrow from "../ui/Eyebrow.jsx";
import Button from "../ui/Button.jsx";
import ContactLinks from "../ui/ContactLinks.jsx";
import { nombre, inicio } from "../../data/site.js";
import { foto } from "../../data/imagenes.js";

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <Eyebrow onDark>{inicio.etiqueta}</Eyebrow>
          <h1 className={styles.title}>{inicio.titulo}</h1>
          <p className={styles.lead}>{inicio.descripcion}</p>
          <div className={styles.ctas}>
            <Button
              href="#trayectoria"
              variant="primary"
              onNavy
              icon={ArrowRight}
              iconRight
            >
              {inicio.trayectoria}
            </Button>
            <Button href="#proyectos" variant="secondary" onNavy>
              {inicio.proyectos}
            </Button>
          </div>
        </div>

        <div className={styles.visual}>
        <div className={styles.media}>
          <div className={styles.portrait}>
            <img
              src={foto(inicio.foto)}
              alt={`Retrato de ${nombre}`}
              width="640"
              height="800"
              loading="eager"
            />
          </div>
        </div>
        <ContactLinks />
        </div>
      </div>
    </section>
  );
}
