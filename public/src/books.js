//used find to get the element id and see if it matches the id provided in the parameter. Then return the found author
const findAuthorById = (authors, id) => {
  let found = authors.find((element) => element.id === id);
    return found
  };
//used find to see if the element id from books would match the id provided in the parameter.
const findBookById = (books, id) => {
  let found = books.find((element) => element.id === id);
  return found
};
//used filter to create two different variables. In order to divide the books by ones that have either been returned or are being borrowed.
const partitionBooksByBorrowedStatus = books => {
  let borrowed = books.filter(element => element.borrows[0].returned === false);
  let returned = books.filter(element => element.borrows[0].returned === true);
  return [borrowed, returned]
};

//return an array for all borrowers of a book with their information, create empty array, for each index in accounts return borrows. But for each borrows element if the id matches the account id and has been returned. Push account to empty array and return 10
//ask mentor about below
const getBorrowersForBook = (book, accounts) => {
  let result = [];
  accounts.forEach(account=>{
    book.borrows.forEach(loan =>{
        if(loan.id === account.id){
          let accountObj = {...account};
          accountObj.returned = loan.returned;
          result.push(accountObj);
        }
    })
  })
  return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};