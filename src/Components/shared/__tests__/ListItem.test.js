import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

import ListItem from '../ListItem';

describe('<ListItem />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(
      <ListItem>
        <Text>Hello world</Text>
      </ListItem>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
