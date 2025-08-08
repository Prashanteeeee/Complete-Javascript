class User{
    constructor(username)
    {
        this.username = username;
    }

      logme()
    {
        console.log(`${this.username} logged in`);
        
    }

    static createId()
    {
        return `${(Math.floor(Math.random() * 100 + 1 ))}abjkjhjgkf89876`
    }
}

const prashant = new User("Prashant Rathour");
// console.log(prashant.createId()); // no access of createId function as it is static


class Teacher extends User{
    constructor(username , email)
    {
        super(username);
        this.email = email;
    }
}

const coooler = new Teacher("MerryKing" , "merry@king.com" );
coooler.logme();
// console.log(coooler.createId()); here the createId also will not be accessed

