const currentYear = new Date().getFullYear();
// Create a constant variable named currentYear; 
// new Date() creates a Date object containing the current date and time, 
// and .getFullYear() extracts the four-digit year from that Date object and stores it in currentYear.

document.getElementById("currentYear").textContent = currentYear;
// Document represents the HTML webpage that is currently loaded in the browser;
// find the HTML element in the webpage whose id is "currentYear"; 
// .textContent accesses the text inside that element, 
// and = currentYear sets that text to the value stored in the currentYear variable.

document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;
// document represents the currently loaded HTML webpage; 
// getElementById("lastModified") finds the element whose id is "lastModified"; 
// .textContent accesses the text inside that element; 
// the backticks create a template literal that combines text with a JavaScript value; 
// ${document.lastModified} gets the date and time the browser reports that the HTML document was last modified 
// and inserts it after "Last Modification:".