import { Link } from "react-router-dom";
import styles from "./Button.module.css";

/**
 * Botón/enlace con variantes del design system.
 * - variant: "primary" | "secondary" | "tertiary"
 * - onNavy: adapta colores para fondo navy
 * - to: usa React Router Link | href: ancla o externo | onClick: botón
 */
export default function Button({
  children,
  variant = "primary",
  onNavy = false,
  to,
  href,
  onClick,
  icon: Icon,
  iconRight = false,
  className = "",
  ...rest
}) {
  const cls = [
    styles.btn,
    styles[variant],
    onNavy ? styles.onNavy : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {Icon && !iconRight && <Icon size={18} strokeWidth={1.5} />}
      <span>{children}</span>
      {Icon && iconRight && <Icon size={18} strokeWidth={1.5} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={cls} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
