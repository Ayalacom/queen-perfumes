import { shop } from './shop.js'

/*
  ЦЕНЫ (примерные, поменяйте на свои).
  byMl(900) = цена за 1 мл 900 ₸. Цены для всех объёмов считаются сами:
  маленькие объёмы чуть дороже за мл, большие чуть дешевле. Результат округляется до 100 ₸.
  Чтобы задать цены вручную, замените byMl(900) на { 3: 3000, 5: 5000, 10: 9000, ... }
*/
const factor = (s) => (s <= 5 ? 1.25 : s <= 10 ? 1.1 : s <= 20 ? 1 : s <= 30 ? 0.95 : 0.9)
const byMl = (perMl) =>
  Object.fromEntries(shop.sizes.map((s) => [s, Math.round((s * perMl * factor(s)) / 100) * 100]))

/*
  КАК ДОБАВИТЬ / ИЗМЕНИТЬ АРОМАТ
  1. Скопируйте любой блок { ... } и вставьте ниже, не забыв запятую.
  2. gender: 'women' или 'men'.
  3. image: положите фото в папку public/images и укажите имя файла.
  4. prices: впишите цену для нужного объёма, например prices: { 3: 5000, 5: 8000, 10: 15000 }
     Если цена не указана, покупателю покажется «уточните цену».
*/
export const perfumes = [
  {
    id: 'good-girl-gone-bad', gender: 'women', brand: 'By Kilian', name: 'Good Girl Gone Bad',
    direction: 'Фруктово-цветочный',
    notes: ['Жасмин', 'Майская роза', 'Османтус', 'Тубероза', 'Нарцисс', 'Амбра'],
    description: 'Нежный, соблазнительный цветочный аромат с выразительным и запоминающимся характером.',
    image: '/images/good-girl-gone-bad.jpg', prices: byMl(2600),
  },
  {
    id: 'coco-mademoiselle', gender: 'women', brand: 'Chanel', name: 'Coco Mademoiselle',
    direction: 'Восточно-цветочный',
    notes: ['Апельсин', 'Бергамот', 'Жасмин', 'Роза', 'Пачули', 'Ветивер', 'Ваниль'],
    description: 'Свежий цитрус в начале и тёплый шлейф пачули. Уверенный, элегантный аромат на каждый день.',
    image: '/images/coco-mademoiselle.jpg', prices: byMl(1000),
  },
  {
    id: 'libre', gender: 'women', brand: 'Yves Saint Laurent', name: 'Libre',
    direction: 'Цветочно-ванильный',
    notes: ['Лаванда', 'Мандарин', 'Флёрдоранж', 'Жасмин', 'Ваниль', 'Амбра'],
    description: 'Лаванда в сочетании с цветами и ванилью: свободный, смелый и тёплый аромат.',
    image: '/images/libre.jpg', prices: byMl(900),
  },
  {
    id: 'la-vie-est-belle', gender: 'women', brand: 'Lancôme', name: 'La Vie Est Belle',
    direction: 'Сладко-цветочный',
    notes: ['Ирис', 'Груша', 'Чёрная смородина', 'Пачули', 'Пралине', 'Ваниль'],
    description: 'Сладкое пралине и нежный ирис создают уютный, радостный и очень женственный аромат.',
    image: '/images/la-vie-est-belle.jpg', prices: byMl(800),
  },
  {
    id: 'jadore', gender: 'women', brand: 'Dior', name: "J'adore",
    direction: 'Цветочно-фруктовый',
    notes: ['Иланг-иланг', 'Роза', 'Жасмин', 'Персик', 'Груша', 'Мускус'],
    description: 'Классический букет белых цветов: яркий, светлый и безупречно женственный.',
    image: '/images/jadore.jpg', prices: byMl(900),
  },
  {
    id: 'sauvage', gender: 'men', brand: 'Dior', name: 'Sauvage',
    direction: 'Свежий пряный',
    notes: ['Бергамот', 'Перец', 'Лаванда', 'Амброксан'],
    description: 'Свежий, открытый и энергичный мужской аромат с заметным шлейфом.',
    image: '/images/sauvage.jpg', prices: byMl(900),
  },
  {
    id: 'bleu-de-chanel', gender: 'men', brand: 'Chanel', name: 'Bleu de Chanel',
    direction: 'Древесно-ароматический',
    notes: ['Цитрусы', 'Мята', 'Грейпфрут', 'Ладан', 'Кедр', 'Сандал'],
    description: 'Сдержанный и благородный аромат: цитрус, мята и сухое благородное дерево.',
    image: '/images/bleu-de-chanel.jpg', prices: byMl(1000),
  },
  {
    id: '1-million', gender: 'men', brand: 'Paco Rabanne', name: '1 Million',
    direction: 'Сладко-пряный',
    notes: ['Грейпфрут', 'Мята', 'Мандарин', 'Корица', 'Роза', 'Кожа', 'Амбра'],
    description: 'Насыщенный сладко-пряный аромат с кожей и амброй, созданный привлекать внимание.',
    image: '/images/1-million.jpg', prices: byMl(800),
  },
  {
    id: 'acqua-di-gio', gender: 'men', brand: 'Giorgio Armani', name: 'Acqua di Giò',
    direction: 'Морской свежий',
    notes: ['Морские ноты', 'Бергамот', 'Жасмин', 'Розмарин', 'Пачули'],
    description: 'Лёгкий аромат морского бриза, удобный для ежедневного использования.',
    image: '/images/acqua-di-gio.jpg', prices: byMl(800),
  },
]
