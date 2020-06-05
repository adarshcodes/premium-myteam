const btns = document.querySelectorAll('.card__btn-about');
const frontSide = document.querySelectorAll('.card__side-front');
const backSide = document.querySelectorAll('.card__side-back');

btns.forEach((btn,i)=>{
    btn.addEventListener('click', function(){

        btn.classList.toggle('btn-back');
        btn.classList.toggle('btn-more');
        frontSide[i].classList.toggle('show-front');
        frontSide[i].classList.toggle('hide-front');
        backSide[i].classList.toggle('show-back');
        backSide[i].classList.toggle('hide-back');
    });
});
