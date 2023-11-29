function CreateAuthor(name,birthYear,nationality){


this.name = name;
this.birthYear = birthYear;
this.nationality = nationality;
}

function CreateBook(title,author,genre,price){


this.title = title;
this.author = author;
this.genre = genre;
this.price = price;
}

let author1 = new CreateAuthor('Amjad',1996,'Indian');
let author2 = new CreateAuthor('Rahul',1999,'Indian');

let book1 = new CreateBook('wings of fire',author1,'biography',299)
let book2 = new CreateBook('Ancient history',author2,'literature',599)

console.log(author1)
console.log(book1)