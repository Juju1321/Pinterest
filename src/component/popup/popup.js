// import { createElemetns } from "../../utils/createElemet.js";

// export const popupElement = (element) => {
//     const popupBtn = document.querySelector('.popup')

//     const popupListArr = ['Desk 1', 'Desk 2', 'Desk 3']
//     const listUl = document.createElement('ul')
//     listUl.className = 'popup__list'
//     popupBtn.appendChild(listUl)
//     document.querySelector('.popup__list').hidden = true

//     for (let i = 0; i < popupListArr.length; i++) {
//         let li = document.createElement('li')
//         const linkDesk = createElemetns('a', {
//           href: '#',
//           className: 'popup__item',
//           innerText: popupListArr[i]
//         })
//         li.appendChild(linkDesk)
//         listUl.appendChild(li);
//       };
// }