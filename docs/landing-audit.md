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

- [ ] **Reducir el CLS causado por la fuente Onest** (0,21 en móvil, 0,13 en escritorio).
  - Causa: `@fontsource-variable/onest` usa `font-display: swap` y el texto se re-acomoda al cargar el `.woff2`.
  - Precargar el `.woff2` con `<link rel="preload" as="font" type="font/woff2" crossorigin>` en `src/layouts/Layout.astro`.
  - Definir un fallback con métricas ajustadas (`size-adjust`, `ascent-override`, etc. sobre Arial), o migrar a la API `fonts` de Astro, que lo genera automáticamente.
- [ ] **Cargar el hero sin diferir**: es el LCP en escritorio.
  - En `src/pages/index.astro`, agregar `loading="eager"` y `fetchpriority="high"` al `<Picture>` del hero.
- [ ] **Servir el hero en tamaños responsivos** (ahorro estimado de 12–19 KiB).
  - Agregar `widths={[400, 600, 800]}` y `sizes="(min-width: 768px) 448px, 100vw"` al `<Picture>` del hero.

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

- [ ] **Corregir el nombre accesible del logo "JE"** en `src/components/layout/Header.astro`.
  - El `aria-label="Inicio"` no incluye el texto visible "JE", y eso falla con el control por voz.
  - Usar `aria-label="JE – Inicio"`, o quitar el `aria-label` y agregar `<span class="sr-only">Inicio</span>`.
- [ ] **Verificar el contraste en el tema oscuro**: Lighthouse solo auditó el tema claro.
- [ ] **Proteger el acceso a `localStorage`** en el script del tema de `Layout.astro` con `try/catch`, como pide `AGENTS.md`.

## Cómo volver a medir

```sh
RESEND_API_KEY=re_dummy CONTACT_TO_EMAIL=x@example.com bun run build
bunx serve -l 4400 .vercel/output/static
CHROME_PATH=$(ls -d ~/.cache/ms-playwright/chromium-*/*/chrome | head -1) \
  bunx lighthouse@12 http://localhost:4400/ --view \
  --chrome-flags="--headless=new --no-sandbox"
```

Para la versión de escritorio, agregar `--preset=desktop`.
