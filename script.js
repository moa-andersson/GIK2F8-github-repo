'use strict';


const bookList = [
    {
        id: 1,
        author: "Charles Dickens",
        title: "Oliver Twist"
    },
    {
        id: 2,
        author: "William Shakespear",
        title: "Hamlet"
    }
];
//const searchInput = document.children[0].children[1].children[1].children[1];//
const searchField = document.getElementById("searchField");


// keydown, keyup
searchField.addEventListener("keyup", handleKeyPress);

function handleKeyPress(e) {
    // Ta emot/läsa av värdet i inputfältet.
    //Skicka värdet till searchBooks
    //searchBooks returnerar en  filtrerad lista
    //Filtrera listan skickas till renderBookList/
    searchBooks(e.target.value);
}
    function searchBooks(searchTerm) {
    //Loopa igenom bookList
    //För varje varv i loopen, ta det aktuella elementet (boken)
    //Jänför titel med söktermen
    //Om söktermen finns någonstans i titeln, lägg till elementeti ny lista(filteredList)
    //Returnerar filteredList eller anropar RenderBookList*/
    const filteredList = []
    for(let i = 0; i < bookList.length; i++) {
            const title = bookList[i].title.toLowerCase();

            if(title.indexOf(searchTerm.toLowerCase()) >= 0){
                filteredList.push(bookList[i]);
            }
        }
        renderBookList(filteredList);
    }
    function renderBookList(list){
      /* Element i HTML-listan visas/döljs beroende på listans innehåll.*/
      let html = `<ul class="book-list rounded-md border-2 border-blue-400 bg-white w-full mx-auto">
                  <li
                      class="book-listitem mb-2 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer">
                  1
                  </li>
                  <li
                      class="book-listitem mb-2 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer">
                  2
                  </li>
                  </ul>`;
  const existingElement = document.querySelector(".book-list");
  console.log(existingElement);

  const root = document.getElementById("root");
  if (existingElement){
      root.removeChild(existingElement);
  }

  root.insertAdjacentHTML("beforeend", html);
  }