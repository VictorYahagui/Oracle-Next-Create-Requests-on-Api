import { fetchData } from './api.js';

const BASE_URL = 'http://localhost:3000'

export const getVideosList = async (searchData = '') => {
    const url = searchData ? `${BASE_URL}/videos?q=${searchData}` : `${BASE_URL}/videos`;
    return await fetchData(url);
};

export const postVideo = async (title, description, videoURL, image) => {
    const url = `${BASE_URL}/videos`;
    return await fetchData(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            titulo: title,
            descricao: `${description} mil visualizações`,
            url: videoURL,
            imagem: image
        })
    });
};

export const deleteVideo = async (id) => {
    const url = `${BASE_URL}/videos/${id}`;
    return await fetchData(url, {
        method: "DELETE"
    });
};