import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation, useNavigationType } from 'react-router-dom'
import { scrollMemory } from './scroll.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Catalog from './pages/Catalog.jsx'
import Product from './pages/Product.jsx'
import Contacts from './pages/Contacts.jsx'
import Favorites from './pages/Favorites.jsx'
import Cart from './pages/Cart.jsx'

if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'

function ScrollToTop() {
  const { pathname } = useLocation()
  const type = useNavigationType()
  const prev = useRef(null)
  useEffect(() => {
    if (prev.current === pathname) return
    const y = scrollMemory[pathname]
    const fromProduct = prev.current && prev.current.startsWith('/perfume/')
    prev.current = pathname

    if (y != null && (fromProduct || type === 'POP')) {
      let tries = 0
      let raf
      const restore = () => {
        window.scrollTo(0, y)
        if (Math.abs(window.scrollY - y) > 2 && tries++ < 40) raf = requestAnimationFrame(restore)
      }
      restore()
      return () => cancelAnimationFrame(raf)
    }
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/women" element={<Catalog gender="women" />} />
          <Route path="/men" element={<Catalog gender="men" />} />
          <Route path="/unisex" element={<Catalog gender="unisex" />} />
          <Route path="/copy" element={<Catalog gender="copy" />} />
          <Route path="/perfume/:id" element={<Product />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
