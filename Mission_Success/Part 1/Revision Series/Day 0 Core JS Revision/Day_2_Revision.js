// Strings

const str = "Prashant Rathour";
const str2 = " is learning JavaScript";
const str3 = str + str2;
console.log(str3); // Output: "Prashant Rathour is learning JavaScript"
console.log(str3.length); // Output: 36

console.log(str);
console.log(str.length);


const gamename = new String("Call of Duty");
console.log(gamename); // Output: [String: 'Call of Duty']

console.log(gamename.length); // Output: 13
console.log(gamename[0]); // Output: 'C'
console.log(gamename.__proto__); // Output: String.prototype


console.log(gamename.toUpperCase()); // Output: "CALL OF DUTY"
console.log(gamename.toLowerCase()); // Output: "call of duty"

console.log(gamename.charAt(5)); // Output: 'o'
console.log(gamename.indexOf("o")); // Output: 8


const newstr = gamename.substring(0, 4);
console.log(newstr); // Output: "Call"

const anotherstring = gamename.slice(-8, 6);
console.log(anotherstring); 




const newstringone = "     Shikhar     "
console.log(newstringone);
console.log(newstringone.trim()); // Output: "Shikhar"


const url = "https://www.example.com/path%20query=123";
console.log(url.replace('%20', "-")); // Output: "https://www.example.com/path-query=123"

console.log(url.includes("example")); // Output: true
console.log(url.startsWith("https")); // Output: true



const newstringtwo = "Prashant Rathour is learning JavaScript";
console.log(newstringtwo.split(" ")); // Output: [ 'Prashant', 'Rathour', 'is', 'learning', 'JavaScript' ]
console.log(newstringtwo.split(" ", 3)); // Output: [ 'Prashant', 'Rathour', 'is' ]

console.log(newstringtwo.repeat(2)); // Output: "Prashant Rathour is learning JavaScriptPrashant Rathour is learning JavaScript"

console.log(newstringtwo.charCodeAt(5)); // Output: 97 (ASCII code for 'a')

console.log(newstringtwo.codePointAt(5)); // Output: 97 (Unicode code point for 'a')

console.log(newstringtwo.localeCompare("prashant")); // Output: 1 (indicating "Prashant Rathour is learning JavaScript" is greater than "prashant")

console.log(newstringtwo.localeCompare("javascript")); // output : 1

console.log(newstringtwo.indexOf("learning")); // Output: 20
console.log(newstringtwo.lastIndexOf("learning")); // Output: 20

console.log(newstringtwo.search("learning")); // Output: 20

console.log(newstringtwo.match(/learning/)); // Output: [ 'learning', index: 20, input: 'Prashant Rathour is learning JavaScript', groups: undefined ]

console.log(newstringtwo.valueOf()); // Output: "Prashant Rathour is learning JavaScript"

console.log(newstringtwo.normalize()); // Output: "Prashant Rathour is learning JavaScript"

console.log(newstringtwo.toLocaleLowerCase()); // Output: "prashant rathour is learning javascript"
console.log(newstringtwo.toLocaleUpperCase()); // Output: "PRASHANT RATHOUR IS LEARNING JAVASCRIPT"




// ++++++++ number and maths +++++

const score = 400;
const balance = new Number(100);
console.log(balance);
console.log(score);


console.log( typeof balance.toString());
console.log(balance.toFixed(5));


const newnumber = 123.857557575;
console.log(newnumber.toPrecision(4));

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'));




// +++++++ Maths  +++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(5.4));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

console.log(Math.min(4,6,8,3,0));
console.log(Math.max(4,6,8,3,0));



console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor((Math.random()*10) + 1));

const min = 10;
const max=  20;

const between  = Math.floor((Math.random()*(max-min+1)) + min);
console.log(between);





// +++++++  Date ++++++++++++++++

let myDate = new Date();
console.log(myDate); // Output: Current date and time

console.log(myDate.toString())
; // Output: Current date and time in string format

console.log(myDate.toDateString()); // Output: Current date in a human-readable format
console.log(myDate.toTimeString()); // Output: Current time in a human-readable format

console.log(myDate.toISOString()); // Output: Current date and time in ISO format
console.log(myDate.toLocaleDateString()); // Output: Current date in locale-specific format


console.log(myDate.toLocaleString()); // Output: Current date and time in locale-specific format



console.log(typeof myDate); // Output: "object"

// let mycreatedDate = new Date(2023 ,0 ,23);
// let mycreatedDate = new Date(2023 ,0 ,23,5,6);
// let mycreatedDate = new Date("2023-01-23");
let mycreatedDate = new Date("01-14-2023 05:06:00 AM");

console.log(mycreatedDate.toLocaleString()); // Output: "1/23/2023, 5:06:00 AM" (or similar, depending on locale)



let myTimeStamp = Date.now();
console.log(myTimeStamp); // Output: Current timestamp in milliseconds since January 1, 1970

console.log(mycreatedDate.getTime()); // Output: Timestamp of mycreatedDate in milliseconds since January 1, 1970


console.log(mycreatedDate.getTime()); // Output: Timestamp of mycreatedDate in milliseconds since January 1, 1970

console.log(Math.floor(myTimeStamp/1000)); // Output: Current timestamp in seconds since January 1, 1970


let newdate = new Date();
console.log(newdate);
console.log(newdate.getFullYear()); // Output: Current year

console.log(newdate.getMonth()+1); // Output: Current month (1-12, where 1 is January)
console.log(newdate.getDate()); // Output: Current day of the month (1-31)
console.log(newdate.getDay()+1); // Output: Current day of the week (1-7, where 1 is sunday)

newdate.toLocaleString('default',{
    weekday: "long"
}) 