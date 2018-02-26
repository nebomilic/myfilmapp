import { put, call } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import {getFilmsByCategory as getFilmsByCategoryActionCreator,
        getFilmsByCategoryFail as getFilmsByCategoryFailActionCreator,
        getFilmsByCategorySuccess as getFilmsByCategorySuccessActionCreator} from '../../actions';
import {getFilmsByCategory as getFilmsByCategorySaga} from '../../sagas';
import {fetchFilms} from '../../service';

const getFilmsAction = getFilmsByCategoryActionCreator();

describe('++++ Getting films by category', () => {
  const generator = cloneableGenerator(getFilmsByCategorySaga)(getFilmsAction);
  expect(generator.next().value).toEqual(call(fetchFilms));

  test('+++ Getting films SUCCESS +++', () => {
    const clone = generator.clone();
    const expected = {result: 'awesome'};
    expect(clone.next(expected).value).toEqual(put(getFilmsByCategorySuccessActionCreator(expected)));
    expect(clone.next().done).toEqual(true);
  });
  // test('+++ Getting films FAILED +++', () => {
  //   const clone = generator.clone();
  //   expect(clone.next(false).value).toEqual(put(getFilmsByCategoryFailActionCreator()));
  //   expect(clone.next().done).toEqual(true);
  // });
});