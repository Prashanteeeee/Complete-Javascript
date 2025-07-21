// operations

let value = 3
let negvalue = -value
console.log(negvalue); // Output: -3


let str1 = "Prashant"
let str2 = " Rathour"
let str3 = str1 + str2
console.log(str3); // Output: "Prashant Rathour"


console.log("1" + 2)
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log((3 + 4) * 4 % 3);
console.log(1 % 3);

console.log(+true);
// console.log(true+);
console.log(+"");


let number1, number2, number3;
number1 = number2 = number3 = 3 + 3
console.log(number3);


let gamecounter = 5;
gamecounter++;
console.log(gamecounter);

let gamecounter2 = 5;
++gamecounter2;
console.log(gamecounter2);


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"







// comparsisons

console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

console.log("2">1);
console.log("02">1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// The Reason is that an equality check == and Comparisons < > >= <= work differently.

// Comparisons convert null to a number, treating it as 0. That's why (3)null >= 0 is true and (1)null >0 is false


console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 0);
// In all case this will gave false value but it also happens same as null

// So we have to avoid these type of comparisons

// strict check ===

console.log("2" == 2);
console.log("2" === 2);



// # Primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100;
const scorevalue = 100.3;
const isstudent = true;


const temperature = null;
let useremail;

const id = Symbol("123");
const id1 = Symbol("123");

console.log(id ==id1);


const bigNumber = 1234567890123456789012345678901234567890n; // BigInt




// Reference (Non Primitive)

// Array , Objects , Functions

const fruits = ["apple", "banana", "cherry"];
const person = {
    name: "Prashant",
    age: 19,
    city: "Greater Noida"
    };

firstname = "Prashant";
function greet() {
    console.log(`Hello , ${firstname}!`);
}



console.log(typeof bigNumber); // Output: bigint
console.log(typeof temperature); // Output: object
console.log(typeof useremail); // Output: undefined
console.log(typeof fruits); // Output: object
console.log(typeof person); // Output: object
console.log(typeof greet); // Output: function
console.log(typeof id); // Output: symbol
console.log(typeof score); // Output: number




//++++++++++++++ Memory +++++++++++++++++++++

// Stack (primitive types) and Heap (reference types)

let myYoutubename = "knj army "
let anotherYoutubename = myYoutubename;
anotherYoutubename = "arkay"
console.log(myYoutubename); // Output: "knj army "
console.log(anotherYoutubename); // Output: "arkay"



let user = {
    name: "Prashant",   
    age: 19,
    upi:"prashant@upi"
};


let userOne = user;
userOne.name = "Aryan";
console.log(user) // Output: { name: 'Aryan', age: 19, upi: 'prashant@upi' }
console.log(userOne); // Output: { name: 'Aryan', age: 19, upi: 'prashant@upi' }

