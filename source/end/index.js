document.addEventListener("DOMContentLoaded", function() {
    const gifContainer = document.querySelector("#gif-container");
    const gifs = ["./source/end/gif2/1.gif", "./source/end/gif2/2.gif", "./source/end/gif2/3.gif", "./source/end/gif2/4.gif", "./source/end/gif2/5.gif", "./source/end/gif2/6.gif", "./source/end/gif2/7.gif"]; // додайте ваші гіфки сюди

    for (let i = 0; i < 60; i++) { // приклад: створити 10 гіфок
        const randomIndex = Math.floor(Math.random() * gifs.length);
        const randomGif = gifs[randomIndex];

        const gif = document.createElement("img");
        gif.src = randomGif;
        gif.classList.add("gif");
        gif.style.left = Math.random() * (gifContainer.clientWidth - 100) + "px"; // рандомне позиціонування
        gif.style.top = Math.random() * (gifContainer.clientHeight - 100) + "px"; // рандомне позиціонування

        gifContainer.appendChild(gif);
    }
});
