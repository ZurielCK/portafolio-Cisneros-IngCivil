import { CalendarCheck, School, MapPin, FolderKanban } from "lucide-react";
import styles from "./StatsBar.module.css";

const stats = [
  {
    icon: CalendarCheck,
    valor: "8+",
    label: "Eventos académicos y competencias",
  },
  {
    icon: School,
    valor: "12+",
    label: "Universidades diferentes con colaboración",
  },
  { icon: MapPin, valor: "5", label: "Estados donde he competido" },
  {
    icon: FolderKanban,
    valor: "6+",
    label: "Proyectos académicos desarrollados",
  },
];

export default function StatsBar() {
  return (
    <section className={styles.wrap} aria-label="Métricas destacadas">
      <div className="container">
        <ul className={styles.bar}>
          {stats.map(({ icon: Icon, valor, label }) => (
            <li key={label} className={styles.stat}>
              <span className={styles.icon}>
                <Icon size={22} strokeWidth={1.5} />
              </span>
              <span className={styles.valor}>{valor}</span>
              <span className={styles.label}>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
