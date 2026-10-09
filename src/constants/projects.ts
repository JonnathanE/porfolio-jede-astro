import type { ImageMetadata } from "astro";

import type { TechId } from "@/constants/technologies";

import squirl from "@assets/images/projects/squirl.webp";
import work1 from "@assets/images/work-1.png";
import work2 from "@assets/images/work-2.png";
import work3 from "@assets/images/work-3.png";
import work4 from "@assets/images/work-4.png";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tag: string;
  category: string;
  tech: TechId[];
  cover: ImageMetadata;
  siteUrl?: string;
  repoUrl?: string;
  features: string[];
  body: string[];
}

// Datos de ejemplo (mock): reemplazar por proyectos reales.
export const PROJECTS: Project[] = [
  {
    slug: "squirl-expense-tracker",
    title: "Squirl Expense Tracker",
    summary:
      "Aplicación full stack para gestionar finanzas personales: cuentas, categorías, transacciones y transferencias.",
    date: "Mayo 2026",
    tag: "Personal",
    category: "Full Stack",
    tech: ["go", "react", "typescript", "postgresql", "tailwind", "docker"],
    cover: squirl,
    repoUrl: "https://github.com/JonnathanE/expense_tracker",
    features: [
      "Registro de ingresos y gastos con categorías personalizables",
      "Cuentas y transferencias entre cuentas con comisión",
      "Dashboard con balance, ingresos, gastos y gráfico de balance acumulado",
      "Autenticación con JWT, activación de cuenta y recuperación de contraseña por email",
      "Interfaz en español e inglés, con modo claro y oscuro",
      "API REST documentada con Swagger",
    ],
    body: [
      "Squirl es una aplicación para llevar el control de los gastos personales. El backend es una API REST en Go con chi y PostgreSQL (pgx), con autenticación JWT con refresh tokens y envío de correos con Resend.",
      "El frontend es una SPA en React 19 con TypeScript y Vite, que usa TanStack Router y Query, Tailwind CSS, shadcn/ui y Recharts para las gráficas. La base de datos se levanta con Docker Compose y el esquema se gestiona con migraciones SQL.",
      "El proyecto está en desarrollo y todavía no está desplegado en un servidor.",
    ],
  },
  // {
  //   slug: "gestor-de-creditos",
  //   title: "Gestor de créditos",
  //   summary:
  //     "Aplicación web de ejemplo para administrar solicitudes, cuotas y pagos de créditos.",
  //   date: "Agosto 2026",
  //   tag: "Fintech",
  //   category: "Full Stack",
  //   tech: ["django", "react", "sqlserver", "docker"],
  //   cover: work1,
  //   siteUrl: "https://example.com",
  //   repoUrl: "https://github.com/JonnathanE",
  //   features: [
  //     "Registro y seguimiento de solicitudes",
  //     "Cálculo de cuotas y calendario de pagos",
  //     "Panel con indicadores de cartera",
  //     "API REST documentada",
  //   ],
  //   body: [
  //     "Proyecto de ejemplo que muestra cómo se presenta un caso de estudio. Reemplaza este texto con el contexto real: quién lo pidió, qué problema resolvía y cuál fue tu rol.",
  //     "Aquí puedes explicar las decisiones técnicas más relevantes, los retos encontrados y el resultado final.",
  //   ],
  // },
  // {
  //   slug: "plataforma-lengua-de-senas",
  //   title: "Aprende Lengua de Señas",
  //   summary:
  //     "Aplicación educativa con lecciones interactivas y pruebas por nivel, inspirada en Duolingo.",
  //   date: "Septiembre 2022",
  //   tag: "Titulación",
  //   category: "Full Stack",
  //   tech: ["express", "mongodb", "react", "tailwind"],
  //   cover: work2,
  //   siteUrl: "https://example.com",
  //   features: [
  //     "Lecciones interactivas por nivel",
  //     "Seguimiento del progreso del usuario",
  //     "Diseño accesible",
  //   ],
  //   body: [
  //     "Proyecto de titulación de la carrera de Ingeniería en Sistemas. Esta descripción es un texto de ejemplo.",
  //     "Incluye análisis de requerimientos, diseño de interfaz, backend, base de datos NoSQL y despliegue.",
  //   ],
  // },
  // {
  //   slug: "intranet-corporativa",
  //   title: "Intranet corporativa",
  //   summary:
  //     "Intranet con WordPress y Elementor, plantillas reutilizables y funcionalidades a medida.",
  //   date: "Marzo 2025",
  //   tag: "Freelance",
  //   category: "WordPress",
  //   tech: ["wordpress", "elementor", "php", "css"],
  //   cover: work3,
  //   features: [
  //     "Plantillas basadas en diseños de Figma",
  //     "Componentes reutilizables",
  //     "Funcionalidades en PHP con Code Snippets",
  //   ],
  //   body: [
  //     "Caso de ejemplo para mostrar un proyecto sin repositorio público. Sustituye este contenido por el real.",
  //   ],
  // },
  // {
  //   slug: "pipeline-etl-datawarehouse",
  //   title: "Data Warehouse y ETL",
  //   summary:
  //     "Diseño de un Data Warehouse con procesos ETL y migraciones de datos críticas.",
  //   date: "2024",
  //   tag: "Datos",
  //   category: "Backend",
  //   tech: ["sqlserver", "ssis", "aws"],
  //   cover: work4,
  //   features: [
  //     "Modelo dimensional",
  //     "Procesos ETL programados",
  //     "Migraciones de datos controladas",
  //   ],
  //   body: [
  //     "Proyecto de ejemplo del área de datos. Reemplaza con el alcance y el impacto reales.",
  //   ],
  // },
];

export const getProject = (slug: string): Project | undefined =>
  PROJECTS.find((project) => project.slug === slug);
