import { foto, deportivas } from "./imagenes.js";

export const proyectos = [
  {
    slug: "concurso-puente-acero-nuevo-leon",
    titulo: "Concurso Puente de Acero – Nuevo León",
    // Usado en la tarjeta de Home:
    tituloCorto: "Competencia Estatal de Diseño de Puentes",
    anio: 2023,
    categoria: "Competencia Estudiantil",
    // Home (tarjeta):
    resumenCard:
      "Participé en la competencia organizada por el Colegio de Ingenieros Civiles del Estado, diseñando y validando un puente de acero optimizado en costo y desempeño estructural.",
    // Detalle (header):
    descripcion:
      "Competencia organizada por la Sociedad de Ingenieros Civiles de Nuevo León en la que equipos universitarios diseñan, modelan y defienden una estructura de puente sometida a criterios de carga, costo y sostenibilidad.",
    meta: {
      ubicacion: "Monterrey, Nuevo León",
      equipo: "5 integrantes",
      duracion: "3 meses",
    },
    proceso: [
      {
        titulo: "Investigación y análisis",
        descripcion:
          "Estudio de normativas, cargas y condiciones del sitio.",
      },
      {
        titulo: "Diseño conceptual",
        descripcion:
          "Desarrollo de alternativas estructurales y definición de criterios clave.",
      },
      {
        titulo: "Evaluación",
        descripcion:
          "Análisis estructural, comparación de costos y sostenibilidad.",
      },
      {
        titulo: "Prueba de carga",
        descripcion:
          "Verificación del desempeño de la estructura a través de simulaciones.",
      },
      {
        titulo: "Presentación final",
        descripcion:
          "Presentación técnica ante el jurado y defensa del diseño.",
      },
    ],
    resultados: {
      intro:
        "Este proyecto fortaleció nuestras habilidades técnicas y nuestro trabajo en equipo, integrando análisis estructural, criterios de costo y comunicación profesional ante un jurado.",
      logros: [
        "Diseñamos un puente optimizado que cumplió con los requerimientos técnicos y normativos.",
        "Aplicamos análisis estructural con software (SAP2000) para validar el comportamiento.",
        "Seleccionamos la alternativa más eficiente en costo y sostenibilidad.",
        "Mejoramos la coordinación del equipo y la comunicación técnica.",
        "Obtuvimos reconocimiento por la presentación y viabilidad de nuestra propuesta.",
      ],
    },
    galeria: ["puentes3", "Puentes", "puentes (2)", "puentes2", "puentes4", "puentes5"].map((nombre, i) => ({
      src: foto(nombre), caption: `Competencia de puentes · ${i + 1}`,
    })),
    imagenPrincipal: foto("puentes3"),
    imagenCard: foto("puentes3"),
  },

  {
    slug: "levantamiento-de-muros",
    titulo: "Levantamiento de muros",
    tituloCorto: "Levantamiento de muros",
    categoria: "Práctica constructiva",
    resumenCard: "Trabajo en equipo y práctica en campo durante el levantamiento de un muro de mampostería.",
    descripcion: "Una experiencia práctica de construcción de muros, desde la preparación del espacio hasta la colocación de bloques, con atención a la alineación y al trabajo en equipo.",
    meta: { equipo: "Trabajo colaborativo" },
    proceso: [
      { titulo: "Preparación", descripcion: "Organización del espacio, los materiales y las herramientas." },
      { titulo: "Levantamiento", descripcion: "Colocación de bloques y mortero para formar el muro." },
      { titulo: "Revisión", descripcion: "Atención a la alineación y al acabado de las juntas." },
    ],
    resultados: {
      intro: "La práctica conecta los conocimientos del aula con el trabajo constructivo en campo.",
      logros: ["Experiencia práctica con bloques y mortero.", "Coordinación de tareas durante el levantamiento del muro.", "Atención al orden y a la precisión en la ejecución."],
    },
    galeria: ["muros (2)", "muros", "muros (3)", "muros (4)", "muros (5)", "muros (6)"].map((nombre, i) => ({
      src: foto(nombre), caption: `Levantamiento de muros · ${i + 1}`,
    })),
    imagenPrincipal: foto("muros (2)"),
    imagenCard: foto("muros (2)"),
  },
  {
    slug: "deportiva",
    titulo: "Deportiva",
    tituloCorto: "Deportiva",
    categoria: "Deporte universitario",
    resumenCard: "El deporte también forma parte de mi trayectoria: disciplina, compañerismo y trabajo en equipo dentro y fuera de la cancha.",
    descripcion: "Momentos de participación deportiva, encuentros universitarios y experiencias compartidas con el equipo.",
    meta: { equipo: "Deporte en equipo" },
    proceso: [
      { titulo: "Preparación", descripcion: "Constancia y compromiso para afrontar cada encuentro." },
      { titulo: "Participación", descripcion: "Trabajo en equipo y convivencia en la cancha." },
      { titulo: "Experiencias compartidas", descripcion: "Recuerdos y reconocimientos que forman parte de mi etapa universitaria." },
    ],
    resultados: {
      intro: "El deporte es un espacio para desarrollar disciplina y fortalecer el compañerismo.",
      logros: ["Compromiso con el equipo.", "Perseverancia frente a nuevos retos.", "Convivencia con estudiantes de otras instituciones."],
    },
    galeria: ["deportivas (4)", "deportivas", "deportivas (2)", "deportivas (3)", "deportivas (5)", "deportivas (6)", "deportivas (7)"].map((nombre, i) => ({
      src: foto(nombre), caption: `Deportiva · ${i + 1}`,
    })),
    imagenPrincipal: foto("deportivas (4)"),
    imagenCard: foto("deportivas (4)"),
    imagenesCard: deportivas,
  },
];

export function getProyecto(slug) {
  return proyectos.find(p => p.slug === slug);
}
