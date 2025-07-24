function CalculateCartPrice(val1, val2, ...num1) {
    return num1;
}

console.log(CalculateCartPrice(290, 560, 780, 800, 980));










const userlogin = {
    email: "prashantk7368@gmail.com",
    passowrd: "123abc"

}

function handleObject(anyobject) {
    console.log(`Your email ID is: ${anyobject.email} , and password is ${anyobject.passowrd}`);

}

handleObject(userlogin);
handleObject({
    email:"abc@gmail.com",
    passowrd:"7474"
});










const mynewarray = [100,200,457,788];

function returnsecondvalue(getarray)
{
    return getarray[2];
}

console.log(returnsecondvalue(mynewarray));
