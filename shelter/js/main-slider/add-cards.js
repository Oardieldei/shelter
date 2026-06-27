import { fillPetCardElem } from "../pet-cards/fill-elem.js"
import { getCardsCount } from "./step-width.js"

const response = await fetch('./js/json/pets.json')
const petsArray = await response.json()

export function addCardsToContainer(container, indexes) {
	for (let i = 0; i < getCardsCount(); i++) {
		const newtElem = fillPetCardElem(petsArray[indexes[i]])
		newtElem.dataset.index = indexes[i]
		container.append(newtElem)
	}
}