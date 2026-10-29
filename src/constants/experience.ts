import type { TechId } from "@/constants/technologies";

// Tipado
export type WorkType =
  | "Jornada Completa"
  | "Medio Tiempo"
  | "Freelance"
  | "Profesional Independiente"
  | "Contrato Temporal"
  | "Prácticas"
  | "Formación"
  | "Temporal";

export type LocationType = "Remoto" | "Presencial" | "Híbrido";

export type MonthName =
  | "Enero"
  | "Febrero"
  | "Marzo"
  | "Abril"
  | "Mayo"
  | "Junio"
  | "Julio"
  | "Agosto"
  | "Septiembre"
  | "Octubre"
  | "Noviembre"
  | "Diciembre";

export interface Experience {
  startMonth: MonthName;
  startYear: number;
  endMonth: MonthName | null;
  endYear: number | null;
  currentlyWorking: boolean;
  title: string;
  company: string;
  location: string;
  workType: WorkType;
  locationType: LocationType;
  description: string;
  tech: TechId[];
}

// Data
export const EXPERIENCE: Experience[] = [
  {
    startMonth: "Agosto",
    startYear: 2022,
    endMonth: null,
    endYear: null,
    currentlyWorking: true,
    title: "Desarrollador Fullstack (Cartera365 – Sector financiero)",
    company: "Tecnofin Tecnología e Innovación S.A.S.",
    location: "Quito, Pichincha, Ecuador",
    workType: "Jornada Completa",
    locationType: "Remoto",
    description:
      "Desarrollo y optimización de CARTERA365, una aplicación web para la gestión de créditos, implementando APIs REST e interfaces de usuario con Django REST Framework y React.js. Optimización y administración de bases de datos SQL Server, automatización de procesos ETL con SSIS e implementación de un Data Warehouse para la integración y análisis de datos. Transformación de requerimientos en soluciones técnicas, entrega de nuevas funcionalidades y resolución de incidencias. Gestión de despliegues y mantenimiento en AWS. Colaboración en proyectos de FastLine con Spring Boot y Angular.",
    tech: [
      "django",
      "springboot",
      "react",
      "angular",
      "bootstrap",
      "sqlserver",
      "ssis",
      "awsLightsail",
      "docker",
    ],
  },
  {
    startMonth: "Enero",
    startYear: 2025,
    endMonth: "Marzo",
    endYear: 2025,
    currentlyWorking: false,
    title: "Desarrollador Web WordPress",
    company: "Fastline Cia.Ltda",
    location: "Quito, Pichincha, Ecuador",
    workType: "Freelance",
    locationType: "Remoto",
    description:
      "Desarrollé y personalicé una intranet corporativa con WordPress, creando plantillas y componentes reutilizables con Elementor a partir de diseños en Figma. Implementé funcionalidades personalizadas con PHP y Code Snippets, y configuré plugins para adaptar la plataforma a los requerimientos del cliente, mejorando la reutilización de componentes y la coherencia visual de la interfaz.",
    tech: ["wordpress", "elementor", "php", "javascript", "html", "css"],
  },
  {
    startMonth: "Septiembre",
    startYear: 2021,
    endMonth: "Septiembre",
    endYear: 2022,
    currentlyWorking: false,
    title: "Desarrollador Full Stack (Proyecto de Titulación)",
    company: "Universidad Nacional de Loja",
    location: "Loja, Loja, Ecuador",
    workType: "Formación",
    locationType: "Remoto",
    description:
      "Desarrollé una aplicación web educativa para la enseñanza de la Lengua de Señas Ecuatoriana, inspirada en Duolingo, con lecciones interactivas, evaluaciones por niveles y seguimiento del progreso del usuario. Implementé una solución integral utilizando React, Tailwind CSS, Express y MongoDB, abarcando el análisis de requerimientos, diseño de interfaz, desarrollo backend y despliegue. El proyecto fue presentado como trabajo de titulación para la carrera de Ingeniería en Sistemas, con enfoque en accesibilidad y aprendizaje interactivo.",
    tech: ["express", "mongodb", "react", "tailwind"],
  },
];
