import { Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import styles from "./Footer.module.css";
import Logo from "./Logo.jsx";
import {
  navLinks,
  contacto,
  redes,
  lema,
  nombre,
} from "../../data/site.js";

export default function Footer() {
  return (
    <footer id="contacto" className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Zona 1: marca */}
        <div className={styles.brandCol}>
          <Logo />
        </div>

        {/* Zona 2: lema + redes */}
        <div className={styles.col}>
          <p className={styles.lema}>{lema}</p>
          <div className={styles.social}>
            <a
              href={redes.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={styles.socialBtn}
            >
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
            <a
              href={redes.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={styles.socialBtn}
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a
              href={`mailto:${contacto.email}`}
              aria-label="Enviar correo"
              className={styles.socialBtn}
            >
              <Mail size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Zona 3: contacto */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Contacto</h3>
          <ul className={styles.contactList}>
            <li>
              <Mail size={18} strokeWidth={1.5} />
              <a href={`mailto:${contacto.email}`}>{contacto.email}</a>
            </li>
            <li>
              <Phone size={18} strokeWidth={1.5} />
              <a href={`tel:${contacto.telefono.replace(/\s+/g, "")}`}>
                {contacto.telefono}
              </a>
            </li>
            <li>
              <MapPin size={18} strokeWidth={1.5} />
              <span>{contacto.ubicacion}</span>
            </li>
          </ul>
        </div>

        {/* Zona 4: enlaces */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Enlaces</h3>
          <ul className={styles.linkList}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {new Date().getFullYear()} {nombre}. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
