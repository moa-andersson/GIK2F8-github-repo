'use strict';
/* Vad ska vi göra här */
console.log('test');

const searchInput = null;
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
function handleKeyPress(input) {
    //ta emot eller läsa av värdet i input-fältet. *
    // Skicka värdet till searchBooks
    // SearchBooks returnerar en filtrerad lista 
    //Filtrerade listan skickas till renderlist
    searchBooks(input);

}

function searchBooks(searchTerm) {
    // loopa igenom bookList
    //För varje varv i loopen kolla på aktuell bok
    //Och jämför titeln med searchTerm 
    //Om söktermen finns nånstans i titeln, lägg till boken i en ny lista (filteredList)
    //Returnerar filteredList eller anropar renderBookList
for (let i = 0; i < bookList.length; i++){
    const title = bookList[i].title.toLocaleLowerCase();
    if(title.indexOf(searchTerm.toLocaleLowerCase()) => 0) {

    }
}
}

function renderBookList(list) {

}
