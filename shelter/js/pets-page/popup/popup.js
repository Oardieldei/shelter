import { addCloseAction } from "./bg-actions.js"
import { addClosingAfterLink, addMovingBurgerUp } from "./burger-actions.js"
import { addClosings } from "./popup-closer.js"
import { createListenerForOpenPopup } from "./popup-listeners.js"

export function popupActions() {
	addCloseAction()
	addClosingAfterLink()
	addMovingBurgerUp()
	addClosings()
	createListenerForOpenPopup()
}