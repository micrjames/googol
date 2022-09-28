import { searchTrigger, search, searchTerm, submitBtn, searchOutput } from "./incs.js";
import { closeBtn } from "./modal.js";

submitBtn.addEventListener("click", function(event) {
	event.preventDefault();
    searchOutput.classList.remove("hidden");
    search.classList.add("hidden");
    searchTerm.value = "";
    const intervalID = setInterval(function() {
	   searchOutput.classList.add("hidden");
	}, 5000);
});

closeBtn.addEventListener("click", function() {
    search.classList.add("hidden");
});
searchTrigger.addEventListener("click", function() {
    search.classList.remove("hidden");
});
