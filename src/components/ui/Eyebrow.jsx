import styles from "./Eyebrow.module.css";

/** Etiqueta pequeña en mayúsculas (caption / eyebrow). */
export default function Eyebrow({ children, onDark = false, className = "" }) {
  return (
    <span
      className={`${styles.eyebrow} ${onDark ? styles.onDark : ""} ${className}`}
    >
      {children}
    </span>
  );
}
