const mynums = [1,2,3];

let result = mynums.reduce(function (acc , current_value)  {
    console.log(`Accumulator: ${acc} and Current Value: ${current_value}`);
    
    return acc + current_value 
} , 0);


 result = mynums.reduce((acc , current_value) => {
    console.log(`Accumulator: ${acc} and Current Value: ${current_value}`);
    
    return acc + current_value 
} , 0);


 result = mynums.reduce((acc , current_value) => acc + current_value , 0);

console.log(result);




let sum =0;
mynums.forEach((num) => {
   sum =sum+num;
    
} );

console.log(sum);


// A perfect mini-project for reduce is a shopping cart.

// Create an array of objects, where each object is an item with a price and quantity.

// Use reduce() to calculate the total cost of all items in the cart.

const shopping_cart = [
  {
    "itemName": "Laptop",
    "price": 1200.00,
    "quantity": 1
  },
  {
    "itemName": "Mouse",
    "price": 25.50,
    "quantity": 2
  },
  {
    "itemName": "Keyboard",
    "price": 75.00,
    "quantity": 1
  },
  {
    "itemName": "Monitor",
    "price": 300.00,
    "quantity": 2
  }
];

const total_bill_to_pay = shopping_cart.reduce((acc , item) =>  {
    
   return  acc+(item.price*item.quantity)
},0) ;

console.log(total_bill_to_pay);
