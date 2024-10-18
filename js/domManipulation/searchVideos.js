import { getVideosList } from '../requests.js';
import { createCardVideo } from '../domManipulation/displayVideos.js';

const searchButton = document.querySelector('[data-search-button]');
const searchInput = document.querySelector('[data-search]');

const searchVideos = async (event) => {
    event.preventDefault();
    try {
        const searchData = searchInput.value.toLowerCase();
        const filteredVideos = await getVideosList(searchData);
        const list = document.querySelector("[data-list]");
        if (list) {
            while (list.firstChild) {
                list.removeChild(list.firstChild);
            }
        }
        filteredVideos.forEach(element => {
            const videoCard = createCardVideo(element.titulo, element.descricao, element.url, element.imagem);
            list.appendChild(videoCard);
        });
    } catch (error) {
        console.log("Error when searching for data", error.message);
        alert("F");
    }
}

searchButton.addEventListener('click', searchVideos);
