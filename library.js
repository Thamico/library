let myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  event.preventDefault();
  const book = new Book(
    document.getElementById("bname").value,
    document.getElementById("aname").value,
    document.getElementById("pages").value,
    document.getElementById("scales").value
  );
  myLibrary.push(book);
  setData();
  render();
}

function render() {
  const display = document.getElementById("stack");
  const books = document.querySelectorAll(".book");
  books.forEach((book) => display.removeChild(book));

  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
    createBook(myLibrary[i]);
  }
}

function setData() {
  localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}

function createBook(book) {
  const library = document.querySelector("#stack");
  const bookDiv = document.createElement("div");
  const titleDiv = document.createElement("div");
  const authDiv = document.createElement("div");
  const pageDiv = document.createElement("div");
  const removeBtn = document.createElement("button");
  const readBtn = document.createElement("button");

  bookDiv.classList.add("book");
  bookDiv.setAttribute("id", myLibrary.indexOf(book));

  titleDiv.textContent = book.name;
  titleDiv.classList.add("title");
  bookDiv.appendChild(titleDiv);

  authDiv.textContent = book.author;
  authDiv.classList.add("author");
  bookDiv.appendChild(authDiv);

  pageDiv.textContent = book.pages;
  pageDiv.classList.add("pages");
  bookDiv.appendChild(pageDiv);

  readBtn.classList.add("readBtn");
  bookDiv.appendChild(readBtn);
  if (book.read === false) {
    readBtn.textContent = "Not Read";
    readBtn.style.backgroundColor = "#e04f63";
  } else {
    readBtn.textContent = "Read";
    readBtn.style.backgroundColor = "#63da63";
  }

  library.appendChild(bookDiv);
}
