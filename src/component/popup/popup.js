import { createElemetns } from '../../utils/createElemet.js'

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
const buttonAddDeskOne = createElemetns('button', {
   className: 'desk__one',
   innerText: 'Доска 1'
})
buttonAll.appendChild(buttonAddDeskOne)
const buttonAddDeskTwo = createElemetns('button', {
   className: 'desk__two',
   innerText: 'Доска 2'
})
buttonAll.appendChild(buttonAddDeskTwo)

const buttonAddDeskThree = createElemetns('button', {
   className: 'desk__three',
   innerText: 'Доска 3'
})
buttonAll.appendChild(buttonAddDeskThree)

//popup

const main = document.getElementById('main')

const popUpContainer = createElemetns('div', {
   className: 'popup__bg'
})
popUpContainer.style.display = 'none'
main.appendChild(popUpContainer)

export const showPopUp = (element, remove) => {
   popUpContainer.style.display = 'flex'
   if(document.querySelector('.form-wrapper') && document.querySelector('.addModuleMenuDesks')){
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
