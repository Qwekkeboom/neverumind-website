/* NeverUmind — minimal JS: theme switch + theme-color sync */
(function () {
  /* ---------- Theme toggle ---------- */
  var themeBtn = document.querySelector("[data-theme-toggle]");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var root = document.documentElement;
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("neverumind-theme", next); } catch (e) {}
      updateThemeColor(next);
    });
  }

  // Keep theme in sync across tabs (e.g. NL -> EN navigation)
  window.addEventListener("storage", function (e) {
    if (e.key === "neverumind-theme" && e.newValue) {
      document.documentElement.setAttribute("data-theme", e.newValue);
      updateThemeColor(e.newValue);
    }
  });

  // Sync theme-color meta with whatever was applied in <head>
  updateThemeColor(document.documentElement.getAttribute("data-theme"));

  function updateThemeColor(theme) {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;
    meta.setAttribute("content", theme === "dark" ? "#14100c" : "#d2551b");
  }
})();
