import { Link } from "react-router-dom";
import ContactLinks from "../ui/ContactLinks.jsx";
import { ArrowLeft } from "lucide-react";
import styles from "./SidebarProyecto.module.css";
import Logo from "../layout/Logo.jsx";
import PuenteWatermark from "./PuenteWatermark.jsx";


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

      <ContactLinks />
    </aside>
  );
}
