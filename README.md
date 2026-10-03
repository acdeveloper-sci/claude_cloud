# claude_cloud — Página de aterrizaje

Landing page de una sola página (en español) para **Adolfo J. Cardozo S.** —
freelancer de computación científica, IA aplicada y desarrollador open source
([github.com/acdeveloper-sci](https://github.com/acdeveloper-sci)).

- `index.html` — todo en un archivo: HTML + CSS + JS mínimo, sin dependencias ni compilación.
- Diseño *mobile-first*, tema claro/oscuro automático (con botón para cambiarlo).
- Secciones: servicios, proyectos open source, por qué elegirme, proceso,
  testimonios (**de ejemplo, ficticios — reemplázalos por reales**), preguntas frecuentes y contacto.

## Verla localmente

Abre `index.html` con doble clic en cualquier navegador, o sirve la carpeta:

```bash
python3 -m http.server 8000   # luego abre http://localhost:8000
```

## Publicarla gratis con GitHub Pages

1. En GitHub: **Settings → Pages**.
2. En *Build and deployment*, Source: **Deploy from a branch**.
3. Branch: `main` (o la rama donde esté `index.html`), carpeta `/ (root)` → **Save**.
4. En 1–2 minutos queda en `https://acdeveloper-sci.github.io/claude_cloud/`.
