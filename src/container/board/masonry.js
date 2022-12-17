import Masonry from 'masonry-layout';

window.onload = () => {
   const board = document.querySelector(".cards-wrapper");

   const masonry = new Masonry(board, {
      itemSelector: ".item-wrapper",
      isFitWidth: true,
   });
};
