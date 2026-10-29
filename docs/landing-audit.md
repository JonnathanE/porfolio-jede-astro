# Auditoría del landing: rendimiento, SEO y accesibilidad

Fecha: 2026-10-29 · Herramienta: Lighthouse 12 sobre el build de producción servido en local.

| | Rendimiento | Accesibilidad | Buenas prácticas | SEO |
|---|---|---|---|---|
| Móvil | 89 | 100 | 100 | 100 |
| Escritorio | 96 | 100 | 100 | 100 |

Métricas en móvil: FCP 1,5 s · LCP 1,7 s · TBT 0 ms · **CLS 0,21** · peso total 106 KiB.

## Tareas

Ordenadas por prioridad.

### Rendimiento

- [x] **Reducir el CLS causado por la fuente Onest** (0,21 en móvil, 0,13 en escritorio).
  - Causa: `@fontsource-variable/onest` usa `font-display: swap` y el texto se re-acomoda al cargar el `.woff2`.
  - Solución: se migró a la API `fonts` de Astro, que precarga el `.woff2` y genera el fallback con métricas sobre Arial. También se quitó JetBrains Mono, que no se cargaba.
  - Resultado: el CLS bajó a 0 en móvil y a 0,024 en escritorio; el rendimiento quedó en 100 en ambos.
- [x] **Cargar el hero sin diferir**: es el LCP en escritorio.
  - Solución: se agregó la prop `priority` de Astro al `<Picture>` del hero en `src/pages/index.astro` (aplica `loading="eager"`, `decoding="sync"` y `fetchpriority="high"`).
  - Resultado: las auditorías `lcp-lazy-loaded` y `lcp-discovery-insight` pasan; el CLS en escritorio bajó de 0,024 a 0.
- [x] **Servir el hero en tamaños responsivos** (ahorro estimado de 12–19 KiB).
  - Solución: el `<Picture>` del hero ahora genera AVIF y WebP en 400, 672 y 896 px, con `sizes="(min-width: 496px) 448px, calc(100vw - 48px)"` y JPG como respaldo en lugar de PNG.
  - Resultado: la imagen pasó de 25 KiB (WebP) a 13 KiB (AVIF), y la página de 105 a 93 KiB. Las auditorías `uses-responsive-images` e `image-delivery-insight` pasan.

> En producción no aplica el aviso de caché corto: Vercel ya sirve `/_astro/*` con `immutable`.

### SEO

- [ ] **Hacer absoluta la `og:image`**: hoy es relativa (`/images/perfil_hero.jpg`) y las redes sociales no muestran la imagen.
  - Definir `site: "https://<dominio>"` en `astro.config.mjs`.
  - Armarla en `Layout.astro` con `new URL(image, Astro.site)`.
- [ ] **Agregar las meta etiquetas que faltan** en `Layout.astro`:
  - `<link rel="canonical" href={new URL(Astro.url.pathname, Astro.site)}>`
  - `og:url`, `og:type` (`website`), `og:locale` (`es_EC`)
  - `twitter:card` (`summary_large_image`)
- [ ] **Agregar sitemap y robots.txt**.
  - Instalar `@astrojs/sitemap`.
  - Crear `public/robots.txt` que apunte a `/sitemap-index.xml`.
- [ ] **Agregar datos estructurados JSON-LD** de tipo `Person` (nombre, cargo, `url`, `sameAs` con las redes sociales).
- [ ] **Cambiar la descripción por defecto** de `Layout.astro`, que hoy es igual al título.

### Accesibilidad

- [x] **Corregir el nombre accesible del logo "JE"** en `src/components/layout/Header.astro`.
  - El `aria-label="Inicio"` no incluía el texto visible "JE", y eso falla con el control por voz.
  - Solución: se quitó el `aria-label` y se agregó `<span class="sr-only"> – Inicio</span>`; el nombre accesible queda "JE – Inicio".
- [x] **Verificar el contraste en el tema oscuro**: Lighthouse solo había auditado el tema claro.
  - Se auditaron 6 páginas con `--force-dark-mode` (confirmado con captura). `color-contrast` pasa en todas.
- [x] **Proteger el acceso a `localStorage`** en el script del tema de `Layout.astro` con `try/catch`, como pide `AGENTS.md`.
- [x] **Corregir el orden de encabezados en `/projects`** (hallado durante la auditoría en tema oscuro).
  - La página saltaba de `h1` a `h3`. `ProjectCard` ahora acepta `headingLevel` (por defecto `3`) y `/projects` usa `2`.

Resultado: accesibilidad en 100 en las 6 páginas (inicio, contacto, perfil, proyectos, experiencia y blog), en tema claro y oscuro, sin avisos.

## Cómo volver a medir

```sh
RESEND_API_KEY=re_dummy CONTACT_TO_EMAIL=x@example.com bun run build
bunx serve -l 4400 .vercel/output/static
CHROME_PATH=$(ls -d ~/.cache/ms-playwright/chromium-*/*/chrome | head -1) \
  bunx lighthouse@12 http://localhost:4400/ --view \
  --chrome-flags="--headless=new --no-sandbox"
```

Para la versión de escritorio, agregar `--preset=desktop`.
