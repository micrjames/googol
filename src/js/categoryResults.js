import { categoryResults } from "./incs.js";
import { createSpan } from "./DOMutils.js";

const createCategoryResults = function(data) {
    for(const datum of data) {
	   const categoryResult = document.createElement("div"); 
	   categoryResult.setAttribute("class", "category-result")

	   const categoryResultThumb = document.createElement("img");
	   categoryResultThumb.setAttribute("class", "category-result-image-thumb")
	   categoryResultThumb.src = datum.strMealThumb;

	   categoryResult.appendChild(categoryResultThumb);

	   const categoryResultTitle = createSpan(datum.strMeal); 
	   categoryResultTitle.setAttribute("class", "category-result-title")
	   categoryResult.appendChild(categoryResultTitle); 
	   categoryResults.appendChild(categoryResult);
	}
};

export { createCategoryResults };
