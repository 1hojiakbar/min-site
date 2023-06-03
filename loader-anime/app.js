"use script";

const noneText = document.getElementById('none-text');
const closeBtn = document.getElementById('close-btn');
const openBtn = document.getElementById('btn');
const main = document.getElementById('main');

openBtn.addEventListener('click', ()=>{
    noneText.style.display = "flex";
    main.style.marginTop = "-450px";
});

closeBtn.addEventListener('click', ()=>{
    noneText.style.display = "none";
    main.style.marginTop = "0";
});