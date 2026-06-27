import { getPagesCount } from "./pages-count.js"

const sliderWrapper = document.querySelector('.main__content_wrapper')
const paginationContainer = document.querySelector('.main__pagination')
const goFirstPage = paginationContainer.children[0]
const goPrevPage = paginationContainer.children[1]
const paginationPage = paginationContainer.children[2]
const goNextPage = paginationContainer.children[3]
const goLastPage = paginationContainer.children[4]

let currPageNum = 0

export function moveSliderNext() {
	if (currPageNum === 0) {
		goFirstPage.classList.remove('pagination-inactive')
		goPrevPage.classList.remove('pagination-inactive')
	}
	if (currPageNum !== getPagesCount() - 1) {
		sliderWrapper.style.transform = `translateX(${(sliderWrapper.offsetWidth + 40) * (-(++currPageNum)) + 'px'})`
		paginationPage.textContent = currPageNum + 1
	}
	if (currPageNum + 1 === getPagesCount()) {
		goNextPage.classList.add('pagination-inactive')
		goLastPage.classList.add('pagination-inactive')
	}
}

export function moveSliderPrev() {
	if (currPageNum + 1 === getPagesCount()) {
		goNextPage.classList.remove('pagination-inactive')
		goLastPage.classList.remove('pagination-inactive')
	}
	if (currPageNum !== 0) {
		sliderWrapper.style.transform = `translateX(${(sliderWrapper.offsetWidth + 40) * (-(--currPageNum)) + 'px'})`
		paginationPage.textContent = currPageNum + 1
	}
	if (currPageNum === 0) {
		goFirstPage.classList.add('pagination-inactive')
		goPrevPage.classList.add('pagination-inactive')
	}
}

export function moveSliderToFirst() {
	currPageNum = 0
	sliderWrapper.style.transform = `translateX(0)`
	paginationPage.textContent = currPageNum + 1
	goFirstPage.classList.add('pagination-inactive')
	goPrevPage.classList.add('pagination-inactive')
	goNextPage.classList.remove('pagination-inactive')
	goLastPage.classList.remove('pagination-inactive')
}

export function moveSliderToLast() {
	currPageNum = getPagesCount()
	sliderWrapper.style.transform = `translateX(${(sliderWrapper.offsetWidth + 40) * (-(--currPageNum)) + 'px'})`
	paginationPage.textContent = currPageNum + 1
	goNextPage.classList.add('pagination-inactive')
	goLastPage.classList.add('pagination-inactive')
	goFirstPage.classList.remove('pagination-inactive')
	goPrevPage.classList.remove('pagination-inactive')
}