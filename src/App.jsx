 
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error404 from './pages/Error404'
import Header from './components/Header'
import Footer from './components/Footer'
import Logement from './pages/Logement'
import "./styles/style.css" 

function AppRouter ()  {
   return (
    <>
    <Header />
    <main>
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error404 />} />
          <Route path ="/Logement" element={<Logement />} />
      </Routes>
    </main>
    <Footer />
  </>
  )
}
export default AppRouter;