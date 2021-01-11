import React from 'react';
import { create, act } from 'react-test-renderer';
import { connect, Provider } from 'react-redux';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Share } from 'react-native';

import store from '../Store/testStore';
import { createDrill } from '../Fixtures/TestFixtures';

import ConnectedDrillPage, { DrillPage } from './DrillPage';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('<DrillPage />', () => {
  afterEach(() => jest.clearAllMocks());

  const drill = store.getState().drills[0];
  const toggleFavorite = jest.fn();

  it('renders correctly', async () => {
    const Stack = createStackNavigator();
    const tree = create(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="DrillPage" component={ConnectedDrillPage} initialParams={{ id: drill.id }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>,
    ).toJSON();
    await act(async () => expect(tree).toMatchSnapshot());
  });

  it('renders correctly a favorite drill', async () => {
    const MockedConnectedDrillPage = connect(
      () => ({ favoriteDrills: [drill.id], drills: [drill] }),
      () => ({ toggleFavorite }),
    )(DrillPage);
    const Stack = createStackNavigator();
    const tree = create(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="DrillPage" component={MockedConnectedDrillPage} initialParams={{ id: drill.id }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>,
    );
    await act(async () => expect(tree).toMatchSnapshot());
  });

  it('toggles favorite drill', async () => {
    const MockedConnectedDrillPage = connect(
      () => ({ favoriteDrills: [], drills: store.getState().drills }),
      () => ({ toggleFavorite }),
    )(DrillPage);
    const Stack = createStackNavigator();
    const { getByTestId } = render(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="DrillPage" component={MockedConnectedDrillPage} initialParams={{ id: drill.id }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>,
    );

    fireEvent.press(getByTestId('favoriteButton'));

    await waitFor(() => expect(toggleFavorite).toBeCalledWith(drill));
  });

  it('triggers share', async () => {
    const share = jest.fn();
    Share.share = () => new Promise((resolve, reject) => share());

    const Stack = createStackNavigator();
    const { getByTestId } = render(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="DrillPage" component={ConnectedDrillPage} initialParams={{ id: drill.id }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>,
    );

    await fireEvent.press(getByTestId('shareButton'));

    expect(share).toHaveBeenCalled();
  });
});
