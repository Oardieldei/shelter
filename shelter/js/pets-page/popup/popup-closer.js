const burgerCheckbox = document.querySelector('.burger_checkbox')
const popupItem = document.querySelector('.popup')
const popupCloseIcon = popupItem.querySelector('.popup__close_icon')

export function closePopups() {
	burgerCheckbox.checked = false
	popupItem.classList.remove('popup-show')
}

export function addClosings() {
	window.addEventListener('resize', closePopups)
	popupCloseIcon.addEventListener('click', closePopups)
}