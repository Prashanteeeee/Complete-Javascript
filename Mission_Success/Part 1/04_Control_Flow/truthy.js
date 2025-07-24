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

