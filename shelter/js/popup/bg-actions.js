import { closePopups } from "./popup-closer.js"

export function addCloseAction() {
	const bgHider = document.querySelector('.bg-hider')
	bgHider.addEventListener('click', closePopups)
}