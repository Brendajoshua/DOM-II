// Your code goes here

//mouseenter,mouseover
const navLink = document.querySelectorAll("a");
navLink.addEventListener("mouseenter", (event) => {
    event.target.style.color = "red";
    setTimeout(function(){
        event.target.style.color = "";
    }, 500);
}, false);

navLink.addEventListener("mouseover", (event) => {
    event.target.style.color = "blue";
    setTimeout(function(){
        event.target.style.color = "";
    }, 500);
}, false);

//click

const button = document.querySelectorAll('.btn');
button.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'yellow';
});

//keydown
const body = document.getElementsById("body");
body.addEventListener("keydown", (event) => {
    if (event.key == "v"){
        document.body.style.background = "pink";
    }
});

//copy
const title = document.getElementsByTagName("h2");
title[o].addEventListener("copy", (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData("text/plain",
    selection.toString().toUpperCase());
    event.preventDefault();
});

//drag
const image = document.getElementById("img");
image.addEventListener("drag", (event) => {

}, false);

//focus,blur
const footer = document.getElementsByClassName(".footer");
footer.addEventListener("focus", (event) => {
    event.target.style.color = "green";
}, true);

footer.addEventListener("blur", (event) => {
    event.target.style.background = "";
}, true);

//dbclick
const doubleButton = document.querySelectorAll('.btn');
doubleButton.addEventListener("dblclick", (event){
    doubleButton.event.style.color = "red";
});

