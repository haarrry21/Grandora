import React from 'react'
import './App.css'
import Nav from './Components/Nav/Nav.jsx'
import Header from './Components/Header/Header.jsx'
import About from './Components/About/About.jsx'
import Services from './Components/Services/Services.jsx'
import Rooms from './Components/Rooms/Rooms.jsx'
import Amenities from './Components/Aminities/Aminities.jsx'
import Testimonials from './Components/Testimonials/Testimonials.jsx'
import Footer from './Components/Footer/Footer.jsx'

const App = () => {
  return (
    <main className="app">
      <Nav />
      <Header />
      <About />
      <Services />
      <Rooms />
      <Amenities />
      <Testimonials />
      <Footer /> 
    </main>
  )
}

export default App
