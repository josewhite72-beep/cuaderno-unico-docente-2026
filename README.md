# Cuaderno Único Docente 2025/26 – PWA Offline

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-blue)](https://web.dev/progressive-web-apps/)

**Cuaderno Único Docente** es una Progressive Web App (PWA) **offline-first** diseñada especialmente para docentes de Inglés (Prekínder a 6° grado) en Panamá. Inspirada en los tradicionales cuadernos físicos de tecnoapuntes.com, con diseños acuarela pastel, calendarios mensuales coloridos, planner semanal y secciones para notas, reuniones, asistencias e inventario.

Funciona 100% sin internet una vez instalada: ideal para escuelas con conexión limitada.

## Capturas de Pantalla

![Portada](images/portada-acuarela.jpg)  
*(Portada con fondo acuarela azul/verde/rosa y título cursivo)*

![Planner Agosto 2025](images/planner-agosto.jpg)  
*(Ejemplo de página mensual: calendario grid + notas + planner semanal en rosa)*

![Planner Septiembre 2025](images/planner-septiembre.jpg)  
*(Variación en celeste, estilo consistente por mes)*

(Agrega tus propias capturas en la carpeta `images/` al subir el repo)

## Características Principales

- **Offline total**: Usa Service Worker para cachear todo (HTML, CSS, JS, imágenes, calendarios).
- **Instalable**: Se agrega a la pantalla de inicio como app nativa (Chrome, Edge, Safari móvil/PC).
- **Diseño cute y educativo**: Fondos acuarela pastel, fuentes manuscritas, colores temáticos por mes (rosa agosto, celeste septiembre, verde octubre, naranja noviembre, azul diciembre, etc.).
- **Planner mensual y semanal**: Calendario grid con fines de semana coloreados, sección "Notas" en grid, bloques diarios con "Importante", "Notas" y "Reuniones".
- **Calendario escolar integrado**: Basado en el oficial MEDUCA 2026 (Decreto Ejecutivo N°49 del 8 de septiembre 2025):
  - Semana organización docente: 23–27 febrero 2026
  - Inicio clases estudiantes: **2 de marzo 2026**
  - Primer trimestre: 2 marzo – 29 mayo
  - Receso: 1–5 junio
  - Segundo trimestre: 8 junio – 4 septiembre
  - Receso: 7–11 septiembre
  - Tercer trimestre: 14 septiembre – 11 diciembre
  - Balance y graduaciones: 14–18 diciembre
  - Duración: 42 semanas académicas
- **Persistencia de datos**: Notas y textos guardados automáticamente en `localStorage` (sobreviven al cierre del navegador).
- **Responsive**: Funciona perfecto en móvil, tablet y PC.
- **Ligero**: Sin dependencias externas pesadas (solo HTML/CSS/JS vanilla + Google Fonts opcional).

## Instalación y Uso

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/cuaderno-docente-pwa.git
   cd cuaderno-docente-pwa