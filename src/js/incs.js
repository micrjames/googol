import { fetchData } from "../js/fetchData.js";

const body = document.body;

const header = body.children.namedItem("header");
const nav = header.children.namedItem("nav");
const menu = nav.children.namedItem("menu");
const menuItems = menu.children;
const searchTrigger = menuItems.namedItem("search-trigger"); 

const main = body.children.namedItem("main");
const search = main.children.namedItem("search");
const modalHdr = search.children.namedItem("modal-header");
const modalBody = search.children.namedItem("modal-body");
const searchEntry = modalBody.children.namedItem("search-entry");

const searchOutput = modalBody.children.namedItem("search-output");
const recipeResults = modalBody.children.namedItem("recipe-results");
const recipeResult = recipeResults.children.namedItem("recipe-result");

const searchForm = document.forms["search-form"];
const submitBtn = searchForm.elements["submit-btn"];
const searchTerm = searchForm.elements["search-term"];

const products = main.children.namedItem("products");

const categoryVeganData = await fetchData("../recipe_category_vegan.json");
const categoryVegetarianData = await fetchData("../recipe_category_vegetarian.json");
const categoryNonData = await fetchData("../recipe_category_non.json");

const getRecipe = async function(mealId) {
    return await fetchData(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`); 
};

const categoryResults = modalBody.children.namedItem("category-results");

export { modalHdr, searchTrigger, search, searchEntry, searchTerm, searchOutput, submitBtn, products, categoryVeganData, categoryVegetarianData, categoryNonData, categoryResults, recipeResult, getRecipe };
