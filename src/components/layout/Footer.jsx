import ContactLinks from "../ui/ContactLinks.jsx";
import { Mail, Phone, MapPin } from "lucide-react";
import styles from "./Footer.module.css";
import Logo from "./Logo.jsx";
import {
  navLinks,
  contacto,
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
          <ContactLinks />
        </div>

        {/* Zona 3: contacto */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Contacto</h3>
          <ul className={styles.contactList}>
            {contacto.email && <li>
              <Mail size={18} strokeWidth={1.5} />
              <a href={`mailto:${contacto.email}`}>{contacto.email}</a>
            </li>}
            {contacto.telefono && <li>
              <Phone size={18} strokeWidth={1.5} />
              <a href={`tel:${contacto.telefono.replace(/\s+/g, "")}`}>
                {contacto.telefono}
              </a>
            </li>}
            {contacto.ubicacion && <li>
              <MapPin size={18} strokeWidth={1.5} />
              <span>{contacto.ubicacion}</span>
            </li>}
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
