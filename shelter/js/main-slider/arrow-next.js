import { removeTransition, addTransition } from "./transitions.js"
import { moveSliderNext, moveSliderPrev } from "./move.js"
import { moveLeftInd, getNextPageInd } from "./choose-cards.js"
import { addCardsToContainer } from "./add-cards.js"

const sliderContents = document.querySelector('.of__slider__contents')
let isAnimated = false

export function goToNext() {
	if (isAnimated) return
	isAnimated = true
	addTransition()
	moveSliderNext()
	sliderContents.addEventListener('transitionend', afterTransitionEnd)	
}

function afterTransitionEnd() {	
	removeTransition()
	moveLeftInd()
	addNextPage()
	removeBadPage()
	moveSliderPrev()
	sliderContents.removeEventListener('transitionend', afterTransitionEnd)
	isAnimated = false
}

function addNextPage() {
	const newContainer = document.createElement('div')
	newContainer.classList.add('of__slider__content')
	addCardsToContainer(newContainer, getNextPageInd())
	sliderContents.append(newContainer)
}

function removeBadPage() {
	const badPage = sliderContents.children[0]
	sliderContents.removeChild(badPage)
}