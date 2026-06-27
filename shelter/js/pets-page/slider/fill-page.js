import { fillPetCardElem } from "../../pet-cards/fill-elem.js"
import { getCardsPerPage } from "./pages-count.js"

const response = await fetch('../js/json/pets.json')
const petsArray = await response.json()

export function addCardsToContainer(container, indexes) {
	for (let i = 0; i < getCardsPerPage(); i++) {
		const newtElem = fillPetCardElem(petsArray[indexes[i]])
		newtElem.dataset.index = indexes[i]
		container.append(newtElem)
	}
}