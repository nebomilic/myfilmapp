import { put, all, call, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {fetchFilms} from '../service';


export function* getFilmsByCategory() {  
    try {        
        const result = yield call(fetchFilms);                
        yield put({type: actionTypes.GET_FILMS_SUCCESS, payload: result});
        
    } catch(error) {
        yield put({ type: actionTypes.GET_FILMS_FAIL });
    }
}

// watchers
function* watchGetFilms() {
    yield takeEvery(actionTypes.GET_FILMS, getFilmsByCategory);
}


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        watchGetFilms()
    ]);
}