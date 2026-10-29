---
title: "Buenas prácticas para diseñar APIs REST"
excerpt: "Convenciones de nombres, códigos de estado y versionado para APIs que envejecen bien."
date: 2026-09-12
category: "Backend"
tags: ["API", "REST", "Arquitectura"]
featured: true
---

Artículo de ejemplo. Una buena API se nota cuando otro equipo puede usarla sin leer el código.

## Nombra recursos, no acciones

Usa sustantivos en plural para los recursos y deja que el verbo HTTP exprese la acción.

- `GET /creditos`
- `POST /creditos`
- `GET /creditos/42`

## Responde con códigos de estado claros

Un `201` al crear, un `404` cuando no existe y un `422` para errores de validación evitan ambigüedades.

```http
HTTP/1.1 422 Unprocessable Entity

{ "error": "monto inválido" }
```

## Versiona desde el inicio

Incluir la versión en la ruta o en una cabecera te permite evolucionar sin romper a nadie.
