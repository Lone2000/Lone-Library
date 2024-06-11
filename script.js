const myLibrary = [
    {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        year: 2000,
        srn: 3434334,
        img_url: 'random image here'
    },
    {
        title: 'Diary Of Whimpy Kid',
        author: 'Jeff Kinney',
        year: 2003,
        srn: 3947334,
        img_url: 'random image here'
    },
    {
        title: 'One Piece',
        author: 'Eiichiro Oda',
        year: 1998,
        srn: 4468734,
        img_url: 'random image here'
    }
];

let gallery = document.querySelector("#gallery");


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

        elm.innerHTML =  `
        <h2>${book.title}</h2>
        <p>${book.author}</p>
        <p>${book.year}</p>
        <img src="" alt="Image description">
        `
        
        gallery.appendChild(elm);
    })
}


addBookToLibrary();
console.log(gallery.children);