import { shop } from '../data/shop.js'
import { contactLink } from '../utils.js'

export default function Contacts() {
  return (
    <section className="container page contacts">
      <h1 className="page__title">{shop.name}</h1>
      <dl className="facts">
        <div><dt>Адрес</dt><dd>{shop.address}</dd></div>
        <div><dt>Телефон</dt><dd><a href={`tel:${shop.phoneLink}`}>{shop.phoneDisplay}</a></dd></div>
        <div><dt>WhatsApp</dt><dd>{shop.whatsappDisplay}</dd></div>
      </dl>
      <a className="btn" href={contactLink()} target="_blank" rel="noopener noreferrer">Написать в WhatsApp</a>
    </section>
  )
}
