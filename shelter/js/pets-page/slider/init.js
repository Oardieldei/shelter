import { addCardsToContainer } from "./fill-page.js"
import { getPagesCount } from "./pages-count.js"
import { createSlicedArray } from "./choose-indexes.js"

const sliderContents = document.querySelector('.main__content_wrapper')

export function initSliderRender() {
	sliderContents.innerHTML = ''

	const pagesArary = createSlicedArray()
	for (let i = 0; i < getPagesCount(); i++) {
		const newContainer = document.createElement('div')
		newContainer.classList.add('main__content')
		sliderContents.append(newContainer)
		addCardsToContainer(newContainer, pagesArary[i])
	}
}