import { removeTransition } from "./transitions.js"
import { initSliderPage } from "./move.js"
import { getNextPageInd, getPrevPageInd } from "./choose-cards.js"
import { addCardsToContainer } from "./add-cards.js"

const sliderContents = document.querySelector('.of__slider__contents')

export function renderSlider() {
	const sliderPages = sliderContents.querySelectorAll('.of__slider__content')
	const sliderPrevPage = sliderPages[0]
	const sliderCurrPage = sliderPages[1]
	const sliderNextPage = sliderPages[2]

	removeTransition()
	sliderPrevPage.innerHTML = ''
	sliderCurrPage.innerHTML = ''
	sliderNextPage.innerHTML = ''
	initSliderPage()

	addCardsToContainer(sliderCurrPage, [4, 0, 2])
	addCardsToContainer(sliderPrevPage, getPrevPageInd())
	addCardsToContainer(sliderNextPage, getNextPageInd())
}