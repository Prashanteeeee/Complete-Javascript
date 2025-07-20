const account_ID = 869995
let account_name = "Test Account"
var account_email = "prashantk7368@gmail.com"
accountCity = "Bangalore"

// account_ID = 123456 // This will throw an error because account_ID is a constant

// account_name = 12345 // This will throw an error because account_name is a let variable and cannot be reassigned to a number 

account_name = "New Account Name" // This will work because account_name is a let variable and can be reassigned

account_email = "fjja@gmail.com" // This will work because account_email is a var variable and can be reassigned

console.table([account_ID, account_name, account_email, accountCity]);


