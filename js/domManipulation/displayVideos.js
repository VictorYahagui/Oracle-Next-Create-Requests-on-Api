import { deleteVideo, getVideosList } from '../requests.js';

const list = document.querySelector("[data-list]");

export function createCardVideo(title, description, url, image, id) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
                title="${title}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${image}" alt="logo canal alura">
                <h3>${title}</h3>
                <div class="order">
                <p>${description}</p>
                <button class="delete" data-delete="${id}">delete</button>
                </div>
            <div/>
            
    `
    return video
}
const fetchAndDisplayVideos = async () => {
    try {
        const videosList = await getVideosList();
        videosList.forEach(element => {
            const videoCard = createCardVideo(element.titulo, element.descricao, element.url, element.imagem, element.id)
            list.appendChild(videoCard);
        })
    } catch (error) {
        console.error('Error fetching videos:', error.message);
        document.getElementById('error-message').textContent =
            `Erro ao carregar os vídeos: ${error.message}`;
    }
}

list.addEventListener("click", async (event) => {
    if (event.target.matches("[data-delete]")) {
        const id = event.target.getAttribute("data-delete");
        await deleteVideo(id);
        event.target.closest("li").remove();
    }
});

fetchAndDisplayVideos();
