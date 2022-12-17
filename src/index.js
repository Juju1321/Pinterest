import { createElemetns } from '../src/utils/createElemet.js'
import { buttonSelectDesk } from './component/button/button.js'
import { cards } from './container/board/board.js'
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

