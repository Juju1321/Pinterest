export const cardsStore = {
   cards: [],

   cardForAdding: {},

   getCards: function () {

      return fetch('https://63a215d7ba35b96522efbca1.mockapi.io/pins')
         .then(data => data.json())
         .then(data => {
            this.cards = data
            console.log(this.cards = data)
            return data
         })
   },

   setCardsForAdding: function (card) {
      this.cardForAdding = card
   },

}
export const toggleSpinner = () => {
   const spinner = document.getElementById("spinner")
   if (spinner.style.display === "flex") {
      spinner.style.display = "none"
   } else {
      spinner.style.display = "flex"
   }
}


