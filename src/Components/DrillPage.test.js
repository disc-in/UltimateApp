import React from 'react';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { connect, Provider } from 'react-redux';

import { render, fireEvent, cleanup } from 'react-native-testing-library';
import { createStackNavigator } from '@react-navigation/stack';
import store from '../Store/testStore';
import { createDrill } from '../Fixtures/TestFixtures';

import ConnectedDrillPage, { DrillPage } from './DrillPage';

afterEach(cleanup);

describe('<DrillPage />', () => {
  afterEach(() => jest.clearAllMocks());

  const drill = createDrill();
  const route = {
    params: {
      drill,
    },
  };

  it('renders correctly', () => {
    const Stack = createStackNavigator();
    const tree = renderer
      .create(
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="DrillPage" component={ConnectedDrillPage} initialParams={{ drill }} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('toggles favorite drill', async () => {
    const toggleFavorite = jest.fn();

    const MockedConnectedDrillPage = connect(
      () => ({ favoriteDrills: [] }),
      () => ({ toggleFavorite }),
    )(DrillPage);
    const Stack = createStackNavigator();
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="DrillPage" component={MockedConnectedDrillPage} initialParams={{ drill }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>,
    );

    await fireEvent.press(getByTestId('favoriteButton'));

    expect(toggleFavorite).toBeCalledWith(drill);
  });
});
