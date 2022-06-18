import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DrillEditorAnimationPage from '../DrillEditorAnimationPage';

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('<DrillEditorAnimationPage />', () => {
  const route = {
    params: {
      onAnimationChange: jest.fn(),
      animation: undefined,
    },
  };

  it('renders correctly', async () => {
    const navigation = { navigate: jest.fn(), setOptions: jest.fn() };

    const { toJSON } = render(<DrillEditorAnimationPage route={route} navigation={navigation} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('goes back to the drill editor', async () => {
    const navigate = jest.fn();

    const Stack = createStackNavigator();
    const { getByTestId } = await waitFor(() =>
      render(
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="DrillEditorAnimationPage"
              component={DrillEditorAnimationPage}
              initialParams={{ route }}
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

    fireEvent.press(getByTestId('validateButton'));

    expect(navigate).toBeCalledWith('DrillEditorPage');
  });
});
