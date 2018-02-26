import * as actionTypes from './actionTypes';

export const getFilmsByCategory = () => {
    return ({type:actionTypes.GET_FILMS});
};

export const getFilmsByCategorySuccess = (payload) => {
    return ({type:actionTypes.GET_FILMS_SUCCESS, payload: payload});
};

export const getFilmsByCategoryFail = () => {
    return ({type:actionTypes.GET_FILMS_FAIL});
};

export const getNextPageOfResults = () => {
    return ({type:actionTypes.GET_NEXT_RESULTS});
};

export const changeSortCriteria = () => {
    return({type:actionTypes.CHANGE_SORT});    
};

export const addFilmToFavorites = () => {
    return ({type:actionTypes.ADD_TO_FAVORITES});
};

export const removeFilmFromFavorite = () => {
    return ({type:actionTypes.REMOVE_FROM_FAVORITES});
};