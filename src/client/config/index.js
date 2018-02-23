import apiKey from './apiKey';

const filmsURL = 'https://api.themoviedb.org/3/genre/28/movies?api_key=dda4bf9922708e43ea0f53759d294c10&language=en-US&include_adult=false&sort_by=created_at.asc';

export default {
    API_KEY: apiKey.API_KEY,
    GET_FILMS_URL: filmsURL

};