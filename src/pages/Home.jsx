import { Link } from 'react-router-dom'
import { shop } from '../data/shop.js'

export default function Home() {
  return (
    <section className="hero">
      <div className="hero__in">
        <div className="hero__text">
          <p className="hero__kicker">LUXURY PERFUMERY</p>

          <h1>{shop.name}</h1>

          <p className="hero__subtitle">
            {shop.title}
          </p>

          <p className="hero__lead">
            «{shop.tagline}»
          </p>

          <Link to="/women" className="btn">
            Смотреть каталог
            <span> →</span>
          </Link>

          <p className="hero__note">
            FIND YOUR SIGNATURE SCENT
          </p>
        </div>
      </div>
    </section>
  )
}
