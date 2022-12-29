import { createElemetns } from '../../utils/createElemet.js'
//  button  в хедере
const menu = document.querySelector('.menu')
export const buttonSelectDesk = createElemetns('button', {
   className: 'menu__button',

})
menu.appendChild(buttonSelectDesk)
const spanButtonText = createElemetns('span', {
   innerText: 'Выбрать доску',
})
buttonSelectDesk.appendChild(spanButtonText)
let buttonElem = menu.querySelector('.menu__button');
buttonElem.addEventListener('click', () => {
   menu.classList.toggle('open');
})

window.addEventListener('click', e => {
   const target = e.target
   if (!target.closest('.menu')) {
      menu.classList.remove('open')
   }
})