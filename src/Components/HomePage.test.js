import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import HomePage from './HomePage';
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('<HomePage />', () => {
  it('renders correctly', async () => {
    const navigation = { setOptions: jest.fn() };

    const { toJSON } = await waitFor(() =>
      render(
        <NavigationContainer>
          <HomePage navigation={navigation} />
        </NavigationContainer>,
      ),
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
