// const score = 400;
// console.log(`Your score is ${score}`);
// const bonus = new Number(50);
// console.log(bonus);


// console.log(bonus.toString().length);
// console.log(bonus.toFixed(2));

// const marks = 80.893456789;
// console.log(marks.toPrecision(3)); // 80.9

// const num1 = 1000000;
// console.log(num1.toLocaleString('en-IN')); // 10,00,000



// +++++++++++++++++++ Maths +++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-10)); // 10
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.1)); // 5   
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(2, 3, 1, -5, 4)); // -5    

// console.log(Math.max(2, 3, 1, -5, 4)); // 4
// console.log(Math.random()); // Random number between 0 and 1
// console.log(Math.random() * 10); // Random number between 0 and 10
// console.log((Math.random() * 100) +1); // Random 
// // number between 1 and 100


// console.log(Math.floor(Math.random() * 10)); // Random integer between 0 and 9
// console.log(Math.sqrt(16)); // 4
// console.log(Math.pow(2, 3)); // 8 (2 raised to the power of 3)
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.E); // 2.718281828459045 (Euler's number)


const min = 10;
const max = 20; 

const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum); // Random integer between 10 and 20