import { createElemetns } from '../src/utils/createElemet.js'
import { buttonSelectDesk } from './component/button/button.js'
import { cards } from './component/card/store.js'
import { renderElem } from './component/card/card.js'
import '../src/container/board/masonry.js'
import './component/form_pin/form_pin.js'
import { moduleTitle } from './component/popup/popup.js'


const menu = document.querySelector('.menu')

// выпадающийй список при нажатии кнопки в хедере
const menuListArr = ['Desk 1', 'Desk 2', 'Desk 3']
const listUl = document.createElement('ul')
listUl.className = 'menu__list'
menu.appendChild(listUl)
document.querySelector('.menu__list').hidden = true

for (let i = 0; i < menuListArr.length; i++) {
   let li = document.createElement('li')
   const linkDesk = createElemetns('a', {
      href: '#',
      className: 'menu__item',
      innerText: menuListArr[i]
   })
   li.appendChild(linkDesk)
   listUl.appendChild(li);
};

cards.forEach((element) => {
   renderElem(element)
})

