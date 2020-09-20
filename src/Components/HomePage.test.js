import React from 'react';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';

import { DrillTypes } from '../Fixtures/config';

import HomePage from './HomePage';
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('<HomePage />', () => {
  it('renders correctly', () => {
    const navigation = { setOptions: jest.fn() };

    const tree = renderer
      .create(
        <NavigationContainer>
          <HomePage navigation={navigation} />
        </NavigationContainer>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
