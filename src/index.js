import { createElemetns } from '../src/utils/createElemet.js'
import { buttonSelectDesk } from './component/button/button.js'
import { data } from './container/dataDesk.js'
import { cards } from './component/card/store.js'
import { renderElem } from './component/card/card.js'
import '../src/container/board/masonry.js'
import './component/form_pin/form_pin.js'
import { moduleTitle } from './component/popup/popup.js'


const menu = document.querySelector('.menu')


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

cards.forEach((element) => {
   renderElem(element)
})

