const arr = [1, 2, 3, 4, 5];
// console.log(arr); // Print the array

// const arr2 = new Array(6, 7, 8, 9, 10);
// console.log(arr2); // Print the second array
// console.log(arr[0]); // Access the first element of the array

// console.log(arr.length); // Get the length of the array



// Array methods

// arr.push(6); // Add an element to the end of the array
// arr.pop(); // Remove the last element of the array


// arr.unshift(9); // Add an element to the beginning of the array
// arr.shift(); // Remove the first element of the array

// console.log(arr.includes(3)); // Check if the array includes the element 3


// console.log(arr.indexOf(9)); // Get the index of the element 3

// const newArr = arr.join('_');
// console.log(arr);
// console.log(newArr);
// console.log(typeof newArr);\


// slice and splice methods

console.log("A ", arr);

const myarr = arr.slice(1, 3); // Get a subarray from index 1 to 2 (not inclusive of 3)
console.log(myarr);

console.log("B ", arr); // Print the subarray


const myarr2 = arr.splice(1, 3); // Get a subarray from index 1 to 2 (not inclusive of 3)
console.log(myarr2);
console.log("C ", arr); // Print the original array after splice