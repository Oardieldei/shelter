import { refreshCurrInd } from "./choose-cards.js"
import { renderSlider } from "./render.js"

const tabletPage = window.matchMedia('(768px <= width <= 1279px)')
const desktopPage = window.matchMedia('(1280px <= width)')

function refreshSlider() {
	refreshCurrInd()
	renderSlider()
}

export function refreshOnChangeWidth() {
	desktopPage.addEventListener('change', refreshSlider)
	tabletPage.addEventListener('change', refreshSlider)
	window.addEventListener('resize', refreshSlider)
}