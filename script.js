'use strict';
/* Vad ska vi göra här */
console.log('test');

const bookList = [
  {
    id: 1, 
    author: 'Charles Dickens',
    title: 'Oliver Twist'
  },
  {
    id: 2,
    author: 'William Shakespear',
    title: 'Hamlet'
  }
];
const searchField = document.getElementById('searchField');
console.log(searchField);

//keydown, keyup
searchField.addEventListener('keyup', handleKeyPress);

function handleKeyPress(e) {
    //ta emot eller läsa av värdet i input-fältet. *
    // Skicka värdet till searchBooks
    // SearchBooks returnerar en filtrerad lista 
    //Filtrerade listan skickas till renderlist
    searchBooks(e.target.value);

}

function searchBooks(searchTerm) {
    // loopa igenom bookList
    //För varje varv i loopen kolla på aktuell bok
    //Och jämför titeln med searchTerm 
    //Om söktermen finns nånstans i titeln, lägg till boken i en ny lista (filteredList)
    //Returnerar filteredList eller anropar renderBookList
    const filteredList = [];
for (let i = 0; i < bookList.length; i++){
    const title = bookList[i].title.toLowerCase();
    if(title.indexOf(searchTerm.toLowerCase()) >= 0) {
      filteredList.push(bookList[i]);
    }
}
 console.log(filteredList);
renderBookList(filteredList);
}

function renderBookList(list) {
  //element i html-listan visas eller döljs beroende på listans innehåll
  //console.log(list)

}
