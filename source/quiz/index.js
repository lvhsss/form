document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.quiz input');
    inputs[0].focus(); // Фокус на першому інпуті при завантаженні сторінки
});

const quiz = document.querySelector('.quiz-wrap');
const submit = document.querySelector('.submit');

const check = document.querySelector('.check');
const main = document.querySelector('.main');

const correctAnswersInitial = ['2', '5', '1', '4', '3', '6'];

function checkAnswersAndShowNext(event) {
    event.preventDefault();
    const inputs = document.querySelectorAll('.quiz input');
    let allCorrect = true;
    inputs.forEach((input, index) => {
        if (input.value.toLowerCase() !== correctAnswersInitial[index]) {
            allCorrect = false;
        }
    });
    if (allCorrect) {
        inputs.forEach(input => input.value = '');
        submit.innerText = 'correct';
        
        setTimeout(function() {
            main.classList.add('_hidden');
            check.classList.add('_checked');

            setTimeout(function() {
                window.location.href = 'text.html';
            }, 1000);
        }, 1000);
        event.preventDefault();
    } else {
        submit.innerText = 'wrong'
    }
}

function moveFocus(event, index) {
    const inputs = document.querySelectorAll('.quiz input');
    if (event.target.value.length >= 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
    }
}

document.querySelectorAll('.quiz input').forEach((input, index) => {
    input.addEventListener('input', (event) => moveFocus(event, index));
});

submit.addEventListener('click', checkAnswersAndShowNext);
