import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrill } from '../Fixtures/TestFixtures';
import { Levels, FrisbeeGoals, DrillTypes } from '../Fixtures/config';

import ConnectedFrisbeeFilters, { FrisbeeFilters } from './FrisbeeFilters';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('<FrisbeeFilters />', () => {
  const beginnerDrill = createDrill({
    id: 1,
    type: DrillTypes.FRISBEE,
    goals: [FrisbeeGoals.HANDLING],
    level: Levels.BEGINNER,
  });
  const intermediateDrill = createDrill({
    id: 2,
    type: DrillTypes.FRISBEE,
    goals: [FrisbeeGoals.HANDLING],
    level: Levels.INTERMEDIATE,
  });
  const advancedDrill = createDrill({
    id: 3,
    type: DrillTypes.FRISBEE,
    goals: [FrisbeeGoals.HANDLING],
    level: Levels.ADVANCED,
  });
  const mockStore = configureMockStore()({
    favoriteDrills: [],
  });

  it('renders correctly', () => {
    const route = {
      params: {
        initialData: [beginnerDrill, advancedDrill],
      },
    };
    const navigation = { setOptions: jest.fn(), navigate: jest.fn() };
    const tree = renderer.create(<FrisbeeFilters route={route} navigation={navigation} favoriteDrills={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('filtering', () => {
    it('filters drills by level', async () => {
      const drills = [beginnerDrill, intermediateDrill, advancedDrill];
      const navigate = jest.fn();

      const DummyScreen = (props) => null;
      const Stack = createStackNavigator();

      const { getByText, getByTestId } = await waitFor(() =>
        render(
          <Provider store={mockStore}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="FrisbeeFilters"
                  component={ConnectedFrisbeeFilters}
                  initialParams={{
                    initialData: drills,
                    previousScreen: 'DrillListPage',
                    previousType: DrillTypes.FRISBEE,
                  }}
                  listeners={({ navigation }) => ({
                    transitionStart: (e) => {
                      navigation.navigate = navigate;
                    },
                  })}
                />
                <Stack.Screen name="DrillListPage" component={DummyScreen} />
              </Stack.Navigator>
            </NavigationContainer>
            ,
          </Provider>,
        ),
      );

      expect(getByText('See 3 drills')).toBeDefined();

      await fireEvent.press(getByText(Levels.BEGINNER));

      expect(getByText('See 1 drill')).toBeDefined();

      await fireEvent.press(getByText(Levels.INTERMEDIATE));

      expect(getByText('See 2 drills')).toBeDefined();

      await fireEvent.press(getByText(Levels.BEGINNER));

      expect(getByText('See 1 drill')).toBeDefined();

      await fireEvent.press(getByText(Levels.INTERMEDIATE));

      expect(getByText('See 3 drills')).toBeDefined();

      await fireEvent.press(getByText(Levels.ADVANCED));

      await fireEvent.press(getByText('See 1 drill'));

      expect(navigate).toBeCalledWith('DrillListPage', {
        type: DrillTypes.FRISBEE,
        currentFilters: {
          selectedFavorites: false,
          selectedLevels: [Levels.ADVANCED],
          selectedGoals: [],
          numberOfPlayers: undefined,
          displayedDrills: [advancedDrill],
        },
      });
    });

    it('filters drills by goal', async () => {
      const defenseDrill = createDrill({ id: 1, goals: [FrisbeeGoals.DEFENSE] });
      const handlingDrill = createDrill({ id: 2, goals: [FrisbeeGoals.HANDLING] });
      const throwingDrill = createDrill({ id: 3, goals: [FrisbeeGoals.THROWING] });
      const handlingDefenseDrill = createDrill({ id: 4, goals: [FrisbeeGoals.DEFENSE, FrisbeeGoals.HANDLING] });
      const drills = [defenseDrill, handlingDrill, throwingDrill, handlingDefenseDrill];
      const navigate = jest.fn();

      const DummyScreen = (props) => null;
      const Stack = createStackNavigator();

      const { getByText, getByTestId } = await waitFor(() =>
        render(
          <Provider store={mockStore}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="FrisbeeFilters"
                  component={ConnectedFrisbeeFilters}
                  initialParams={{
                    initialData: drills,
                    previousScreen: 'DrillListPage',
                    previousType: DrillTypes.FRISBEE,
                  }}
                  listeners={({ navigation }) => ({
                    transitionStart: (e) => {
                      navigation.navigate = navigate;
                    },
                  })}
                />
                <Stack.Screen name="DrillListPage" component={DummyScreen} />
              </Stack.Navigator>
            </NavigationContainer>
            ,
          </Provider>,
        ),
      );

      expect(getByText('See 4 drills')).toBeDefined();

      await fireEvent.press(getByText(FrisbeeGoals.DEFENSE));

      expect(getByText('See 2 drills')).toBeDefined();

      await fireEvent.press(getByText(FrisbeeGoals.THROWING));

      expect(getByText('See 3 drills')).toBeDefined();

      await fireEvent.press(getByText(FrisbeeGoals.DEFENSE));

      expect(getByText('See 1 drill')).toBeDefined();

      await fireEvent.press(getByText(FrisbeeGoals.THROWING));

      expect(getByText('See 4 drills')).toBeDefined();

      await fireEvent.press(getByText(FrisbeeGoals.HANDLING));

      expect(getByText('See 2 drills')).toBeDefined();

      await fireEvent.press(getByText('See 2 drills'));

      expect(navigate).toBeCalledWith('DrillListPage', {
        type: DrillTypes.FRISBEE,
        currentFilters: {
          selectedFavorites: false,
          selectedLevels: [],
          selectedGoals: [FrisbeeGoals.HANDLING],
          numberOfPlayers: undefined,
          displayedDrills: [handlingDrill, handlingDefenseDrill],
        },
      });
    });

    it('filters drills by number of players', async () => {
      const onePersonDrill = createDrill({ id: 1, minimalPlayersNumber: 1 });
      const twoPeopleDrill = createDrill({ id: 2, minimalPlayersNumber: 2 });
      const tenPeopleDrill = createDrill({ id: 3, minimalPlayersNumber: 10 });
      const drills = [onePersonDrill, twoPeopleDrill, tenPeopleDrill];
      const navigate = jest.fn();

      const DummyScreen = (props) => null;
      const Stack = createStackNavigator();

      const { getByText, getByTestId } = await waitFor(() =>
        render(
          <Provider store={mockStore}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="FrisbeeFilters"
                  component={ConnectedFrisbeeFilters}
                  initialParams={{
                    initialData: drills,
                    previousScreen: 'DrillListPage',
                    previousType: DrillTypes.FRISBEE,
                  }}
                  listeners={({ navigation }) => ({
                    transitionStart: (e) => {
                      navigation.navigate = navigate;
                    },
                  })}
                />
                <Stack.Screen name="DrillListPage" component={DummyScreen} />
              </Stack.Navigator>
            </NavigationContainer>
            ,
          </Provider>,
        ),
      );

      expect(getByText('Number of players: -')).toBeDefined();
      expect(getByText('See 3 drills')).toBeDefined();

      await fireEvent(getByTestId('numberOfPlayersSlider'), 'valueChange', 5);

      expect(getByText('Number of players: 5')).toBeDefined();
      expect(getByText('See 2 drills')).toBeDefined();

      await fireEvent.press(getByText('See 2 drills'));

      expect(navigate).toBeCalledWith('DrillListPage', {
        type: DrillTypes.FRISBEE,
        currentFilters: {
          selectedFavorites: false,
          selectedLevels: [],
          selectedGoals: [],
          numberOfPlayers: 5,
          displayedDrills: [onePersonDrill, twoPeopleDrill],
        },
      });
    });

    it('filters favorite drills', async () => {
      const drills = [beginnerDrill, intermediateDrill, advancedDrill];
      const navigate = jest.fn();

      const DummyScreen = (props) => null;
      const Stack = createStackNavigator();

      const mockstore = configureMockStore()({
        favoriteDrills: [intermediateDrill],
      });

      const { getByText, getByTestId } = await waitFor(() =>
        render(
          <Provider store={mockstore}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="FrisbeeFilters"
                  component={ConnectedFrisbeeFilters}
                  initialParams={{
                    initialData: drills,
                    previousScreen: 'DrillListPage',
                    previousType: DrillTypes.FRISBEE,
                  }}
                  listeners={({ navigation }) => ({
                    transitionStart: (e) => {
                      navigation.navigate = navigate;
                    },
                  })}
                />
                <Stack.Screen name="DrillListPage" component={DummyScreen} />
              </Stack.Navigator>
            </NavigationContainer>
            ,
          </Provider>,
        ),
      );

      expect(getByText('See 3 drills')).toBeDefined();

      await fireEvent.press(getByText('Favorites only'));

      expect(getByText('See 1 drill')).toBeDefined();

      await fireEvent.press(getByText('See 1 drill'));

      expect(navigate).toBeCalledWith('DrillListPage', {
        type: DrillTypes.FRISBEE,
        currentFilters: {
          selectedFavorites: true,
          selectedLevels: [],
          selectedGoals: [],
          numberOfPlayers: undefined,
          displayedDrills: [intermediateDrill],
        },
      });
    });
  });

  describe('resets filters', () => {
    it('resets a fitler', async () => {
      const onePersonDrill = createDrill({ id: 1, minimalPlayersNumber: 1 });
      const twoPeopleDrill = createDrill({ id: 2, minimalPlayersNumber: 2 });
      const tenPeopleDrill = createDrill({ id: 3, minimalPlayersNumber: 10 });
      const drills = [onePersonDrill, twoPeopleDrill, tenPeopleDrill];
      const navigate = jest.fn();

      const DummyScreen = (props) => null;
      const Stack = createStackNavigator();

      const { getByText, getByTestId } = await waitFor(() =>
        render(
          <Provider store={mockStore}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="FrisbeeFilters"
                  component={ConnectedFrisbeeFilters}
                  initialParams={{
                    initialData: drills,
                    previousScreen: 'DrillListPage',
                    previousType: DrillTypes.FRISBEE,
                  }}
                  listeners={({ navigation }) => ({
                    transitionStart: (e) => {
                      navigation.navigate = navigate;
                    },
                  })}
                />
                <Stack.Screen name="DrillListPage" component={DummyScreen} />
              </Stack.Navigator>
            </NavigationContainer>
            ,
          </Provider>,
        ),
      );

      expect(getByText('Number of players: -')).toBeDefined();
      expect(getByText('See 3 drills')).toBeDefined();

      await fireEvent(getByTestId('numberOfPlayersSlider'), 'valueChange', 5);

      expect(getByText('Number of players: 5')).toBeDefined();
      expect(getByText('See 2 drills')).toBeDefined();

      await fireEvent.press(getByTestId('resetButton'));

      expect(getByText('Number of players: -')).toBeDefined();
      expect(getByText('See 3 drills')).toBeDefined();

      expect(navigate).toBeCalledWith('DrillListPage', {
        type: DrillTypes.FRISBEE,
        currentFilters: {
          selectedFavorites: false,
          selectedLevels: [],
          selectedGoals: [],
          numberOfPlayers: undefined,
          displayedDrills: drills,
        },
      });
    });
  });
});
