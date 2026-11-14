// Sets the theme before first paint to avoid a flash of the wrong theme.
// Kept as an external file (not inline) so the Content-Security-Policy in
// public/_headers can use script-src 'self' without hashes or 'unsafe-inline'.
;(function () {
  try {
    var key = 'portfolio-theme'
    var stored = null
    try {
      stored = localStorage.getItem(key)
    } catch (e) {}
    var theme =
      stored === 'light' || stored === 'dark'
        ? stored
        : window.matchMedia('(prefers-color-scheme: light)').matches
          ? 'light'
          : 'dark'
    document.documentElement.dataset.theme = theme
  } catch (e) {}
})()
