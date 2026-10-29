import type { ImageMetadata } from "astro";

import devtalles from "@assets/images/devtalles-logo.webp";
import cisco from "@assets/images/cisco-networking-academy-logo.webp";
import codigofacilito from "@assets/images/cdigofacilito-logo.webp";
import edteamlat from "@assets/images/edteamlat-logo.webp";
import udemy from "@assets/images/udemy-logo.webp";

export interface Course {
  title: string;
  issuer: string;
  date: string;
  url?: string;
  icon?: ImageMetadata;
}

// Datos de ejemplo (mock): reemplazar por cursos reales.
export const COURSES: Course[] = [
  {
    title: "Principios SOLID y Clean Code",
    issuer: "Dev/Talles",
    icon: devtalles,
    date: "Julio 2026",
    url: "https://cursos.devtalles.com/certificates/sqrc2zmyyh",
  },
  {
    title: "Nest: Desarrollo backend escalable con Node",
    issuer: "Dev/Talles",
    icon: devtalles,
    date: "Febrero 2026",
    url: "https://cursos.devtalles.com/certificates/nbr3k427q2",
  },
  {
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    icon: cisco,
    date: "Septiembre 2023",
    url: "https://www.credly.com/badges/e0f773fc-d32c-4943-a5e0-105c2cddbf41/public_url",
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    icon: cisco,
    date: "Septiembre 2023",
    url: "https://www.credly.com/badges/19675c35-dd08-4207-957f-f8165e1f7cb6/public_url",
  },
  {
    title: "Curso de CSS",
    issuer: "Código Facilito",
    icon: codigofacilito,
    date: "Junio 2022",
    url: "https://codigofacilito.com/certificates/43218",
  },
  {
    title: "Curso profesional de Python",
    issuer: "Código Facilito",
    icon: codigofacilito,
    date: "Junio 2022",
    url: "https://codigofacilito.com/certificates/42259",
  },
  {
    title: "Curso profesional de Bases de Datos",
    issuer: "Código Facilito",
    icon: codigofacilito,
    date: "Junio 2022",
    url: "https://codigofacilito.com/certificates/41706",
  },
  {
    title: "React desde cero (2021)",
    issuer: "EDteam",
    icon: edteamlat,
    date: "Marzo 2022",
    url: "https://ed.team/u/jonnathandamianespinozaerraez/curso/reactjs",
  },
  {
    title: "Universidad CSS 2021 - Aprende CSS desde Cero hasta Experto!",
    issuer: "Udemy",
    icon: udemy,
    date: "Diciembre 2021",
    url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-f5512190-afed-4310-a6f0-7e14d48f12d7.pdf",
  },
  {
    title: "[2021] Scrum Master Certificación",
    issuer: "Udemy",
    icon: udemy,
    date: "Diciembre 2021",
    url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-ba9da92b-d143-4fc4-ae65-df7ce3587a42.pdf",
  },
  {
    title: "HTML 5 desde cero Edición 2020",
    issuer: "Udemy",
    icon: udemy,
    date: "Abril 2021",
    url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-d6986cd6-765d-486c-89ac-cb561a9953e7.pdf",
  },

];

export const COURSES_VISIBLE = 6;
