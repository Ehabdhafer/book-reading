class Book {
  constructor(
    id,
    image,
    title,
    author,
    category,
    release_date,
    rating,
    description,
    pages,
    language
  ) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.author = author;
    this.category = category;
    this.release_date = release_date;
    this.rating = rating;
    this.description = description;
    this.pages = pages;
    this.language = language;
  }
}
// ---------------------------------------------------------------------
function change(idd) {
  bookimage(idd);
  booktitle(idd);
  bookpages(idd);
  bookdate(idd);
  booklang(idd);
  bookcatg(idd);
  bookauthor(idd);
  bookrating(idd);
  bookdetails(idd);
}
change(6);
// ---------------------------------------------------------------------

async function bookimage(id) {
  const response = await fetch("http://localhost:3000/books");

  const books = await response.json();

  const bookimg = books[id - 1].image;

  document.querySelector(".details-imgborder").innerHTML = `
  <img
              src="${bookimg}"
              alt="book image"
              class="details-img1"
            /> `;
}
// ---------------------------------------------------------------------
async function booktitle(id) {
  const response = await fetch("http://localhost:3000/books");

  const books = await response.json();

  const bookName = books[id - 1].title;

  document.querySelector(".book-name").textContent = bookName;
}
// ---------------------------------------------------------------------
async function bookpages(id) {
  const response = await fetch("http://localhost:3000/books");

  const books = await response.json();

  const bookpages = books[id - 1].pages;

  document.querySelector(".details-page").textContent = bookpages;
}
// ---------------------------------------------------------------------
async function bookdate(id) {
  const response = await fetch("http://localhost:3000/books");

  const books = await response.json();

  const bookdate = books[id - 1].release_date;

  document.querySelector(".details-date").textContent = bookdate;
}
// ---------------------------------------------------------------------
async function booklang(id) {
  const response = await fetch("http://localhost:3000/books");

  const books = await response.json();

  const booklang = books[id - 1].language;

  document.querySelector(".details-lang").textContent = booklang;
}
// ---------------------------------------------------------------------
let books1 = [];
let Related = [];
async function bookcatg(id) {
  const response = await fetch("http://localhost:3000/books");

  const books = await response.json();

  const bookcatg2 = books[id - 1].category;

  document.querySelector(".details-catg").textContent = bookcatg2;
  function relatedbook() {
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then((json) => {
        books1 = json.map(function (post1) {
          let book = new Book(
            post1.id,
            post1.image,
            post1.title,
            post1.author,
            post1.category
          );
          return book;
        });
        books1.sort();
        Related = books1.sort((b1, b2) =>
          b1.category === b2.category ? 1 : b1.category !== b2.category ? -1 : 0
        );
        Related = Related.filter((book) => book.category === bookcatg2);
        console.log(Related);
        let cards = '<ul class="cards">';
        for (i = 0; i < 6; i++) {
          cards += `
            <li class="card">
              <div>
                <img src="${Related[i].image}" class="card-img-top" alt="..." />
                <h3 class="card-title">Title: ${Related[i].title}</h3>
                <div class="card-content">
                  <p>Author: ${Related[i].author}</p>
                  <p>Category: ${Related[i].category}</p>
                </div>
              </div>
            </li>`;
        }
        cards += "</ul>";
        document.querySelector(".cards2").innerHTML = cards;
      })
      .catch((error) => console.error("Error:", error));
  }
  relatedbook();
}
// ---------------------------------------------------------------------
async function bookauthor(id) {
  const response = await fetch("http://localhost:3000/books");

  const books = await response.json();

  const bookauthor = books[id - 1].author;

  document.querySelector(".author-name").textContent = bookauthor;
}
// ---------------------------------------------------------------------
async function bookrating(id) {
  const response = await fetch("http://localhost:3000/books");

  const books = await response.json();

  const bookrating = books[id - 1].rating;

  document.querySelector(".details-rating").textContent = bookrating;
  document.querySelector(".details-rating2").textContent = bookrating;
}
// ---------------------------------------------------------------------
async function bookdetails(id) {
  const response = await fetch("http://localhost:3000/books");

  const books = await response.json();

  const bookdetails = books[id - 1].description;

  document.querySelector(".details3").textContent = bookdetails;
}
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const txt1 = document.getElementById("write-review1");
  const btn1 = document.querySelector(".write-review");
  let review = document.createElement("span");
  function fun1() {
    review.innerHTML += `<div class="comment-box">
    <div class="username1">
      <img
        src="../assest/profile.png"
        alt="profile pic"
        class="details-img3"
      />
      <span class="username">User Name :</span>
    </div>
    <div>
      <span>User Review :</span>
      <span class="details-rating">5.0</span>
    </div>
    <div>
      <span>User Comment :</span>
      <span class="details-reviews2">${txt1.value}</span>
    </div>
  </div>`;
    document.querySelector(".comments").appendChild(review);
  }
  btn1.addEventListener("click", fun1);
});
// -----------------+++++++++++++++++++++++++++++++++++++++++++++++++++
// document.addEventListener("DOMContentLoaded", function () {
//   const txt1 = document.getElementById("write-review1");
//   const btn1 = document.querySelector(".write-review");
//   let tr1 = document.createElement("span");
//   function fun1() {
//     tr1.textContent = txt1.value;
//     document.querySelector(".comment-box").appendChild(tr1);
//   }
//   btn1.addEventListener("click", fun1);
// });

// ----------------------------------------------------------------------
// document.querySelector(".write-review").addEventListener("click", () => {
//   let name23 = document.getElementById("write-review1").value;
//   let tr1 = document.createElement("span");
//   tr1.textContent = name23;
//   document.querySelector(".comment-box").appendChild(tr1);
// });
// ------------------------------------------------------------------------

// let Sub = document.querySelector(".write-review");
// Sub.addEventListener("click", (e) => {
//   e.preventDefault();
//   let review = document.getElementById("write-review1").value;
//   fetch("http://localhost:3000/books", {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//       id: "",
//       review: `${review}`,
//     }),
//   });
// });

// const card3 = document.querySelector(".username1");

// fetch("http://localhost:3000/books")
//   .then((res) => res.json())
//   .then((data2) => {
//     data2.forEach((post) => {
//       const card = document.querySelector(".details-reviews2");
//       // card.classList.add("card");
//       card.innerHTML = `
//       <span class="details-reviews2">${post.review}</span>
//       `;
//       card3.appendChild(card);
//     });
//   });
// Get the button element.
// const buttonElement = document.querySelector(".write-review");

// // Add an event listener for the click event on the button element.
// buttonElement.addEventListener("click", () => {
//   // Get the value of the input text element.
//   const inputTextElement = document.getElementById("write-review1");

//   // Get the span element.
//   const spanElement = document.querySelector(".details-reviews2");

//   // Set the innerHTML property of the span element to the value of the input text element.
//   spanElement.innerHTML = inputTextElement.value;
// });
// ----------------------------------------------------------------------------------
// let Sub = document.querySelector(".write-review");
// Sub.addEventListener("click", () => {
//   let review = document.getElementById(".write-review1").value;
//   fetch("http://localhost:3000/books", {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//       id: "",
//       review: `${review}`,
//     }),
//   });
// });

// const card3 = document.querySelector(".comment-box");

// fetch("http://localhost:3000/books")
//   .then((res) => res.json())
//   .then((data2) => {
//     data2.forEach((post) => {
//       const card = document.createElement("div");
//       card.classList.add("card");
//       card.innerHTML = `

//       <span>${post.review}</span>
//         `;
//       card3.appendChild(card);
//     });
//   });
