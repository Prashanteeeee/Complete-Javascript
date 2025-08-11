// Example: Property Descriptors in JavaScript

// 1. Checking property descriptor of Math.PI
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
// Output: { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }

// console.log(Math.PI); // 3.141592653589793
// Math.PI = 5.233;       // This won't change PI because writable: false
// console.log(Math.PI);  // Still 3.141592653589793

// 2. Custom Object
const chai = {
    name: "Ginger, Blackpepper Kadak Chai",
    price: 500,
    isAvailable: true,
    orderchai: function () {
        console.log("Chai nahi bani ☕");
    }
};

console.log(chai);

// 3. Get descriptor for 'name'
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// 4. Change property descriptor to make 'name' non-enumerable
Object.defineProperty(chai, "name", {
    writable: false, // Uncomment to make it read-only
    enumerable: false
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// 5. Loop through properties (name won't show because enumerable: false)
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
