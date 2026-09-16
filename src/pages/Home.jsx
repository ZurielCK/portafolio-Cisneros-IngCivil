import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import Hero from "../components/home/Hero.jsx";
import MiHistoria from "../components/home/MiHistoria.jsx";
import StatsBar from "../components/home/StatsBar.jsx";
import ProyectoCard from "../components/home/ProyectoCard.jsx";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import { proyectos } from "../data/proyectos.js";
import { useReveal } from "../hooks/useReveal.js";
import styles from "./Home.module.css";

export default function Home() {
  useReveal();

  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <MiHistoria />
        <StatsBar />

        <section id="proyectos" className={styles.proyectos}>
          <div className="container">
            <header className={styles.header}>
              <Eyebrow>Proyectos</Eyebrow>
              <h2 className={styles.title}>Proyectos destacados</h2>
              <p className={styles.subtitle}>
                Una selección de trabajos académicos y competencias en las que
                he participado.
              </p>
            </header>

            <div className={styles.list}>
              {proyectos.map((proyecto, i) => (
                <ProyectoCard
                  key={proyecto.slug}
                  proyecto={proyecto}
                  reverse={i % 2 === 1}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
