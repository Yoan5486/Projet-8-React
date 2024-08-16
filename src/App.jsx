import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Error404 from './pages/Error404'
import Header from './components/Header'
import Footer from './components/Footer'

function AppRouter ()  {
   return (
    <>
    <Header />
    <main>
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
      </Routes>
    </main>
    <Footer />
  </>
  )
}
export default AppRouter;
