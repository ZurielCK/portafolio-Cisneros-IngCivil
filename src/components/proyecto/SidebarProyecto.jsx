import { Link } from "react-router-dom";
import { ArrowLeft, Linkedin, Instagram, Mail } from "lucide-react";
import styles from "./SidebarProyecto.module.css";
import Logo from "../layout/Logo.jsx";
import PuenteWatermark from "./PuenteWatermark.jsx";
import { redes, contacto } from "../../data/site.js";

/** Secciones navegables del detalle (orden = orden en la página). */
export const secciones = [
  { id: "resumen", label: "Resumen" },
  { id: "proceso", label: "Proceso" },
  { id: "resultados", label: "Resultados" },
  { id: "galeria", label: "Galería" },
];

export default function SidebarProyecto({ activeId, onNavigate }) {
  const goTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    onNavigate?.();
  };

  return (
    <aside className={styles.sidebar}>
      <PuenteWatermark className={styles.watermark} />

      <div className={styles.top}>
        <Link to="/" className={styles.brand}>
          <Logo showText />
        </Link>

        <Link to="/#proyectos" className={styles.back}>
          <ArrowLeft size={18} strokeWidth={1.5} />
          Volver a proyectos
        </Link>
      </div>

      <nav className={styles.nav} aria-label="Secciones del proyecto">
        <p className={styles.navTitle}>Detalle del proyecto</p>
        <ul>
          {secciones.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={goTo(s.id)}
                className={`${styles.navLink} ${
                  activeId === s.id ? styles.active : ""
                }`}
                aria-current={activeId === s.id ? "true" : undefined}
              >
                <span className={styles.dot} aria-hidden="true" />
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.social}>
        <a
          href={redes.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={styles.socialBtn}
        >
          <Linkedin size={18} strokeWidth={1.5} />
        </a>
        <a
          href={redes.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className={styles.socialBtn}
        >
          <Instagram size={18} strokeWidth={1.5} />
        </a>
        <a
          href={`mailto:${contacto.email}`}
          aria-label="Enviar correo"
          className={styles.socialBtn}
        >
          <Mail size={18} strokeWidth={1.5} />
        </a>
      </div>
    </aside>
  );
}
