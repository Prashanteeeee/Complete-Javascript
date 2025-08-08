const setusername = function(username)
{
    this.username = username;
}

const create_user = function(username , email , password)
{
    setusername.call(this , username);
    this.email = email;
    this.password = password;
}

const userone = new create_user("Prashant" , "prashantk7368@gmail.com" , 1234);

console.log(userone);
