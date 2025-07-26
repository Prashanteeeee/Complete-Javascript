const useremail = "prashant@outlook.com";
if (useremail) {
    console.log("Got User Email");

}
else {
    console.log("Don't have user email");

}

// in this case if string hold something then it will act as true and if string is empty then it will act as false

// falsy values

// false , 0 ,-0 , BigInt =>0n, "",null , undefined, NaN

// truthy values
// "0", "false" ,  " ", [], {} , function(){}

const array = [];
if(array.length === 0){
    console.log("Array is empty");  
}

const myobj = {}

if(Object.keys(myobj).length===0)  // Object.keys(myobj) will return an array of keys in the object
{
    console.log("Your Object is empty");
    
}

// Nullish Coalescing Operator (??) : null , undefined

let val1 ;
// val1 = 5??10;
// val1 = null??10;
// val1 = undefined??15;

val1 = null ?? 10 ?? 15

console.log(val1);

// Terniary Operator

// condition ? true : false

const Ice_Tea_price = 100;

Ice_Tea_price>=80 ? console.log("More Than 80") : console.log("Less than 80");


