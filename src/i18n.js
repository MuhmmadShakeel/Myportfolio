import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ar from './locales/ar.json'
import ur from './locales/ur.json'

const languageKey = 'portfolio-language'
const resources = { en: { translation: {} }, ur: { translation: ur }, ar: { translation: ar } }
const supportedLngs = Object.keys(resources)
const metadata = [...document.querySelectorAll('meta[name="description"], meta[property="og:title"], meta[property="og:description"]')]
  .map((element) => ({ element, english: element.content }))
const englishTitle = document.title

function readLanguage() {
  try {
    const stored = localStorage.getItem(languageKey)
    return supportedLngs.includes(stored) ? stored : 'en'
  } catch {
    return 'en'
  }
}

i18n.on('languageChanged', (language) => {
  document.documentElement.lang = language
  document.documentElement.dir = i18n.dir(language)
  document.title = i18n.t(englishTitle)
  metadata.forEach(({ element, english }) => {
    element.content = i18n.t(english)
  })

  try {
    localStorage.setItem(languageKey, language)
  } catch {
    // The language still changes when browser storage is unavailable.
  }
})

i18n.use(initReactI18next).init({
  resources,
  lng: readLanguage(),
  fallbackLng: 'en',
  supportedLngs,
  initAsync: false,
  keySeparator: false,
  nsSeparator: false,
  interpolation: { escapeValue: false },
})
