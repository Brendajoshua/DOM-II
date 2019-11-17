// Your code goes here

//mouseout,mouseover
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((link) => link.addEventListener("mouseover", (event) => {
    event.target.style.fontSize = "2rem";
}))
link.addEventListener("mouseout", (event) => {
    event.target.style.fontSize = "1.6rem";
});
    
//prevent default
const nav = document.querySelectorAll("a");
    nav.forEach((arr) => arr.addEventListener("click", (linkClicked) => {
    linkClicked.preventDefault();
}));

//click
let headerColor = document.querySelector('.main-navigation');
    headerColor.addEventListener('click', (event) => {
        event.target.style.backgroundColor = 'blue';
});

//dblclick

const button = document.querySelectorAll('.btn');
 button.forEach((arr) => arr.addEventListener('dblclick', (event) => {
     event.target.style.backgroundColor = 'yellow';
 }));



 //scroll
 window.addEventListener("scroll", () => {
     const scrollable = document.documentElement.scrollHeight - window.innerHeight;
     //console.log(scrollable)
     const scrolled = window.scrollY;

     if (Math.ceil (scrolled) === scrollable){
         alert("You\'ve reached the bottom")
     }
 });

 //load
 window.addEventListener("load", () => {
     alert("loaded");
 });
 
 //keydown
 const body = document.querySelector(".content-section");
 body.addEventListener("keydown", (event) => {
     event.body.style.background = "pink";
    
 });

 let dragged;
 pTags.forEach(pTag => {
   pTag.draggable = true;
   pTag.classList.add('dropzone');
 })
 
 /* events fired on the draggable target */
 document.addEventListener("dragstart", function(event) {
   // store a ref. on the dragged elem
   dragged = event.target;
   // make it half transparent
   event.target.style.opacity = .5;
 });
 
 document.addEventListener("dragend", function(event) {
   // reset the transparency
   event.target.style.opacity = "";
 });
 
 /* events fired on the drop targets */
 document.addEventListener("dragover", function(event) {
   // prevent default to allow drop
   event.preventDefault();
 });
 
 document.addEventListener("dragenter", function(event) {
   // highlight potential drop target when the draggable element enters it
   if (event.target.className == "dropzone") {
     event.target.style.background = "lightBlue";
   }
 });
 
 document.addEventListener("dragleave", function(event) {
   // reset background of potential drop target when the draggable element leaves it
   if (event.target.className == "dropzone") {
     event.target.style.background = "";
   }
 });
 
 document.addEventListener("drop", function(event) {
   // prevent default action (open as link for some elements)
   event.preventDefault();
   // move dragged elem to the selected drop target
   if (event.target.className == "dropzone") {
     event.target.style.background = "";
     //dragged.parentNode is the place where we dragged the p tag from
     //we are removing the ptag from that place and adding the ptag we are dropping on to the original place
     console.log(event.target.textContent) 
     let temp = dragged.textContent 
     dragged.textContent = event.target.textContent;
     event.target.textContent = temp;
   }
 });
