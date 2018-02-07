import React from 'react';
import FavoritesView from '../../../client/ui/containers/FavoritesView';
import renderer from 'react-test-renderer';

it ('renders corectly', () => {
    const tree = renderer
        .create(<FavoritesView/>)
        .toJSON();

    expect(tree).toMatchSnapshot();
})