// Singleton

// Object literals

const mysym = Symbol('mySymbol'); // Create a symbol

const person = {
  name: 'John',
"Full Name": "John Andrew", // Property with a space in the name
    age: 30,
    isStudent: false,
    greeting: function() { // Method to greet
      return `Hello, my name is ${this.name}`;
    },
    [mysym]: 'This is a symbol property', // Using a symbol as a property key
    location: "New York",
    hobbies: ['reading', 'traveling', 'gaming'],
    isloggedIn: false
}

console.log(person); // Print the person object
console.log(person.name); // Access the name property
console.log(person['age']); // Access the age property using bracket notation
console.log(person["Full Name"]); // Access the Full Name property with a space


person.location = "Los Angeles"; // Update the location property
console.log(person.location); // Print the updated location

// Object.freeze(person); // Freeze the object to prevent further modifications

person.age = 35; // Attempt to change the age property (will not work due to freeze)

console.log(person.age); // Print the age (will still be 30)

person.greeting = function() { // Add a new method to the object
  console.log(
   `Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

console.log(person.greeting()); // Call the greeting method
console.log(person[mysym]); // Access the symbol property