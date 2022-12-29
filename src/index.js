import { createElemetns } from '../src/utils/createElemet.js'
import { buttonSelectDesk } from './component/button/button.js'
import { data } from './container/dataDesk.js'
import { keys } from './container/menuSelectBoard.js'
import { cardsStore } from './component/card/store.js'
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




