import { searchTrigger, search, submitBtn, searchOutput } from "./incs.js";

searchTrigger.addEventListener("click", function() {
    search.classList.toggle("hidden");
});

submitBtn.addEventListener("click", function(event) {
	event.preventDefault();
    searchOutput.classList.remove("hidden");
    const intervalID = setInterval(function() {
	   searchOutput.classList.add("hidden");
	}, 2500);
});
