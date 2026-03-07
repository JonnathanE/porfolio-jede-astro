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
  tech: string[];
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
      "Responsable del desarrollo y mantenimiento de la aplicación web CARTERA365, orientada a la gestión de créditos. Encargado de la creación de APIs REST y interfaces de usuario, integrando funcionalidades clave para la experiencia del cliente. Administración de bases de datos en SQL Server, incluyendo diseño, optimización y consultas avanzadas. Análisis de requerimientos y propuesta de soluciones técnicas eficientes alineadas con los objetivos del cliente. Supervisión de nuevas funcionalidades (features) y correcciones (fixes) implementadas en el proyecto. Gestión de despliegue, monitoreo y mantenimiento en servidores AWS. Además, participé en el diseño y construcción de un Data Warehouse (DW), implementando procesos ETL mediante SSIS y liderando migraciones de datos críticas para la operación del sistema.",
    tech: [
      "Django",
      "React.js",
      "Bootstrap",
      "SQL Server",
      "SSIS (ETL)",
      "AWS Lightsail",
      "Docker",
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
      "Participación en el desarrollo de una Intranet corporativa utilizando WordPress como CMS principal. Uso de Elementor como constructor de páginas para crear plantillas y componentes reutilizables basados en diseños provenientes de Figma, garantizando coherencia visual y funcionalidad. Evaluación, prueba y configuración de distintos plugins para cumplir con los requerimientos específicos del proyecto. Desarrollo de funcionalidades personalizadas mediante Code Snippets en PHP, adaptando la plataforma a necesidades particulares del cliente.",
    tech: ["WordPress", "Elementor", "PHP", "JavaScript", "HTML", "CSS"],
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
      "Desarrollo de una aplicación web educativa para la enseñanza de la Lengua de Señas Ecuatoriana, orientada a todo tipo de usuarios, inspirada en plataformas como Duolingo. La aplicación incluyó lecciones interactivas, pruebas por nivel, progreso del usuario y diseño accesible. Participé en todas las etapas del desarrollo: análisis de requerimientos, diseño de interfaz, implementación del backend, base de datos NoSQL y despliegue. El proyecto fue presentado como trabajo de titulación para la carrera de Ingeniería en Sistemas.",
    tech: ["Express.js", "MongoDB", "React.js", "Tailwind CSS"],
  },
];
