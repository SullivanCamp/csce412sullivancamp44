// js/toggle-style.js
(function () {
  const STYLES = {
    A: "StyleA.css",
    B: "StyleB.css",
  };

  function applySavedStyle() {
    const linkEl = document.getElementById("themeStylesheet");
    if (!linkEl) return;

    const saved = localStorage.getItem("siteStyle");
    if (saved === "B") linkEl.setAttribute("href", STYLES.B);
    else linkEl.setAttribute("href", STYLES.A);
  }

  function toggleStyle() {
    const linkEl = document.getElementById("themeStylesheet");
    if (!linkEl) return;

    const currentHref = linkEl.getAttribute("href");
    const next = currentHref === STYLES.A ? "B" : "A";

    linkEl.setAttribute("href", next === "B" ? STYLES.B : STYLES.A);
    localStorage.setItem("siteStyle", next);
  }

  document.addEventListener("DOMContentLoaded", function () {
    applySavedStyle();

    const btn = document.getElementById("styleToggleBtn");
    if (btn) btn.addEventListener("click", toggleStyle);
  });
})();
