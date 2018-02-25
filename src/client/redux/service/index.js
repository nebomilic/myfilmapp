import {FILMS_URL} from '../../config';
export function fetchFilms() {
    return fetch(FILMS_URL)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            return json;
        }).catch(function(ex) {
            throw new Error(ex);
        });
}