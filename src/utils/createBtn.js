import { createElemetns } from './createElemet.js'

export const button = (textContent, className, onClick) => {
   const btn = createElemetns("button", {
      textContent: textContent,
      className: className,
   })

   btn.addEventListener("click", onClick)
   return btn
}