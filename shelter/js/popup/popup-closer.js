const burgerCheckbox = document.querySelector('.burger_checkbox')

export function closePopups() {
	burgerCheckbox.checked = false
}

export function addClosingByResize() {
	window.addEventListener('resize', closePopups)
}