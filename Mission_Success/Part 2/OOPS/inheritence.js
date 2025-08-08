class User{
    constructor(username)
    {
        this.username = username;
    }

    logme()
    {
        console.log(`${this.username} logged in`);
        
    }
}

class Teacher extends User{
    constructor(username , email , password)
    {
        super(username);
        this.email = email;
        this.password = password;
    }

    addcourse()
    {
        console.log(`A New Course was added by ${this.username}`);
        
    }
}

const prashant = new User("Prashant");
const hitesh = new Teacher("Hitesh Chaudhary" , "hitesh@gmail.com" , 12345);
console.log(hitesh);
console.log(hitesh.addcourse());

const masalachai = new User("Masala Chai");
console.log(masalachai.logme());
console.log(hitesh.logme());

console.log(hitesh instanceof User);



