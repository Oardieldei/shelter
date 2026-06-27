import { getStepWidth } from "./step-width.js"

const sliderContents = document.querySelector('.of__slider__contents')

let currPageNum = 0

export function moveSliderNext() {
	sliderContents.style.transform = `translateX(${getStepWidth() * (--currPageNum) + 'px'})`
}

export function moveSliderPrev() {
	sliderContents.style.transform = `translateX(${getStepWidth() * (++currPageNum) + 'px'})`
}

export function initSliderPage() {
	currPageNum = 0
	sliderContents.style.transform = `translateX(${getStepWidth() * (--currPageNum) + 'px'})`
}