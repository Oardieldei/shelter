import { createPetCardElem } from "./create-elem.js"

export function fillPetCardElem(petData) {
	const petCard = createPetCardElem()

	petCard.children[0].src = '.' + petData.img
	petCard.children[1].textContent = petData.name

	return petCard
}