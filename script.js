const gallery = document.querySelector("#gallery");

// Form Elements
const form = document.querySelector("form");
let removeBtn;

const myLibrary = [
    // {
    //     title: 'Harry Potter',
    //     author: 'J.K. Rowling',
    //     year: 2000,
    //     srn: 3434334,
    //     img_url: 'random image here'
    // },
    // {
    //     title: 'Diary Of Whimpy Kid',
    //     author: 'Jeff Kinney',
    //     year: 2003,
    //     srn: 3947334,
    //     img_url: 'random image here'
    // },
    // {
    //     title: 'One Piece',
    //     author: 'Eiichiro Oda',
    //     year: 1998,
    //     srn: 4468734,
    //     img_url: 'random image here'
    // }
];


function Book(title,author,year,srn,img_url){
    // The Constructor
        this.title = title;
        this.author = author;
        this.year = year;
        this.srn = srn;
        this.img_url = img_url;
};

let newBook = new Book("Harry Potter", 'JK.Rolling', 2000, 39343434, 'Http.pp.com');

function addBookToLibrary(){
    // Iterate over the mylibary object first 
    myLibrary.forEach((book) => {
        let elm = document.createElement("div");
        elm.classList.add("card");
        elm.setAttribute('data-example', `${book.srn}`);
        elm.innerHTML =  `
        <img src="${book.img_url}" alt="Image description">
        <h2>${book.title}</h2>
        <p>${book.author}</p>
        <p>${book.year}</p>
        <button class="removeBtn" onClick='removeBook(${book.srn})' data-srn="${book.srn}">Remove</button>
        `
        gallery.appendChild(elm);
    })

};

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    // console.log(e.input[])
    console.log(e);
    let title = e.target[0].value;
    let author = e.target[1].value;

    let book_obj = {
        title: e.target[0].value, 
        author: e.target[0].value,
        year: e.target[2].value,
        srn: e.target[3].value,
        img_url: e.target[4].value
    }
    myLibrary.push(book_obj);
    
    //  Call The Add Book Library Function now;
    gallery.innerHTML = "";
    addBookToLibrary();
})


// Remove Book From Dom + Array
function removeBook(srn){
    // Remove From DOM
    const rmvElm = document.querySelector(`[data-example="${srn}"]`);
    if(rmvElm){
        rmvElm.remove();
    }

    // Remove From Array As Well -> find Index then remove
    const rmvElmIndex = myLibrary.findIndex((book) => book.srn == srn);
    if(rmvElmIndex > -1){
        myLibrary.splice(rmvElmIndex, 1);
    }

}



