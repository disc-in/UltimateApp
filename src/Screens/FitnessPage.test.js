import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from '../Store/testStore';

import FitnessPage from './FitnessPage';

jest.mock('../Components/shared/VimeoVideo');
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native-get-random-values', () => ({
  getRandomBase64: jest.fn(),
}));

describe('<FitnessPage />', () => {
  it('renders correctly', async () => {
    const drill = store.getState().drills[0];

    const Stack = createStackNavigator();
    const { toJSON } = render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="FitnessPage" component={FitnessPage} initialParams={{ drill }} />
        </Stack.Navigator>
      </NavigationContainer>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
