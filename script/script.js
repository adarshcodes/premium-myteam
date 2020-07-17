//btns-variable
const hamBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');

//menu-variable
const hamMenu = document.querySelector('.ham-menu');

//adding-class
hamBtn.addEventListener('click', function () {
    hamMenu.classList.add('ham-open');
});

//removing-class
closeBtn.addEventListener('click', function () {
    hamMenu.classList.remove('ham-open');
});