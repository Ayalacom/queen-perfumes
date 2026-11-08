import { Link } from 'react-router-dom'
import { perfumes } from '../data/perfumes.js'
import { shop } from '../data/shop.js'
import { formatPrice, cartTotal, cartOrderLink } from '../utils.js'
import { useStore } from '../store.jsx'

export default function Cart() {
  const { cart, changeQty, removeItem, clearCart } = useStore()
  const rows = cart.map((i) => ({ ...i, p: perfumes.find((x) => x.id === i.id) })).filter((r) => r.p)
  const { total, unknown } = cartTotal(cart)

  if (!rows.length) {
    return (
      <section className="container page">
        <h1 className="page__title">Корзина</h1>
        <p className="muted">Корзина пуста. <Link to="/women"><u>Выбрать аромат</u></Link></p>
      </section>
    )
  }

  return (
    <section className="container page cart">
      <h1 className="page__title">Корзина</h1>
      <div className="cart__list">
        {rows.map((r) => {
          const unit = r.p.prices?.[r.size]
          return (
            <div className="cart__row" key={r.id + '-' + r.size}>
              <div>
                <Link to={`/perfume/${r.id}`} className="cart__name">{r.p.name}</Link>
                <span className="muted">{r.p.brand} · {r.size} мл</span>
              </div>
              <div className="cart__ctl">
                <button onClick={() => changeQty(r.id, r.size, -1)} aria-label="Меньше">−</button>
                <span>{r.qty}</span>
                <button onClick={() => changeQty(r.id, r.size, 1)} aria-label="Больше">+</button>
              </div>
              <div className="cart__sum">{unit ? formatPrice(unit * r.qty) : <span className="muted">цена уточняется</span>}</div>
              <button className="cart__del" onClick={() => removeItem(r.id, r.size)}>Удалить</button>
            </div>
          )
        })}
      </div>
      <p className="cart__total">
        {total > 0 ? `Итого: ${formatPrice(total)}` : 'Итого: уточняется'}
        {unknown > 0 && total > 0 && <span className="muted"> + позиции с уточняемой ценой</span>}
      </p>
      <a className="btn btn--block" href={cartOrderLink(cart)} target="_blank" rel="noopener noreferrer">Оформить заказ в WhatsApp</a>
      {(shop.paymentLink || shop.paymentNote) && (
        <div className="pay">
          <p className="label">Оплата</p>
          {shop.paymentNote && <p>{shop.paymentNote}</p>}
          {shop.paymentLink && (
            <a className="btn btn--line btn--block" href={shop.paymentLink} target="_blank" rel="noopener noreferrer">Оплатить онлайн</a>
          )}
        </div>
      )}
      <button className="btn btn--line btn--block" onClick={clearCart}>Очистить корзину</button>
    </section>
  )
}
