import { addCloseAction } from "./bg-actions.js"
import { addClosingAfterLink, addMovingBurgerUp } from "./burger-actions.js"

export function popupActions() {
	addCloseAction()
	addClosingAfterLink()
	addMovingBurgerUp()
}