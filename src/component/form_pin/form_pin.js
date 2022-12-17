import { createElements } from "../../utils/createElemet.js"

const formWrapper = document.getElementById("form-wrapper")
const createElement = (tag, options) => {
   const elem = document.createElement(tag)
   Object.keys(options).forEach(item => {
      elem[item] = options[item]
   })
   return elem
}
const form = createElement("form", {
   className: "form",
   action: "#",
})

const formName = createElement("p", {
   className: "form__name",
   textContent: "Жалоба на пин",
})

const formControl = createElement("div", {
   className: "form__control",
})
formWrapper.appendChild(form)
form.appendChild(formName)
form.appendChild(formControl)


const formText = [
   {
      id: 0,
      textLabel: "Спам",
      text: "Вводящие в заблуждение или повторяющиеся публикации"
   },
   {
      id: 1,
      textLabel: "Изображения обнаженного тела или порнография",
      text: "Содержимое сексуального характера"
   },
   {
      id: 2,
      textLabel: "Членовредительство",
      text: "Расстройства пищевого поведения, нанесение травм себе, суицид"
   },
   {
      id: 3,
      textLabel: "Ложная информация",
      text: "Ложная информация о здоровье, климате, голосованиях или теории заговора"
   },
   {
      id: 4,
      textLabel: "Агрессивные действия",
      text: "Предрассудки, стереотипы, идея превосходства белой расы, оскорбления"
   },
   {
      id: 5,
      textLabel: "Опасные товары",
      text: "Наркотики, оружие, регулируемые товары"
   },
   {
      id: 6,
      textLabel: "Нарушение конфиденциальности",
      text: "Личные фотографии, персональная информация"
   },
   {
      id: 7,
      textLabel: "Преследование или критика",
      text: "Оскорбления, угрозы, изображения обнаженного тела, опубликованные без разрешения"
   },
   {
      id: 8,
      textLabel: "Сцены насилия",
      text: "Графическое изображение или пропаганда насилия"
   },
   {
      id: 9,
      textLabel: "Это моя интеллектуальная собственность",
      text: "Нарушение авторских прав или прав на товарный знак"
   },
]
formText.forEach(item => {
   const formControlRadio = createElement("div", {
      className: "form__control-radio",
   })
   const formInput = createElement("input", {
      className: "form__input",
      type: "radio",
      name: "pin",
   })
   const formLabelRadio = createElement("label", {
      className: "form__label-radio",
      for: "pin",
      textContent: item.textLabel,
   })
   const formInputText = createElement("p", {
      className: "form__input_text",
      textContent: item.text,
   })

   formControl.appendChild(formControlRadio)
   formControlRadio.appendChild(formInput)
   formControlRadio.appendChild(formLabelRadio)
   formControlRadio.appendChild(formInputText)
})


const buttons = createElement("div", {
   className: "buttons",
})
const btnChancel = createElement("button", {
   className: "form_btn",
   textContent: "Отмена"
})

// const chancelBtnClickHandler = (elem) => {
//    e.currentTarget.formInput
// }

// btnChancel.addEventListener("click", () => {
//    chancelBtnClickHandler('pin')
// })

const btnSend = createElement("button", {
   className: "form_btn",
   type: "submit",
   textContent: "Oтправить"
})

// const sendlBtnClickHandler = (elem) => {
//   
// }

// btnSend.addEventListener("click", () => {
//    sendlBtnClickHandler()
// })

form.appendChild(buttons)
buttons.appendChild(btnChancel)
buttons.appendChild(btnSend)