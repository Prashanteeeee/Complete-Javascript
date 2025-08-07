// const PromiseOne = new Promise(function (resolve, reject) {
//     // Do any async Tasks
//     //DB calls , cryptography , network
//     setTimeout(function () {
//         console.log("Async Task is Completed");
//         resolve();
//     }, 1000)

// })

// PromiseOne.then(function () {
//     console.log("Promise Consumed");

// })



// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async Task 2");
//         resolve();
//     }, 1000)

// }).then(() => {
//     console.log('Async Task 2 is resolved');

// })




// promisethree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ username: "Prashanteeeee", email: "prashant@example.com" });
//     }, 1000)
// })

// promisethree.then((userdata) => {
//     console.log(userdata);

// })





// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         let error = false;
//         if (!error) {
//             resolve({ username: "prashanteeeee", password: "12345" })
//         } else {
//             reject('ERROR: Something Went Wrong')
//         }
//     }, 1000)
// })

// promiseFour
//     .then((user) => {
//         console.log(user);
//         return user.username

//     })
//     .then((username) => {
//         console.log(username);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("The Promise is either resolved or rejected");

//     })




    const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: "12345" })
        } else {
            reject('ERROR: JS Went Wrong')
        }
    }, 1000)
})


async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive();


// async function getdata(){
//    try {
//  const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    
//     const data = await response.json();
//     console.log(data);
//    } catch (error) {
//     console.log("E:" , error);
    
//    }
    
// }

// getdata();


fetch("https://api.github.com/users/hiteshchoudhary")
.then((response) =>{
    return response.json();
})
.then((data) =>{
    console.log(data);
    
})
.catch((error)=>{
console.log("A: ", error);

})