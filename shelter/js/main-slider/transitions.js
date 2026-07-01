const sliderContents = document.querySelector('.of__slider__contents')

export function addTransition() {
	sliderContents.style.transition = '.3s ease'
}
export function removeTransition() {
	sliderContents.style.transition = 'none'
}