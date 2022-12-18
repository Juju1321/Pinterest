import { createElemetns } from "../../utils/createElemet.js";

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
}
