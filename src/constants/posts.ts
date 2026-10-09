export interface PostSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
  code?: string;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: number;
  category: string;
  tags: string[];
  intro: string;
  sections: PostSection[];
  featured?: boolean;
}

// Datos de ejemplo (mock): reemplazar por artículos reales.
export const POSTS: Post[] = [
  {
    slug: "buenas-practicas-apis-rest",
    title: "Buenas prácticas para diseñar APIs REST",
    excerpt:
      "Convenciones de nombres, códigos de estado y versionado para APIs que envejecen bien.",
    date: "12 de septiembre de 2026",
    readingTime: 6,
    category: "Backend",
    tags: ["API", "REST", "Arquitectura"],
    featured: true,
    intro:
      "Artículo de ejemplo. Una buena API se nota cuando otro equipo puede usarla sin leer el código.",
    sections: [
      {
        heading: "Nombra recursos, no acciones",
        paragraphs: [
          "Usa sustantivos en plural para los recursos y deja que el verbo HTTP exprese la acción.",
        ],
        list: ["GET /creditos", "POST /creditos", "GET /creditos/42"],
      },
      {
        heading: "Responde con códigos de estado claros",
        paragraphs: [
          "Un 201 al crear, un 404 cuando no existe y un 422 para errores de validación evitan ambigüedades.",
        ],
        code: "HTTP/1.1 422 Unprocessable Entity\n{ \"error\": \"monto inválido\" }",
      },
      {
        heading: "Versiona desde el inicio",
        paragraphs: [
          "Incluir la versión en la ruta o en una cabecera te permite evolucionar sin romper a nadie.",
        ],
      },
    ],
  },
  {
    slug: "docker-para-desarrollo-local",
    title: "Docker para un entorno de desarrollo reproducible",
    excerpt:
      "Cómo levantar base de datos, API y frontend con un solo comando.",
    date: "28 de agosto de 2026",
    readingTime: 5,
    category: "DevOps",
    tags: ["Docker", "Entorno", "Productividad"],
    intro:
      "Artículo de ejemplo sobre contenedores para el entorno local del equipo.",
    sections: [
      {
        heading: "Un compose por proyecto",
        paragraphs: [
          "Define los servicios en un archivo y comparte el mismo entorno con todo el equipo.",
        ],
        code: "docker compose up -d",
      },
      {
        heading: "Datos persistentes",
        paragraphs: ["Usa volúmenes para que la base de datos sobreviva a los reinicios."],
      },
    ],
  },
  {
    slug: "astro-y-tailwind-para-portafolios",
    title: "Astro y Tailwind para un portafolio rápido",
    excerpt: "Por qué un sitio estático cubre casi todo lo que necesita un portafolio.",
    date: "10 de agosto de 2026",
    readingTime: 4,
    category: "Frontend",
    tags: ["Astro", "Tailwind", "Rendimiento"],
    intro: "Artículo de ejemplo sobre las decisiones técnicas de este sitio.",
    sections: [
      {
        heading: "HTML primero",
        paragraphs: [
          "Astro envía HTML sin JavaScript por defecto, lo que mejora la carga y el SEO.",
        ],
      },
      {
        heading: "Tokens de diseño",
        paragraphs: [
          "Definir los colores como variables facilita ofrecer modo claro y oscuro con una sola paleta.",
        ],
      },
    ],
  },
  {
    slug: "consultas-sql-lentas",
    title: "Cómo encontrar y arreglar consultas SQL lentas",
    excerpt: "Planes de ejecución, índices y errores comunes en SQL Server.",
    date: "22 de julio de 2026",
    readingTime: 7,
    category: "Bases de datos",
    tags: ["SQL Server", "Índices", "Rendimiento"],
    intro: "Artículo de ejemplo sobre diagnóstico de consultas.",
    sections: [
      {
        heading: "Empieza por el plan de ejecución",
        paragraphs: ["Identifica los escaneos completos de tabla antes de tocar nada."],
      },
      {
        heading: "Índices con criterio",
        paragraphs: ["Cada índice acelera lecturas pero encarece las escrituras."],
      },
    ],
  },
];

export const getPost = (slug: string): Post | undefined =>
  POSTS.find((post) => post.slug === slug);
