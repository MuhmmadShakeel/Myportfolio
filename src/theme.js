const storageKey = 'portfolio-theme'

export function getTheme() {
  try {
    return localStorage.getItem(storageKey) === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme

  try {
    localStorage.setItem(storageKey, theme)
  } catch {
    // The theme can still change when browser storage is unavailable.
  }
}
