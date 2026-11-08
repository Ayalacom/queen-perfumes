import { Link } from 'react-router-dom'
import ProductImage from '../components/ProductImage.jsx'
import { shop } from '../data/shop.js'
import { perfumes } from '../data/perfumes.js'

export default function Home() {
  const count = (g) => perfumes.filter((p) => p.gender === g).length
  return (
    <>
      <section className="hero">
        <div className="container hero__in">
          <div className="hero__text">
            <h1>{shop.name}</h1>
            <p className="hero__kicker">{shop.title}</p>
            <p className="hero__lead">«{shop.tagline}».</p>
            <Link to="/women" className="btn">Смотреть каталог</Link>
          </div>
          <ProductImage src="/images/hero.jpg" alt="Парфюм QUEEN PERFUMES" className="hero__img" />
        </div>
      </section>
      <section className="container cats">
        <Link to="/women" className="cats__row"><b>Женские ароматы</b><span>{count('women')}</span></Link>
        <Link to="/men" className="cats__row"><b>Мужские ароматы</b><span>{count('men')}</span></Link>
      </section>
    </>
  )
}
