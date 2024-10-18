import { postVideo } from '../requests.js';

const form = document.querySelector("[data-form]");

async function addVideo(event) {
    event.preventDefault();
    const image = document.querySelector("[data-form-image]").value;
    const urlCode = document.querySelector("[data-form-urlCode]").value;
    const videoURL = `https://www.youtube.com/embed/${urlCode}`

    console.log(videoURL);

    const title = document.querySelector("[data-form-title]").value;
    const description = Math.floor(Math.random() * 999).toString();

    try {
        await postVideo(title, description, videoURL, image);
        window.location.href = "../pages/envio-concluido.html";
    } catch (error) {
        alert("Error on add video", error.message);
    }


}

form.addEventListener("submit", addVideo)