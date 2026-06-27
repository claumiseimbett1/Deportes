# Festi-Torneo Regional del Sinú – sitio web (2026)

Landing estática del **FESTI-TORNEO REGIONAL DEL SINÚ 2026**, organizado por **Club Delfines Córdoba** y **Sport y Club Deportivo Ávatar**: resultados enlazados a Google Sheets, tablas por prueba y género, ranking por equipos y descarga de diplomas en PDF (jsPDF).

**Evento:** sábado 18 de abril de 2026 · Piscina de la Villa Olímpica, Montería (Córdoba).

**Producción:** [https://festitorneosinu.netlify.app/](https://festitorneosinu.netlify.app/)

## Características

- Resultados actualizados desde Google Sheets (API y exportación CSV).
- Secciones de resultados por distancia (50 m, 100 m, 200 m, relevos) y vista por género; clasificación por equipos.
- Indicador de carga y búsqueda por nombre en tablas.
- Diplomas descargables y mensajes para compartir resultados.
- **Siete patrocinadores** en la sección `#patrocinadores`.
- Identidad visual con logos de **Delfines Córdoba** y **Club Ávatar** (azul, cian y naranja).
- **Subsección Top4Race** (`#top4race`): espacio publicitario deshabilitado por defecto (código conservado; reactivar quitando `hidden` y `data-ad-disabled`).
- Diseño responsive, video hero, patrocinadores y contacto.

## SEO (resumen)

El `index.html` incluye, entre otras medidas:

- **`<title>` y meta description** orientados a búsquedas locales (Montería, Córdoba) y palabras clave del evento.
- **`link rel="canonical"`** a la URL de producción en Netlify.
- **Open Graph** (`og:*`) y **Twitter Card** para vista previa al compartir.
- **`robots`** `index, follow` y `max-image-preview:large`.
- **JSON-LD** (`application/ld+json`) con `SportsEvent`, `WebSite` y `ProfessionalService` (Top4Race).
- Enlaces de patrocinio con **`rel="sponsored"`** donde aplica.

Tras cambiar dominio o imagen social principal, actualiza canonical, `og:url`, `og:image` y el bloque JSON-LD.

## Estructura del proyecto

| Ruta | Descripción |
|------|-------------|
| `index.html` | Página única: marcado, estilos embebidos, SEO, JSON-LD y lógica (Sheets, tablas, PDF). |
| `style.css` | Hoja de estilos adicional (el layout principal vive en `index.html`). |
| `img/` | Logos de clubes, patrocinadores y plantillas de diplomas. |
| `video/` | Vídeo promocional del hero. |
| `documentos/` | PDF de convocatoria (`I FESTITORNEO-2026 (1).pdf`), programa y política de datos. |
| `archive/iv-championship/` | Respaldo histórico del **IV Championship** (`index.html`, `img/`, `documentos/`). No se despliega. |
| `archive/v-championship/` | Respaldo histórico del **V Championship 2026** (`index.html`, `img/`, `documentos/`). No se despliega. |
| `sitemap.xml` | Mapa del sitio para buscadores (URL canónica y `lastmod`). |
| `robots.txt` | Permite rastreo e indica la URL del sitemap. |

## Mapa del sitio (anclas en la misma página)

- `#inicio` — Hero con vídeo
- `#informacion` — Información del evento
- `#terminos` — Términos y condiciones
- `#resultados` — Resultados y tablas
- `#patrocinadores` — Patrocinadores
- `#top4race` — Destacado Top4Race (oculto por defecto)
- `#contacto` — Contacto

Ejemplo: `https://festitorneosinu.netlify.app/#resultados`

## Cómo verlo en local

Abre `index.html` en el navegador o sirve la carpeta con un servidor estático:

```bash
npx --yes serve .
```

## Despliegue (Netlify)

Publica la **raíz** del repositorio (donde está `index.html`). Si cambias de dominio, actualiza `sitemap.xml`, `robots.txt`, el **canonical**, las meta **Open Graph** y las URLs en los textos para compartir / PDF dentro de `index.html`.

## Respaldos en `archive/`

Solo guardan ediciones pasadas del **Championship**. El **Festi-Torneo Regional del Sinú** es el sitio activo en la **raíz** del repo (`index.html`, `img/`, `documentos/`, `video/`) y **no** tiene carpeta en `archive/`.

Cada respaldo de Championship sigue el mismo esquema:

```
archive/<nombre-edición>/
  index.html      # copia de la página en ese momento
  img/            # logos y plantillas usadas por esa copia
  documentos/     # PDFs de términos y política de esa edición
```

- **`archive/iv-championship/`** — IV Championship 2025.
- **`archive/v-championship/`** — V Championship Master 2026.

Para congelar una edición Championship antes de un cambio mayor, copia `index.html`, `img/` y `documentos/` desde la raíz (en su momento) a la carpeta correspondiente en `archive/`. La carpeta `video/` no se incluye en los respaldos; al abrir un `index.html` solo desde `archive/` el hero puede no reproducir vídeo.
