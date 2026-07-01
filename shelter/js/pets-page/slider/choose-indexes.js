import { getCardsPerPage } from "./pages-count.js"

const defaultArray = [4, 0, 2, 1, 5, 7, 3, 6]
const bigArray = new Array(6).fill(defaultArray).flat()

export function createSlicedArray() {
	let n = getCardsPerPage()

	if (localStorage.getItem(`cardsNum${n}`)) {
		return JSON.parse(localStorage.getItem(`cardsNum${n}`))
	}

	let slicedArray = []
	
	for (let i = 0; i < bigArray.length; i += n) {
		slicedArray.push(bigArray.slice(i, i + n))
	}

	for (let i = 1; i < slicedArray.length; i++) {
		let subArr = slicedArray[i]
		for (let j = subArr.length - 1; j > 0; j--) {
			let k = Math.floor(Math.random() * (j + 1));
			[subArr[j], subArr[k]] = [subArr[k], subArr[j]]
		}
	}

	localStorage.setItem(`cardsNum${n}`, JSON.stringify(slicedArray))

	return slicedArray
}