function sayHello(name) {
    return `Hello, ${name}!`;
}
console.log(sayHello("Alice"));









function add(a, b) {
    console.log(a+b);
    
}

add(5, 10); // Output: 15
add(20, "a"); // Output: 50










function add(a, b) {
    return a + b;
    
}

const result1 = add(5, 10); // Output: 15
const result2 = add(20, "a"); // Output: 20a (string concatenation)
console.log(result1); // Output: 15
console.log(result2); // Output: 20a






function loginusermessage(username = "Prashant Rathour") {
    if(username === undefined || username === null) {
      console.log("Please provide a valid username.");
      return;

    }
    return `Welcome back, ${username}!`;
}

loginusermessage("Prashant Rathour");
console.log(loginusermessage("Prashant Rathour")); // Output: Welcome back, Prashant Rathour!

console.log(loginusermessage()); // Output: Please provide a valid username.

