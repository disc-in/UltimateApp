import React from 'react';
import renderer, { TestRenderer } from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { render, fireEvent } from 'react-native-testing-library';

import store from '../Store/testStore';
import { createDrill } from '../Fixtures/TestFixtures';

import ConnectedDrillPage, { DrillPage } from './DrillPage';
import * as Actions from '../Store/Actions/favoriteAction';
import { useHeaderHeight } from '@react-navigation/stack';
jest.mock('@react-navigation/stack');
const { createStackNavigator } = jest.requireActual('');

describe('<DrillPage />', () => {
  const drill = createDrill();
  const route = {
    params: {
      drill,
    },
  };

  it('renders correctly', () => {
    useHeaderHeight.mockReturnValue(80);
    const navigation = { setOptions: jest.fn(), navigate: jest.fn() };

    const tree = renderer
      .create(
        <Provider store={store}>
          <DrillPage route={route} navigation={navigation} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  /* it('toggles favorite drill', async () => {
    // useHeaderHeight.mockReturnValue(80);
    // const navigation = { setOptions: jest.fn(), navigate: jest.fn() };
    const toggleFavorite = jest.fn();
    const DummyScreen = props => null;


    // it('renders correctly', () => {
    //   const Stack = createStackNavigator();
    //   const tree = renderer
    //     .create(
    //       <Provider store={store}>
    //         <NavigationContainer>
    //           <Stack.Navigator>
    //             <Stack.Screen name="DrillPage" component={ConnectedDrillPage} initialParams={{ drill }} />
    //           </Stack.Navigator>
    //         </NavigationContainer>
    //       </Provider>,
    //     )
    //     .toJSON();
    //   expect(tree).toMatchSnapshot();
    // });
    // const { getByTestId } = render(
    //   <DrillPage route={route} navigation={navigation} favoriteDrills={[]} toggleFavorite={toggleFavorite} />,
    // );


    const Stack = createStackNavigator();
    const { getByText, getByTestId } = render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="DrillPage" component={DrillPage} initialParams={drill} />
          <Stack.Screen name="DrillListPage" component={DummyScreen} />
        </Stack.Navigator>
      </NavigationContainer>,
    );

    await fireEvent.press(getByTestId('favoriteButton'));

    expect(toggleFavorite).toBeCalledWith(drill);
  }); */
});
