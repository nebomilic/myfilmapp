import React from 'react';
import FilmGridItem from '../../../client/ui/components/FilmGridItem';
import renderer from 'react-test-renderer';

it ('renders corectly', () => {
    const tree = renderer
        .create(<FilmGridItem/>)
        .toJSON();

    expect(tree).toMatchSnapshot();
})