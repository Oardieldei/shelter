import { initSliderRender } from "./init.js"
import { paginationActions } from "./pagination.js"
import { pagesCountChanger } from "./pages-count.js"
import { refreshOnChangeWidth } from "./refresh.js"

export function goSliderGo() {
	initSliderRender()
	paginationActions()
	pagesCountChanger()
	refreshOnChangeWidth()
}