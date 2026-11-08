import { createContext, useContext, useEffect, useState } from 'react'

const Ctx = createContext(null)
const load = (key) => {
  try { return JSON.parse(localStorage.getItem(key)) || [] } catch { return [] }
}

export function StoreProvider({ children }) {
  const [favs, setFavs] = useState(() => load('qp-favs'))
  const [cart, setCart] = useState(() => load('qp-cart'))

  useEffect(() => {
    localStorage.setItem('qp-favs', JSON.stringify(favs))
  }, [favs])
  useEffect(() => {
    localStorage.setItem('qp-cart', JSON.stringify(cart))
  }, [cart])

  const same = (x, id, size) => x.id === id && x.size === size
  const toggleFav = (id) => setFavs((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]))
  const addToCart = (id, size) =>
    setCart((c) =>
      c.some((x) => same(x, id, size))
        ? c.map((x) => (same(x, id, size) ? { ...x, qty: x.qty + 1 } : x))
        : [...c, { id, size, qty: 1 }]
    )
  const changeQty = (id, size, d) =>
    setCart((c) => c.map((x) => (same(x, id, size) ? { ...x, qty: x.qty + d } : x)).filter((x) => x.qty > 0))
  const removeItem = (id, size) => setCart((c) => c.filter((x) => !same(x, id, size)))
  const clearCart = () => setCart([])
  const cartCount = cart.reduce((n, x) => n + x.qty, 0)

  return (
    <Ctx.Provider value={{ favs, cart, cartCount, toggleFav, addToCart, changeQty, removeItem, clearCart }}>
      {children}
    </Ctx.Provider>
  )
}

export const useStore = () => useContext(Ctx)
