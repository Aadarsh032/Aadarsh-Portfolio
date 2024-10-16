import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import About from './Components/About/About.jsx'
import Experiences from './Components/Experiences/Experiences.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Headroom from 'react-headroom'


const App = () => {
  return (
    <div>
      <Headroom>
      <Navbar />
      </Headroom>
        <Hero />
        <About />
        <Experiences />
        <Projects />
        <Contact />
      <Footer />
    </div>
  )
}

export default App