# V Championship Master – sitio web (2026)

Landing estática del **V Championship Master Swimming 2026** (AquaTEN y Elyanas Natación): resultados enlazados a Google Sheets, tablas por prueba y género, ranking por equipos y descarga de diplomas en PDF (jsPDF).

**Evento:** sábado 18 de abril de 2026 · Piscina de la Villa Olímpica, Montería (Córdoba).

**Producción:** [https://vchampionship.netlify.app/](https://vchampionship.netlify.app/)

## Características

- Resultados actualizados desde Google Sheets (API y exportación CSV).
- Secciones de resultados por distancia (50 m, 100 m, 200 m, relevos) y vista por género; clasificación por equipos.
- Indicador de carga y búsqueda por nombre en tablas.
- Diplomas descargables y mensajes para compartir resultados.
- Diseño responsive, video hero y bloque de patrocinadores y contacto.

## Estructura del proyecto

| Ruta | Descripción |
|------|-------------|
| `index.html` | Página única: marcado, estilos embebidos y lógica (fetch a Sheets, tablas, PDF). |
| `style.css` | Hoja de estilos adicional (el layout principal vive en `index.html`). |
| `img/` | Logos e imágenes del evento. |
| `video/` | Vídeo promocional del hero. |
| `documentos/` | PDF de términos (`Terminos_y_Condiciones_V_Championship_2026.pdf`) y política de datos. |
| `archive/iv-championship/` | Copia de respaldo de la edición IV; no se publica en la raíz del sitio. |
| `sitemap.xml` | Mapa del sitio para buscadores. |
| `robots.txt` | Permite rastreo e indica la URL del sitemap. |

## Mapa del sitio (anclas en la misma página)

- `#inicio` — Hero con vídeo
- `#informacion` — Información del evento
- `#terminos` — Términos y condiciones
- `#resultados` — Resultados y tablas
- `#patrocinadores` — Patrocinadores
- `#contacto` — Contacto e Instagram

Ejemplo: `https://vchampionship.netlify.app/#resultados`

## Cómo verlo en local

Abre `index.html` en el navegador o sirve la carpeta con un servidor estático:

```bash
npx --yes serve .
```

## Despliegue (Netlify)

Publica la **raíz** del repositorio (donde está `index.html`). Si cambias de dominio, actualiza `sitemap.xml`, `robots.txt` y las URLs en los textos para compartir / PDF dentro de `index.html`.
