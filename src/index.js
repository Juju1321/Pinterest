import { createElemetns } from '../src/utils/createElemet.js'
import { buttonSelectDesk } from './component/button/button.js'
import { cards } from './component/card/store.js'
import { renderElem } from './component/card/card.js'
import '../src/container/board/masonry.js'
import './component/form_pin/form_pin.js'
import { moduleTitle } from './component/popup/popup.js'


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

cards.forEach((element) => {
   renderElem(element)
})

//get input
let searc = document.getElementById("search");
//get list of value
let list = document.querySelectorAll(".item-wrapper");

//function search on the list.
function search (){
  for(let i = 0; i < cards.length; i += 1){
   //check if the element contains the value of the input
   if(list[i].innerText.toLowerCase().includes(searc.value.toLowerCase())){
      list[i].style.display = "block";
   } else{
      list[i].style.display = "none";
   }
  }
}

//to the change run search.
searc.addEventListener('input', search);