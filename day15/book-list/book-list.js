
let form = document.getElementById("book-form")
let tbody = document.getElementById("book-list")
// console.log(form);

window.addEventListener("DOMContentLoaded",(e)=>{
    // console.log(e)
    let bookList = JSON.parse(localStorage.getItem("books"))
    bookList.forEach(book => createRow(book.title,book.author,book.isbn));
    console.log(bookList)
})

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    // console.log("This is an event listener")
    let title=document.getElementById("title").value;
    let author=document.getElementById("author").value;
    let isbn=document.getElementById("isbn").value;
    if(title==='' || author==='' || isbn===''){
        // document.querySelector("#isbn").focus()
        alert("Please fill all the fields")
    }
    let book = {title,author,isbn};
    clearAllFields()
    // console.log({title,author,isbn})
    createRow(title,author,isbn)
    addRow(book)
    
});

tbody.addEventListener("click",(e)=>{
    // console.log(e)
    if(e.target.classList.contains("delete")){
        tbody.removeChild(e.target.parentElement.parentElement)
    }

    let books = JSON.parse(localStorage.getItem("books"))
    let isbn  = e.target.parentElement.previousElementSibling.textContent
    console.log(isbn)
    let newBooks = books.filter(book => book.isbn !== isbn)
    localStorage.setItem("books",JSON.stringify(newBooks))
})

function clearAllFields(){
    document.getElementById("title").value = ''
    document.getElementById("author").value = ''
    document.getElementById("isbn").value = ''
}

function createRow(title,author,isbn){
// console.log(book)
    let tr = document.createElement("tr");
    // console.log(tr);
    tr.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><a href="#" class="btn btn-danger float-right delete">X</td>
    `
    tbody.appendChild(tr);

}

function addRow(book){
    let newbook;
    if(localStorage.getItem("books") === null){
        newbook = []
    }
    else{
        newbook = JSON.parse(localStorage.getItem("books"))
    }
    newbook.push(book)
    localStorage.setItem("books",JSON.stringify(newbook));
}
