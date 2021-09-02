// spinner handling function 
const toggleSpinner = displayStyle=> {
  document.getElementById('spinner').style.display = displayStyle;
}
// error handling
const displayError = errorMessage => {
  document.getElementById('error-message').style.display = errorMessage;
};
// searching field 
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';
    // console.log(searchText);
    // display spinner 
    toggleSpinner('block')
    
    // if(searchText.length === 0 || 'null'){
    //    displayError('block')
      
    // }


    document.getElementById('error-message').style.display = 'none';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data));
}
searchBook();
// display book results 
const displaySearchResult = data =>{
    // console.log(data.docs[0])
    const books = data.docs;
    const booksContainer = document.getElementById('container-div')
    booksContainer.textContent = '';
    
    books.forEach(book =>{
        console.log(book);
        const div = document.createElement('div');
        div.innerHTML = `
        <div id="container-div">
        <div class="col">
            <div class="card shadow-lg card h-100">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top " width="300" height="200"  alt="...">
            <div class="card-body bg-black">
              <h5 class="">Title :${book.title}</h5>
               <p>Author :${book.author_name} </p>
               <p>Publisher: ${book.publisher} </p>
               <p>First Publish Year :${book.first_publish_year} </p>
               <p>Language :${book.language} </p>
               <p>Version :${book._version_} </p>
           </div>
           </div>
        </div>
        </div>    
       `
        booksContainer.appendChild(div);
    })
      displayError('none')
      toggleSpinner('none')
    }
   
    