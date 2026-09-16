/**
 * Datos estáticos del portafolio. Un objeto por proyecto.
 * Las imágenes son placeholders en /public/img/ (dimensiones indicadas en specs);
 * el usuario las reemplazará. Contenido marcado con [PENDIENTE] debe sustituirse.
 */
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
    galeria: [
      { src: "/img/puente-01.jpg", caption: "Trabajo en equipo" },
      { src: "/img/puente-02.jpg", caption: "Modelo estructural" },
      { src: "/img/puente-03.jpg", caption: "Presentación final" },
      { src: "/img/puente-04.jpg", caption: "Planos estructurales" },
      { src: "/img/puente-05.jpg", caption: "Prueba de carga" },
      { src: "/img/puente-06.jpg", caption: "Equipo y jurado" },
    ],
    imagenPrincipal: "/img/puente-hero.jpg",
    imagenCard: "/img/puente-card.jpg",
  },

  {
    slug: "pavimentacion-drenaje-urbano",
    titulo: "Pavimentación y Drenaje Urbano",
    tituloCorto: "Pavimentación y Drenaje Urbano",
    anio: 2023,
    categoria: "Proyecto Académico",
    resumenCard:
      "Proyecto académico de diseño de un tramo vial con su sistema de drenaje pluvial, integrando cálculo hidráulico, selección de materiales y criterios de durabilidad. [PENDIENTE: ajustar copy]",
    descripcion:
      "Desarrollo integral de un tramo de vialidad urbana y su infraestructura de drenaje pluvial, considerando el estudio del terreno, el diseño geométrico, la estructura del pavimento y el manejo de escurrimientos. [PENDIENTE: sustituir por descripción real]",
    meta: {
      ubicacion: "Monterrey, Nuevo León",
      equipo: "4 integrantes",
      duracion: "2 meses",
    },
    proceso: [
      {
        titulo: "Investigación y análisis",
        descripcion:
          "Estudio del terreno, tránsito y precipitaciones de la zona. [PENDIENTE]",
      },
      {
        titulo: "Diseño conceptual",
        descripcion:
          "Trazo geométrico de la vialidad y propuesta de secciones. [PENDIENTE]",
      },
      {
        titulo: "Evaluación",
        descripcion:
          "Cálculo estructural del pavimento y dimensionamiento del drenaje. [PENDIENTE]",
      },
      {
        titulo: "Prueba de carga",
        descripcion:
          "Verificación del comportamiento del pavimento ante cargas. [PENDIENTE]",
      },
      {
        titulo: "Presentación final",
        descripcion:
          "Entrega de planos, memoria de cálculo y presentación. [PENDIENTE]",
      },
    ],
    resultados: {
      intro:
        "El proyecto integró conocimientos de hidráulica, vías terrestres y materiales en una solución de infraestructura urbana. [PENDIENTE: sustituir intro]",
      logros: [
        "Diseñamos la estructura del pavimento conforme a la normativa aplicable. [PENDIENTE]",
        "Dimensionamos el sistema de drenaje pluvial del tramo. [PENDIENTE]",
        "Estimamos volúmenes de obra y un presupuesto preliminar. [PENDIENTE]",
        "Coordinamos el trabajo entre las distintas disciplinas del equipo. [PENDIENTE]",
        "Presentamos la memoria técnica y los planos finales. [PENDIENTE]",
      ],
    },
    galeria: [
      { src: "/img/pavimento-01.jpg", caption: "[PENDIENTE] Levantamiento" },
      { src: "/img/pavimento-02.jpg", caption: "[PENDIENTE] Trazo vial" },
      { src: "/img/pavimento-03.jpg", caption: "[PENDIENTE] Sección de pavimento" },
      { src: "/img/pavimento-04.jpg", caption: "[PENDIENTE] Red de drenaje" },
      { src: "/img/pavimento-05.jpg", caption: "[PENDIENTE] Planos finales" },
    ],
    imagenPrincipal: "/img/pavimento-hero.jpg",
    imagenCard: "/img/pavimento-card.jpg",
  },

  {
    slug: "expo-academica-ingenieria-civil",
    titulo: "Expo Académica de Ingeniería Civil",
    tituloCorto: "Expo Académica de Ingeniería Civil",
    anio: 2023,
    categoria: "Evento Académico",
    resumenCard:
      "Organización y participación en una exposición académica donde se presentaron proyectos de ingeniería civil ante estudiantes, docentes y profesionales del sector. [PENDIENTE: ajustar copy]",
    descripcion:
      "Evento académico dedicado a la difusión de proyectos estudiantiles de ingeniería civil, con presentación de prototipos, maquetas y memorias técnicas ante un público de universidades y profesionales invitados. [PENDIENTE: sustituir por descripción real]",
    meta: {
      ubicacion: "Monterrey, Nuevo León",
      equipo: "Comité de 8 integrantes",
      duracion: "1 mes",
    },
    proceso: [
      {
        titulo: "Investigación y análisis",
        descripcion:
          "Definición de temática, alcance y objetivos del evento. [PENDIENTE]",
      },
      {
        titulo: "Diseño conceptual",
        descripcion:
          "Planeación de stands, programa y logística general. [PENDIENTE]",
      },
      {
        titulo: "Evaluación",
        descripcion:
          "Curaduría de los proyectos participantes y criterios de selección. [PENDIENTE]",
      },
      {
        titulo: "Prueba de carga",
        descripcion:
          "Montaje, ensayos de presentación y ajustes previos. [PENDIENTE]",
      },
      {
        titulo: "Presentación final",
        descripcion:
          "Exposición ante el público y cierre del evento. [PENDIENTE]",
      },
    ],
    resultados: {
      intro:
        "La expo permitió difundir el trabajo académico y fortalecer la vinculación entre estudiantes, docentes y el sector profesional. [PENDIENTE: sustituir intro]",
      logros: [
        "Coordinamos la logística y el programa del evento. [PENDIENTE]",
        "Reunimos proyectos de varias universidades participantes. [PENDIENTE]",
        "Facilitamos la vinculación con profesionales del sector. [PENDIENTE]",
        "Desarrollamos material de difusión y señalética. [PENDIENTE]",
        "Recibimos retroalimentación para futuras ediciones. [PENDIENTE]",
      ],
    },
    galeria: [
      { src: "/img/expo-01.jpg", caption: "[PENDIENTE] Montaje de stands" },
      { src: "/img/expo-02.jpg", caption: "[PENDIENTE] Presentaciones" },
      { src: "/img/expo-03.jpg", caption: "[PENDIENTE] Asistentes" },
      { src: "/img/expo-04.jpg", caption: "[PENDIENTE] Proyectos expuestos" },
      { src: "/img/expo-05.jpg", caption: "[PENDIENTE] Clausura" },
    ],
    imagenPrincipal: "/img/expo-hero.jpg",
    imagenCard: "/img/expo-card.jpg",
  },
];

/** Devuelve un proyecto por su slug (o undefined si no existe). */
export function getProyecto(slug) {
  return proyectos.find((p) => p.slug === slug);
}
