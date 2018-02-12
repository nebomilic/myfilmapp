import actionTypes from './actionTypes';

export function getFilmsByCategory () {
    return function(dispatch){
        dispatch({type:actionTypes.GET_FILMS});
    };
}

export function getNextPageOfResults () {    
    return function(dispatch){
        dispatch({type:actionTypes.GET_NEXT_RESULTS});
    };
}

export function changeSortCriteria () {
    return function(dispatch){
        dispatch({type:actionTypes.CHANGE_SORT});
    };
}

export function addFilmToFavorites () {
    return function(dispatch){
        dispatch({type:actionTypes.ADD_TO_FAVORITES});
    };
}

export function removeFilmFromFavorites () {
    return function(dispatch){
        dispatch({type:actionTypes.REMOVE_FROM_FAVORITES});
    };
}