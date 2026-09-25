import styles from "./Logo.module.css";
import { nombre, rol, iniciales } from "../../data/site.js";

/**
 * Marca "AM" en caja + nombre y rol.
 * `onDark` ajusta los colores para fondo navy (por defecto true, ya que
 * aparece en navbar, footer y sidebar, todos sobre navy).
 * `showText` permite ocultar el texto y dejar solo la caja.
 */
export default function Logo({ onDark = true, showText = true }) {
  return (
    <span className={`${styles.logo} ${onDark ? styles.onDark : ""}`}>
      <span className={styles.box} aria-hidden="true">
        {iniciales}
      </span>
      {showText && (
        <span className={styles.text}>
          <span className={styles.name}>{nombre}</span>
          <span className={styles.role}>{rol}</span>
        </span>
      )}
    </span>
  );
}
