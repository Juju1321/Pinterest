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

  const buttonWrapper = createElemetns('div' , {
    className: "button-wrapper",
  })
  imgWrapper.appendChild(buttonWrapper);

  const buttonShowd = createElemetns('div', {
    className: 'button-showd',
  })
  buttonWrapper.appendChild(buttonShowd);

  const buttonSave = createElemetns('button', {
    className: 'button-save',
    textContent: 'Сохранить ',
  })
  buttonShowd.appendChild(buttonSave);

  const buttonMore = createElemetns('button', {
    className: 'popup',
  })
  buttonShowd.appendChild(buttonMore);
  buttonMore.addEventListener('click', () => {
    popup.classList.toggle('open');
  });

  // const popupBtn = document.querySelector('.popup')

  //   const popupListArr = ['Desk 1', 'Desk 2', 'Desk 3']
  //   const listUl = document.createElement('ul')
  //   listUl.className = 'popup__list'
  //   popupBtn.appendChild(listUl)
  //   document.querySelector('.popup__list').hidden = true

  //   for (let i = 0; i < popupListArr.length; i++) {
  //       let li = document.createElement('li')
  //       const linkDesk = createElemetns('a', {
  //         href: '#',
  //         className: 'popup__item',
  //         innerText: popupListArr[i]
  //       })
  //       li.appendChild(linkDesk)
  //       listUl.appendChild(li);
  //   };
}