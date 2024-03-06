const quiz = document.querySelector('.quiz-wrap');

const correctAnswersInitial = ['2', '5', '1', '4', '3', '6'];


function checkAnswersAndShowNext(event) {
    event.preventDefault();
    const inputs = document.querySelectorAll('.quiz input');
    let allCorrect = true;
    inputs.forEach((input, index) => {
        if (input.value.toLowerCase() !== correctAnswersInitial[index]) {
            allCorrect = false;
            input.style.color = 'red';
        } else {
            input.style.color = 'green';
        }
    });
    if (allCorrect) {
        window.location.href += 'text.html';
    } else {
        console.log('Some answers are incorrect!');
    }
}

submit.addEventListener('click', checkAnswersAndShowNext);