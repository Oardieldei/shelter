import { moveSliderNext, moveSliderPrev, moveSliderToFirst, moveSliderToLast } from "./move.js"

const paginationContainer = document.querySelector('.main__pagination')
const goFirstPage = paginationContainer.children[0]
const goPrevPage = paginationContainer.children[1]
const goNextPage = paginationContainer.children[3]
const goLastPage = paginationContainer.children[4]

export function paginationActions() {
	goFirstPage.addEventListener('click', moveSliderToFirst)
	goPrevPage.addEventListener('click', moveSliderPrev)
	goNextPage.addEventListener('click', moveSliderNext)
	goLastPage.addEventListener('click', moveSliderToLast)
}