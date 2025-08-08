// let myname = "Prashant           ";
// let lastname = "      Rathour  ";

// console.log(myname.trueLength);


let myheros = ['thor' , 'spiderman' , 'Ironman'];

herosPower = {
    thor:"hammer",
    spiderman:"sling",
    Ironman:"flying",


    getspiderpower:function(){
        console.log(`Ironman power is ${this.Ironman}`);
        
    }

}

Object.prototype.prashant = function()
{
    console.log(`Prashant is present in all objects`);
    
}

Array.prototype.welcome = function()
{
    console.log("Welcome , Prashant");
    
}

// herosPower.prashant();
// myheros.prashant();


myheros.welcome();
// herosPower.welcome();







// Inheritence

const User = {
    name:"Prashant",
    email:"chai@google.com"
}

const teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment: "Js assignments",
    fulltime:true,
    __proto__:TeachingSupport
}

teacher.__proto__ = User
// console.log(teacher.name);
// console.log(teacher.email);
// console.log(TASupport.isAvailable);

// modern syntax
Object.setPrototypeOf(TeachingSupport , teacher)
// console.log(TeachingSupport.name);
// console.log(TeachingSupport.email);

let anotherstring = "Prashant Rathour           ";
String.prototype.trueLength = function()
{
    console.log(this);
    console.log(`TrueLength is ${this.trim().length}`);
    
}

anotherstring.trueLength();
"Prashant    ".trueLength();