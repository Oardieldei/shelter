import { openGoodPopup } from "./popup-open.js"

const slider = document.querySelector('.main__content_wrapper')

export function createListenerForOpenPopup() {
	slider.addEventListener('click', (event) => {
		const card = event.target.closest('.pet-card')

		if (!card) return

		const index = Number(card.dataset.index)

		openGoodPopup(index)
	})
}