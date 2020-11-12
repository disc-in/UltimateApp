import React from 'react';
import { create, act } from 'react-test-renderer';
import { connect, Provider } from 'react-redux';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from '../Store/testStore';
import { createDrill } from '../Fixtures/TestFixtures';

import ConnectedDrillPage, { DrillPage } from './DrillPage';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('<DrillPage />', () => {
  afterEach(() => jest.clearAllMocks());

  const drill = createDrill();

  it('renders correctly', async () => {
    const Stack = createStackNavigator();
    const tree = create(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="DrillPage" component={ConnectedDrillPage} initialParams={{ drill }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>,
    ).toJSON();
    await act(async () => expect(tree).toMatchSnapshot());
  });

  it('toggles favorite drill', async () => {
    const toggleFavorite = jest.fn();

    const MockedConnectedDrillPage = connect(
      () => ({ favoriteDrills: [] }),
      () => ({ toggleFavorite }),
    )(DrillPage);
    const Stack = createStackNavigator();
    const { getByTestId } = render(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="DrillPage" component={MockedConnectedDrillPage} initialParams={{ drill }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>,
    );

    fireEvent.press(getByTestId('favoriteButton'));

    await waitFor(() => expect(toggleFavorite).toBeCalledWith(drill));
  });
});
