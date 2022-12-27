import { renderElem } from "../component/card/card.js"
import { createElemetns } from "../utils/createElemet.js"
import { cards } from "../component/card/store.js"
import { data } from "./dataDesk.js"




const menu = document.querySelector('.menu')
export const keys = Object.keys(data)
const listUl = document.createElement('ul')
listUl.className = 'menu__list'
menu.appendChild(listUl)
document.querySelector('.menu__list').hidden = true
keys.forEach(key => {
   const itemli = createElemetns('li', {
      className: 'menu__item',
      innerText: key
   })
   listUl.appendChild(itemli)

   itemli.id = key
   const popUpBoard = createElemetns('div', {
      className: 'popup__board',
      innerText: 'Доска'
   })
   itemli.appendChild(popUpBoard)
   popUpBoard.style.display = 'none'

   itemli.addEventListener('click', (e) => {
      popUpBoard.style.display = 'flex'
      const target = data[key]
      showPopUp(popUpBoard)
      renderElem(target)
      console.log(target)
      console.log(data)
   })
})


//popUp for board

const popUpContainer = createElemetns('div', {
   className: 'popup__bg'
})
popUpContainer.style.display = 'none'
main.appendChild(popUpContainer)

export const showPopUp = (element, rem) => {
   popUpContainer.style.display = 'flex'
   popUpContainer.appendChild(element)

}

export const hidePopUp = (cards) => {
   popUpContainer.style.display = 'none'
}
popUpContainer.addEventListener('click', hidePopUp)

