
let a =300; // global scope
var c = 300; // not used due to scope problem
if (true) {
    let a = 10; // local scope
    const b = 30;
    c = 40;
    console.log(`Inner: ${a}`);
    
}
console.log(a);

console.log(c);

// Nested Scope
 function one ()
 {
    const username = "Prashant";

    function two(){
        const website = "Gemini"
        console.log(username)
    }
    console.log(website);

    two();
    
 }

 one();


if(true)
{
    const books = ["RD Sharma" , 'Rs Aggarwal'];
    if(typeof books === "object"){
        const english_Books = ["Moment"];
        const result = books.concat(english_Books);
        console.log(result);
        
        
        
    }
    // console.log(english_Books);
    
}

// console.log( books);


/// ++++++++++++++++++++++ Interesting +++++++++++++++++++++++++

console.log(addOne(7));// this can be accessed before initialization as the funcion is defined as normal

function addOne(num)
{
    return num +1
}



// console.log(addTwo(7)); // this can not be accessed before initialization as the function is initialized and the value of function hold by another variable

const addTwo = function(num)
{
    return num+2;
}

