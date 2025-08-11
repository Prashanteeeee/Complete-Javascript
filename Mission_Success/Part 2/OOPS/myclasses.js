// ES6

class User{
    constructor(username , email , password)
    {
        this.username = username ;
        this.email = email;
        this.password = password;
    }

    encryptpassword()
    {
        return `${this.password}abc`
    }

    changeusername()
    {
        return `${this.username.toUpperCase()}`
    }
}

const newuser = new User("chai" , "chai@google.com" , 12345);
console.log(newuser.encryptpassword());
console.log(newuser.changeusername());



// behind the scene
  function user(username , email , password)
    {
        this.username = username ;
        this.email = email;
        this.password = password;
    }

    user.prototype.encryptpassword = function()
    {
        return `${this.password}abc`
    }

    user.prototype.changeusername = function()
    {
        return `${this.username.toUpperCase()}`
    }

    const tea = new user("tea" , "tea@google.com" , 736764);
    console.log(tea.changeusername());
    console.log(tea.encryptpassword());
    


