import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { perfumes } from '../data/perfumes.js'
import { useStore } from '../store.jsx'

export default function Favorites() {
  const { favs } = useStore()
  const items = perfumes.filter((p) => favs.includes(p.id))
  return (
    <section className="container page">
      <h1 className="page__title">Избранное</h1>
      {items.length ? (
        <div className="grid">{items.map((p) => <ProductCard key={p.id} p={p} />)}</div>
      ) : (
        <p className="muted">Здесь пока пусто. Нажмите на сердечко у аромата, чтобы сохранить его. <Link to="/women"><u>В каталог</u></Link></p>
      )}
    </section>
  )
}
