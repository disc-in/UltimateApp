import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from '../HomePage';
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

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

  it('links to about page', async () => {
    const navigate = jest.fn();

    const Stack = createStackNavigator();
    const { getByTestId } = await waitFor(() =>
      render(
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              listeners={({ navigation }) => ({
                transitionStart: (e) => {
                  navigation.navigate = navigate;
                },
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>,
      ),
    );

    fireEvent.press(getByTestId('aboutButton'));

    expect(navigate).toBeCalledWith('AboutPage');
  });
});
