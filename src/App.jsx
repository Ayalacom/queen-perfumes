import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Catalog from './pages/Catalog.jsx'
import Product from './pages/Product.jsx'
import Contacts from './pages/Contacts.jsx'
import Favorites from './pages/Favorites.jsx'
import Cart from './pages/Cart.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
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
