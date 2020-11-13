import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from '../Store/testStore';
import { createDrill } from '../Fixtures/TestFixtures';
import { DrillTypes } from '../Fixtures/config';

import ConnectedDrillListPage, { DrillListPage } from './DrillListPage';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('<DrillListPage />', () => {
  const navigation = { navigate: jest.fn(), setOptions: jest.fn() };

  it('renders correctly when connected', () => {
    const route = {
      params: {
        type: DrillTypes.FRISBEE,
      },
    };
    const tree = renderer
      .create(
        <Provider store={store}>
          <ConnectedDrillListPage route={route} navigation={navigation} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders frisbee drills sorted by number of players', () => {
    const route = {
      params: {
        type: DrillTypes.FRISBEE,
      },
    };
    const morePlayersDrill = createDrill({ id: 1, type: DrillTypes.FRISBEE, minimalPlayersNumber: 14 });
    const lessPlayersDrill = createDrill({ id: 2, type: DrillTypes.FRISBEE, minimalPlayersNumber: 6 });
    const evenMorePlayersDrill = createDrill({ id: 3, type: DrillTypes.FRISBEE, minimalPlayersNumber: 20 });
    const drills = [morePlayersDrill, evenMorePlayersDrill, lessPlayersDrill];
    const tree = renderer.create(<DrillListPage route={route} navigation={navigation} storeDrills={drills} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders fitness drills sorted by duration', () => {
    const route = {
      params: {
        type: DrillTypes.FITNESS,
      },
    };
    const shortDrill = createDrill({ id: 1, type: DrillTypes.FITNESS, durationInMinutes: 10 });
    const longDrill = createDrill({ id: 2, type: DrillTypes.FITNESS, durationInMinutes: 20 });
    const evenLongerDrill = createDrill({ id: 3, type: DrillTypes.FITNESS, durationInMinutes: 30 });
    const drills = [longDrill, evenLongerDrill, shortDrill];
    const tree = renderer.create(<DrillListPage route={route} navigation={navigation} storeDrills={drills} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('links to video view', async () => {
    const route = {
      params: {
        type: DrillTypes.FRISBEE,
      },
    };
    const drill = createDrill({ type: DrillTypes.FRISBEE, title: 'Hot Box' });
    const drills = [drill];
    const { getByText } = render(<DrillListPage route={route} navigation={navigation} storeDrills={drills} />);

    await fireEvent.press(getByText('Hot Box'));

    expect(navigation.navigate).toBeCalledWith('DrillPage', { drill });
  });

  it('links to the right filters view on press on the button', async () => {
    const navigate = jest.fn();

    const Stack = createStackNavigator();
    const { getByTestId } = await waitFor(() =>
      render(
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="DrillListPage"
                component={ConnectedDrillListPage}
                initialParams={{ type: DrillTypes.FRISBEE }}
                listeners={({ navigation }) => ({
                  transitionStart: (e) => {
                    navigation.navigate = navigate;
                  },
                })}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>,
      ),
    );

    await fireEvent.press(getByTestId('filterButton'));

    expect(navigate).toBeCalledWith('FrisbeeFilters', {
      initialData: store.getState().drills.filter((drill) => drill.type === DrillTypes.FRISBEE),
      previousScreen: 'DrillListPage',
      previousType: DrillTypes.FRISBEE,
    });
  });
});
