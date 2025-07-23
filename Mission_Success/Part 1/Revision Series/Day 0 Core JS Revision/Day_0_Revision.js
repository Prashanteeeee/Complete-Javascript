

const name1 = "Prashant Rathour"
let num = 345
var city = "Bangalore"

// name = "Aryan" // not allowed


// don't use var because of variabe scope method

console.log(name1, num, city);
console.log(typeof name1, typeof num, typeof city);
console.table(name1 + " " + num + " " + city);
console.log(`My name is ${name1} and I live in ${city}.`);


// const is used for constants, which cannot be reassigned






// Datatypes in JavaScript


let number = 1234
let assign  = "arkay"
let isstudent = false;
let box = null;
let box2 = undefined;
let bigNumber = BigInt(1234567890123456789012345678901234567890);
let symbol = Symbol("unique");


// null => object
// undefined=> undefined





// functions

let nums1 =67;
let num2 = 89;

const name = "Prashant Rathour";

 function addtwonumbers(num1, num2)
{
    return nums1 + num2;
}

console.log(addtwonumbers(nums1, num2)); 

function greet(name) {
    return `Welcome, ${name}!
    you are learning JavaScript.`;
}


console.log(greet(name));


function factorial(n)
{
    if(n==0|| n==1)
    {
        return 1;
    }
    else
    {
        return n * factorial(n-1);
    }
}

console.log(factorial(5)); // Output: 120







// conversions



let number1 = 56
let bool = Boolean(number1)
let str = String(number1)
console.log(str);
console.log(typeof str);



console.log(bool);
console.log(typeof bool);

let str1 = "33abc"
let num1 = Number(str1)
console.log(num1)
console.log(typeof num1);
;


// "33abc" => NaN


let isloggedin = "Prashant";
let bool1 = Boolean(isloggedin)
console.log(bool1);
console.log(typeof bool1);


