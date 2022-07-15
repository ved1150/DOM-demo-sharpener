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

// header.style.borderBottom = "4px solid  blue";

// addItems.style.color = "green";
// addItems.style.fontWeight = "900"

// GETELEMENTSBYCLASSNAME
// let item=document.getElementsByClassName("list-group-item");

// item[2].style.background = "green";
// item[0].style.fontWeight ="900";
// item.style.color ="yellow";

// for(let i=0;i<item.length;i++){
//     item[i].style.backgroundColor ="yellow";
//     item[i].style.fontWeight ="900";

// }

// GETELEMENTSBYTAGNAME
// let li=document.getElementsByTagName("li");

// li[2].style.background = "green";
// // item[0].style.fontWeight ="900";
// // item.style.color ="yellow";

// for(let i=0;i<li.length;i++){
//     li[i].style.backgroundColor ="yellow";
//     li[i].style.fontWeight ="900";

// }

// QUERYSELECTOR

// let secItem = document.querySelector(".list-group-item:nth-child(2)");
// secItem.style.backgroundColor="green";
// let hide = document.querySelector(".list-group-item:nth-child(3)");
// hide.textContent=" "

// QUERYSELECTORALL

//  let secItem = document.querySelectorAll(".list-group-item");
//  secItem[1].style.color = "green"

//  let odd = document.querySelectorAll("li:nth-child(odd)")

//  for(let i =0;i<odd.length;i++){
// odd[i].style.backgroundColor = "gray"
//  }

//  let even = document.querySelectorAll("li:nth-child(even)")

//  for(let i =0;i<even.length;i++){
// even[i].style.backgroundColor = "lightgray"
//  }

//  diff b/w queryselector and queryselectorall -->queryselector only select one item in the html and queryselectorall grab many item in the server and also specifi even and odd 