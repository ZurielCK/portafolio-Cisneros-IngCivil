/** Configuración compartida del sitio: navegación, contacto y redes. */

export const nombre = "Jonathan Cisneros Avilez";
export const iniciales = nombre.trim().split(/\s+/).slice(0, 2).map(parte => parte[0]).join("");
export const rol = "Ingeniería Civil";
export const lema =
  "Construyendo conocimiento hoy, para transformar el mañana.";

/** Enlaces de navegación por ancla (navbar y footer). */
export const navLinks = [
  { id: "inicio", label: "Inicio" },
  { id: "proyectos", label: "Proyectos" },
  { id: "trayectoria", label: "Trayectoria" },
  { id: "contacto", label: "Contacto" },
];

export const contacto = {
  email: "", // Correo real del titular.
  telefono: "", // Teléfono visible, con código de país.
  whatsapp: "", // Número internacional, por ejemplo: 521234567890.
  ubicacion: "", // Ciudad, estado y país.
};

export const redes = {
  linkedin: "", // URL completa del perfil profesional.
  instagram: "", // Opcional.
};

export const cvUrl = "/cv.pdf";

export const inicio = {
  etiqueta: "Estudiante de Ingeniería Civil",
  titulo: nombre,
  descripcion: "Diseño estructural y práctica constructiva, con participación en competencias estatales de ingeniería y trabajo en equipos multidisciplinarios.",
  objetivo: "", // [PENDIENTE] Qué busca, por ejemplo: "Busco prácticas profesionales en estructuras".
  foto: "Landing",
  cv: "Descargar CV",
  proyectos: "Ver proyectos",
};

export const historia = {
  etiqueta: "Trayectoria",
  titulo: "Ingeniería con propósito",
  parrafos: [
    "La ingeniería civil es una forma de mejorar la vida de las personas. Mi trayectoria conecta teoría, práctica y responsabilidad social.",
    "Las competencias y el trabajo con otras universidades me han enseñado a afrontar cada reto con disciplina, criterio técnico y disposición a seguir aprendiendo.",
  ],
  valores: [
    { icono: "award", titulo: "Competencias estatales", descripcion: "Representación universitaria en concursos de diseño e ingeniería a nivel estatal." },
    { icono: "trophy", titulo: "Deporte universitario", descripcion: "3er lugar en fútbol rápido en un encuentro universitario: disciplina y trabajo en equipo fuera del aula." },
    { icono: "graduation", titulo: "Aprendizaje continuo", descripcion: "Formación constante en normativas, software y buenas prácticas del sector." },
  ],
};

export const seccionProyectos = {
  etiqueta: "Proyectos",
  titulo: "Proyectos destacados",
  descripcion: "Una selección de trabajos académicos y competencias en las que he participado.",
};

export const seo = {
  titulo: `${nombre} — ${rol}`,
  descripcion: `Portafolio de ${nombre}: ${rol}, trayectoria y proyectos destacados.`,
};

export const canalesContacto = [
  { id: "linkedin", label: "LinkedIn", href: redes.linkedin || null },
  { id: "whatsapp", label: "WhatsApp", href: contacto.whatsapp ? `https://wa.me/${contacto.whatsapp.replace(/\D/g, "")}` : null },
  { id: "email", label: "Correo", href: contacto.email ? `mailto:${contacto.email}` : null },
];
