import React from 'react';
import App from '../../../client/ui/containers/App';
import renderer from 'react-test-renderer';

it ('renders corectly', () => {
    const tree = renderer
        .create(<App/>)
        .toJSON();

    expect(tree).toMatchSnapshot();
})