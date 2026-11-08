import { Link, NavLink } from 'react-router-dom'
import { shop } from '../data/shop.js'
import { useStore } from '../store.jsx'

export default function Header() {
  const { favs, cartCount } = useStore()
  return (
    <header className="header">
      <div className="container header__in">
        <Link to="/" className="logo">{shop.name}</Link>
        <nav className="nav">
          <NavLink to="/" end>Главная</NavLink>
          <NavLink to="/women">Женские</NavLink>
          <NavLink to="/men">Мужские</NavLink>
          <NavLink to="/favorites">Избранное{favs.length ? ` (${favs.length})` : ''}</NavLink>
          <NavLink to="/cart">Корзина{cartCount ? ` (${cartCount})` : ''}</NavLink>
          <NavLink to="/contacts">Контакты</NavLink>
        </nav>
      </div>
    </header>
  )
}
