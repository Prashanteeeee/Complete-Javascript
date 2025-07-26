const my_obj = {
    js:"Javascript",
    cpp:"C++",
    rb:"Ruby",
    swift:"swift by apple"
}

for (const key in my_obj) {
    // console.log(key);
    console.log(`${key} is shortcut for ${my_obj[key]}`);
    
}


const arr = ["js" , "rb" , "py" , "java" ,"cpp"];
for (const key in arr) {
   console.log(arr[key]);
   
}


// const map =new Map()
// map.set('IN',"India")
// map.set('USA',"United States Of America")
// map.set('Fr',"France")
// map.set('IN',"India")

// for (const key in map) {
//     console.log(key);
    
// } // not iterable