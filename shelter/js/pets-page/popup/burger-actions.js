import { closePopups } from "./popup-closer.js"

const burgerCheckbox = document.querySelector('.burger_checkbox')

export function addClosingAfterLink() {
	const navLinks = document.querySelectorAll('.nav__link')
	for (let i = 0; i < navLinks.length; i++) {
		navLinks[i].addEventListener('click', closePopups)
	}
}
function moveBugerUp() {
	window.scrollTo({
  	top: 0,
  	behavior: 'smooth'
	})
}

export function addMovingBurgerUp() {
	burgerCheckbox.addEventListener('click', moveBugerUp)
}