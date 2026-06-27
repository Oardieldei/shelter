const popupItem = document.querySelector('.popup')
const popupImage = popupItem.querySelector('.popup__image')
const popupName = popupItem.querySelector('.popup__content__titles_name')
const popupType = popupItem.querySelector('.popup__content__titles_type')
const popupDescription = popupItem.querySelector('.popup__content__description')
const popupAge = popupItem.querySelector('.popup__content_list').children[0].children[1]
const popupInoculations = popupItem.querySelector('.popup__content_list').children[1].children[1]
const popupDiseases = popupItem.querySelector('.popup__content_list').children[2].children[1]
const popupParasites = popupItem.querySelector('.popup__content_list').children[3].children[1]

const response = await fetch('../js/json/pets.json')
const petsArray = await response.json()

export function changePopup(n) {
	const choosenPet = petsArray[n]

	popupImage.src = choosenPet.img
	popupName.textContent = choosenPet.name
	popupType.textContent = choosenPet.type + ' - ' + choosenPet.breed
	popupDescription.textContent = choosenPet.description
	popupAge.textContent = choosenPet.age

	popupInoculations.textContent = choosenPet.inoculations.join(', ')
	popupDiseases.textContent = choosenPet.diseases.join(', ')
	popupParasites.textContent = choosenPet.parasites.join(', ')
}