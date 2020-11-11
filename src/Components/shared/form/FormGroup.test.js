import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';

import FormGroup from './FormGroup';

describe('FormGroup', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <FormGroup>
          <View />
        </FormGroup>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
