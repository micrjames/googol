import { searchTrigger, search, searchEntry, searchOutput, searchTerm, submitBtn, products, categoryVeganData, categoryVegetarianData, categoryNonData } from "./incs.js";
import { setCategoryResults, resetCategoryResults } from "./categoryResults.js";
import { closeBtn } from "./modal.js";

submitBtn.addEventListener("click", function(event) {
	event.preventDefault();
    if(searchTerm.checkValidity() && searchTerm.value != '') {
	   searchEntry.classList.add("hidden");
	   searchOutput.classList.remove("hidden");
	   searchTerm.value = "";
	   const intervalID = setInterval(function() {
		  searchOutput.classList.add("hidden");
	   }, 5000);
	}
});

closeBtn.addEventListener("click", function() {
    search.classList.add("hidden");
	searchTrigger.classList.add("hidden");
});
searchTrigger.addEventListener("click", function() {
    searchEntry.classList.remove("hidden");
});

for(const product of products.children) {
    for(const child of product.children) {
	    if(child.tagName == "BUTTON") {
		    child.addEventListener("click", function() {
				search.classList.remove("hidden");
			    searchTrigger.classList.remove("hidden");

			    const btnID = this.getAttribute("id");
			    const btnIDSplitArr = btnID.split("-");
			    let recipeCategory;

			    switch(btnIDSplitArr[2]) {
				    case "vegan":
					   recipeCategory = categoryVeganData;
					break;
					case "vegetarian":
					   recipeCategory = categoryVegetarianData;
					break;
					case "non":
					   recipeCategory = categoryNonData;
					break;
				}

			    resetCategoryResults();
			    setCategoryResults(0, recipeCategory.meals);
			});
		}
	}
}

// setRecipeResult(recipeResult, resultsData.meals[0]);
