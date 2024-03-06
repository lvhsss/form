const again = document.querySelector('.again');
const confirm = document.querySelector('.confirm');
const timer = document.querySelector('.timer');

let time = 10;
let timerInterval;

function updateTimer() {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);

    let displayString = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds; // Adjusted to add leading zero if seconds < 10

    timer.textContent = displayString;
    time--;

    if (time < 0) {
        clearInterval(timerInterval);
        timer.classList.add('_none');
        again.classList.add('_visible');
        confirm.classList.add('_visible');
    }
}

function startNewTimer() {
    time = 60; // Set time to 60 seconds (1 minute) for the new timer
    again.classList.remove('_visible');
    confirm.classList.remove('_visible');
    updateTimer(); // Start the timer
    timerInterval = setInterval(updateTimer, 1000);
}

// Start the initial timer
startNewTimer();

again.addEventListener('click', function() {
    clearInterval(timerInterval); // Stop the current timer
    startNewTimer(); // Restart the timer
});

confirm.addEventListener('click', function() {
    window.location.href = 'new_page_url'; // Replace 'new_page_url' with the URL you want to redirect to
});
