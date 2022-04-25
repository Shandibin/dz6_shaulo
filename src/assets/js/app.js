console.log(document);

const nav= document.getElementById ('nav');
const navClose = document.getElementById ('nav-close');
const navOpen= document.getElementById ('nav-open');

console.log (nav);

window.ontouchstart = function (event){
   if(event.target == navOpen) {
       nav.classList.add ('active');
   }
   
}

