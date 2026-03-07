# Arquitectura del proyecto

## 1) Visión general

Este repositorio implementa un portafolio personal con **Astro 5** usando enfoque de **sitio estático por componentes**, con una única página principal (`/`) compuesta por secciones reutilizables.

Pilares técnicos:

- **Framework**: Astro (`astro@5.18.0`).
- **Estilos**: Tailwind CSS v4 + tokens CSS en `src/styles/global.css`.
- **Tipado**: TypeScript estricto (`astro/tsconfigs/strict`) y tipado explícito en constantes.
- **Iconografía**: `astro-icon` con SVGs locales en `src/icons/`.
- **Gestión de paquetes**: Bun.

Es una arquitectura orientada a contenido estático con pequeñas islas de interactividad en cliente (scripts inline en componentes específicos).

---

## 2) Estructura de carpetas (alto nivel)

- `src/pages/`: rutas Astro. Actualmente solo `index.astro`.
- `src/layouts/`: layout base HTML/SEO (`Layout.astro`).
- `src/components/sections/`: bloques principales de la landing (Navbar, Hero, About, etc.).
- `src/components/ui/`: piezas de UI reutilizables (`Button.astro`).
- `src/components/widgets/`: widgets interactivos (toggle de tema, typewriter).
- `src/constants/`: fuentes de datos tipadas para navegación, experiencia y tecnologías.
- `src/styles/`: estilos globales y tokens de tema.
- `src/icons/`: catálogo SVG usado por `astro-icon`.
- `public/`: activos estáticos servidos tal cual (CV, imágenes, favicon).
- `docs/`: documentación del proyecto (incluye este archivo).

Observación: existe `src/components/legacy/` con componentes no conectados al flujo principal actual.

---

## 3) Flujo de renderizado

### 3.1 Entrada de la aplicación

La ruta `src/pages/index.astro` orquesta la página principal:

1. Importa `Layout.astro`.
2. Monta secciones en orden: `Navbar`, `Hero`, `About`, `Skills`, `Experience`, `Portfolio`, `Footer`.

### 3.2 Shell global

`src/layouts/Layout.astro` centraliza:

- estructura `html/head/body`,
- metadatos SEO y Open Graph,
- carga de fuente (`@fontsource-variable/onest`),
- import de `global.css`,
- script temprano para evitar “flash” de tema al iniciar (lectura de `localStorage` + `prefers-color-scheme`).

Esto garantiza consistencia visual y de metadata en cualquier futura ruta.

---

## 4) Organización por capas

### 4.1 Capa de presentación

Compuesta por `.astro` en `sections/`, `ui/` y `widgets/`.

- **Sections**: representan bloques de dominio de la landing (contenido + layout).
- **UI**: componentes pequeños y genéricos (ej. `Button`).
- **Widgets**: componentes con comportamiento cliente (tema, animaciones de texto).

### 4.2 Capa de contenido/configuración

`src/constants/*.ts` concentra datos que alimentan la UI:

- `navItems.ts`: enlaces del menú.
- `socialLinks.ts`: redes sociales.
- `technologies.ts`: listas de stack técnico.
- `experience.ts`: experiencia laboral con tipos de dominio (`WorkType`, `LocationType`, `MonthName`, `Experience`).

Este patrón separa “qué se muestra” (datos) de “cómo se muestra” (componentes).

### 4.3 Capa de estilo/tema

`src/styles/global.css` define:

- tokens semánticos (`--color-primary`, `--color-surface`, etc.),
- estrategia de tema por clase `.dark`,
- tipografía base,
- utilidades globales mínimas (scroll behavior, overflow, reduced motion).

Tailwind consume estos tokens vía `@theme` para mantener consistencia transversal.

---

## 5) Interactividad en cliente

Aunque el sitio es mayormente estático, hay scripts específicos:

- **`Navbar.astro`**:
  - menú móvil (abrir/cerrar),
  - cierre por click externo,
  - activación visual de links,
  - `IntersectionObserver` para resaltar sección activa según scroll.

- **`SimpleThemeToggle.astro`**:
  - alterna clase `dark` en `documentElement`,
  - persiste preferencia en `localStorage`.

- **`Experience.astro`**:
  - calcula duración de cada experiencia en tiempo real a partir de atributos `data-*`.

La estrategia actual evita SPA completa y limita JS al comportamiento estrictamente necesario.

---

## 6) Sistema de diseño y reutilización

Elementos clave de reutilización:

- `SectionContainer.astro`: patrón uniforme de espaciado/sección + `scroll-mt` para navegación por anclas.
- `TitleSection.astro`: encabezado estandarizado para títulos/subtítulos/descripciones.
- `Button.astro`: API por variantes (`primary`, `outline`, `ghost`) y tamaños (`sm`, `md`, `lg`).

Beneficio: reduce duplicación y facilita cambios de estilo global por pieza.

---

## 7) Ruteo, assets e imports

- **Ruteo**: file-based routing de Astro; hoy solo página `index`.
- **Assets optimizados**:
  - imágenes críticas con `astro:assets` (`Picture`) desde `src/assets/`.
  - archivos públicos (CVs, imágenes de proyectos) desde `public/`.
- **Aliases TS** (`tsconfig.json`): `@/*`, `@components/*`, `@layouts/*`, etc., para evitar rutas relativas profundas.

---

## 8) Configuración y tooling

- `astro.config.mjs`:
  - plugin Vite de Tailwind v4,
  - integración `astro-icon`.
- `package.json` scripts:
  - `dev`, `build`, `preview`, `astro`.
- Sin setup dedicado de ESLint/Prettier/test runner en el estado actual.

---

## 9) Fortalezas actuales

- Separación clara por responsabilidad (layout, secciones, datos, estilos).
- Tipado fuerte en datasets de dominio (`experience.ts`).
- Diseño basado en tokens semánticos y soporte dark mode consistente.
- Interactividad acotada, alineada con arquitectura estática eficiente.

---

## 10) Deuda técnica / oportunidades de mejora

1. **Componentes huérfanos o legacy**: `src/components/legacy/`, `ThemeToggle.astro`, `Contact.astro`, `Typewriter.astro`, `SocialPill.astro` no participan del flujo principal actual.
2. **Inconsistencia de estilos**: conviven tokens semánticos (`text-text`, `bg-surface`) con colores hardcodeados (`text-neutral-*`, `bg-white`, etc.) en algunos componentes.
3. **Datos embebidos en vista**: proyectos en `Portfolio.astro` están hardcodeados; conviene moverlos a `src/constants/` para escalabilidad.
4. **README no actualizado**: mantiene contenido del starter base de Astro y no refleja la arquitectura real del proyecto.

---

## 11) Mapa de dependencias principal

- `src/pages/index.astro`
  - `src/layouts/Layout.astro`
  - `src/components/sections/Navbar.astro`
    - `src/constants/navItems.ts`
    - `src/components/widgets/SimpleThemeToggle.astro`
  - `src/components/sections/Hero.astro`
    - `src/components/ui/Button.astro`
    - `src/constants/socialLinks.ts`
  - `src/components/sections/About.astro`
    - `src/components/sections/SectionContainer.astro`
  - `src/components/sections/Skills.astro`
    - `src/components/sections/SectionContainer.astro`
    - `src/components/sections/TitleSection.astro`
    - `src/constants/technologies.ts`
  - `src/components/sections/Experience.astro`
    - `src/components/sections/SectionContainer.astro`
    - `src/components/sections/TitleSection.astro`
    - `src/constants/experience.ts`
  - `src/components/sections/Portfolio.astro`
    - `src/components/sections/SectionContainer.astro`
    - `src/components/sections/TitleSection.astro`
    - `src/components/sections/ProjectCard.astro`
  - `src/components/sections/Footer.astro`
    - `src/constants/navItems.ts`
    - `src/constants/socialLinks.ts`

---

## 12) Resumen arquitectónico

La arquitectura sigue un patrón limpio y pragmático para un portafolio: **Astro estático + componentes de sección + datos tipados + tema por tokens**, con interactividad ligera donde aporta valor UX. Está bien posicionada para crecer a nuevas páginas o secciones manteniendo buena mantenibilidad, especialmente si se consolida la capa de datos y se depura código legacy no usado.
