import { stepWidthListener } from "./step-width.js"
import { renderSlider } from "./render.js"
import { arrowsActions } from "./arrows-actions.js"
import { refreshOnChangeWidth } from "./refresh.js"

export function giveSliderPower() {
	stepWidthListener()
	renderSlider()
	arrowsActions()
	refreshOnChangeWidth()
}