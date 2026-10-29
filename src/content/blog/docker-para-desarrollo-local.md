---
title: "Docker para un entorno de desarrollo reproducible"
excerpt: "Cómo levantar base de datos, API y frontend con un solo comando."
date: 2026-08-28
category: "DevOps"
tags: ["Docker", "Entorno", "Productividad"]
---

Artículo de ejemplo sobre contenedores para el entorno local del equipo.

## Un compose por proyecto

Define los servicios en un archivo y comparte el mismo entorno con todo el equipo.

```bash
docker compose up -d
```

## Datos persistentes

Usa volúmenes para que la base de datos sobreviva a los reinicios.
