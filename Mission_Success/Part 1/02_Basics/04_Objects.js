// const tinderuser = new Object();
const tinderuser = {};
tinderuser.name = "John";
tinderuser.age = 30;    
tinderuser.isStudent = false;


// console.log(tinderuser); // Print the tinderuser object

// const regular_user = {
// fullname: {
//     userfullname:{
//         firstName: "John",
//         lastName: "Doe"
//     }
// }
// }
// console.log(regular_user.fullname.userfullname.firstName); // Access nested property
// console.log(regular_user.fullname.userfullname.lastName); // Access nested property

const obj1 = {
    fullname: "Alice",
    myage: 25,
    isaStudent: true
};
const obj2 = {
    name: "Bob",
    age: 30,
    isStudent: false
};

// const obj3 = {obj1, obj2}; // Merging obj1 and obj2 into obj3
// console.log(obj3); // Print the merged object

// const obj3 = Object.assign({}, obj1, obj2); // Merging obj1 and obj2 into obj3

const obj3 = {...obj1, ...obj2}; // Merging obj1 and obj2 into obj3 using spread operator
console.log(obj3); // Print the merged object


const users = [
    { name: "Alice", 
        age: 25, 
        isStudent: true },
{ name: "Alice", 
        age: 25, 
        isStudent: true },
    { name: "Alice", 
        age: 25, 
        isStudent: true },
    { name: "Alice", 
        age: 25, 
        isStudent: true },
    { name: "Alice", 
        age: 25, 
        isStudent: true },]

console.log(users[1].name);

console.log(users);
console.log(Object.keys(tinderuser)); // Print the keys of the tinderuser object
console.log(Object.values(tinderuser)); // Print the keys of the tinderuser object
console.log(Object.entries(tinderuser)); // Print the keys of the tinderuser object
console.log(Object.entries(tinderuser).length); // Print the number of entries in the tinderuser object

console.log(tinderuser.hasOwnProperty('name')); // Check if the tinderuser object has a property 'name'
console.log(tinderuser.hasOwnProperty('location')); // Check if the tinderuser object has a property 'location'
