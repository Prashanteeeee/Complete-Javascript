// for loop
array = ["Banana", "Guava", "Orange",
    "PineApple"
]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}


for (let index = 1; index <= 69; index++) {
    console.log(`267 X ${index} = ` , 267*index);
}




for (let i = 1; i <= 10; i++) {
    console.log(`Table Of: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);

    }


}


// break and continue

for (let index = 1; index <= 20; index++) {
    
    if (index === 5) {
        console.log(`${index} Detected!`);
        break;
    }
    console.log(`Value of I is ${index}`);


}

// 5 will not be printed as it will detected before the printing statement and using break the loop will exit




for (let index = 1; index <= 20; index++) {
    
    if (index === 5) {
        console.log(`${index} Detected!`);
        continue;
    }
    console.log(`Value of I is ${index}`);


}// while using continue will skip only that condition and rest of the next loop will continue ,means in this case when 5 will be detected it will not print after that anything only for that condition but it will again start printing for next condition

// so, in break the loop will exit after matching condition while in continue it will skip the printing only for matching condition and again the rest of the loop will continue