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

const searchForm = document.forms["search-form"];
const submitBtn = searchForm.elements["submit-btn"];
const searchTerm = searchForm.elements["search-term"];

const products = main.children.namedItem("products");

export { modalHdr, searchTrigger, search, searchEntry, searchTerm, searchOutput, submitBtn, products };
