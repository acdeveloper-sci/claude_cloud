/* Runs in <head>, before first paint.
   Same storage keys as acscicomp.com, so choices carry over under the same domain. */

/* Language switch: off until acscicomp.com has its Spanish version.
   Set to true to enable it (Spanish texts are in assets/js/main.js). */
window.LANG_SWITCH_ENABLED = true;

(function () {
  try {
    var t = localStorage.getItem('acscicomp-theme');
    if (t) document.documentElement.setAttribute('data-theme', t);
    if (window.LANG_SWITCH_ENABLED) {
      var l = localStorage.getItem('acscicomp-lang');
      if (l) document.documentElement.setAttribute('lang', l);
    }
  } catch (e) {}
})();
