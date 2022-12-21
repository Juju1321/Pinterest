import { createElemetns } from '../../utils/createElemet.js'

const addModuleMenuDesks = document.querySelector('.add-module__menu')

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


