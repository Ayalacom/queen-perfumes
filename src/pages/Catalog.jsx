import ProductCard from '../components/ProductCard.jsx'
import { perfumes } from '../data/perfumes.js'

export default function Catalog({ gender }) {
  const title = gender === 'women' ? 'Женские ароматы' : 'Мужские ароматы'
  const items = perfumes.filter((p) => p.gender === gender)
  return (
    <section className="container page">
      <h1 className="page__title">{title}</h1>
      <p className="muted">Нажмите на фото, чтобы открыть описание</p>
      <div className="grid">
        {items.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>
    </section>
  )
}
