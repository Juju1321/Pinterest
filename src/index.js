import { createElemetns } from '../src/utils/createElemet.js'
import { buttonSelectDesk } from './component/button/button.js'
import { data } from './container/dataDesk.js'
import { keys } from './container/menuSelectBoard.js'
import { cards } from './component/card/store.js'
import { renderElem } from './component/card/card.js'
import '../src/container/board/masonry.js'
import './component/form_pin/form_pin.js'



const menu = document.querySelector('.menu')


cards.forEach((element) => {
   renderElem(element)
})

