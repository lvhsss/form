document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.querySelector(".upload");
    const imagePreview = document.querySelector(".preview");

    fileInput.addEventListener("change", function(event) {
        const file = event.target.files[0];

        if (file) {
            const imageURL = URL.createObjectURL(file);

            const img = document.createElement("img");
            img.src = imageURL;
            img.alt = "Uploaded Image";

            imagePreview.innerHTML = '';
            imagePreview.appendChild(img);
        }
    });
});