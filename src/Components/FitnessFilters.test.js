import React from 'react';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrill } from '../Fixtures/TestFixtures';
import { render, fireEvent, cleanup } from 'react-native-testing-library';
import { Levels, Intensities, EquipmentLabels, GoalsFitness, DrillTypes } from '../Fixtures';

import FitnessFilters from './FitnessFilters';

afterEach(cleanup);

describe('<FitnessFilters />', () => {
  const beginnerDrill = createDrill({ id: 1, level: Levels.BEGINNER });
  const advancedDrill = createDrill({ id: 2, level: Levels.ADVANCED });

  it('renders correctly', () => {
    const route = {
      params: {
        initialData: [beginnerDrill, advancedDrill],
      },
    };
    const navigation = { setOptions: jest.fn(), navigate: jest.fn() };
    const tree = renderer.create(<FitnessFilters route={route} navigation={navigation} />).toJSON();
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
              name="FitnessFilters"
              component={FitnessFilters}
              initialParams={{
                initialData: drills,
                previousScreen: 'DrillListPage',
                previousType: DrillTypes.FITNESS,
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
        type: DrillTypes.FITNESS,
      });
    });

    it('filters drills by intensity', async () => {
      const lowDrill = createDrill({ id: 1, intensity: Intensities.LOW });
      const highDrill = createDrill({ id: 2, intensity: Intensities.HIGH });
      const drills = [lowDrill, highDrill];
      const navigate = jest.fn();

      const DummyScreen = props => null;
      const Stack = createStackNavigator();

      const { getByText, getByTestId } = render(
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="FitnessFilters"
              component={FitnessFilters}
              initialParams={{
                initialData: drills,
                previousScreen: 'DrillListPage',
                previousType: DrillTypes.FITNESS,
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

      await fireEvent.press(getByText(Intensities.LOW));

      expect(getByText('1 drills available')).toBeDefined();

      await fireEvent.press(getByText(Intensities.LOW));

      expect(getByText('2 drills available')).toBeDefined();

      await fireEvent.press(getByText(Intensities.HIGH));

      expect(getByText('1 drills available')).toBeDefined();

      await fireEvent.press(getByTestId('validateButton'));

      expect(navigate).toBeCalledWith('DrillListPage', {
        filteredDrills: [highDrill],
        type: DrillTypes.FITNESS,
      });
    });

    it('filters drills by EquipmentLabels', async () => {
      const noEquimentDrill = createDrill({ id: 1, equipmentLabel: EquipmentLabels.NONE });
      const fullEquipmentDrill = createDrill({ id: 2, equipmentLabel: EquipmentLabels.FULL });
      const drills = [noEquimentDrill, fullEquipmentDrill];
      const navigate = jest.fn();

      const DummyScreen = props => null;
      const Stack = createStackNavigator();

      const { getByText, getByTestId } = render(
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="FitnessFilters"
              component={FitnessFilters}
              initialParams={{
                initialData: drills,
                previousScreen: 'DrillListPage',
                previousType: DrillTypes.FITNESS,
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

      await fireEvent.press(getByText(EquipmentLabels.NONE));

      expect(getByText('1 drills available')).toBeDefined();

      await fireEvent.press(getByText(EquipmentLabels.NONE));

      expect(getByText('2 drills available')).toBeDefined();

      await fireEvent.press(getByText(EquipmentLabels.FULL));

      expect(getByText('1 drills available')).toBeDefined();

      await fireEvent.press(getByTestId('validateButton'));

      expect(navigate).toBeCalledWith('DrillListPage', {
        filteredDrills: [fullEquipmentDrill],
        type: DrillTypes.FITNESS,
      });
    });

    it('filters drills by goal', async () => {
      const legsDrill = createDrill({ id: 1, goals: [GoalsFitness.LEGS] });
      const upperDrill = createDrill({ id: 2, goals: [GoalsFitness.UPPER] });
      const legsCoreDrill = createDrill({ id: 3, goals: [GoalsFitness.LEGS, GoalsFitness.CORE] });
      const drills = [legsDrill, upperDrill, legsCoreDrill];
      const navigate = jest.fn();

      const DummyScreen = props => null;
      const Stack = createStackNavigator();

      const { getByText, getByTestId } = render(
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="FitnessFilters"
              component={FitnessFilters}
              initialParams={{
                initialData: drills,
                previousScreen: 'DrillListPage',
                previousType: DrillTypes.FITNESS,
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

      await fireEvent.press(getByText(GoalsFitness.LEGS));

      expect(getByText('2 drills available')).toBeDefined();

      await fireEvent.press(getByText(GoalsFitness.LEGS));

      expect(getByText('3 drills available')).toBeDefined();

      await fireEvent.press(getByText(GoalsFitness.UPPER));

      expect(getByText('1 drills available')).toBeDefined();

      await fireEvent.press(getByTestId('validateButton'));

      expect(navigate).toBeCalledWith('DrillListPage', {
        filteredDrills: [upperDrill],
        type: DrillTypes.FITNESS,
      });
    });

    it('filters drills by number of players', async () => {
      const oneMinuteDrill = createDrill({ id: 1, durationInMinutes: 1 });
      const twoMinutesDrill = createDrill({ id: 2, durationInMinutes: 2 });
      const tenMinutesDrill = createDrill({ id: 3, durationInMinutes: 10 });
      const drills = [oneMinuteDrill, twoMinutesDrill, tenMinutesDrill];
      const navigate = jest.fn();

      const DummyScreen = props => null;
      const Stack = createStackNavigator();

      const { getByText, getByTestId, debug } = render(
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="FitnessFilters"
              component={FitnessFilters}
              initialParams={{
                initialData: drills,
                previousScreen: 'DrillListPage',
                previousType: DrillTypes.FITNESS,
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

      expect(getByText('Duration: - mins')).toBeDefined();
      expect(getByText('3 drills available')).toBeDefined();

      await fireEvent(getByTestId('durationSlider'), 'valueChange', 5);

      expect(getByText('Duration: 5 mins')).toBeDefined();
      expect(getByText('2 drills available')).toBeDefined();

      await fireEvent.press(getByTestId('validateButton'));

      expect(navigate).toBeCalledWith('DrillListPage', {
        filteredDrills: [oneMinuteDrill, twoMinutesDrill],
        type: DrillTypes.FITNESS,
      });
    });
  });
});
