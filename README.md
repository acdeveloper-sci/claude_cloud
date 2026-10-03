# portfolio_acdeveloper

Portafolio open source de **Adolfo J. Cardozo S.** (AC Scientific Computing): una página que
presenta los proyectos públicos de [github.com/acdeveloper-sci](https://github.com/acdeveloper-sci).
Complementa el sitio principal, [acscicomp.com](https://acscicomp.com).

- `index.html`: una sola página con HTML, CSS y JS en línea, sin compilación.
- `assets/img/`: logo, el mismo del sitio principal.
- Mismo sistema de diseño que acscicomp.com: colores, tipografía Space Grotesk, tema
  claro/oscuro y barra de navegación. Usa las mismas claves de `localStorage`
  (`acscicomp-theme`, `acscicomp-lang`), así que el tema y el idioma elegidos se comparten
  con el sitio principal cuando ambos se sirven desde el mismo dominio.
- Botón **EN / ES**: el español está en el HTML y las traducciones al inglés están en el
  objeto `EN` del script.
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
