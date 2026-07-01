import { moveSliderToFirst } from "./move.js"
import { initSliderRender } from "./init.js"

const tabletPage = window.matchMedia('(768px <= width <= 1279px)')
const desktopPage = window.matchMedia('(1280px <= width)')

function refreshSlider() {
	moveSliderToFirst()
	initSliderRender()
}

export function refreshOnChangeWidth() {
	desktopPage.addEventListener('change', refreshSlider)
	tabletPage.addEventListener('change', refreshSlider)
	window.addEventListener('resize', refreshSlider)
}