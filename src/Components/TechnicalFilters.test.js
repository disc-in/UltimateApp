import React from 'react';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrill } from '../Fixtures/TestFixtures';
import { render, fireEvent, cleanup } from 'react-native-testing-library';
import { Levels, GoalsFrisbee, DrillTypes } from '../Fixtures';

import TechnicalFilters from './TechnicalFilters';

afterEach(cleanup);

describe('<TechnicalFilters />', () => {
  const beginnerDrill = createDrill({ id: 1, level: Levels.BEGINNER });
  const advancedDrill = createDrill({ id: 2, level: Levels.ADVANCED });

  it('renders correctly', () => {
    const route = {
      params: {
        initialData: [beginnerDrill, advancedDrill],
      },
    };
    const navigation = { setOptions: jest.fn(), navigate: jest.fn() };
    const tree = renderer.create(<TechnicalFilters route={route} navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('filtering', () => {
    it('filters drills by level', async () => {
      const drills = [beginnerDrill, advancedDrill];
      const navigate = jest.fn();

      const DummyScreen = props => null;
      const Stack = createStackNavigator();

      const { getByText, getByTestId } = render(
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="TechnicalFilters"
              component={TechnicalFilters}
              initialParams={{
                initialData: drills,
                previousScreen: 'DrillListPage',
                previousType: DrillTypes.TECHNICAL,
              }}
              listeners={({ navigation }) => ({
                transitionStart: e => {
                  navigation.navigate = navigate;
                },
              })}
            />
            <Stack.Screen name="DrillListPage" component={DummyScreen} />
          </Stack.Navigator>
        </NavigationContainer>,
      );

      expect(getByText('2 drills available')).toBeDefined();

      await fireEvent.press(getByText(Levels.BEGINNER));

      expect(getByText('1 drills available')).toBeDefined();

      await fireEvent.press(getByText(Levels.BEGINNER));

      expect(getByText('2 drills available')).toBeDefined();

      await fireEvent.press(getByText(Levels.ADVANCED));

      expect(getByText('1 drills available')).toBeDefined();

      await fireEvent.press(getByTestId('validateButton'));

      expect(navigate).toBeCalledWith('DrillListPage', {
        filteredDrills: [advancedDrill],
        type: DrillTypes.TECHNICAL,
      });
    });

    it('filters drills by goal', async () => {
      const defenseDrill = createDrill({ id: 1, goals: [GoalsFrisbee.DEFENSE] });
      const handlingDrill = createDrill({ id: 2, goals: [GoalsFrisbee.HANDLING] });
      const handlingDefenseDrill = createDrill({ id: 3, goals: [GoalsFrisbee.DEFENSE, GoalsFrisbee.HANDLING] });
      const drills = [defenseDrill, handlingDrill, handlingDefenseDrill];
      const navigate = jest.fn();

      const DummyScreen = props => null;
      const Stack = createStackNavigator();

      const { getByText, getByTestId } = render(
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="TechnicalFilters"
              component={TechnicalFilters}
              initialParams={{
                initialData: drills,
                previousScreen: 'DrillListPage',
                previousType: DrillTypes.TECHNICAL,
              }}
              listeners={({ navigation }) => ({
                transitionStart: e => {
                  navigation.navigate = navigate;
                },
              })}
            />
            <Stack.Screen name="DrillListPage" component={DummyScreen} />
          </Stack.Navigator>
        </NavigationContainer>,
      );

      expect(getByText('3 drills available')).toBeDefined();

      await fireEvent.press(getByText(GoalsFrisbee.DEFENSE));

      expect(getByText('2 drills available')).toBeDefined();

      await fireEvent.press(getByText(GoalsFrisbee.DEFENSE));

      expect(getByText('3 drills available')).toBeDefined();

      await fireEvent.press(getByText(GoalsFrisbee.HANDLING));

      expect(getByText('2 drills available')).toBeDefined();

      await fireEvent.press(getByTestId('validateButton'));

      expect(navigate).toBeCalledWith('DrillListPage', {
        filteredDrills: [handlingDrill, handlingDefenseDrill],
        type: DrillTypes.TECHNICAL,
      });
    });

    it('filters drills by number of players', async () => {
      const onePersonDrill = createDrill({ id: 1, minimalPlayersNumber: 1 });
      const twoPeopleDrill = createDrill({ id: 2, minimalPlayersNumber: 2 });
      const tenPeopleDrill = createDrill({ id: 3, minimalPlayersNumber: 10 });
      const drills = [onePersonDrill, twoPeopleDrill, tenPeopleDrill];
      const navigate = jest.fn();

      const DummyScreen = props => null;
      const Stack = createStackNavigator();

      const { getByText, getByTestId, debug } = render(
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="TechnicalFilters"
              component={TechnicalFilters}
              initialParams={{
                initialData: drills,
                previousScreen: 'DrillListPage',
                previousType: DrillTypes.TECHNICAL,
              }}
              listeners={({ navigation }) => ({
                transitionStart: e => {
                  navigation.navigate = navigate;
                },
              })}
            />
            <Stack.Screen name="DrillListPage" component={DummyScreen} />
          </Stack.Navigator>
        </NavigationContainer>,
      );

      expect(getByText('Number of players: -')).toBeDefined();
      expect(getByText('3 drills available')).toBeDefined();

      await fireEvent(getByTestId('numberOfPlayersSlider'), 'valueChange', 5);

      expect(getByText('Number of players: 5')).toBeDefined();
      expect(getByText('2 drills available')).toBeDefined();

      await fireEvent.press(getByTestId('validateButton'));

      expect(navigate).toBeCalledWith('DrillListPage', {
        filteredDrills: [onePersonDrill, twoPeopleDrill],
        type: DrillTypes.TECHNICAL,
      });
    });
  });
});
