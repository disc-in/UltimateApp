import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-native-testing-library';
import { NavigationContainer } from '@react-navigation/native';

import { DrillTypes } from '../Fixtures/config';

import HomePage from './HomePage';

afterEach(cleanup);
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('<HomePage />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <NavigationContainer>
          <HomePage />
        </NavigationContainer>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
