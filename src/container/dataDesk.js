export let data = {
   'Доска 1': [],
   'Доска 2': [],
   'Доска 3': [],
}
if (localStorage.getItem("data") === null) {
   localStorage.setItem("data", JSON.stringify(data))
}
data = JSON.parse(localStorage.getItem('data'))
console.log(data)