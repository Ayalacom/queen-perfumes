import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProductImage from '../components/ProductImage.jsx'
import { perfumes } from '../data/perfumes.js'
import { shop } from '../data/shop.js'
import { formatPrice, orderLink } from '../utils.js'
import { useStore } from '../store.jsx'

export default function Product() {
  const { id } = useParams()
  const { favs, toggleFav, addToCart } = useStore()
  const [size, setSize] = useState(null)
  const [added, setAdded] = useState(false)
  const p = perfumes.find((x) => x.id === id)
  if (!p) return <Navigate to="/" replace />

  const price = size ? formatPrice(p.prices?.[size]) : null
  const back = p.gender === 'women' ? '/women' : '/men'
  const isFav = favs.includes(p.id)

  return (
    <section className="container page product">
      <Link to={back} className="back">← Назад к каталогу</Link>
      <div className="product__in">
        <ProductImage src={p.image} alt={`${p.brand} ${p.name}`} className="product__img" />
        <div>
          <span className="card__brand">{p.brand}</span>
          <h1 className="product__name">{p.name}</h1>
          <dl className="facts">
            <div><dt>Направление</dt><dd>{p.direction}</dd></div>
            <div><dt>Ноты</dt><dd>{p.notes.join(', ')}</dd></div>
            <div><dt>Описание</dt><dd>{p.description}</dd></div>
          </dl>
          <p className="label">Объём</p>
          <div className="sizes">
            {shop.sizes.map((s) => (
              <button key={s} className="size" aria-pressed={s === size} onClick={() => { setSize(s); setAdded(false) }}>{s} мл</button>
            ))}
          </div>
          <p className="price">
            {size ? (price ? `${price} / ${size} мл` : <span className="muted">{size} мл — уточняйте цену в WhatsApp</span>) : <span className="muted">Выберите объём</span>}
          </p>
          <button className="btn btn--block" disabled={!size} onClick={() => { addToCart(p.id, size); setAdded(true) }}>
            {size ? 'Добавить в корзину' : 'Выберите объём'}
          </button>
          {added && <p className="added">Добавлено в корзину. <Link to="/cart">Перейти в корзину</Link></p>}
          <a className="btn btn--line btn--block" href={orderLink(p, size)} target="_blank" rel="noopener noreferrer">Заказать сразу через WhatsApp</a>
          <button className="btn btn--line btn--block" onClick={() => toggleFav(p.id)}>
            {isFav ? 'Убрать из избранного' : 'Добавить в избранное'}
          </button>
        </div>
      </div>
    </section>
  )
}
