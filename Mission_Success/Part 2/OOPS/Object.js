function multiplybyfive(num)
{
    return num*5;
}

multiplybyfive.power = 2;
console.log(multiplybyfive(5));
console.log(multiplybyfive.power);
console.log(multiplybyfive.prototype);


function createUser(username , score)
{
    this.username = username;
    this.score = score; 
}

createUser.prototype.decrement = function()
{
     this.score--;
}

createUser.prototype.printme = function(){
    console.log(`Hi , I am ${this.username} and my price is ${this.score}`);
    
}

const chai = new createUser("Chai" , 50)
const tea = new createUser("Tea" , 500)
chai.decrement();
chai.printme();
tea.decrement();
tea.printme();



/*

1 - Here's what happens behind the scenes when the new keyword is used:

2 - A new object is created: The new keyword initiates the creation of a new JavaScript object.

3 - A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

4 - The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

5 - The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/