import { createElemetns } from "../../utils/createElemet.js";
import { popupElement } from '../popup/popup.js'

export const renderElem = (element) => {
  const root = document.querySelector('.cards-wrapper')
  const { avatarSrc, text, imageSrc } = element;

  const card = createElemetns("div", {
    className: "item-wrapper",
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
  const buttonWrapper = createElemetns('div' , {
    className: "button-wrapper",
  })
  imgWrapper.appendChild(buttonWrapper);

  const buttonShowd = createElemetns('div', {
    className: 'button-showd',
  })
  buttonWrapper.appendChild(buttonShowd);

  const menuDots = createElemetns('div', {
    className: 'menuDots',
  })
  buttonShowd.appendChild(menuDots);

  const dots = createElemetns('div' , {
    className: 'dots',
  })
  menuDots.appendChild(dots)

  const menuCards = createElemetns('div', {
    className: 'menu__cards',
  })
  imgWrapper.appendChild(menuCards)

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

  const menuList = [
    {
      id: 1,
      innerHTML: 'Добавить на доску'
    },

    {
      id: 2,
      innerHTML: 'Пожаловаться'
    }
  ]

  const renderMenuList = (elem) => {
    const {innerHTML} = elem

    const menuItemCard = createElemetns('li', {
      className: 'menu__item-card',
      innerHTML: innerHTML,
    })
    menuListCards.appendChild(menuItemCard)
  }

  menuList.forEach(elem => {
    renderMenuList(elem)
  })

  menuDots.addEventListener('click', () => {
    menuCards.style.display = 'flex', 
    menuCards.style.flexDirection = 'column'
  })
}