// // ++++++ Arrays +++++++ 

const myarray = [0, 1, 2, 3, 4, 5]
const Actor = ["Akshay", "Sai Pallavi", "Ranveer", "Yash"]

const array = new Array(1, 2, 3, 4);
console.log(myarray);

console.log(myarray[3]);
console.log(array.length);



// // Array Methods

myarray.push(6);
myarray.push(7);
myarray.pop();
myarray.unshift(9);
myarray.unshift(8);   // But not often used due to optimization

myarray.shift();

console.log(myarray.includes(9));
console.log(myarray.indexOf(3));

const newArr = myarray.join();


console.log(myarray);
console.log(newArr);
console.log(typeof newArr);


Slice , Splice

console.log("A ",myarray);

const myn1 = myarray.slice(1,3); // slice just return the copy of elements of array and do not change in the actual array
console.log(myn1);
console.log("B ",myarray);

const myn2 = myarray.splice(1,3); // it also include last index and then give elements of array by cutting the elements of actual array means the actual array changed
console.log(myn2);
console.log("C ",myarray);


const marvel_heros = ["Thor" , "Ironman" , "Spiderman"]

const Bollywood_Actress = ["Deepika Padukone" , "Alia Bhatt" , "Rashmika Mandana"]

marvel_heros.push(Bollywood_Actress) // it push the another array as an element in the main array
console.log(marvel_heros)
console.log(marvel_heros[3][2]) ;

 const combined_array =marvel_heros.concat(Bollywood_Actress); // it combines two arrays and returns a new array
console.log(combined_array);

const all_new = [...marvel_heros , ...Bollywood_Actress]
console.log(all_new);

const another_array = [1, 2, [0 ,0 ,0], 3, 4, [5, 6, 7, [8, 9]]];

const real_another_array  = another_array.flat(3);
// const real_another_array  = another_array.flat(Infinity);

console.log(real_another_array);


console.log(Array.isArray("Prashant Rathour"));
console.log(Array.from("Prashant Rathour"));
console.log(Array.from({name: "Deepika"})); // Interesting



let score1 =100;
let score2 =200;
let score3 =300;


console.log(Array.of(score1 , score2, score3));



// ++++++++++++++Objects++++++++++++++++++


// 1 -Object Literals

const sym = Symbol("key1");
const JsUser = {
    name: "Prashant",
    "FullName": ["Prashant Rathour"],
    [sym]:"mykey1",
    Isstudent: true,
    Age:19,
    City:"Kannauj",
    email:"prashantk7368@gmail.com",
    lastlogindays:["Monday","Friday"]
}

console.log(JsUser);
console.log(JsUser.name);
console.log(JsUser.email);
console.log(JsUser["City"]);
console.log(JsUser["FullName"]);
console.log(JsUser[sym]);



JsUser.email = "prashantrathour@gmail.com"
Object.freeze(JsUser);
JsUser.email = "prashantrathour@email.com"
console.log(JsUser);

JsUser.greeting = function()
{
    console.log("Hello, Prashant!");

}
JsUser.greetingtwo = function()
{
    console.log(`Hello JS User, ${this.name}`);

}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());


// 2 - Singleton

// const tinderuser = new Object();
const tinderuser = {};
tinderuser.id = "123abc"
tinderuser.name = "Simmy Goraya"
tinderuser.isloggedin = false;



const regularuser = {
    email:"some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Nishant",
            lastname:"Rathour"
        }
    }

}
console.log(regularuser);
console.log(regularuser.fullname?.userfullname.firstname);
console.log(regularuser.fullname.userfullname.lastname);

const obj1 = {1:"a",2:"b",3:"c",4:"d"};
const obj2 = {5:"e",6:"f"}
const obj3 = {7:"g",8:"h"}

// const obj4 = {obj1,obj2}
// const obj4  = Object.assign({},obj1 , obj2 , obj3)

const obj4 = {...obj1, ...obj2 , ...obj3}
console.log(obj4);

const userarr = [
    {
        id:"1",
        email:"prashant@gmail.com"
    },
    {
        id:"1",
        email:"prashant@gmail.com"
    },
    {
        id:"1",
        email:"prashant@gmail.com"
    },
    {
        id:"1",
        email:"prashant@gmail.com"
    }
]

console.log(userarr);
console.log(userarr[2]);
console.log(userarr[2].id);
console.log(userarr[2].email);



console.log(tinderuser);
console.log(Object.keys(tinderuser)); // Important
console.log(Object.values(tinderuser)); // Important
console.log(Object.entries(tinderuser)); // Important
console.log(tinderuser.hasOwnProperty("isloggedi"));


//+++++++++ Object Destruction and JSON Api +++++++++++++++


const course =
{
    coursename:"Javascript",
    price:"999",
    courseInstructor:"Hitesh Chaudhary"

}

// course.courseInstructor

const {courseInstructor:instructor} = course;
console.log(instructor);

// {
//     'name':"Prashant Rathour",
//     'coursename':"Javascript",
//     'price':"10000"
// }

[
    {},
    {},
    {},
    {}
]


//++++++++++++++++++ Functions +++++++++++++++


function saymyname() {
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("T");
}
// saymyname();

function addtwonumbers(num1, num2) {
    return num1 + num2;
}
number1 = 695034589543
number2 = 758937573957
console.log(addtwonumbers(number1, number2));
console.log(addtwonumbers(5, "4"));
console.log(addtwonumbers("5", "4"));
console.log(addtwonumbers(7, "d"));
console.log(addtwonumbers(3, null));


function factorial(number) {
    if (number === 1 | number === 0) {
        return 1;
    }
    else {
        return number * factorial(number - 1);
    }
}
console.log(factorial(6));





function loginUserMessage(username)
{
    return `Welcome Back, ${username}!`
}

name = "Prashant"
console.log(loginUserMessage(name));
console.log(loginUserMessage()); // it will show undefined as user does not pass any name





function loginUserMessage(username) {
    if (!username) {
        console.log("Please Enter a username")
        return
    }
   
        return `Welcome Back, ${username}!`
    
}
console.log(loginUserMessage());




function loginUserMessage(username="sam")
{
    return `Welcome Back, ${username}!`
}

console.log(loginUserMessage());
console.log(loginUserMessage("Prashant"));
