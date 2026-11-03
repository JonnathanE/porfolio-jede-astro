# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primaria: reclutadores y líderes técnicos** que evalúan a Jonnathan para un empleo, incluidos puestos remotos internacionales. Necesitan decidir si vale la pena avanzar con el candidato: qué ha construido, a qué profundidad técnica y con qué responsabilidad.

**Secundaria: clientes de trabajo freelance** que buscan a alguien que construya su aplicación y necesitan confiar en que puede llevarla a producción.

## Product Purpose

Portafolio personal de Jonnathan Espinoza, Ingeniero en Sistemas y desarrollador Full Stack especializado en Backend. Existe para conseguir oportunidades de empleo y, en segundo lugar, trabajo freelance.

El éxito principal es que un evaluador descargue el CV o escriba para una entrevista. El éxito secundario es que un posible cliente envíe un mensaje por el formulario de contacto.

## Positioning

Experiencia en producción con sistemas financieros y datos, junto con la interfaz que los usa. El respaldo es Cartera365, una aplicación de gestión de créditos del sector financiero, en la que trabaja desde agosto de 2022 con APIs REST en Django REST Framework, interfaces en React, administración de SQL Server, procesos ETL con SSIS, un Data Warehouse y despliegues en AWS.

## Operating Context

- El mercado objetivo incluye oportunidades remotas internacionales en inglés, además de las oportunidades en español.
- El sitio enlaza al CV, GitHub y LinkedIn como material complementario para evaluar el perfil.
- El contacto ocurre por el formulario del sitio, un correo revelado en el navegador o las redes enlazadas.

## Capabilities and Constraints

**Rutas actuales:** inicio, perfil, experiencia, proyectos con detalle, blog con artículo y contacto.

**Funciones actuales:**
- Tema claro y oscuro.
- Descarga del CV.
- Formulario de contacto con validación y honeypot, enviado con Resend.
- Correo codificado para mantenerlo fuera del HTML estático.
- Artículos en borrador visibles solo en desarrollo.

**Requisito sin implementar:** el sitio debe ser bilingüe, en español e inglés. Hoy la interfaz y el contenido están solo en español, y el inglés existe únicamente en el CV.

**Idioma por defecto:** español.

**Decisiones abiertas:**
- Cómo se organizan las dos versiones de idioma.
- El dominio definitivo: todavía no existe. `astro.config.mjs` no define `site`, y las tareas de SEO pendientes en `docs/landing-audit.md` quedan aplazadas hasta tenerlo.

**Convenciones técnicas:** las reglas de stack y código están en `AGENTS.md`.

## Brand Commitments

- Nombre público: Jonnathan Espinoza. Monograma del sitio: "JE".
- Voz actual del sitio, observada en el código y sin confirmar como compromiso: primera persona, con tuteo en español.

## Evidence on Hand

**Experiencia (`src/constants/experience.ts`):**
- Desarrollador Full Stack en Tecnofin Tecnología e Innovación S.A.S., con Cartera365 en el sector financiero y colaboración en proyectos de Fastline con Spring Boot y Angular.
- Desarrollador WordPress freelance para Fastline: intranet corporativa, de enero a marzo de 2025.
- Proyecto de titulación en la Universidad Nacional de Loja: aplicación para enseñar Lengua de Señas Ecuatoriana.

**Proyectos (`src/constants/projects.ts`):**
- Generador de Códigos de Barras EAN-13: desplegado, con [sitio](https://barcode-generator-vert.vercel.app/), [repositorio](https://github.com/JonnathanE/barcode-generator) y capturas en `src/assets/images/projects/`.
- Squirl Expense Tracker: en desarrollo y sin desplegar, con [repositorio](https://github.com/JonnathanE/expense_tracker) y una captura.

**Formación:**
- Título de Ingeniería en Sistemas de la UNL, con imagen en `src/assets/images/` y [validación pública](https://certificados.unl.edu.ec/titulo/validar/MDAwMDA1ODM2MA).
- Cursos y certificados reales en `src/constants/courses.ts`.

**Otros recursos:**
- CV en español e inglés en `public/documents/`.
- Foto o personaje del hero y del perfil en `src/assets/images/`.
- Un artículo sobre EAN-13 y EPS vectorial, todavía en borrador y con un TODO pendiente del autor.

**Ausencias que no se deben inventar:** testimonios, referencias, clientes con nombre más allá de los listados, métricas de impacto de Cartera365 y capturas de ese sistema. El código tampoco documenta si esas capturas se pueden mostrar.

## Product Principles

1. **Primero se evalúa.** Quien revisa un perfil debe poder confirmar rápido el rol, la especialidad y la trayectoria, y encontrar el CV sin buscarlo.
2. **Cada afirmación tiene respaldo.** Lo que el sitio dice sobre la experiencia debe poder comprobarse con un trabajo, un proyecto, un repositorio o un certificado.
3. **La especialidad va antes que la lista de tecnologías.** Los sistemas financieros y de datos son el argumento central; las tecnologías lo sustentan.
4. **El empleo no cierra la puerta al freelance.** El camino principal es el de contratación, pero un posible cliente debe poder escribir sin fricción.
5. **Igual de sólido en ambos idiomas.** Una persona que lea en inglés debe poder evaluar el mismo perfil, con la misma evidencia, que una que lea en español.
