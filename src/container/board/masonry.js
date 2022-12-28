import Masonry from 'masonry-layout';
import { toggleSpinner } from '../../component/card/store.js'

setTimeout(window.onload = () => {
   toggleSpinner()
   const board = document.querySelector(".cards-wrapper");

   const masonry = new Masonry(board, {
      itemSelector: ".item-wrapper",
      isFitWidth: true,
   });
}, 2000)