import React from 'react';
import { create, act } from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from '../Store/testStore';

import FitnessPage from './FitnessPage';

jest.mock('./shared/VimeoVideo');
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('react-native-get-random-values', () => ({
  getRandomBase64: jest.fn(),
}));

describe('<FitnessPage />', () => {
  it('renders correctly', async () => {
    const drill = store.getState().drills[0];

    const Stack = createStackNavigator();
    const tree = create(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="FitnessPage" component={FitnessPage} initialParams={{ drill }} />
        </Stack.Navigator>
      </NavigationContainer>,
    ).toJSON();
    await act(async () => expect(tree).toMatchSnapshot());
  });
});
