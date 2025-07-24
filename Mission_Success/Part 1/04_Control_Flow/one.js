// If control statement

// if (condition)
// {
//     // scope
// }

const isUserLoogedin = true;
if(isUserLoogedin===true)
{
    console.log(`Welcome Back User`);
    
}

// (< , > , <= ,>= ,== ,!=, ===) ==> these are comparison operators

if(2=="2") // it does not check datatype
{
    console.log("Executed");
    
}

if(2==="2") // it is used for strict check ,it also check datattype
{
    console.log("Executed");
    
}

const temperature =  90

if(temperature  < 50){
console.log("Temperature is less than 50");
}
else{
    console.log(`temperature is greater than 50`);
    
}

console.log(` it will always execute`);


const score =200;
if(score>100)
{
    const power = "fly";
    console.log(`User Power ${power}`);
    
}

//   console.log(`User Power ${power}`); //it will throw an error as we want to access power outside of if statement


const balance = 1000;
// if(balance>500) console.log("test"), console.log("test2");
// ; // we should not use this as due to this code readability becomes very bad

// if-else-if control statement
if(balance < 500)
{
    console.log("less than 500");
    
}else if(balance < 750)
{
    console.log("less than 750");
} else if(balance<1000)
{
    console.log("less than 1000");
}
else{
    console.log(`Balance greater than 1000`);
    
}

const userloggedin  = true;
const debitcard = true;
const loggedinfromgoogle = false;
const loggedinfromemail = true;

if(userloggedin && debitcard && 2==3)
{
    console.log(`Allow to buy courses`);
    
}
if(loggedinfromgoogle||loggedinfromemail)
{
    console.log(`User Logged in`);
    
}