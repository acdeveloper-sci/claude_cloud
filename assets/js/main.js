document.documentElement.classList.add('js');
const root = document.documentElement;

/* ── Language EN / ES ─────────────────────────────── */
/* English lives in the HTML; Spanish translations are below.
   The switch stays disabled until acscicomp.com has its Spanish version:
   set LANG_SWITCH_ENABLED (assets/js/theme-init.js) to true to turn it on. */
const ES = {
  "m.fortriage": "Python · Streamlit · IA",
  "skip": "Saltar al contenido",
  "nav.portfolio": "portafolio",
  "nav.projects": "Proyectos",
  "nav.why": "Por qué yo",
  "nav.faq": "Preguntas",
  "nav.contact": "Contacto",
  "nav.hire": "Contrátame ↗",
  "tag.os": "Código abierto",
  "tag.ai": "IA / LLMs",
  "hero.title": "Portafolio open source",
  "hero.sub": "Lo que tengo público en GitHub, en un solo lugar: herramientas para entender y modernizar código Fortran heredado, infraestructura para integrar modelos de lenguaje, utilidades Python y proyectos de práctica. Código que puedes revisar antes de trabajar conmigo.",
  "hero.cta1": "Ver proyectos",
  "hero.cta2": "Perfil en GitHub ↗",
  "stat.1": "décadas entre ciencia y código",
  "stat.2": "licencia abierta",
  "stat.3": "bilingüe",
  "proj.eyebrow": "Proyectos destacados",
  "proj.title": "Lo que estoy construyendo",
  "proj.intro": "Filtra por área. Cada tarjeta enlaza al repositorio, y a la demo o al paquete cuando existen.",
  "f.all": "Todos",
  "f.ai": "IA / LLMs",
  "f.tools": "Herramientas Python",
  "st.live": "Demo en vivo",
  "p.fortriage": "Panel priorizado con IA para sistemas Fortran heredados. Combina análisis estático, priorización de riesgos, visualización interactiva y un asistente conversacional para decidir qué modernizar primero.",
  "l.demo": "Probar demo →",
  "m.forti4d": "Python · Análisis estático",
  "p.forti4d": "Kit de análisis estático para código Fortran real y mixto (F77/F90/F95), justo donde los parsers genéricos fallan. Pipeline de 19 pasos, reanudable, con registro detallado.",
  "m.odwi": "Python · Arquitectura",
  "p.odwi": "Capa de acceso a LLMs independiente del proveedor. Diseño de puertos y adaptadores: LiteLLM, Any-LLM o SDKs nativos intercambiables, más un núcleo de políticas, contexto y orquestación.",
  "m.acfort": "Python · Librería",
  "p.acfort": "Lectura y escritura de datos con la sintaxis de formatos de Fortran desde Python: formatos fijos y libres, inferencia de tipos y salida con formato.",
  "p.envscout": "Encuentra y administra todos los entornos virtuales de Python de tu disco: venv, conda, poetry, uv, pipenv, hatch y más. Escaneo rápido, también en paralelo. Windows, Linux y macOS.",
  "t.xplat": "Multiplataforma",
  "m.course": "Python · Formación",
  "st.wip": "En curso",
  "p.course": "Proyectos de ingeniería de IA (APIs de LLM, RAG, agentes) llevados más allá del material del curso: refactorización orientada a objetos e integración de modelos abiertos.",
  "t.agents": "Agentes",
  "p.snake": "El clásico Snake como juego de navegador independiente. Ligero, sin dependencias, desplegado en un subdominio propio.",
  "l.play": "Jugar →",
  "empty": "No hay proyectos destacados en esta categoría; revisa la lista de abajo.",
  "more.title": "Más repositorios",
  "more.intro": "Prácticas, experimentos y proyectos anteriores. También están en GitHub.",
  "r.flask": "API en Flask con tareas en segundo plano (Celery), Docker y docker-compose.",
  "r.nalavet": "Aplicación web hecha solo con Python sobre Anvil.",
  "r.acai": "Sitio web sencillo en Anvil (Python) con plantillas propias.",
  "r.tienda": "Maqueta de tienda en línea con HTML, CSS y Bootstrap.",
  "r.actions": "Flujos de GitHub Actions: variables, servicios, acciones propias y runners en varios sistemas.",
  "r.jupyter": "Experimento con Jupyter y Google Colab vía SSH.",
  "r.netauto": "Prácticas de flujo de trabajo con Git.",
  "r.clase": "Ejercicios de la clase de Git de Código Facilito.",
  "why.eyebrow": "Por qué elegirme",
  "why.title": "Ciencia e ingeniería de software, en la misma persona",
  "why.intro": "He desarrollado modelos matemáticos, los he implementado en Fortran de alto rendimiento y los he corrido en clústeres HPC. Por eso entiendo tanto el código como el problema que resuelve.",
  "why.1t": "Entiendo el problema, no solo el código",
  "why.1p": "Detecto cuándo un resultado “corre” pero no tiene sentido físico.",
  "why.2t": "Alcance claro desde el primer día",
  "why.2p": "Explico límites y complejidad antes de empezar, y solo me comprometo con lo que puedo entregar bien.",
  "why.3t": "Código que puedes revisar",
  "why.3p": "Este portafolio es la prueba: cómo estructuro, pruebo y documento, a la vista antes de contratarme.",
  "why.4t": "Atención real",
  "why.4p": "De uno a tres proyectos a la vez. Hablas directamente con quien escribe el código, en español o inglés.",
  "proc.eyebrow": "Cómo trabajo",
  "proc.title": "Del problema a la entrega",
  "proc.1t": "Conversación inicial",
  "proc.1p": "Me cuentas el problema, los datos y las restricciones.",
  "proc.2t": "Propuesta y alcance",
  "proc.2p": "Entregables, plazos y precio por escrito.",
  "proc.3t": "Desarrollo iterativo",
  "proc.3p": "Avances frecuentes en un repositorio que puedes ver, con pruebas.",
  "proc.4t": "Entrega y traspaso",
  "proc.4p": "Código, documentación e instrucciones para que tu equipo continúe.",
  "test.eyebrow": "Testimonios",
  "test.title": "Lo que dicen los clientes",
  "test.notice": "<strong>Textos de ejemplo.</strong> Estos testimonios son ficticios y solo muestran el formato de la sección. Hay que reemplazarlos por comentarios reales de clientes (con su permiso) antes de publicar.",
  "test.badge": "Ejemplo",
  "test.1q": "“Teníamos un modelo en Fortran de los años 90 que nadie se atrevía a tocar. Ahora corre como librería de Python, con pruebas y los mismos resultados numéricos.”",
  "test.name": "Nombre de ejemplo",
  "test.1r": "Líder técnico · Consultoría ambiental",
  "test.2q": "“Lo que más valoré fue la claridad: desde la propuesta supimos qué se iba a entregar, qué no, y por qué.”",
  "test.2r": "Investigadora · Grupo universitario",
  "test.3q": "“Integró un asistente con LLM a nuestro análisis sin amarrarnos a un proveedor. Pasamos a un modelo local sin reescribir nada.”",
  "test.3r": "Gerente de producto · Startup de datos",
  "faq.eyebrow": "Preguntas frecuentes",
  "faq.title": "Antes de escribirme",
  "faq.1q": "¿Puedo usar estos proyectos en mi trabajo?",
  "faq.1a": "Sí. Los proyectos publicados con licencia MIT se pueden usar, modificar y redistribuir, también con fines comerciales, conservando el aviso de licencia. Revisa el archivo LICENSE de cada repositorio.",
  "faq.2q": "¿Están listos para producción?",
  "faq.2a": "Cada tarjeta indica su estado. Los marcados como Alpha o MVP están en desarrollo activo y su API puede cambiar. Si necesitas uno de ellos estable para tu caso, podemos trabajarlo como proyecto.",
  "faq.3q": "¿Puedo contribuir o reportar errores?",
  "faq.3a": "¡Claro! Abre un issue o un pull request en el repositorio. Algunos proyectos tienen una guía CONTRIBUTING.md con los detalles.",
  "faq.4q": "Mi código Fortran es antiguo y nadie lo entiende. ¿Puedes ayudar?",
  "faq.4a": "Es justamente mi especialidad. Primero lo analizo (dependencias, complejidad, riesgos) con herramientas como forti4d y fortriage, y te digo qué conviene modernizar primero. Luego decidimos: envolverlo para usarlo desde Python, refactorizarlo o migrarlo, verificando que los resultados numéricos no cambien.",
  "faq.5q": "¿Cómo se contrata y cuánto cuesta?",
  "faq.5a": "Depende del alcance. Tras una primera conversación te envío una propuesta escrita con precio. Puedes contratarme por Fiverr, que protege el pago para ambas partes, o directamente por correo.",
  "faq.6q": "¿De quién es el código de un proyecto contratado?",
  "faq.6a": "Tuyo. Al terminar y pagar el proyecto, el código es del cliente. Si es confidencial se queda privado; si quieres liberar una parte como código abierto, te ayudo a hacerlo.",
  "c.eyebrow": "Contacto",
  "c.title": "¿Trabajamos juntos?",
  "c.sub": "Cuéntame en pocas líneas qué problema quieres resolver. Te respondo con preguntas concretas o con una propuesta.",
  "c.fiverr": "Contratar un proyecto",
  "c.email": "Correo",
  "footer.top": "Volver arriba ↑"
};
const META = {
  en: { title: document.title, desc: document.querySelector('meta[name="description"]').content,
        theme: 'Toggle dark/light mode', menu: 'Open menu', filters: 'Filter projects' },
  es: { title: "Portafolio open source — Adolfo J. Cardozo S. | AC Scientific Computing",
        desc: "Portafolio de proyectos públicos en GitHub de Adolfo J. Cardozo S.: análisis de Fortran heredado, IA y LLMs, herramientas Python y más.",
        theme: 'Cambiar tema claro/oscuro', menu: 'Abrir menú', filters: 'Filtrar proyectos' }
};
const i18nNodes = document.querySelectorAll('[data-i18n]');
i18nNodes.forEach(el => { el.dataset.en = el.innerHTML; });

function applyLang(lang) {
  i18nNodes.forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = (lang === 'es' && ES[key]) ? ES[key] : el.dataset.en;
  });
  root.setAttribute('lang', lang);
  document.title = META[lang].title;
  document.querySelector('meta[name="description"]').content = META[lang].desc;
  document.getElementById('lang-toggle').querySelectorAll('[data-l]').forEach(s => {
    s.innerHTML = s.dataset.l === lang ? '<b>' + s.dataset.l.toUpperCase() + '</b>' : s.dataset.l.toUpperCase();
  });
  document.getElementById('theme-toggle').setAttribute('aria-label', META[lang].theme);
  document.getElementById('hamburger').setAttribute('aria-label', META[lang].menu);
  document.querySelector('.filters').setAttribute('aria-label', META[lang].filters);
}

if (window.LANG_SWITCH_ENABLED) {
  const langBtn = document.getElementById('lang-toggle');
  langBtn.disabled = false;
  langBtn.title = '';
  langBtn.setAttribute('aria-label', 'Change language / Cambiar idioma');
  langBtn.addEventListener('click', () => {
    const next = root.getAttribute('lang') === 'es' ? 'en' : 'es';
    try { localStorage.setItem('acscicomp-lang', next); } catch (e) {}
    applyLang(next);
  });
  applyLang(root.getAttribute('lang') === 'es' ? 'es' : 'en');
}

/* ── Theme toggle (same key as acscicomp.com) ─────── */
const themeBtn = document.getElementById('theme-toggle');
const STORAGE_KEY = 'acscicomp-theme';
const systemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
}
let savedTheme = null;
try { savedTheme = localStorage.getItem(STORAGE_KEY); } catch (e) {}
applyTheme(savedTheme || systemTheme());
themeBtn.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
  applyTheme(next);
});
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  let s = null; try { s = localStorage.getItem(STORAGE_KEY); } catch (err) {}
  if (!s) applyTheme(e.matches ? 'dark' : 'light');
});

/* ── Mobile menu ──────────────────────────────────── */
const burger = document.getElementById('hamburger');
const links = document.getElementById('nav-links');
burger.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(open));
  burger.textContent = open ? '✕' : '☰';
});
links.addEventListener('click', e => {
  if (e.target.closest('a')) { links.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); burger.textContent = '☰'; }
});

/* ── Project filters ──────────────────────────────── */
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('#projects-grid .project-card');
const moreItems = document.querySelectorAll('#more-list li');
filters.forEach(btn => btn.addEventListener('click', () => {
  const f = btn.dataset.filter;
  filters.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
  let shown = 0;
  cards.forEach(c => {
    const match = f === 'all' || c.dataset.cat.split(' ').includes(f);
    c.hidden = !match; if (match) { shown++; c.classList.add('visible'); }
  });
  let moreShown = 0;
  moreItems.forEach(li => {
    li.hidden = !(f === 'all' || li.dataset.cat.split(' ').includes(f));
    if (!li.hidden) moreShown++;
  });
  ['more-title', 'more-intro'].forEach(id => { document.getElementById(id).hidden = moreShown === 0; });
  document.getElementById('empty').hidden = shown > 0;
}));

/* ── Typewriter (real commands from the projects) ─── */
const lines = [
  'pip install acfortformat',
  'forti4d --project legacy_model/ --output out/',
  'envscout scan ~/projects --parallel',
  'uv run pytest   # odwi-llm',
  'streamlit run streamlit_app.py   # fortriage',
];
const tw = document.getElementById('typewriter');
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  tw.textContent = lines[0];
} else {
  let li = 0, ci = 0, deleting = false;
  (function type() {
    const line = lines[li];
    if (!deleting) {
      tw.textContent = line.slice(0, ++ci);
      if (ci === line.length) { deleting = true; return setTimeout(type, 2200); }
      setTimeout(type, 42);
    } else {
      tw.textContent = line.slice(0, --ci);
      if (ci === 0) { deleting = false; li = (li + 1) % lines.length; return setTimeout(type, 400); }
      setTimeout(type, 18);
    }
  })();
}

/* ── Scroll reveal ────────────────────────────────── */
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}

document.getElementById('year').textContent = new Date().getFullYear();
  
