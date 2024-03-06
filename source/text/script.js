const submit = document.querySelector('.submit');
const input = document.querySelector('.text');

const check = document.querySelector('.check');
const main = document.querySelector('.main');

submit.addEventListener('click', function(event) {
    if (input.value != ''){
        setTimeout(function() {
            main.classList.add('_hidden');
            check.classList.add('_checked');

            setTimeout(function() {
                window.location.href = 'end.html';
            }, 500);
        }, 500);
        event.preventDefault();
    };
});