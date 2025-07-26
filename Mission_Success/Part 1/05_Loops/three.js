// for of

// ["" , " " , ""]
// [{} , {} , {}]

const arr = [1,2,3,4,5];

for (const element of arr) {
    console.log(element);
    
}




const email = "prashant@gmail.com";
for (const character of email) {
    if(character==".")
    {
        continue;
    }
      console.log(character);
  
    
}


for (const character of email) {
    if(character=="@")
    {
        break;
    }
      console.log(character);
  
    
}


 
// Map

const map =new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('Fr',"France")
map.set('IN',"India")

console.log(map);

for (const [key,value] of map) {
    console.log(`${key} :- ${value}`);
    
}

const myobj = {
    Game1:"Valorant",
    Game2:"PUBG",
    Game3:"Call of Duty",
    Game4:"GTA V"
}


for (const gamename of myobj) {
    console.log(gamename);
    
} // throw error because due to this method object is not iterable