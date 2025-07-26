const mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let new_nums = mynumbers.map((num) => num +10);
console.log(new_nums);


 new_nums = mynumbers.map((num) => {
    return num +10});
console.log(new_nums);


const new_arr = [];
mynumbers.forEach((num) => {
 if(num)
 {
    new_arr.push(num+10);
 }
})

console.log(new_arr);



// Chaining

const newnums1= mynumbers.map((num) => num * 10)
                         .map((num) => num+1)
                         .filter((num) => num>=40);

console.log(newnums1);


// Coach Question

// Take an array of numbers.

// Use .map() to create a new array with each number plus 1.

// Immediately on the result, use .filter() to keep only the numbers greater than 5.

const result = mynumbers.map((num) => num+1)
                        .filter((num) => num > 5);

console.log(result);
