# Festi-Torneo de Aniversario NNG 2026 — página modelo de evento

Sitio estático del **Festi-Torneo de Aniversario NNG — El Nadador Más Rápido 2026**, organizado por el **Club Nadadores Nueva Generación (NNG)** con apoyo de la Liga de Natación de Córdoba y el IMDER Montería.

Esta landing es la **página modelo de evento** para Top4Race / AquaTEN: mismo esquema reutilizable (hero, info, convocatoria, resultados desde Google Sheets, diplomas PDF, compartir) adaptado a la marca y datos de cada competencia.

**Evento:** 13 de septiembre de 2026 · Piscina Villa Olímpica, Montería (Córdoba).  
**Convocatoria:** `documentos/FESTI-TORNEO-DE-ANIVERSARIO-NNG.pdf`

**Producción:** [https://festitorneosinu.netlify.app/](https://festitorneosinu.netlify.app/)

## Qué incluye el modelo

- Resultados en vivo desde Google Sheets (API y CSV).
- Tablas por prueba, género y clasificación por equipos; búsqueda y filtros.
- Diplomas descargables (jsPDF) y textos para compartir (WhatsApp / Instagram).
- Hero a sangre con foto de marca, convocatoria PDF y contacto del club.
- Identidad visual NNG (navy, cian, rojo) + soporte tecnológico Top4Race / AquaTEN.
- Diseño responsive; sección Top4Race (`#top4race`) deshabilitada por defecto.

## SEO (resumen)

El `index.html` incluye title/description locales, canonical, Open Graph, Twitter Card, `robots` y JSON-LD (`SportsEvent`, `WebSite`, Top4Race). Tras cambiar dominio o imagen social, actualiza canonical, `og:*` y el bloque JSON-LD.

## Estructura del proyecto

| Ruta | Descripción |
|------|-------------|
| `index.html` | Página modelo activa: marcado, estilos, SEO y lógica (Sheets, tablas, PDF). |
| `style.css` | Estilos adicionales (el layout principal vive en `index.html`). |
| `img/` | Logo NNG, foto de equipo, logos Top4Race y plantillas de diplomas. |
| `video/` | Recurso opcional (el hero NNG usa foto). |
| `documentos/` | Convocatoria NNG y política de datos. |
| `archive/` | Ediciones anteriores congeladas (no se despliegan). |
| `sitemap.xml` / `robots.txt` | SEO técnico. |

## Mapa del sitio (anclas)

- `#inicio` — Hero (foto NNG)
- `#informacion` — Información del evento
- `#terminos` — Convocatoria / documentos
- `#resultados` — Resultados y tablas
- `#patrocinadores` — Patrocinadores
- `#top4race` — Destacado Top4Race (oculto por defecto)
- `#contacto` — Contacto del club y soporte Top4Race

## Cómo verlo en local

```bash
npx --yes serve .
```

O abre `index.html` en el navegador.

## Despliegue (Netlify)

Publica la **raíz** del repositorio. Si cambias de dominio, actualiza `sitemap.xml`, `robots.txt`, canonical, Open Graph y las URLs en textos de compartir / PDF dentro de `index.html`.

## Respaldos en `archive/`

Ediciones congeladas del mismo esquema modelo. El sitio activo está en la raíz.

- `archive/iv-championship/` — IV Championship 2025
- `archive/v-championship/` — V Championship Master 2026
- `archive/i-festitorneo/` — I Festitorneo Regional del Sinú 2026
- ZIP descargable del Festitorneo Sinú en `archive/` cuando exista

Para congelar esta edición NNG antes de un cambio mayor, copia `index.html`, `img/` y `documentos/` a una carpeta nueva en `archive/`.
