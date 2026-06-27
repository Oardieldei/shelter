import { addCloseAction } from "./bg-actions.js"
import { addClosingAfterLink, addMovingBurgerUp } from "./burger-actions.js"
import { addClosingByResize } from "./popup-closer.js";

export function popupActions() {
	addCloseAction()
	addClosingAfterLink()
	addMovingBurgerUp()
	addClosingByResize()
}