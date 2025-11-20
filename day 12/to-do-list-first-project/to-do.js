
const addForm = document.getElementById("addForm")
let itemList = document.getElementById("items")
let filter = document.getElementById("filter")
console.log(filter)

function submitHandler(e)
{
    e.preventDefault()
    let item = document.getElementById("item").value
    if(item == ""){
        alert("Please Enter Some Value")
        return
    }
    let li = document.createElement('li')
    li.className = "list-group-item"
    li.appendChild(document.createTextNode(item))
    let btn = document.createElement("button")//<button></button>
    btn.appendChild(document.createTextNode("X"))//<button>X</button>
    btn.className = "btn btn-danger btn-sm float-right delete"
    li.appendChild(btn)

    itemList.appendChild(li)
    document.getElementById("item").value = ""
}


function deleteHandler(x)
{
        if(x.target.classList.contains("delete")){
                if(confirm("Are you sure you want to delete it.")){
                    itemList.removeChild(x.target.parentElement)
                                
                }
        }else{
            alert("bhai kyu time pass kr rhe hoon")
        }
}


function searchHandler(e)
{
    let text = e.target.value.toLowerCase()
    let liItem = itemList.getElementsByTagName("li")
    let itemArray = Array.from(liItem)
    itemArray.forEach(function(e){
        if(e.firstChild.textContent.toLowerCase().indexOf(text) != -1){
            e.style.display = "block"
        }else{
            e.style.display = "none"
        }
    })
}

addForm.addEventListener("submit",submitHandler)
itemList.addEventListener("click",deleteHandler)
filter.addEventListener("input",searchHandler)
