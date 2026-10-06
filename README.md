# portfolio_acdeveloper

Portafolio open source de **Adolfo J. Cardozo S.** (AC Scientific Computing): una página que
presenta los proyectos públicos de [github.com/acdeveloper-sci](https://github.com/acdeveloper-sci).
Complementa el sitio principal, [acscicomp.com](https://acscicomp.com).

Estructura, igual a la del sitio principal:

```
index.html              contenido de la página (en inglés)
assets/css/main.css     estilos
assets/js/theme-init.js tema guardado antes de pintar + interruptor de idioma
assets/js/main.js       idioma, tema, menú móvil, filtros, animaciones
assets/img/             logo (el mismo de acscicomp.com)
```

- Mismo sistema de diseño que acscicomp.com: colores, tipografía Space Grotesk, tema
  claro/oscuro y barra de navegación. Usa las mismas claves de `localStorage`
  (`acscicomp-theme`, `acscicomp-lang`), así que el tema y el idioma se comparten con el
  sitio principal bajo el mismo dominio.
- **Idioma:** la página se muestra en inglés, como el sitio principal. El botón **EN / ES**
  está desactivado ("coming soon") hasta que acscicomp.com tenga su versión en español.
  Las traducciones al español ya están en el objeto `ES` de `assets/js/main.js`. Para
  activarlo, pon `window.LANG_SWITCH_ENABLED = true` en `assets/js/theme-init.js`.
- La sección de testimonios es **de ejemplo (ficticia)**: hay que reemplazarla por
  testimonios reales antes de difundir la página.

## Verla localmente

Abre `index.html` en el navegador, o sirve la carpeta:

```bash
python3 -m http.server 8000   # http://localhost:8000
```

## Publicarla gratis (GitHub Pages)

1. Fusiona la rama en `main`.
2. **Settings → Pages → Deploy from a branch**: rama `main`, carpeta `/ (root)` y **Save**.
3. Como el repositorio de usuario `acdeveloper-sci.github.io` usa el dominio propio, la página
   queda en `https://acscicomp.com/portfolio_acdeveloper/`.
