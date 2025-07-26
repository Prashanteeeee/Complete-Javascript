const Actresses = ["Sai Pallavi" , "Deepika Padukone" , "Rashmika Mandana" , "Katrina Kaif" , "Alia Bhatt"];


Actresses.forEach( function (Actress)  {
    console.log(Actress);
    
})




Actresses.forEach( (Actress) => {
    console.log(Actress);
    
})




function printme(Actress)
{
    console.log(Actress);
    
}

Actresses.forEach(printme);


Actresses.forEach((Actress , index ,arr) => {
    console.log(Actress , index , arr);
    
})


const books = [
    {
        BookName:"RS Aggarwal",
        BookAuthor:"RS"
    },
    {
        BookName:"Moment",
        BookAuthor:"M"
    },
    {
        BookName:"Kshitij",
        BookAuthor:"Yamuna Prasad"
    }
]

books.forEach((book) => {
    console.log(book.BookAuthor);
    
})
