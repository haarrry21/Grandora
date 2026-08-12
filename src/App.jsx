import { useEffect, useState } from 'react'
import './App.css'
import Nav from './Components/Nav/Nav.jsx'
import Header from './Components/Header/Header.jsx'
import About from './Components/About/About.jsx'
import Services from './Components/Services/Services.jsx'
import Rooms from './Components/Rooms/Rooms.jsx'
import Amenities from './Components/Aminities/Aminities.jsx'
import Testimonials from './Components/Testimonials/Testimonials.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Booking from './Components/Booking/Booking.jsx'
import Blog from './Components/Blog/Blog.jsx'

const App = () => {
  const [view, setView] = useState(() => {
    if (window.location.hash === '#booking') return 'booking'
    if (window.location.hash === '#blog') return 'blog'
    return 'home'
  })

  useEffect(() => {
    const syncView = () => {
      if (window.location.hash === '#booking') {
        setView('booking')
        return
      }

      if (window.location.hash === '#blog') {
        setView('blog')
        return
      }

      setView('home')
    }

    window.addEventListener('hashchange', syncView)
    syncView()

    return () => window.removeEventListener('hashchange', syncView)
  }, [])

  const openBooking = () => {
    window.location.hash = '#booking'
  }

  const openBlog = () => {
    window.location.hash = '#blog'
  }

  const openHome = () => {
    window.location.hash = '#home'
  }

  if (view === 'booking') {
    return <Booking onBackHome={openHome} />
  }

  if (view === 'blog') {
    return <Blog onBackHome={openHome} />
  }

  return (
    <main className="app">
      <Nav onBookClick={openBooking} onBlogClick={openBlog} />
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
