import { searchTrigger, search, searchEntry, searchOutput, recipeResults, searchTerm, submitBtn, products, resultsData } from "./incs.js";
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
			});
		}
	}
}

const recipeResult = recipeResults.children.namedItem("recipe-result");
const recipeResultTitle = recipeResult.children.namedItem("recipe-result-title");
const recipeResultInstructions = recipeResult.children.namedItem("recipe-result-instructions");

const recipeResultIngredients = recipeResult.children.namedItem("recipe-result-ingredients");
const recipeResultIngredientsList = document.createElement("ul");
for(let i = 1; i <= 20; i++) {
   const ingredientsText = resultsData.meals[0][`strIngredient${i}`];
   const ingredientsMeasure = resultsData.meals[0][`strMeasure${i}`];
   if(ingredientsText && ingredientsMeasure) {
	  const recipeResultIngredientsListItem = document.createElement("li");
	  const ingredientTextSpan = document.createElement("span");
	  ingredientTextSpan.textContent = ingredientsText;
	  const ingredientMeasureSpan = document.createElement("span");
	  ingredientMeasureSpan.textContent = ingredientsMeasure;
	  recipeResultIngredientsListItem.appendChild(ingredientMeasureSpan);
	  recipeResultIngredientsListItem.appendChild(ingredientTextSpan);
	  recipeResultIngredientsList.appendChild(recipeResultIngredientsListItem);
	  recipeResultIngredients.appendChild(recipeResultIngredientsList);
   }
}

const recipeResultImage = recipeResult.children.namedItem("recipe-result-image");
const recipeResultImageThumb = recipeResultImage.children.namedItem("recipe-result-image-thumb");
recipeResultImageThumb.src = resultsData.meals[0].strMealThumb;

recipeResultTitle.textContent = resultsData.meals[0].strMeal;

const recipeInstructionsTextList = recipeResultInstructions.children.namedItem("recipe-result-instructions-text-list"); 
const instructionsText = resultsData.meals[0].strInstructions;
const instructionsTextArr = instructionsText.split(".");
for(const instructionText of instructionsTextArr) {
   if(instructionText) {
	  const recipeInstructionsTextListItem = document.createElement("li");
	  recipeInstructionsTextListItem.textContent = instructionText.trim();
	  recipeInstructionsTextList.appendChild(recipeInstructionsTextListItem);
   }
}
