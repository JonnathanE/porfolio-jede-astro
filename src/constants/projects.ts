import type { ImageMetadata } from "astro";

import type { TechId } from "@/constants/technologies";

import barcode1 from "@assets/images/projects/01-barcode-generator.webp";
import barcode2 from "@assets/images/projects/02-barcode-generator.webp";
import barcode3 from "@assets/images/projects/03-barcode-generator.webp";
import barcode4 from "@assets/images/projects/04-barcode-generator.webp";
import squirl from "@assets/images/projects/squirl.webp";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tag: string;
  category: string;
  tech: TechId[];
  // La primera imagen es la portada de la tarjeta.
  images: [ImageMetadata, ...ImageMetadata[]];
  siteUrl?: string;
  repoUrl?: string;
  features: string[];
  body: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "generador-codigos-de-barras",
    title: "Generador de Códigos de Barras",
    summary:
      "Aplicación web para generar códigos de barras EAN-13 listos para imprenta, en PNG y EPS vectorial, de a uno o en lote desde Excel.",
    date: "Octubre 2026",
    tag: "Personal",
    category: "Full Stack",
    tech: ["python", "fastapi", "react", "typescript", "tailwind", "docker"],
    images: [barcode1, barcode2, barcode3, barcode4],
    siteUrl: "https://barcode-generator-vert.vercel.app/",
    repoUrl: "https://github.com/JonnathanE/barcode-generator",
    features: [
      "Generación individual con vista previa en vivo y descarga en PNG o EPS vectorial",
      "Cálculo o verificación automática del dígito de control EAN-13",
      "Opciones de escala física, altura de barras, DPI, colores y fondo transparente",
      "Advertencia de contraste para asegurar la lectura con escáneres",
      "Generación en lote desde Excel con validación fila por fila y descarga en ZIP",
      "EPS vectorial real con el texto convertido a contornos",
      "API REST documentada con Swagger, con límites de tamaño y de solicitudes",
    ],
    body: [
      "Herramienta para generar códigos de barras EAN-13 con calidad de imprenta. Usa el motor open source BWIPP (Barcode Writer in Pure PostScript) con Ghostscript, e incluye siempre la zona de silencio para que el código se pueda escanear aunque quede al ras de otros elementos.",
      "El backend es una API en Python 3.12 con FastAPI y Pydantic v2, que procesa todo en memoria y lee archivos Excel con openpyxl. El frontend es una SPA en React 19 con TypeScript y Vite, que usa shadcn/ui, Tailwind CSS, react-hook-form con zod y TanStack Query; los tipos del cliente se generan desde el OpenAPI del backend.",
      "Está desplegado en planes gratuitos: el frontend en Vercel y el backend en Render con Docker, con integración continua en GitHub Actions. Por eso la interfaz muestra el estado del servidor mientras despierta.",
    ],
  },
  {
    slug: "squirl-expense-tracker",
    title: "Squirl Expense Tracker",
    summary:
      "Aplicación full stack para gestionar finanzas personales: cuentas, categorías, transacciones y transferencias.",
    date: "Mayo 2026",
    tag: "Personal",
    category: "Full Stack",
    tech: ["go", "react", "typescript", "postgresql", "tailwind", "docker"],
    images: [squirl],
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
];

export const getProject = (slug: string): Project | undefined =>
  PROJECTS.find((project) => project.slug === slug);
