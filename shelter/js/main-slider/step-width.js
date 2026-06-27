let stepWidth = 0
const highGap = 90
const lowGap = 40
const cardWidth = 270

const tabletPage = window.matchMedia('(768px <= width <= 1279px)')
const desktopPage = window.matchMedia('(1280px <= width)')

let cardsCount = desktopPage.matches ? 3 : tabletPage.matches ? 2 : 1

function calculateStepWidth() {	
	if (desktopPage.matches) {
		cardsCount = 3
		stepWidth = (cardWidth + highGap) * cardsCount
	} else if (tabletPage.matches) {
		cardsCount = 2
		stepWidth = (cardWidth + lowGap) * cardsCount
	} else {
		cardsCount = 1
		stepWidth = cardWidth + lowGap
	}	
}

export function stepWidthListener() {
	calculateStepWidth()
	desktopPage.addEventListener('change', calculateStepWidth)
	tabletPage.addEventListener('change', calculateStepWidth)
}

export function getStepWidth() {
	return stepWidth
}

export function getCardsCount() {
	return cardsCount
}