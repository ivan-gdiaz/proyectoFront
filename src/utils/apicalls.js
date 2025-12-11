import API from './api.js';
import axios from 'axios';
import config from '../config.js';

export {
    getAllMovies,
    addNewBookmark,
    getSingleMovie,
    getMyBookmarks,
    deleteBookmark
}

function getAllMovies() {
    return API.get('/movies').then(res => res.data).catch((error) => {
        console.error("Error fetching movies:", error);
        throw error;
    }); 
}

function addNewBookmark(email, jwt, movie){
    return API.post('/bookmarks/', {
        email,
        movie}, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        }).then(result => result.data);
}

function getSingleMovie(idmovie) {
    return API.get('/movies/'+idmovie).then(res => res.data);
 }

 function getMyBookmarks(email) {
    return API.get('/bookmarks/'+email).then(res => res.data);
}

function deleteBookmark(idbookmark) {
    return API.delete('/bookmarks/'+idbookmark).then(result => result.data);
}
