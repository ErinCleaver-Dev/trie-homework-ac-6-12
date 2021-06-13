// Import stylesheets
import "./style.css";
import Trie from "./trie";
import countries from "./countries";

const input = document.getElementById("input");
const results = document.getElementById("results");
const trie = new Trie();

// Load up the trie with keys frp, the 'words' variable.
// Beecause the countries list was given with the country names in
// title case, I made them lowercase before loading them into the  trie.
const words = countries.map(country => country.name.toLowerCase());
words.forEach(word => trie.insert(word));

/**
 * Helper function to create new <p> elements to be added to
 * the results list.
 * @param {String} str The string to be added to the new elements
 * innerHTML for display.
 * @returns {HTMLParagraphElement}
 */
const newEl = str => {
  const p = document.createElement("p");
  p.classList = "results";
  p.innerText = str;
  return p;
};

input.addEventListener("keyup", ev => {
  // Get a list of countries with the current value of #input.

  // Reset the contents of the #results div.
  results.innerHTML = "";
console.log(trie.autoComplete(input.value))
  // Iterate through your results, and add them to the #results div.
 // Get a list of countries with the current value of #input.
  const countriesResults = trie.autoComplete(input.value) //Your Autocomplete function

if (countriesResults.found) {
    countriesResults.found.forEach(country => {
      const el = newEl(country);
      results.appendChild(el);
    });
  }


  // HINT: When setting your  trie.autoComplete(inputStr), you'll need to make sure
  // you make your input string lower case.  inputString.toLowerCase().
  let inputStr = input.value;
  inputStr = inputStr.toLowerCase()
  trie.autoComplete(inputStr)
  // HINT: to create a new element, use he newEl() helper function:
  // const el = newEl("String");

  // HINT: To append a child to an HTMLelement (A <p> tag into a <div> in this example)
  // use appendChild(): element.appendChild(childElement)

  // HINT: This part was made to stretch your comfort zone a little!   Don't be afraid
  // to use your resources!
});
