const buger = document.querySelector('.burger');
const navLinks= document.querySelector('.nav-links');
var burger2 = document.querySelector('.burger-1');

buger.addEventListener('click',(e)=>{
    navLinks.style.transform ="translatex(0)";
});


burger2.addEventListener('click',(e)=>{
    navLinks.style.transform ="translatex(100%)";
});