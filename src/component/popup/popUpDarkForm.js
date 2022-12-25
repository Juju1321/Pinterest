import { createElemetns } from "../../utils/createElemet.js";

const container = document.querySelector(".container")

const popUpContainer = createElemetns("div", { className: "spinner" })
popUpContainer.style.display = "none"
container.appendChild(popUpContainer)

export const showPopUp = (elem) => {
   popUpContainer.appendChild(elem)
   popUpContainer.style.display = "flex"
}

export const hidePopUp = () => {
   popUpContainer.style.display = "none"
}

popUpContainer.addEventListener("click", (e) => {
   if (e.target.className === "spinner") {
      hidePopUp()
   }
})
