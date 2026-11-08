import { shop } from './data/shop.js'
import { perfumes } from './data/perfumes.js'

export const formatPrice = (v) => (v ? `${Number(v).toLocaleString('ru-RU')} ${shop.currency}` : null)

export const minPrice = (p) => {
  const values = Object.values(p.prices || {}).filter(Boolean)
  return values.length ? Math.min(...values) : null
}

export function orderLink(p, size) {
  const price = size ? formatPrice(p.prices?.[size]) : null
  const text =
    `Здравствуйте! Хочу заказать парфюм:\n` +
    `Название: ${p.brand} — ${p.name}\n` +
    `Объём: ${size ? size + ' мл' : 'уточню'}\n` +
    `Цена: ${price || 'уточните, пожалуйста'}`
  return `https://wa.me/${shop.whatsapp}?text=${encodeURIComponent(text)}`
}

export function cartTotal(cart) {
  let total = 0
  let unknown = 0
  cart.forEach((i) => {
    const unit = perfumes.find((p) => p.id === i.id)?.prices?.[i.size]
    if (unit) total += unit * i.qty
    else unknown += 1
  })
  return { total, unknown }
}

export function cartOrderLink(cart) {
  const lines = cart.map((i, n) => {
    const p = perfumes.find((x) => x.id === i.id)
    if (!p) return ''
    const unit = p.prices?.[i.size]
    return `${n + 1}. ${p.brand} — ${p.name}, ${i.size} мл, ${i.qty} шт., ${unit ? formatPrice(unit * i.qty) : 'цену уточните'}`
  })
  const { total, unknown } = cartTotal(cart)
  const sum = total > 0 ? formatPrice(total) + (unknown ? ' + позиции с уточняемой ценой' : '') : 'уточните, пожалуйста'
  const text = `Здравствуйте! Хочу оформить заказ:\n${lines.join('\n')}\nИтого: ${sum}`
  return `https://wa.me/${shop.whatsapp}?text=${encodeURIComponent(text)}`
}

export const contactLink = () =>
  `https://wa.me/${shop.whatsapp}?text=${encodeURIComponent('Здравствуйте! Пишу из каталога QUEEN PERFUMES.')}`
