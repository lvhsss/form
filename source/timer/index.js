const again = document.querySelector('.again');
const confirm = document.querySelector('.confirm');
const timer = document.querySelector('.timer');

const check = document.querySelector('.check');
const main = document.querySelector('.main');

let mainTimerTime = 60;
let mainTimerInterval;
let preTimerTime = 10;
let preTimerInterval;

function updatePreTimer() {
    let seconds = preTimerTime % 60;
    let displayString = (seconds < 10 ? '' : '') + seconds;

    timer.textContent = displayString;
    preTimerTime--;

    if (preTimerTime < 0) {
        clearInterval(preTimerInterval);

        startMainTimer();
    }
}

function updateMainTimer() {
    let seconds = mainTimerTime % 60;
    let minutes = Math.floor(mainTimerTime / 60);

    let displayString = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

    timer.textContent = displayString;
    mainTimerTime--;

    if (mainTimerTime < 0) {
        clearInterval(mainTimerInterval);


        again.classList.add('_visible');
        confirm.classList.add('_visible');
    }
}

function startPreTimer() {
    preTimerTime = 10;
    updatePreTimer();
    preTimerInterval = setInterval(updatePreTimer, 1000);
}

function startMainTimer() {
    mainTimerTime = 5;
    updateMainTimer();
    mainTimerInterval = setInterval(updateMainTimer, 1000);
}

startPreTimer();

again.addEventListener('click', function() {
    clearInterval(mainTimerInterval);

    again.classList.remove('_visible');
    confirm.classList.remove('_visible');

    startMainTimer();
});

confirm.addEventListener('click', function(event) {
    setTimeout(function() {
        main.classList.add('_hidden');
        check.classList.add('_checked');

        setTimeout(function() {
            window.location.href = 'quiz.html';
        }, 1000);
    }, 1000);
    event.preventDefault();
});
