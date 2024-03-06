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

submit.addEventListener('click', checkAnswersAndShowNext);