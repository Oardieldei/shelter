import { removeTransition, addTransition } from "./transitions.js"
import { moveSliderNext, moveSliderPrev } from "./move.js"
import { moveRightInd, getPrevPageInd } from "./choose-cards.js"
import { addCardsToContainer } from "./add-cards.js"

const sliderContents = document.querySelector('.of__slider__contents')
let isAnimated = false

export function goToPrev() {
	if (isAnimated) return
	isAnimated = true
	addTransition()
	moveSliderPrev()
	sliderContents.addEventListener('transitionend', afterTransitionEnd)	
}

function afterTransitionEnd() {	
	removeTransition()
	moveRightInd()
	removeBadPage()
	addPrevPage()	
	moveSliderNext()
	sliderContents.removeEventListener('transitionend', afterTransitionEnd)
	isAnimated = false
}

function addPrevPage() {
	const newContainer = document.createElement('div')
	newContainer.classList.add('of__slider__content')
	addCardsToContainer(newContainer, getPrevPageInd())
	sliderContents.prepend(newContainer)
}

function removeBadPage() {
	const badPage = sliderContents.children[2]
	sliderContents.removeChild(badPage)
}