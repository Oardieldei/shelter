import { popupActions } from "./popup/popup.js"
import { giveSliderPower } from "./main-slider/slider.js"

export function runApp() {
	popupActions()
	giveSliderPower()
}