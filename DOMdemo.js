// document.title= ved ;
// document examination 
// console.log(document.title)
// console.log(document.head)
// console.log(document.all)
// document.all[10].textContent="hello!"
// console.log(document.forms)

// GETELEMENTBYID 
let header = document.getElementById("main-header");
let addItems= document.getElementById("main");
// console.log(document.getElementById("main"))
// document.getElementById("main").textContent="hiiii!"
// document.getElementById("main").innerText="hoopiiii!"--> this is same work as textContent but style dff b/w innertext don't show hidden text in console 
// document.getElementById("main").innerHTML= "<h1>hello world </h1>"
// document.getElementById("main").style.background ="yellow";

header.style.borderBottom = "4px solid  blue";

addItems.style.color = "green";
addItems.style.fontWeight = "900"
alert()