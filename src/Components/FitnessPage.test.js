import React from 'react';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from '../Store/testStore';

import FitnessPage from './FitnessPage';

jest.mock('react-native-get-random-values', () => ({
  getRandomBase64: jest.fn(),
}));

describe('<FitnessPage />', () => {
  it('renders correctly', () => {
    const drill = store.getState().drills[0];

    const Stack = createStackNavigator();
    const tree = renderer
      .create(
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="FitnessPage" component={FitnessPage} initialParams={{ drill }} />
          </Stack.Navigator>
        </NavigationContainer>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
