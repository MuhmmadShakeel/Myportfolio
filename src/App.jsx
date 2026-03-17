import './App.css'
import Navbar from './component/common/Navbar'
import HomePage from './pages/HomePage'
import Footer from './component/common/Footer'
import AboutPage from './pages/AboutPage'

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>

        <Navbar/>

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
        </Routes>

        <Footer/>

      </BrowserRouter>
    </>
  )
}

export default App