let myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const book = new Book(
    document.getElementById("bname").value,
    document.getElementById("aname").value,
    document.getElementById("pages").value,
    document.getElementById("scales").value
  );
  myLibrary.push(book);
  console.log(book);
}
