import React from 'react';
import BrowseViewTopControls from '../../../client/ui/components/BrowseViewTopControls';
import renderer from 'react-test-renderer';

it ('renders corectly', () => {
    const tree = renderer
        .create(<BrowseViewTopControls/>)
        .toJSON();

    expect(tree).toMatchSnapshot();
})