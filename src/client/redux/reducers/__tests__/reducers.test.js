import reducer  from '../filmReducer';
import * as actionTypes from '../../actions/actionTypes';
describe('++++ Test filmReducer ++++',()=>{
    it('+++ reducer for GET_FILMS_SUCCESS', () => {
        let state = {films: [], isLoading: true};
        const expected =  ['Hellraiser', 'Forrest Gump', 'Equilibrium'];
        state = reducer(state,{type:actionTypes.GET_FILMS_SUCCESS,payload:{ results:expected }});
        expect(state).toEqual({films:expected, isLoading: false});
    });
});