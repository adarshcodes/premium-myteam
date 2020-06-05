  const openNavIcon = document.querySelector('#open-nav');
  const closeNavIcon = document.querySelector('#close-nav');
  const menu = document.querySelector('.nav__box');
  const background = document.querySelector('.nav__background');

  function navMenu() {
    menu.classList.toggle('nav__box--open');
    menu.classList.toggle('nav__box--hidden');
    background.classList.toggle('nav__background--invisible');
    background.classList.toggle('nav__background--visible');
    document.querySelector('body').classList.toggle('scrolling');
    document.querySelector('body').classList.toggle('no-scrolling');
  }

  openNavIcon.addEventListener('click', navMenu);
  closeNavIcon.addEventListener('click', navMenu);
  background.addEventListener('click', navMenu);



