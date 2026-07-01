import { changePopup } from "./popup-changer.js"
import { openPopup } from "./popup-show.js"

export function openGoodPopup(n) {
	changePopup(n)
	openPopup()
}