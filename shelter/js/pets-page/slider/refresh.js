import { moveSliderToFirst } from "./move.js"
import { initSliderRender } from "./init.js"

function refreshSlider() {
	moveSliderToFirst()
	initSliderRender()
}

export function refreshOnChangeWidth() {
	window.addEventListener('resize', refreshSlider)
}