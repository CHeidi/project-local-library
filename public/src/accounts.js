//looks through the accounts array to find an element with an id that matches the param id. 
const findAccountById = (accounts, id) => {
  let found = accounts.find((element) => element.id === id);
  return found;
}
//sorts the accounts array alaphabetically by last name.
const sortAccountsByLastName = accounts => {
return accounts.sort((name1, name2) => name1.name.last.toLowerCase() > name2.name.last.toLowerCase() ? 1 : -1
)};

//create a variable sum, then using a for in loop to filter the borrows for book id's that match the account id's. That number of matching id's will be set to a variable, then that variable will be added to the variable "sum" and returned, giving the sum of the number of borrows.
const numberOfBorrows = (account, books) => {
let sum = 0
for (let index in books) {
  const borrowed = books[index].borrows.filter((element) => element.id === account.id);
  sum += borrowed.length;
};
return sum;
};

//return borrowed books that have not yet been returned with author embedded. Use a helper function to get the author.
//used reduce to get author id from books and match with author. Then use that and filter to find books currently being borrowed by provided account
const getBooksPossessedByAccount = (account, books, authors) => getAuthor(authors, books).filter((book) => book.borrows.find(borrow => borrow.id === account.id && borrow.returned === false));
function getAuthor(authors, books) {
let result = [];
authors.reduce((acc1, author) => {
  const addAuthor = books.reduce((acc2, book) => {
    if (book.authorId === author.id) {
      book.author = author;
      result.push(book);
      acc2++;
    }
    return acc2;
  }, 0);
  return acc1 + addAuthor;
});
return result;
}




module.exports = {
findAccountById,
sortAccountsByLastName,
numberOfBorrows,
getBooksPossessedByAccount,
};