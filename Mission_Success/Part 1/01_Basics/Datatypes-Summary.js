// Primitive data types in JavaScript
// Number, String, Boolean, Null, Undefined, Symbol (ES6), BigInt (ES11)


// Reference data types in JavaScript(Non-primitive data types)

// Object, Array, Function, Date, RegExp, Map, Set, WeakMap, WeakSet

// const score =100
// const score2 = 100.5;

// const isLoggedIn = true;
// const userName = "Prashant";

// let userEmail; // undefined

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId); // false (symbols are unique)

const bigvalue = 75935793579353656937576639n;


// Array , Object , Function

const arr = [1, 2, 3, 4, 5]; // Array
const obj = { name: "Prashant",
     age: 25 }; // Object

 const greet = function () { // Function
    console.log("Hello, World!");
}

console.log(typeof (obj)); // "object"
console.log(typeof (arr)); // "object" (arrays are a type of object)




// +++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive) , Heap (Non Primitive)

let myemail = "prashantk7368@gmail.com";

let anotheremail = myemail;
anotheremail = "85594";

console.log(anotheremail);
console.log(myemail);


// In the above example, myemail is stored in the stack, and anotheremail is a reference to the same value.
// If we change anotheremail, it does not affect myemail because they are separate values in the stack.



// For non-primitive data types like objects and arrays, they are stored in the heap, and the variable holds a reference to that memory location.

let userOne = {
    name: "Prashant",
    age: 25
};
let userTwo = userOne; // userTwo is a reference to the same object in the heap
userTwo.age = 30; // Modifying userTwo also modifies user

console.log(userOne); // { name: "Prashant", age: 30 }
console.log(userTwo); // { name: "Prashant", age: 30 }

