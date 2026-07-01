export function createPetCardElem() {
	const newCard = document.createElement('div')
	newCard.classList.add('of__slider__item')
	newCard.classList.add('pet-card')

	const newCardImage = document.createElement('img')
	newCardImage.classList.add('of__slider__item_image')
	newCard.append(newCardImage)

	const newCardName = document.createElement('span')
	newCardName.classList.add('of__slider__item_name')
	newCardName.classList.add('pet-card_name')
	newCard.append(newCardName)

	const newCadButton = document.createElement('div')
	newCadButton.classList.add('of__slider__item_btn')
	newCadButton.classList.add('btn-border')
	newCadButton.textContent = 'Learn more'
	newCard.append(newCadButton)

	return newCard
}