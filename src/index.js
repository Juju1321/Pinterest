import { createElemetns } from '../src/utils/createElemet.js'
import { buttonSelectDesk } from './component/button/button.js'
import { renderElem } from './component/card/card.js'
import '../src/container/board/masonry.js'
import './component/form_pin/form_pin.js'
import { moduleTitle } from './component/popup/popup.js'
import { getCards } from './api/cards.js'


const menu = document.querySelector('.menu')

// выпадающий список при нажатии кнопки в хедере

const data = {
  'Доска 1': [],
  'Доска 2': [],
  'Доска 3': [],
}
console.log(data)
const keys = Object.keys(data)
const listUl = document.createElement('ul')
listUl.className = 'menu__list'
menu.appendChild(listUl)
document.querySelector('.menu__list').hidden = true
for (let i = 0; i < keys.length; i++) {
  const li = createElemetns('li', {
    className: 'menu__item',
    innerText: keys[i]
  })
  listUl.appendChild(li)
}


//render cards from api
const renderCards = async () => {
  const cards = await getCards()
  cards.forEach((element) => {
    renderElem(element)
  })
}

renderCards()

