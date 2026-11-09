import ProductCard from '../components/ProductCard.jsx'
import { perfumes } from '../data/perfumes.js'
import { shop } from '../data/shop.js'

export default function Catalog({ gender }) {
  const cat = shop.categories.find((c) => c.key === gender)
  const items = perfumes.filter((p) => p.gender === gender)
  return (
    <div className={cat.dark ? 'dark-page' : ''}>
      <section className="container page">
        <h1 className="page__title">{cat.title}</h1>
        <p className="muted">{cat.note ? `${cat.note}. ` : ''}Нажмите на фото, чтобы открыть описание</p>
        <div className="grid">
          {items.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>
    </div>
  )
}
