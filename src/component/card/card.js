import { createElemetns } from "../../utils/createElemet.js";
import { popupElement } from '../popup/popup.js'
import { showPopUp } from "../popup/popup.js";
import { addModuleMenuDesks } from "../popup/popup.js";
import { formWrapper } from "../form_pin/form_pin.js";
import { data } from '../../container/dataDesk.js'
import { cardsStore } from './store.js'



export const renderElem = (element) => {
   const root = document.querySelector('.cards-wrapper')
   const { id, avatarSrc, text, imageSrc } = element;

   const card = createElemetns("div", {
      className: "item-wrapper",
      id: id
   })
   root.appendChild(card);


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


   // menu под картинкой

   const menuCard = createElemetns('div', {
      className: 'menu-cards__elem'
   })
   imgWrapper.appendChild(menuCard);

   const buttonWrapper = createElemetns('div', {
      className: "button-wrapper",
   })
   menuCard.appendChild(buttonWrapper);

   const buttonShowd = createElemetns('div', {
      className: 'button-showd',
   })
   buttonWrapper.appendChild(buttonShowd);

   const menuDots = createElemetns('div', {
      className: 'menuDots',
   })
   buttonShowd.appendChild(menuDots);


   const dots = createElemetns('div', {
      className: 'dots',
   })
   menuDots.appendChild(dots)

   const menuCards = createElemetns('div', {
      className: 'menu__cards',
   })
   menuCard.appendChild(menuCards)

   const menuTitle = createElemetns('p', {
      className: 'menu__title',
      innerHTML: 'Этот пин похож на те, которые вы недавно просматривали'
   })
   menuCards.appendChild(menuTitle)

   const cardsMenu = createElemetns('div', {
      className: 'cards__menu',
   })
   menuCards.appendChild(cardsMenu)

   const menuListCards = createElemetns('ul', {
      className: 'menu__list-card',
   })
   cardsMenu.appendChild(menuListCards)

   const menuItemCardFirst = createElemetns('li', {
      className: 'menu__item-card',
      id: 1,
      innerHTML: 'Добавить на доску'
   })
   menuListCards.appendChild(menuItemCardFirst)


   menuItemCardFirst.addEventListener('click', () => {
      showPopUp(addModuleMenuDesks, formWrapper)
   })

   const menuItemCardLast = createElemetns('li', {
      className: 'menu__item-card',
      id: 2,
      innerHTML: 'Пожаловаться'
   })
   menuListCards.appendChild(menuItemCardLast)

   menuItemCardLast.addEventListener('click', () => {
      showPopUp(formWrapper, addModuleMenuDesks)
   })




   menuDots.addEventListener('click', (e) => {
      menuCard.classList.toggle('open')
   })
   window.addEventListener('click', e => {
      const target = e.target
      if (!target.closest('.menuDots')) {
         menuCard.classList.remove('open')
      }
   })





   menuDots.addEventListener('click', (e) => {
      const getItem = cardsStore.cards.find(item => item.id == id)
      console.log(getItem)
      cardsStore.setCardsForAdding(getItem)
      return getItem
   })

}




