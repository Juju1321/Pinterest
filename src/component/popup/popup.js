import { createElemetns } from '../../utils/createElemet.js'
import { data } from '../../container/dataDesk.js'
import { renderElem } from '../card/card.js'
import { cardsStore } from '../card/store.js'




export const addModuleMenuDesks = createElemetns('div', {
   className: 'add-module__menu'
})

addModuleMenuDesks.addEventListener('click', (e) => {
   e.stopPropagation()
})

export const moduleTitle = createElemetns('div', {
   className: 'module-menu__title',
   innerText: 'Выберите доску'
})
addModuleMenuDesks.appendChild(moduleTitle)

const buttonAll = createElemetns('div', {
   className: 'all__desks'
})
addModuleMenuDesks.appendChild(buttonAll)




Object.keys(data).forEach(key => {
   const buttonAddDeskItem = createElemetns('button', {
      className: 'desk__one',
      innerText: key
   })
   buttonAll.appendChild(buttonAddDeskItem)
   buttonAddDeskItem.id = key


   buttonAddDeskItem.addEventListener('click', (e) => {
      data[key].push(cardsStore.cardForAdding)
      console.log(data)
   })
})



//popup

const main = document.getElementById('main')

const popUpContainer = createElemetns('div', {
   className: 'popup__bg'
})
popUpContainer.style.display = 'none'
main.appendChild(popUpContainer)

export const showPopUp = (element, remove) => {
   popUpContainer.style.display = 'flex'
   if (document.querySelector('.form-wrapper')) {
      popUpContainer.appendChild(element)
      popUpContainer.removeChild(remove)
   } else {
      popUpContainer.appendChild(remove)
      popUpContainer.appendChild(element)
      popUpContainer.removeChild(remove)
   }
}

export const hidePopUp = () => {
   popUpContainer.style.display = 'none'
}

popUpContainer.addEventListener('click', hidePopUp)

addModuleMenuDesks.addEventListener('click', hidePopUp)


