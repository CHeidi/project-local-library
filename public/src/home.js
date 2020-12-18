
//return length of books 
const totalBooksCount = books => {
  return books.length;
}

//return length of accounts
const totalAccountsCount = accounts => {
  return accounts.length;
}

//add the amount of times borrowed to a variable to get the total times borrowed
const booksBorrowedCount = books => {
  let sum = 0 
  for(let book in books){
    if(!books[book].borrows[0].returned)
      sum += 1
  }
  return sum
}

 //reduce books to genres, use keys to sort and then map them to the new array
 const getMostCommonGenres = books => {
  let commonGenres = books.reduce((acc, book) => {
    (acc[book.genre]) ? acc[book.genre]++ : acc[book.genre] = 1;
    return acc;
  },{});
  let keys = Object.keys(commonGenres); 
  let sortedKeys = keys.sort((key1, key2) => commonGenres[key2] - commonGenres[key1]); 
  let finalArray = sortedKeys.map((key) => { 
    return {name:key, count:commonGenres[key]}; 
  });
  return finalArray.slice(0,5); 
}
 //create empty array, sort the books and how many times they had been borrowed. Then loop through each book and create an object. Push fitting new objects to the array and return top 5
 const getMostPopularBooks = books => {
  let mostPopular = []; 
  let sortedBooks = books.sort((bookA, bookB) => bookB.borrows.length - bookA.borrows.length); 
  sortedBooks.forEach((book) => {
    let newObj = {}; 
    newObj['name'] = book.title; 
    newObj['count'] = book.borrows.length; 
    mostPopular.push(newObj);
  });
  
  return mostPopular.slice(0,5);
}
 //helper function to retrieve author name
 const getAuthorName = (authors, id) => {
  let result = ''; 
  authors.forEach((author) => { 
    if (author.id === id) { 
      result = `${author.name.first} ${author.name.last}`;
    } 
  });
  return result;
}
 
//reduce books to author id's and borrows. Use for in loop to loop through the keys and set key value to the number of borrows. Create new object and set the name to authors name and count to the number of borrows. Then push the new object to the array. And return top 5
const getMostPopularAuthors = (books, authors) => {
  let popularAuthors = []; 
  let authorObj = books.reduce((acc, book) => {
    acc[book.authorId] ? (acc[book.authorId] += book.borrows.length) : (acc[book.authorId] = book.borrows.length); 
    return acc;
  },{});
  for (const key in authorObj) {
    const value = authorObj[key];
    let newObj = {};
    newObj['name'] = getAuthorName(authors, parseInt(key)); 
    newObj['count'] = value; 
    popularAuthors.push(newObj); 
  }
  let sortedPopularAuthors = popularAuthors.sort((authorA, authorB) => authorB.count - authorA.count);
  return sortedPopularAuthors.slice(0,5);
};


module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
