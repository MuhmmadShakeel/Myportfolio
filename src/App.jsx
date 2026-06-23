import './App.css'
import Navbar from './component/common/Navbar'
import HomePage from './pages/HomePage'
import Footer from './component/common/Footer'
import WhatsApp from './component/common/WhatsApp'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import SkillPage from './pages/SkillPage'
import Experiencepage from './pages/Experiencepage'
import ProjectPage from './pages/ProjectPage'

function App() {

  return (
    <>
      <BrowserRouter>

        <Navbar/>

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/skills" element={<SkillPage/>} />
          <Route path="/experience" element={<Experiencepage/>} />
          <Route path="/projects" element={<ProjectPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        <Footer/>
        <WhatsApp/>
      </BrowserRouter>
    </>
  )
}

export default App