import { getCardsCount } from "./step-width.js"

const indexes = [0, 1, 2, 3, 4, 5, 6, 7]
let currPageInd = [4, 0, 2]
currPageInd.length = getCardsCount()
let nextPageInd = chooseNextPage()
let prevPageInd = chooseNextPage()

export function refreshCurrInd() {
	currPageInd = [4, 0, 2]
	currPageInd.length = getCardsCount()
	nextPageInd = chooseNextPage()
	prevPageInd = chooseNextPage()
}

function shuffle(array) {
	const shuffledArray = [...array]
	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));

		[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
	}
	return shuffledArray
}

function chooseNextPage() {
	const filteredInd = indexes.filter(index => !currPageInd.includes(index))
	const shuffledFilteredInd = shuffle(filteredInd)
	const newPageInd = shuffledFilteredInd.slice(0, getCardsCount())
	return newPageInd
}

export function moveLeftInd() {
	prevPageInd = [...currPageInd]
	currPageInd = [...nextPageInd]
	nextPageInd = [...chooseNextPage()]
}

export function moveRightInd() {
	nextPageInd = [...currPageInd]
	currPageInd = [...prevPageInd]
	prevPageInd = [...chooseNextPage()]
}

export function getNextPageInd() {
	return nextPageInd
}

export function getCurrPageInd() {
	return currPageInd
}

export function getPrevPageInd() {
	return prevPageInd
}