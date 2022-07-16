let form = document.getElementById("addForm");
let items= document.getElementById("items");
let filter=document.getElementById("filter")

// forn submit event
form.addEventListener("submit",addItem)

// FOR DELETE ITEM IN THE LIST 
items.addEventListener("click" ,removeItem)

// FILTER EVENT 
filter.addEventListener("keyup",filterItems)

// ADD ITEMS 
function addItem(e){
        // This function add items in console 
        e.preventDefault();//---> that means over item don't go anywhere it defult the item 
       
        // GET INPUT VALUE 
        let newItem = document.getElementById("item").value;

        //CREAT NEW LI ELEMENT
        let li = document.createElement('li')

        // CREAT LI CLASS 
        li.className="list-group-item"
        
        // ADD TEXT NODE WITH INPUT VALUE 
        li.appendChild(document.createTextNode(newItem));

        // CREAT btn 
        let deleteBtn = document.createElement("button")

        // ADD CLASS IN btn
        deleteBtn.className="btn btn-danger btn-sm float-right delete";

        // add text 
        deleteBtn.appendChild(document.createTextNode("x"))
        
        //  APPEND IN THE "LI"
        li.appendChild(deleteBtn)

        // APPEND IN THE "ITEMS"
        items.appendChild(li)
}

//  REMOVE ITEMS IN THE LIST 
 
function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are You Sure?")){
            let li=e.target.parentElement;
            items.removeChild(li);
        }
    }

}

// FILTER ITEMS IN THE LIST 

function filterItems(e){
    // convert into lower case
    let text = e.target.value.toLowerCase()
    // get li  list
   let itemList= items.getElementsByTagName("li") ;
   
    // convert to an array
    Array.from(itemList).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display="block";

        }
        else{
            item.style.display="none";
        }
    })
}