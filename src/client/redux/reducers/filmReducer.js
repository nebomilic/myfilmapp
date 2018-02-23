import * as actionTypes from '../actions/actionTypes';
export default function reducer(state={     
    films: [],
    selectedGenre: [],
    sort: {},
    allGenres: [
        {id: '28', name: 'Action'},
        {id: '12', name: 'Adventure'},
        {id: '16', name: 'Animation'},
        {id: '35', name: 'Comedy'},
        {id: '80', name: 'Crime'},
        {id: '99', name: 'Documentary'},
        {id: '18', name: 'Drama'},
        {id: '10751', name: 'Family'},
        {id: '14', name: 'Fantasy'},
        {id: '36', name: 'History'},
        {id: '27', name: 'Horror'},
        {id: '10402', name: 'Music'},
        {id: '9648', name: 'Mystery'},
        {id: '10749', name: 'Romance'},
        {id: '878', name: 'Science Fiction'},
        {id: '53', name: 'Thriller'}
    ],
    isLoading: true,
    loadingError: false
}, action){
    switch (action.type) {
    case actionTypes.GET_FILMS_SUCCESS: {
        return {
            ...state,
            films: action.payload.results,
            isLoading: false        
        };
    }

    }
    return state;
}