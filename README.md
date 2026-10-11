# IV Competencia de Relevos MNM 2026 — página modelo de evento

Sitio estático de la **IV Competencia de Relevos MNM**, organizada por el **Club Montería Natación Master (MNM)**: 20 minutos de relevo continuo 4 x 50 m libre, categorías por sumatoria de edades.

Esta landing es la **página modelo de evento** para Top4Race / AquaTEN: mismo esquema reutilizable (hero, info, convocatoria, resultados desde Google Sheets, diplomas PDF, compartir) adaptado a la marca y datos de cada competencia.

**Evento:** sábado 7 de noviembre de 2026 · 6:00 pm · Piscina Villa Olímpica, Montería (Córdoba).  
**Invitación:** `documentos/IV-COMPETENCIA-DE-RELEVOS-MNM.pdf`

**Producción:** [https://competenciarelevosmnm.netlify.app/](https://competenciarelevosmnm.netlify.app/)

## Qué incluye el modelo

- Resultados en vivo desde Google Sheets (API y CSV).
- Tablas por prueba, género y clasificación por equipos; búsqueda y filtros.
- Diplomas descargables (jsPDF) y textos para compartir (WhatsApp / Instagram).
- Hero a sangre con video de marca, invitación PDF y contacto del club.
- Identidad visual MNM (azul #134492, navy, cian, amarillo; fondos de franjas) + soporte tecnológico Top4Race / AquaTEN.
- Diseño responsive; sección Top4Race (`#top4race`) deshabilitada por defecto.

## SEO (resumen)

El `index.html` incluye title/description orientados a "natación Montería", geo-etiquetas de Montería, canonical, hreflang `es-CO`, Open Graph (imagen y video), Twitter Card, `robots` y JSON-LD (`SportsEvent` con lugar, oferta, video e invitación PDF; club organizador con dirección; `WebSite`; Top4Race). `sitemap.xml` incluye entradas de imagen y video y la invitación PDF; `robots.txt` bloquea `archive/`, `gracias.html` y PDFs de eventos anteriores. Tras cambiar dominio o imagen social, actualiza canonical, `og:*`, el bloque JSON-LD, `sitemap.xml` y `robots.txt`.

## Estructura del proyecto

| Ruta | Descripción |
|------|-------------|
| `index.html` | Página modelo activa: marcado, estilos, SEO y lógica (Sheets, tablas, PDF). |
| `style.css` | Estilos adicionales (el layout principal vive en `index.html`). |
| `img/` | Logos MNM y siglas MM, fondos de franjas, favicon, logos Top4Race y plantillas de diplomas. |
| `video/` | `RELEVOSMASTER2026.mp4` (video del hero). |
| `documentos/` | Invitación de relevos MNM y política de datos. |
| `archive/` | Ediciones anteriores congeladas (no se despliegan). |
| `sitemap.xml` / `robots.txt` | SEO técnico. |

## Mapa del sitio (anclas)

- `#inicio` — Hero (video MNM)
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
- `archive/i-festitorneo/` — I Festitorneo Regional del Sinú 2026 (`index.html`, `img/`, `documentos/`, `video/`, etc.)
- `archive/festitorneo-nng-2026/` — Festi-Torneo de Aniversario NNG 2026 (respaldo del 2026-10-10)

Para congelar una edición antes de un cambio mayor, copia `index.html`, `img/` y `documentos/` a una carpeta nueva en `archive/` (mismo esquema de carpetas; sin ZIP).
