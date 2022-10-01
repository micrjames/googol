import { categoryResults } from "./incs.js";
import { createSpan, createBtn, createBtnGroup } from "./DOMutils.js";

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

    return categoryResults;
};

const setCategoryResults = function(sliceStart, recipes) {
   const recipesSlice = recipes.slice(sliceStart, sliceStart + 6);
   const categoryResults = createCategoryResults(recipesSlice);
   const categoryResultsPrevBtn = createBtn("category-results-prev-btn", "btn", "less-than");
   const categoryResultsNextBtn = createBtn("category-results-next-btn", "btn", "greater-than");
   const categoryResultsBtnGroup = createBtnGroup("category-results-btn-group", [categoryResultsPrevBtn, categoryResultsNextBtn]);
   categoryResults.appendChild(categoryResultsBtnGroup);               
							
   if(sliceStart == 0) {
	   categoryResultsPrevBtn.disabled = true;
   } 

   categoryResultsPrevBtn.addEventListener("click", function() {
   });
   categoryResultsNextBtn.addEventListener("click", function() {
   });
};

const resetCategoryResults = function() {
    while(categoryResults.firstChild) {
	    categoryResults.removeChild(categoryResults.lastChild);
    }
};

export { setCategoryResults, resetCategoryResults };
