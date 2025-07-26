// while loop
// let index = 0;
// while (index <= 10) {
//     console.log(`Value Of index is ${index}`);
//     index += 2;

// }

let Different_Paneer_Recipe_Name = ["Panner Butter Masala", "Shahi Paneer", "Matar Paneer", "Kadhai Paneer"];

let recipe_index = 0;

while (recipe_index < Different_Paneer_Recipe_Name.length) {
    console.log(`Recipe Name ${recipe_index} is: ${Different_Paneer_Recipe_Name[recipe_index]}`);

    recipe_index++;
}

// Do-while loop
let score = 11;
do {
        console.log(`Score is ${score}`);
        score++;
        
        
} while (score < 10);
// so in this loop if condition is already false but it will execute one time in any case