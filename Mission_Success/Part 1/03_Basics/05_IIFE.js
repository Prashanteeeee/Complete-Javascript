// Immediately Invoked Function Expression (IIFE)

// 1 - it is used to invoke function immediately
// 2 - to prevent from global scope pollution

(function chai()
{
    console.log(`Database Connected!`);
    
})(); // Semicolon(;) is mandatory in IIFE because they don't know where to end and if you will not use semicolon then it will throw error when you will run another IIFE function

((name)=>
    {console.log(`Database Connected2 ${name}!`);

    })("Prashant")

// ()() IIFE