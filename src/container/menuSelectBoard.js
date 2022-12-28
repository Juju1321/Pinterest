import { renderElem } from "../component/card/card.js"
import { createElemetns } from "../utils/createElemet.js"
import { cardsStore } from "../component/card/store.js"
import { data } from "./dataDesk.js"




const menu = document.querySelector('.menu')


//popUp for board

const popUpContainer = createElemetns('div', {
   className: 'popup__bg'
})
popUpContainer.style.display = 'none'
main.appendChild(popUpContainer)

const showPopUp = (element) => {
   popUpContainer.style.display = 'flex'
   popUpContainer.appendChild(element)
}

const hidePopUp = () => {
   popUpContainer.style.display = 'none'
   const popUpChild = document.querySelector('.popup__board')
   console.log(popUpChild)
   popUpContainer.removeChild(popUpChild)
}


popUpContainer.addEventListener('click', (e) => {
   if (e.target.className === "popup__bg") {
      hidePopUp()
   }
})



//выпадающее меню "Выберите доску"

export const keys = Object.keys(data)
const listUl = document.createElement('ul')
listUl.className = 'menu__list'
menu.appendChild(listUl)
document.querySelector('.menu__list').hidden = true


keys.forEach(key => {
   const itemli = createElemetns('li', {
      className: 'menu__item',
      innerText: key
   })
   listUl.appendChild(itemli)
   itemli.id = key






   //  Модальное окно "Доска"
   const popUpBoard = createElemetns('div', {
      className: 'popup__board',
      innerText: 'Доска'
   })
   itemli.appendChild(popUpBoard)

   const picWrapper = createElemetns('div', {
      className: 'picture__wrapper'
   })
   popUpBoard.style.display = 'none'
   popUpBoard.appendChild(picWrapper)
   popUpContainer.appendChild(popUpBoard)


   // Рендер карточек в доску
   const newElem = (elem) => {
      const { id, avatarSrc, text, imageSrc } = elem;
      const card = createElemetns("div", {
         className: "item-wrapper",
         id: id
      })
      picWrapper.appendChild(card);

      const imgWrapper = createElemetns("div", {
         className: "picture-wrapper",
      })
      card.appendChild(imgWrapper);

      const picture = createElemetns("img", {
         className: "picture",
         src: imageSrc,
      })
      imgWrapper.appendChild(picture);

      const cardDetails = createElemetns("div", {
         className: "card-details",
      })
      card.appendChild(cardDetails);

      const userAvatar = createElemetns("img", {
         src: avatarSrc,
      })
      cardDetails.appendChild(userAvatar);

      const imgDescription = createElemetns("div", {
         className: "card-description__text",
         innerHTML: text,
      })
      cardDetails.appendChild(imgDescription);
   }



   // отображение карточек при клике 

   itemli.addEventListener('click', (e) => {
      const target = data[key]
      console.log(target)
      target.forEach((element) => {
         newElem(element)
      })
      popUpBoard.style.display = 'flex'
      showPopUp(popUpBoard)
   })
})




