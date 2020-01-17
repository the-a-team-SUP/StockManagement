const Hmenu = document.querySelector('.h-menu');
const close = document.querySelector('.close');

const menu = document.querySelector('.menu');

Hmenu.addEventListener('click', (e) =>{
    e.preventDefault();
    menu.classList.remove('s-hide');
})
close.addEventListener('click', (e) =>{
    e.preventDefault();
    menu.classList.add('s-hide');
})