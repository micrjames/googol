import { createSpan, createListItem } from "./DOMutils.js";

const createResultIngredientsList = function(data) {                       
    const recipeResultIngredientsList = document.createElement("ul");       
    for(let i = 1; i <= 20; i++) {                                          
        const ingredientsText = data[`strIngredient${i}`];
        const ingredientsMeasure = data[`strMeasure${i}`];                                                
        if(ingredientsText && ingredientsMeasure) {
            const text = createSpan(ingredientsText);                                                   
			const measure = createSpan(ingredientsMeasure);
                             
			const recipeResultIngredientsListItem = createListItem([text, measure]); 
                             
			recipeResultIngredientsList.appendChild(recipeResultIngredientsListItem);
       }                      
    }                         
    return recipeResultIngredientsList;
}; 

const createResultInstructionsList = function(recipeInstructionsTextList, data) {
    const instructionsText = data.strInstructions;                                                      
    for(const instructionText of instructionsText.split(".")) {
	   if(instructionText) {
		   const recipeInstructionsTextSpan = createSpan(instructionText.trim());
		   const recipeInstructionsTextListItem = createListItem([recipeInstructionsTextSpan]);

		   recipeInstructionsTextList.appendChild(recipeInstructionsTextListItem);
	   }
    }
};

const setRecipeResult = function(recipeResult, data) {
   const recipeResultTitle = recipeResult.children.namedItem("recipe-result-title");
   const recipeResultInstructions = recipeResult.children.namedItem("recipe-result-instructions");
   const recipeResultImage = recipeResult.children.namedItem("recipe-result-image");
   const recipeResultIngredients = recipeResult.children.namedItem("recipe-result-ingredients");
   
   const recipeResultImageThumb = recipeResultImage.children.namedItem("recipe-result-image-thumb");
   const recipeInstructionsTextList = recipeResultInstructions.children.namedItem("recipe-result-instructions-text-list");
    
   recipeResultIngredients.appendChild(createResultIngredientsList(data));
   recipeResultImageThumb.src = data.strMealThumb;                                         
   recipeResultTitle.textContent = data.strMeal;
   createResultInstructionsList(recipeInstructionsTextList, data);
};

export { setRecipeResult };
