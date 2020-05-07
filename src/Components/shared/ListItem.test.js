import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from 'react-native';

import ListItem from './ListItem';

describe('<ListItem />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ListItem>
          <Text>Hello world</Text>
        </ListItem>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
