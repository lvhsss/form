document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.querySelector(".upload");
    const progressBar = document.querySelector(".progress");
    const imagePreview = document.querySelector(".preview");
    const submit = document.querySelector('.submit');

    const check = document.querySelector('.check');
    const main = document.querySelector('.main');
    const checking = document.querySelector('.checking');
    const submitting = document.querySelector('.submitting');

    let selectedImage = null;

    submit.style.display = "none";

    fileInput.addEventListener("change", function(event) {
        selectedImage = event.target.files[0];
        upload();
    });

    function upload() {
        let progress = 0;
        const interval = setInterval(function() {
            progress += 1;
            progressBar.value = progress;
            progressBar.style.display = "block";
            
            checking.style.display = "inline-block";

            fileInput.classList.add('qw12');

            if (progress >= 100) {
                showImage();
                clearInterval(interval);

                fileInput.classList.remove('qw12');
                submit.style.display = "block";
                progressBar.style.display = "none";
                checking.style.display = "none";
                progressBar.value = 0;
            };
        }, 25);
    };

    function submitTimer(event) {
        let time = 0;
        const timer = setInterval(function() {
            time += 1;
            progressBar.value = time;
            progressBar.style.display = "block";
    
            submitting.style.display = "inline-block";
            fileInput.classList.add('qw12');
    
            if (time >= 100) {
                clearInterval(timer);
    
                fileInput.classList.remove('qw12');
                progressBar.style.display = "none";
                submitting.style.display = "none";
                progressBar.value = 0;
    
                setTimeout(function() {
                    main.classList.add('_hidden');
                    check.classList.add('_checked');
            
                    setTimeout(function() {
                        window.location.href = 'timer.html';
                    }, 1000);
                }, 1000);
            }
        }, 25);
    }
    

    function showImage() {
        if (selectedImage) {
            const img = document.createElement("img");

            img.src = URL.createObjectURL(selectedImage);
            img.alt = "Uploaded Image";

            imagePreview.innerHTML = '';
            imagePreview.appendChild(img);

            submit.style.display = "block";

            submit.addEventListener('click', function() {
                submitTimer()
            });
        };
    };

    fileInput.addEventListener("input", function(event) {
        if (!event.target.value) {
            selectedImage = null;
            imagePreview.innerHTML = '';
            submit.style.display = "none";
        };
    });
});
