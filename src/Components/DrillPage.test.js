import React from 'react';
import renderer, { TestRenderer } from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, fireEvent } from 'react-native-testing-library';
import store from '../Store/testStore';
import { createDrill } from '../Fixtures/TestFixtures';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import ConnectedDrillPage, { DrillPage } from './DrillPage';
import * as Actions from '../Store/Actions/favoriteAction';

describe('<DrillPage />', () => {
  const drill = createDrill({ title: '________' });
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

  // it('toggles favorite drill', async () => {
  //   const Stack = createStackNavigator();

  //   const { getByTestId } = render(
  //     <Provider store={store}>
  //       <NavigationContainer>
  //         <Stack.Navigator>
  //           <Stack.Screen name="DrillPage" component={ConnectedDrillPage} initialParams={{ drill }} />
  //         </Stack.Navigator>
  //       </NavigationContainer>
  //     </Provider>,
  //   );
  //   const spy = jest.spyOn(Actions, 'toggleFavorite');

  //   await fireEvent.press(getByTestId('favoriteButton'));
  //   expect(spy).toHaveBeenCalled();
  //   expect(Actions.toggleFavorite).toBeCalledWith(
  //     expect.objectContaining({
  //       id: 1,
  //     }),
  //   );

  //   spy.mockRestore();
  // });
});
