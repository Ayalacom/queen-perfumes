import { shop } from '../data/shop.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">{shop.name} · {shop.address}</div>
    </footer>
  )
}
