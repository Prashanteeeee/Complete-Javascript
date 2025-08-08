// const user = {
//     username:"Prashant",
//     logincount:8,
//     signedin:true,

//     getuserdetails: function(){
        // console.log("Got user details from user");
        // console.log(`Username:${this.username}`);
        // console.log(this); // this object
        
        
        
//     }
// }
// console.log(user["username"]);
// console.log(user.getuserdetails());
// console.log(this);


function User(username , loginCount , isLoggedin){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    
    return this
}

const userOne = new User("Prashant" , 12 , true) // using new will create an empty object 
const userTwo = new User("Nishant" , 10 , false)
// console.log(userOne);
console.log(userOne.constructor);
// console.log(userTwo);
