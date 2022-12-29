import { createElemetns } from "../../utils/createElemet.js";
import { hidePopUp } from "../popup/popup.js";

export const formWrapper = createElemetns("div", {
   className: 'form-wrapper'
})

formWrapper.addEventListener('click', (e) => {
   e.stopPropagation()
})

const form = createElemetns("form", {
   className: "form",
   action: "#",
})

const formName = createElemetns("p", {
   className: "form__name",
   textContent: "Жалоба на пин",
})

const formControl = createElemetns("div", {
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
   const formControlRadio = createElemetns("div", {
      className: "form__control-radio",
   })
   const formInput = createElemetns("input", {
      className: "form__input",
      type: "radio",
      name: "pin",
   })
   const formLabelRadio = createElemetns("label", {
      className: "form__label-radio",
      for: "pin",
      textContent: item.textLabel,
   })
   const formInputText = createElemetns("p", {
      className: "form__input_text",
      textContent: item.text,
   })

   formControl.appendChild(formControlRadio)
   formControlRadio.appendChild(formInput)
   formControlRadio.appendChild(formLabelRadio)
   formControlRadio.appendChild(formInputText)
})

const buttons = createElemetns("div", {
   className: "buttons",
})
const btnChancel = createElemetns("button", {
   className: "form_btn",
   textContent: "Отмена"
})

btnChancel.addEventListener('click', hidePopUp)

const btnSend = createElemetns("button", {
   className: "form_btn",
   className: "red_btn",
   type: "submit",
   textContent: "Oтправить",
})

async function btnClickHandler(e) {
   e.preventDefault();

   let response = await fetch('https://jsonplaceholder.typicode.com/guide/', {
      method: 'POST',
      body: new FormData(form)
   });

   let result = await response.json();
   alert(result.message);
   form.reset();
};

btnSend.addEventListener("click", btnClickHandler)

form.appendChild(buttons)
buttons.appendChild(btnChancel)
buttons.appendChild(btnSend)
