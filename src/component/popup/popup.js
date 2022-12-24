import { createElemetns } from '../../utils/createElemet.js'

// const addModuleMenuDesks = document.querySelector('.add-module__menu')
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


// import { createElemetns } from "../../utils/createElemet.js";

// export const popupElement = (element) => {
//     const popupBtn = document.querySelector('.popup')

//     const popupListArr = ['Desk 1', 'Desk 2', 'Desk 3']
//     const listUl = document.createElement('ul')
//     listUl.className = 'popup__list'
//     popupBtn.appendChild(listUl)
//     document.querySelector('.popup__list').hidden = true

//     for (let i = 0; i < popupListArr.length; i++) {
//         let li = document.createElement('li')
//         const linkDesk = createElemetns('a', {
//           href: '#',
//           className: 'popup__item',
//           innerText: popupListArr[i]
//         })
//         li.appendChild(linkDesk)
//         listUl.appendChild(li);
//       };
// }


//popup

const main = document.getElementById('main')

const popUpContainer = createElemetns('div', {
   className: 'popup__bg'
})
popUpContainer.style.display = 'none'
main.appendChild(popUpContainer)

export const showPopUp = (element, remove) => {
   popUpContainer.appendChild(element)
   popUpContainer.style.display = 'flex'
   popUpContainer.removeChild(remove)
}

export const hidePopUp = (cards) => {
   popUpContainer.style.display = 'none'
}

popUpContainer.addEventListener('click', hidePopUp)
