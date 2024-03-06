document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".main-but").addEventListener("click", function(event) {
        event.preventDefault();

        const accessCode = '2008';

        const check = document.querySelector('.check');
        const main = document.querySelector('.main');

        const userCode = document.querySelector('.main-input').value;
        const msg = document.querySelector('.msg');

        if (userCode === accessCode) {
            setTimeout(function() {
                main.classList.add('_hidden');
                check.classList.add('_checked');
        
                setTimeout(function() {
                    window.location.href = 'home.html';
                }, 1000);
            }, 1000);
        } else {
            msg.innerText = 'access denied';
        }
    });
});