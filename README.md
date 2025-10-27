# SuperApp Contigo Mamá 360° — PWA Mockup

Demo estática (HTML/CSS/JS) instalable como **PWA** para pruebas de flujo.

## Estructura
- `index.html`: SPA con secciones del flujo (registro, Tribu, Nawi, Retorno).
- `manifest.webmanifest`: metadatos de PWA (+ íconos).
- `sw.js`: service worker simple para cache.
- `assets/icons/`: íconos 192/512 px.
- `assets/img/`: fotos mock de nanas.

## Ejecutar en local
1. Abre la carpeta en **VS Code**.
2. Instala la extensión **Live Server**.
3. Clic derecho en `index.html` → **Open with Live Server**.

> Los Service Workers funcionan en `https` o en `http://localhost` (Live Server incluye `localhost`).

## Publicar gratis (GitHub Pages)
1. Sube esta carpeta a un repo público (GitHub Desktop → *Create + Publish*).
2. En el repo: **Settings → Pages** → *Deploy from a branch* (branch `main`, carpeta `/`).
3. Abre la URL que te da Pages y **añade a pantalla de inicio**.

## Flujo cubierto
1) **Ingreso/registro** (3 preguntas).  
2) **Tribu Contigo**: WhatsApp, feed del bot, FAQ + mentorías.  
3) **Seguimiento bienestar**: “¿Cómo te sientes hoy?”.  
4) **Transición** a **Nawi Wawa** al cumplir 3 meses / retorno al trabajo.  
5) **Nawi Wawa**: perfiles (foto/zona/experiencia/edad/rating), WhatsApp, agenda mock.  
6) **Etapa 2**: comunidad “mamá que retorna”, calificación de nana, recordatorios y sugerencia de horarios.

> Todo es **mock** (no hay backend). Los enlaces de WhatsApp abren `wa.me` con un texto prellenado.
