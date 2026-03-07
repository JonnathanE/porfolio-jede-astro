# Portafolio de Jonnathan Espinoza

Sitio web de portafolio personal construido con Astro, TypeScript y Tailwind CSS v4.

## Stack

- Astro 5
- TypeScript (strict)
- Tailwind CSS v4
- astro-icon
- Bun (gestor de paquetes)

## Estructura del proyecto

```text
/
├── docs/                       # Documentación interna
├── public/                     # Archivos estáticos (CV, imágenes públicas, favicon)
├── src/
│   ├── assets/                 # Imágenes y assets procesados por Astro
│   ├── components/
│   │   ├── sections/           # Secciones principales de la página
│   │   ├── ui/                 # Componentes reutilizables de interfaz
│   │   ├── widgets/            # Widgets interactivos (theme toggle, etc.)
│   │   └── legacy/             # Componentes antiguos/no activos
│   ├── constants/              # Contenido tipado (nav, experiencia, tecnologías)
│   ├── icons/                  # Íconos SVG para astro-icon
│   ├── layouts/                # Layout base
│   ├── pages/                  # Rutas Astro
│   └── styles/                 # Estilos globales y tokens de tema
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Requisitos

- Bun instalado (recomendado para este proyecto)

## Instalación

```bash
bun install
```

## Desarrollo

```bash
bun run dev
```

Servidor local en `http://localhost:4321`.

## Build y preview

```bash
bun run build
bun run preview
```

## Diagnóstico de tipos y Astro

```bash
bun run astro check
```

## Scripts disponibles

- `bun run dev`: inicia servidor de desarrollo.
- `bun run build`: genera build de producción en `dist/`.
- `bun run preview`: previsualiza el build localmente.
- `bun run astro`: ejecuta comandos del CLI de Astro.

## Convenciones importantes

- UI en español (tono principal del contenido).
- Preferir imports con alias definidos en `tsconfig.json` (`@/`, `@components/`, etc.).
- No editar manualmente `dist/` (salida generada).
- Mantener tipado estricto y evitar `any`.

## Documentación adicional

- Arquitectura del proyecto: `docs/architecture.md`
