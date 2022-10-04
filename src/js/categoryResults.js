import { categoryResults, recipeResult, getRecipe } from "./incs.js";
import { createSpan, createBtn, createBtnGroup } from "./DOMutils.js";
import { setRecipeResult } from "./recipeResults.js";

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

	   const categoryResultSelectButton = createBtn("category-result-select-btn", "btn", "check"); 
	   categoryResultSelectButton.addEventListener("click", function() {
		   const mealId = datum.idMeal;
		   categoryResults.classList.add("hidden");

		   const recipePromise = getRecipe(mealId);
		   recipePromise.then(res => { 
			  const recipe = res.meals[0];
			  setRecipeResult(recipeResult, recipe);
		   }).catch(err => console.log(err));

		   recipeResult.parentElement.classList.remove("hidden");
	   });
	   categoryResult.appendChild(categoryResultSelectButton);

	   categoryResults.appendChild(categoryResult);
	}

    return categoryResults;
};

const setCategoryResults = function(sliceStart, recipes) {
   const recipesPerPage = 6;
   let recipesSlice;
   if(recipes.length <= recipesPerPage) recipesSlice = recipes;
   else recipesSlice = recipes.slice(sliceStart, sliceStart + 6);
   const categoryResults = createCategoryResults(recipesSlice);
   const categoryResultsPrevBtn = createBtn("category-results-prev-btn", "btn", "less-than");
   const categoryResultsNextBtn = createBtn("category-results-next-btn", "btn", "greater-than");
   const categoryResultsBtnGroup = createBtnGroup("category-results-btn-group", [categoryResultsPrevBtn, categoryResultsNextBtn]);
   categoryResults.appendChild(categoryResultsBtnGroup);               
							
   if(sliceStart == 0) {
	   categoryResultsPrevBtn.disabled = true;
   } 
   if(recipes.length - (sliceStart + recipesPerPage) < recipesPerPage){
	   categoryResultsNextBtn.disabled = true;
   }

   categoryResultsPrevBtn.addEventListener("click", function() {
	   resetCategoryResults();
	   setCategoryResults(sliceStart-6, recipes);
   });
   categoryResultsNextBtn.addEventListener("click", function() {
	   resetCategoryResults();
	   setCategoryResults(sliceStart+6, recipes);
   });
};

const resetCategoryResults = function() {
    while(categoryResults.firstChild) {
	    categoryResults.removeChild(categoryResults.lastChild);
    }
};

export { setCategoryResults, resetCategoryResults };
