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
          {shop.categories.map((c) => <NavLink key={c.key} to={c.path}>{c.nav}</NavLink>)}
          <NavLink to="/favorites">Избранное{favs.length ? ` (${favs.length})` : ''}</NavLink>
          <NavLink to="/cart">Корзина{cartCount ? ` (${cartCount})` : ''}</NavLink>
          <NavLink to="/contacts">Контакты</NavLink>
        </nav>
      </div>
    </header>
  )
}
