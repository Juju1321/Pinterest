import { createElemetns } from '../src/utils/createElemet.js'
import { buttonSelectDesk } from './component/button/button.js'
import { data } from './container/dataDesk.js'
import { keys } from './container/menuSelectBoard.js'
import { cardsStore } from './component/card/store.js'
import { card } from './component/card/store.js'
import { renderElem } from './component/card/card.js'
import '../src/container/board/masonry.js'
import './component/form_pin/form_pin.js'



const menu = document.querySelector('.menu')


const renderCards = async () => {
   const cards = await cardsStore.getCards()
   cards.forEach((element) => {
      renderElem(element)
   })
}

renderCards()

//get input
let searc = document.getElementById("search");
//get list of value
let list = document.querySelectorAll(".item-wrapper");

//function search on the list.
function search (){
  for(let i = 0; i < card.length; i += 1){
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