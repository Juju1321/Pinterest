export const renderElem = (element) => {
  const root = document.querySelector('.cards-wrapper')
  const { avatarSrc, text, imageSrc } = element;

  const card = document.createElement('div');
  card.className = 'item-wrapper';
  root.appendChild(card);

  const imgWrapper = document.createElement('div');
  imgWrapper.className = 'picture-wrapper';
  card.appendChild(imgWrapper);

  const picture = document.createElement('img');
  picture.src = imageSrc;
  picture.className = 'picture';
  imgWrapper.appendChild(picture);

  const cardDetails = document.createElement('div');
  cardDetails.className = 'card-details';
  card.appendChild(cardDetails);

  const userAvatar = document.createElement('img');
  userAvatar.src = avatarSrc;
  cardDetails.appendChild(userAvatar);

  const imgDescription = document.createElement('div');
  imgDescription.innerHTML = text;
  imgDescription.className = 'card-description__text';
  cardDetails.appendChild(imgDescription);
}

