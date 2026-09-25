import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import styles from "./PhotoCarousel.module.css";

export default function PhotoCarousel({ images, label, background = false, showControls = true, children }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const root = useRef(null);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(root.current);
    return () => { preference.removeEventListener("change", update); observer.disconnect(); };
  }, []);
  const playing = !paused && !reducedMotion;
  useEffect(() => {
    if (!playing || hovered || focused || !visible || images.length < 2) return;
    const timer = window.setInterval(() => setActive(i => (i + 1) % images.length), 5500);
    return () => window.clearInterval(timer);
  }, [playing, hovered, focused, visible, images.length]);
  const move = direction => setActive(i => (i + direction + images.length) % images.length);
  return (
    <div ref={root} className={`${styles.carousel} ${background ? styles.background : ""}`}
      role="region" aria-roledescription="carrusel" aria-label={label}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
      <div className={styles.images}>
        {images.map((photo, index) => <div key={photo.src}
          aria-hidden={index !== active}
          className={`${styles.slide} ${index === active ? styles.active : ""}`}>
          <img src={photo.src} alt={photo.alt}
            loading={index === 0 ? "eager" : "lazy"} className={styles.photo}
            style={{ objectPosition: photo.position || "center" }} />
        </div>)}
      </div>
      {background && <div className={styles.shade} />}
      {children && <div className={styles.content}>{children}</div>}
      {!showControls && !reducedMotion && images.length > 1 && <button type="button" className="sr-only" onClick={() => setPaused(value => !value)}>{paused ? "Reproducir carrusel" : "Pausar carrusel"}</button>}
      {showControls && images.length > 1 && <div className={styles.controls}>
        <button type="button" onClick={() => move(-1)} aria-label="Foto anterior" title="Foto anterior"><ChevronLeft size={18} /></button>
        <span className={styles.counter} aria-live={playing ? "off" : "polite"}>{String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
        <button type="button" onClick={() => move(1)} aria-label="Foto siguiente" title="Foto siguiente"><ChevronRight size={18} /></button>
        {!reducedMotion && <button type="button" onClick={() => setPaused(value => !value)} aria-label={paused ? "Reproducir carrusel" : "Pausar carrusel"} title={paused ? "Reproducir carrusel" : "Pausar carrusel"}>{paused ? <Play size={16} /> : <Pause size={16} />}</button>}
      </div>}
    </div>
  );
}
