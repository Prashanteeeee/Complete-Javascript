const marvelCharacters = ["thor", "iron", "hulk", "spiderman", "captain america"];
const dcCharacters = ["superman", "batman", "flash", "green lantern"];


// marvelCharacters.push(dcCharacters);
// console.log(marvelCharacters); // Print the array with DC characters added

// console.log(marvelCharacters.concat(dcCharacters)); // Concatenate DC characters to Marvel characters
// console.log(marvelCharacters); // Print the array after concatenation



const allCharacters = [  ...marvelCharacters,
  ...dcCharacters]; // Spread operator to combine both arrays

console.log(allCharacters); // Print the combined array of Marvel and DC characters
console.log(allCharacters.length); // Print the length of the combined array



const anothetArray = [1,3,4,5,6,[7,8,8],[89,67,[34,78]]];
console.log(anothetArray.flat()); // Flatten the array by one level
console.log(anothetArray.flat(2)); // Flatten the array by two levels


console.log(Array.isArray("anothetArray")); // Check if anothetArray is an array

console.log(Array.from("anothetArray")); // Check if anothetArray is an array

console.log(Array.from({name:"Prashant"})); // Convert an object to an array using Array.from

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Create an array from individual scores
