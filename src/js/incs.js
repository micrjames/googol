const body = document.body;

const header = body.children.namedItem("header");
const nav = header.children.namedItem("nav");
const menu = nav.children.namedItem("menu");
const menuItems = menu.children;
const searchTrigger = menuItems.namedItem("search-trigger"); 

const main = body.children.namedItem("main");
const search = main.children.namedItem("search");

const searchForm = document.forms["search-form"];
const submitBtn = searchForm.elements["submit-btn"];
const searchTerm = searchForm.elements["search-term"];

const searchOutput = main.children.namedItem("search-output");

export { searchTrigger, search, searchTerm, submitBtn, searchOutput };
