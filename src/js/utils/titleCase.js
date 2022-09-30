// Return the provided string with the first letter of each word capitalized. Make sure the rest
// of the word is in lower case. For the purpose of this exercise, you should also capitalize connecting
// words like the and of.

const titleCase = str => {
	const strArr = str.split(' ');
    const titled = strArr.map(word => {
	    const upperStart = word[0].toUpperCase();
	   	const restWord = word.slice(1, word.length);
	    return upperStart + restWord.toLowerCase();
	}); 
    const titledStr = titled.join(' ');
    return titledStr;
};

export { titleCase };
