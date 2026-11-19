import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n.js'
import { applyTheme, getTheme } from './theme.js'
import App from './App.jsx'

applyTheme(getTheme())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
