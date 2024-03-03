document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".main-but").addEventListener("click", function(event) {
        event.preventDefault();

        const accessCode = '1';

        const userCode = document.querySelector('.main-input').value;
        const msg = document.querySelector('.msg');

        if (userCode === accessCode) {
            window.location.href = 'home.html';
        } else {
            msg.innerText = 'access denied';
        }
    });
});