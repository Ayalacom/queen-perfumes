import { Link } from 'react-router-dom'
import ProductImage from './ProductImage.jsx'
import { formatPrice, minPrice } from '../utils.js'
import { useStore } from '../store.jsx'
import { scrollMemory } from '../scroll.js'

export default function ProductCard({ p }) {
  const { favs, toggleFav } = useStore()
  const min = minPrice(p)
  const active = favs.includes(p.id)
  return (
    <div className="card">
      <Link
        to={`/perfume/${p.id}`}
        className="card__link"
        onClick={() => { scrollMemory[window.location.pathname] = window.scrollY }}
      >
        <ProductImage src={p.image} alt={`${p.brand} ${p.name}`} />
        <span className="card__brand">{p.brand}</span>
        <span className="card__name">{p.name}</span>
        <span className="card__price">{min ? `от ${formatPrice(min)}` : ''}</span>
      </Link>
      <button
        className="fav"
        aria-pressed={active}
        aria-label={active ? 'Убрать из избранного' : 'Добавить в избранное'}
        onClick={() => toggleFav(p.id)}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.4">
          <path d="M12 20.5s-7.5-4.7-9-9.6A5 5 0 0 1 12 6.6a5 5 0 0 1 9 4.3c-1.5 4.9-9 9.6-9 9.6z" />
        </svg>
      </button>
    </div>
  )
}
