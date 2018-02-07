import React from 'react';
import BrowseView from '../../../client/ui/containers/BrowseView';
import renderer from 'react-test-renderer';

it ('renders corectly', () => {
    const tree = renderer
        .create(<BrowseView/>)
        .toJSON();

    expect(tree).toMatchSnapshot();
})