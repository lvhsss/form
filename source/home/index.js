document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.querySelector(".upload");
    const progressBar = document.querySelector(".progress");
    const imagePreview = document.querySelector(".preview");

    fileInput.addEventListener("change", function(event) {

        progressBar.style.display = "block";
        
        upload();

        function upload() {
            let progress = 0;
            const interval = setInterval(function() {
                progress += 1;
                progressBar.value = progress;
    
                if (progress >= 100) {
                    clearInterval(interval);
                    showImage();

                    progressBar.style.display = "none";
                }
            }, 1);
        }

        function showImage() {
            const file = event.target.files[0];
            const imageURL = URL.createObjectURL(file);

            const img = document.createElement("img");
            img.src = imageURL;
            img.alt = "Uploaded Image";

            imagePreview.innerHTML = '';
            imagePreview.appendChild(img);
        }
    });
});