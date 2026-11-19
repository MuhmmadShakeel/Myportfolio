import { useTranslation } from "react-i18next"
import './App.css'
import { lazy, Suspense } from 'react'
import Navbar from './component/common/Navbar'
import HomePage from './pages/HomePage'
import Footer from './component/common/Footer'
import WhatsApp from './component/common/WhatsApp'

import { BrowserRouter, Routes, Route } from "react-router-dom"
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const SkillPage = lazy(() => import('./pages/SkillPage'))
const Experiencepage = lazy(() => import('./pages/Experiencepage'))
const ProjectPage = lazy(() => import('./pages/ProjectPage'))

function App() {
  const { t } = useTranslation()

  return (
    <>
      <BrowserRouter>

        <Navbar/>

        <Suspense fallback={<div role="status" className="min-h-svh bg-[#080c11] light:bg-[#eef7f1] px-6 py-20 text-center text-emerald-200 light:text-emerald-800">{t("Loading page…")}</div>}>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/skills" element={<SkillPage/>} />
          <Route path="/experience" element={<Experiencepage/>} />
          <Route path="/projects" element={<ProjectPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        </Suspense>
        <Footer/>
        <WhatsApp/>
      </BrowserRouter>
    </>
  )
}

export default App
