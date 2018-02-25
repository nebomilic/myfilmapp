import { getFilmsByCategory } from '../index'

it ('getFilmsByCategory runs correctly', () => {
  const gen = getFilmsByCategory();

  assert.deepEqual(
    gen.next(),
    { done: false, value: ??? },
    'incrementAsync should return a Promise that will resolve after 1 second'
  )
});