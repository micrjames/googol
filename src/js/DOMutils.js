const createSpan = function(text = null) {
    const span = document.createElement("span");
    if(text) {
        span.textContent = text;
    }

    return span;
};

const createListItem = function(strs) {
    const li = document.createElement("li");
    strs.forEach(str => {
        li.appendChild(str);
    });

    return li;
};

export { createSpan, createListItem }; 
