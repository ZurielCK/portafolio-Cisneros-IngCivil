import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";
import Logo from "./Logo.jsx";
import { navLinks, cvUrl } from "../../data/site.js";
import { useScrollSpy } from "../../hooks/useScrollSpy.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(navLinks.map((l) => l.id));

  // Bloquea el scroll del body cuando el menú móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={styles.navbar}>
      <nav className={`container ${styles.inner}`} aria-label="Principal">
        <a href="#inicio" className={styles.brand} onClick={close}>
          <Logo />
        </a>

        <ul
          id="nav-menu"
          className={`${styles.links} ${open ? styles.open : ""}`}
        >
          <li className={styles.mobileClose}>
            <button
              type="button"
              className={styles.iconBtn}
              onClick={close}
              aria-label="Cerrar menú"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </li>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={close}
                className={`${styles.link} ${
                  active === link.id ? styles.active : ""
                }`}
                aria-current={active === link.id ? "true" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className={styles.mobileCta}>
            <a
              className={styles.cv}
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
            >
              <Download size={18} strokeWidth={1.5} />
              CV / Descargar
            </a>
          </li>
        </ul>

        <a
          className={`${styles.cv} ${styles.cvDesktop}`}
          href={cvUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download size={18} strokeWidth={1.5} />
          CV / Descargar
        </a>

        <button
          type="button"
          className={`${styles.iconBtn} ${styles.hamburger}`}
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="nav-menu"
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </nav>

      {open && <div className={styles.backdrop} onClick={close} />}
    </header>
  );
}
