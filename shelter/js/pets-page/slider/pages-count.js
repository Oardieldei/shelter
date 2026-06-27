const tabletPage = window.matchMedia('(768px <= width <= 1279px)')
const desktopPage = window.matchMedia('(1280px <= width)')

let cardsPerPage = desktopPage.matches ? 8 : tabletPage.matches ? 6 : 3
let pagesCount = 48 / cardsPerPage

export function getCardsPerPage() {
	return cardsPerPage
}

export function getPagesCount() {
	return pagesCount
}

function changeCounters() {
	cardsPerPage = desktopPage.matches ? 8 : tabletPage.matches ? 6 : 3
	pagesCount = 48 / cardsPerPage
}

export function pagesCountChanger() {
	desktopPage.addEventListener('change', changeCounters)
	tabletPage.addEventListener('change', changeCounters)
}