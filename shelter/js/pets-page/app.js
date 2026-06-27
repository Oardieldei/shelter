import { popupActions } from "../popup/popup.js"
import { goSliderGo } from "./slider/slider.js"

export function runApp() {
	popupActions()
	goSliderGo()
}
