/*

const name = "Prashant";
const hours = 10;
console.log(`Hello, my name is ${name} and I have ${hours} hours of coding practice.`);


const gameName = new String("Chess");
// console.log(gameName); // String object
// console.log(typeof gameName); // "object" (String object)
// console.log(gameName.length); // 5 (length of the string)

// console.log(gameName[0]); // "C" (accessing the first character of the string object)
// console.log(gameName.charAt(0)); // "C" (accessing the first character using charAt method)

console.log(gameName.toUpperCase()); // "CHESS" (converting the string to uppercase)


console.log(gameName.toLowerCase()); // "chess" (converting the string to lowercase)

console.log(gameName.indexOf("e")); // 1 (finding the index of the first occurrence of "e")

console.log(gameName.lastIndexOf("e")); // 3 (finding the index of the last occurrence of "e")

console.log(gameName.includes("es")); // true (checking if the string contains "es")

console.log(gameName.startsWith("Ch")); // true (checking if the string starts with "Ch")

console.log(gameName.endsWith("ss")); // true (checking if the string ends with "ss")

console.log(gameName.slice(1, 4)); // "hes" (extracting a substring from index 1 to 4)

console.log(gameName.substring(1, 4)); // "hes" (extracting a substring from index 1 to 4, similar to slice)

console.log(gameName.split("e")); // ["Ch", "ss"] (splitting the string into an array using "e" as the delimiter)

console.log(gameName.replace("Chess", "Checkers")); // "Checkers" (replacing "Chess" with "Checkers")

console.log(gameName.trim()); // "Chess" (removing whitespace from both ends of the string)

console.log(gameName.charAt(0)); // "C" (accessing the first character of the string)

console.log(gameName.charCodeAt(0)); // 67 (getting the Unicode value of the first character)

console.log(gameName.concat(" is a great 
game!")); // "Chess is a great game!" (concatenating another string to the original string)

console.log(gameName.repeat(2)); // "ChessChess" (repeating the string twice)

console.log(gameName.match("e")); // ["e", "e"] (finding all occurrences of "e" in the string)

console.log(gameName.search("es")); // 2 (finding the index of the first occurrence of "es")

console.log(gameName.localeCompare("Chess")); // 0 (comparing two strings, returns 0 if they are equal)

console.log(gameName.localeCompare("Checkers")); // -1 (returns -1 if the first string is less than the second string)


*/

const url = "https://www.example.com/-path-/to-/resource?query=123#%30fragment";

console.log(url.replace('%30', '-')); // Replaces '%30' with '0'

console.log(url.includes('%30')); // Checks if '%30' is present in the URL

console.log(url.split('/')); // Splits the URL into an array using '/' as the delimiter