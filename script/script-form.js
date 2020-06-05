
const label = document.querySelectorAll('label');
const submit = document.querySelector('.btn-submit');
const input = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');

// after clicking submit color invalid inputs red
submit.addEventListener('click', function(){
    const invalidInput = document.querySelectorAll('input:invalid');
    const invalidTextarea = document.querySelector('textarea:invalid');
    invalidInput.forEach( inp => {
        inp.classList.add('invalid-input');
        inp.nextElementSibling.classList.add('invalid-label');
    });
    invalidTextarea.classList.add('invalid-input');
    invalidTextarea.nextElementSibling.classList.add('invalid-label');
});

// checks if invalid inputs change to valid after focusing out
input.forEach( inp => {
    inp.addEventListener('focusout', function(){
        if (inp.validity.valid)  {
            inp.classList.remove('invalid-input');
            inp.nextElementSibling.classList.remove('invalid-label');
        }
    });
});

textarea.addEventListener('focusout', function(){
    if (textarea.validity.valid) {
        textarea.classList.remove('invalid-input');
        textarea.nextElementSibling.classList.remove('invalid-label');
    }
});