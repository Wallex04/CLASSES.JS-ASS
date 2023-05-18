// Define your Book class here:

class Book {
  constructor(
    title,
    author,
    copyrightDate,
    ISBN,
    NumOfPages,
    bookCheckOutTime,
    bookDiscardedCheckOut
  ) {
    this.title = title;
    this.author = author;
    this.copyrightDate = copyrightDate;
    this.ISBN = ISBN;
    this.NumOfPages = NumOfPages;
    this.bookCheckOutTime = bookCheckOutTime;
    this.bookDiscardedCheckOut = bookDiscardedCheckOut;
  }
  UpdateBook(numOfUses) {
    this.bookCheckOutTime += numOfUses;
  }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
  constructor(
    title,
    author,
    copyrightDate,
    ISBN,
    NumOfPages,
    bookCheckOutTime,
    bookDiscardedCheckout
  ) {
    super(
      title,
      author,
      copyrightDate,
      ISBN,
      NumOfPages,
      bookCheckOutTime,
      bookDiscardedCheckout
    );
  }

  manualValue() {
    let currentYear = new Date();

    if (currentYear.getFullYear() - this.copyrightDate > 5) {
      this.bookDiscardedCheckOut = "Yes";
    } else {
      this.bookDiscardedCheckOut = "NO";
    }
  }
}

class Novel extends Book {
  constructor(
    title,
    author,
    copyrightDate,
    ISBN,
    NumOfPages,
    bookCheckOutTime,
    bookDiscardedCheckout
  ) {
    super(
      title,
      author,
      copyrightDate,
      ISBN,
      NumOfPages,
      bookCheckOutTime,
      bookDiscardedCheckout
    );
  }
  novelValue() {
    if (this.bookCheckOutTime > 100) {
      this.bookDiscardedCheckOut = "Yes";
    } else {
      this.bookDiscardedCheckOut = "NO";
    }
  }
}
// Declare the objects for exercises 2 and 3 here:
let novel1 = new Novel(
  "Pride and Prejudice",
  "Jane Austen",
  1813,
  1111111111111,
  432,
  32,
  "NO"
);

let manual1 = new Manual(
  "Top Secret Shuttle Building Manual",
  "Redacted",
  2013,
  0000000000000,
  1147,
  1,
  "NO"
);

console.log(manual1);
console.log(novel1);
console.log(manual1.manualValue());
console.log(novel1.UpdateBook(5));