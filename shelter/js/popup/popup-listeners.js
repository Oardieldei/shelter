import { openGoodPopup } from "./popup-open.js"

const slider = document.querySelector('.of__slider__contents')

export function createListenerForOpenPopup() {
	slider.addEventListener('click', (event) => {
		const card = event.target.closest('.pet-card')

		if (!card) return

		const index = Number(card.dataset.index)

		openGoodPopup(index)
	})
}