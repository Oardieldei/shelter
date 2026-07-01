import { goToNext } from "./arrow-next.js"
import { goToPrev } from "./arrow-prev.js"

const arrowsDiv = document.querySelectorAll('.of__slider__arrow')

export function arrowsActions() {
	arrowsDiv[1].addEventListener('click', goToNext)
	arrowsDiv[0].addEventListener('click', goToPrev)
}