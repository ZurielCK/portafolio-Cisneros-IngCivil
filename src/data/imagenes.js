const assets = import.meta.glob(["../../assets/*.jpeg", "!../../assets/WhatsApp*.jpeg"], { eager: true, query: "?url", import: "default" });
export const foto = nombre => assets[`../../assets/${nombre}.jpeg`];
export const trayectoria = Object.entries(assets)
  .filter(([path]) => /\/trayectoria(?: \(\d+\))?\.jpeg$/i.test(path))
  .sort(([a], [b]) => a.localeCompare(b, "es", { numeric: true }))
  .map(([, src]) => ({ src, alt: "Encuentro universitario de ingeniería civil" }));
export const deportivas = [
  { src: foto("deportivas (4)"), alt: "Reconocimiento de fútbol en el Instituto Tecnológico de Durango", position: "50% 58%" },
  { src: foto("deportivas"), alt: "Participación deportiva y trofeo en la cancha", position: "50% 48%" },
];
