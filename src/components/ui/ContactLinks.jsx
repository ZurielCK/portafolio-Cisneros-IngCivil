import { Linkedin, MessageCircle, Mail } from "lucide-react";
import { canalesContacto } from "../../data/site.js";
import styles from "./ContactLinks.module.css";

const iconos = { linkedin: Linkedin, whatsapp: MessageCircle, email: Mail };

export default function ContactLinks() {
  return (
    <div className={styles.links} role="group" aria-label="Contacto profesional">
      {canalesContacto.map(({ id, label, href }) => {
        const Icon = iconos[id];
        const titulo = href ? label : `${label}: pendiente de configurar`;
        return <span key={id} className={styles.item}>
          {href ? <a className={styles.icon} href={href}
            target={href.startsWith("https://") ? "_blank" : undefined}
            rel={href.startsWith("https://") ? "noopener noreferrer" : undefined}
            aria-label={label} title={label}>
            <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
          </a> : <button type="button" className={styles.icon} aria-disabled="true" aria-label={titulo} title={titulo}>
            <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
          </button>}
          <span className={styles.tooltip} role="tooltip">{titulo}</span>
        </span>;
      })}
    </div>
  );
}
