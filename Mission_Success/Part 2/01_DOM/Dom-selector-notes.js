//==================================================
//  DAY 2 NOTES: DOM SELECTORS & BASIC MANIPULATION
//==================================================

//++++++++++++++ SELECTING SINGLE ELEMENTS ++++++++++++++

// document.getElementById('id')
// Selects one unique element by its ID. It's fast and common.
const title = document.getElementById("title");


// document.querySelector('selector')
// A very powerful and versatile selector. It selects the *first* matching element it finds.
// It uses CSS selector syntax.

// Select by tag name
const firstH2 = document.querySelector("h2");

// Select by ID (using '#' symbol)
const titleById = document.querySelector("#title");

// Select by class (using '.' symbol)
const firstHeadingClass = document.querySelector(".heading");

// Select using an attribute selector
const passwordInput = document.querySelector('input[type="password"]');

// Select the first list item in an unordered list
const firstListItem = document.querySelector('ul').querySelector('li');
// NOTE: This shows you can chain selectors on elements you've already found.


//++++++++++++++ MODIFYING SELECTED ELEMENTS ++++++++++++++

// Changing the content inside an element
// .innerText shows only the visible text.
console.log(title.innerText); // "Dom Learning by Chai aur Code"

// .textContent shows all text, including hidden text.
console.log(title.textContent); // "Dom Learning by Chai aur Code test text"

// .innerHTML gets or sets the full HTML content.
title.innerHTML = "<h1>Dom Learning By Prashant Rathour</h1>";


// Changing the CSS styles of an element
// NOTE: CSS properties with a hyphen become camelCase in JS (e.g., background-color -> backgroundColor).
title.style.backgroundColor = 'green';
title.style.padding = '15px';
title.style.borderRadius = '5px';


//++++++++++++++ SELECTING MULTIPLE ELEMENTS ++++++++++++++

// document.querySelectorAll('selector')
// Selects all elements matching the CSS selector.
// It returns a static NodeList, which is like an array. You can use forEach on it directly.

// Select all <h2> elements on the page
const allH2s = document.querySelectorAll('h2');
console.log(allH2s); // NodeList(14) [...]

// Select all list items
const allListItems = document.querySelectorAll('li');
console.log(allListItems); // NodeList(3) [...]


// document.getElementsByClassName('class')
// Selects all elements with a given class name.
// It returns a live HTMLCollection. It's "live" because it automatically updates if you add/remove elements with that class.
// NOTE: You cannot use forEach directly on an HTMLCollection.
const classList = document.getElementsByClassName('item-list');


//++++++++++++++ WORKING WITH COLLECTIONS OF ELEMENTS ++++++++++++++

// Because querySelectorAll returns a NodeList, you can loop over it directly.
allListItems.forEach(function (li) {
    li.style.backgroundColor = 'green';
});

// To loop over an HTMLCollection, you must first convert it into a real array.
const classListArray = Array.from(classList);

classListArray.forEach(function (li) {
    li.style.color = 'orange';
});


// You can also access individual elements by their index, just like an array.
allListItems[0].style.color = 'red';

// And you can modify their properties in a loop.
allH2s.forEach(function (h) {
    h.style.color = 'orange';
    h.style.backgroundColor = 'green';
    h.style.padding = '10px';
    h.style.borderRadius = '10px';
});

// Modifying a single element from the NodeList
allH2s[0].textContent = 'Prashant Rathour History';