const Actresses = ["Sai Pallavi" , "Deepika Padukone" , "Rashmika Mandana" , "Katrina Kaif" , "Alia Bhatt"];

const Actress_name  = Actresses.forEach((Actress) => {
    // console.log(Actress);
    return Actress
    
})

console.log(Actress_name); // it will not return anything as forEach does not return anything


const nums = [1,2,3,4,5,6,7,8,9,10];

// const new_nums = nums.filter( (num) => num  > 4);
// console.log(new_nums);

const new_nums = nums.filter( (num) => {
    return num  > 4
});
console.log(new_nums);




const new_numbers =[];

nums.forEach((num) => {
    if(num>4)
    {
        new_numbers.push(num)
    }
})
console.log(new_numbers);


const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
    genre: "Classic",
    pages: 180
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    genre: "Fiction",
    pages: 281
  },
  {
    title: "1984",
    author: "George Orwell",
    publicationYear: 1949,
    genre: "Dystopian",
    pages: 328
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publicationYear: 1813,
    genre: "Romance",
    pages: 432
  }
];

let userbooks = books.filter((book) => {
    return book.genre === "Fiction" && book.pages > 200;
});

 userbooks = books.filter((book) => book.publicationYear >= 1900 && book.pages > 200);

console.log(userbooks);


console.log(books.filter((book) => {return book.genre==="Romance" && book.publicationYear > 1800}));
