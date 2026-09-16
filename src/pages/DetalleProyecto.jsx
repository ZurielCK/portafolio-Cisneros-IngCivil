import { useParams, Navigate } from "react-router-dom";
import styles from "./DetalleProyecto.module.css";
import { getProyecto } from "../data/proyectos.js";
import { useScrollSpy } from "../hooks/useScrollSpy.js";
import SidebarProyecto, {
  secciones,
} from "../components/proyecto/SidebarProyecto.jsx";
import ResumenProyecto from "../components/proyecto/ResumenProyecto.jsx";
import ProcesoTimeline from "../components/proyecto/ProcesoTimeline.jsx";
import Resultados from "../components/proyecto/Resultados.jsx";
import Galeria from "../components/proyecto/Galeria.jsx";

export default function DetalleProyecto() {
  const { slug } = useParams();
  const proyecto = getProyecto(slug);
  const activeId = useScrollSpy(secciones.map((s) => s.id));

  // Un slug inexistente redirige a la Home.
  if (!proyecto) return <Navigate to="/" replace />;

  return (
    <div className={styles.layout}>
      <SidebarProyecto activeId={activeId} />

      <main className={styles.content}>
        <div className={styles.inner}>
          <ResumenProyecto proyecto={proyecto} />
          <ProcesoTimeline
            proceso={proyecto.proceso}
            imagen={proyecto.imagenPrincipal}
            titulo={proyecto.titulo}
          />
          <Resultados resultados={proyecto.resultados} />
          <Galeria galeria={proyecto.galeria} />
        </div>
      </main>
    </div>
  );
}
