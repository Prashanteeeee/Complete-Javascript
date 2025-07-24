const user = {
    username:"Prashant",
    price:999,

    welcomeMessage:function()
    {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }
}

user.welcomeMessage();
user.username = "Nishant";

user.welcomeMessage();
console.log(this);

function chai()
{
    let username = "Prashant";
    console.log(this.username);// only works with object
    
}
chai()




// const chai = function()
// {
//     let username = "Prashant";
//     console.log(this.username);
    
// }
// chai();


// const chai = () =>
// {
//     let username = "Prashant";
//     console.log(this);
    
// }
// chai();


// const addtwo = (num1,num2) => 
// {
//     return num1 + num2;
// }



// const addtwo = (num1,num2) =>   num1 + num2;
// const addtwo = (num1,num2) =>  ( num1 + num2);
const addtwo = (num1,num2) =>  ({Username:"Prashant"});



console.log(addtwo(3,4));


// const Myarray = [2,3,4,5,6,7];
// Myarray.forEach(()=>{})