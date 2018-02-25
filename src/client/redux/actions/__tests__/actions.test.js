import {getFilmsByCategory,getNextPageOfResults, changeSortCriteria, addFilmToFavorites, removeFilmFromFavorite} from '../index'
import * as actionTypes from '../actionTypes';
describe('++++ Test ACTIONS ++++',()=>{
    
    it('+++ actionCreator getFilmsByCategory', () => {
        const action = getFilmsByCategory()
        expect(action).toEqual({type:actionTypes.GET_FILMS})
    });

    it('+++ actionCreator getNextPageOfResults', () => {
        const action = getNextPageOfResults()
        expect(action).toEqual({type:actionTypes.GET_NEXT_RESULTS})
    });

    it('+++ actionCreator changeSortCriteria', () => {
        const action = changeSortCriteria()
        expect(action).toEqual({type:actionTypes.CHANGE_SORT})
    });

    it('+++ actionCreator addFilmToFavorites', () => {
        const action = addFilmToFavorites()
        expect(action).toEqual({type:actionTypes.ADD_TO_FAVORITES})
    });

    it('+++ actionCreator removeFilmFromFavorite', () => {
        const action = removeFilmFromFavorite()
        expect(action).toEqual({type:actionTypes.REMOVE_FROM_FAVORITES})
    });
});


