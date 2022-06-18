import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrill } from '../Fixtures/TestFixtures';
import { Levels, Intensities, EquipmentLabels, SeasonTimings, FitnessGoals, DrillTypes } from '../Fixtures/config';

import ConnectedFitnessFilters, { FitnessFilters } from './FitnessFilters';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('<FitnessFilters />', () => {
  const beginnerDrill = createDrill({ id: 1, level: Levels.BEGINNER });
  const intermediateDrill = createDrill({ id: 2, level: Levels.INTERMEDIATE });
  const advancedDrill = createDrill({ id: 3, level: Levels.ADVANCED });
  const mockstore = configureMockStore()({
    favoriteDrills: [],
  });

  it('renders correctly', () => {
    const route = {
      params: {
        initialData: [beginnerDrill, advancedDrill],
      },
    };
    const navigation = { setOptions: jest.fn(), navigate: jest.fn() };
    const { toJSON } = render(<FitnessFilters route={route} navigation={navigation} favoriteDrills={[]} />);
    expect(toJSON()).toMatchSnapshot();
  });

  describe('filtering', () => {
    it('filters drills by level', async () => {
      const drills = [beginnerDrill, intermediateDrill, advancedDrill];
      const navigate = jest.fn();

      const DummyScreen = (props) => null;
      const Stack = createStackNavigator();

      const { getByText } = await waitFor(() =>
        render(
          <Provider store={mockstore}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="FitnessFilters"
                  component={ConnectedFitnessFilters}
                  initialParams={{
                    initialData: drills,
                    previousScreen: 'DrillListPage',
                    previousType: DrillTypes.FITNESS,
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
        type: DrillTypes.FITNESS,
        currentFilters: {
          selectedFavorites: false,
          selectedLevels: [Levels.ADVANCED],
          selectedIntensities: [],
          selectedEquipmentLabels: [],
          selectedSeasonTimings: [],
          selectedGoals: [],
          durationInMinutes: undefined,
          displayedDrills: [advancedDrill],
        },
      });
    });

    it('filters drills by intensity', async () => {
      const lowDrill = createDrill({ id: 1, intensity: Intensities.LOW });
      const moderateDrill = createDrill({ id: 2, intensity: Intensities.MODERATE });
      const highDrill = createDrill({ id: 3, intensity: Intensities.HIGH });
      const drills = [lowDrill, moderateDrill, highDrill];
      const navigate = jest.fn();

      const DummyScreen = (props) => null;
      const Stack = createStackNavigator();

      const { getByText } = await waitFor(() =>
        render(
          <Provider store={mockstore}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="FitnessFilters"
                  component={ConnectedFitnessFilters}
                  initialParams={{
                    initialData: drills,
                    previousScreen: 'DrillListPage',
                    previousType: DrillTypes.FITNESS,
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

      await fireEvent.press(getByText(Intensities.LOW));

      expect(getByText('See 1 drill')).toBeDefined();

      await fireEvent.press(getByText(Intensities.MODERATE));

      expect(getByText('See 2 drills')).toBeDefined();

      await fireEvent.press(getByText(Intensities.LOW));

      expect(getByText('See 1 drill')).toBeDefined();

      await fireEvent.press(getByText(Intensities.MODERATE));

      expect(getByText('See 3 drills')).toBeDefined();

      await fireEvent.press(getByText(Intensities.HIGH));

      await fireEvent.press(getByText('See 1 drill'));

      expect(navigate).toBeCalledWith('DrillListPage', {
        type: DrillTypes.FITNESS,
        currentFilters: {
          selectedFavorites: false,
          selectedLevels: [],
          selectedIntensities: [Intensities.HIGH],
          selectedEquipmentLabels: [],
          selectedSeasonTimings: [],
          selectedGoals: [],
          durationInMinutes: undefined,
          displayedDrills: [highDrill],
        },
      });
    });

    it('filters drills by EquipmentLabels', async () => {
      const noEquimentDrill = createDrill({ id: 1, equipmentLabel: EquipmentLabels.NONE });
      const basicEquimentDrill = createDrill({ id: 2, equipmentLabel: EquipmentLabels.BASIC });
      const fullEquipmentDrill = createDrill({ id: 3, equipmentLabel: EquipmentLabels.FULL });
      const drills = [noEquimentDrill, basicEquimentDrill, fullEquipmentDrill];
      const navigate = jest.fn();

      const DummyScreen = (props) => null;
      const Stack = createStackNavigator();

      const { getByText } = await waitFor(() =>
        render(
          <Provider store={mockstore}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="FitnessFilters"
                  component={ConnectedFitnessFilters}
                  initialParams={{
                    initialData: drills,
                    previousScreen: 'DrillListPage',
                    previousType: DrillTypes.FITNESS,
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

      await fireEvent.press(getByText(EquipmentLabels.NONE));

      expect(getByText('See 1 drill')).toBeDefined();

      await fireEvent.press(getByText(EquipmentLabels.BASIC));

      expect(getByText('See 2 drills')).toBeDefined();

      await fireEvent.press(getByText(EquipmentLabels.NONE));

      expect(getByText('See 1 drill')).toBeDefined();

      await fireEvent.press(getByText(EquipmentLabels.BASIC));

      expect(getByText('See 3 drills')).toBeDefined();

      await fireEvent.press(getByText(EquipmentLabels.FULL));

      await fireEvent.press(getByText('See 1 drill'));

      expect(navigate).toBeCalledWith('DrillListPage', {
        type: DrillTypes.FITNESS,
        currentFilters: {
          selectedFavorites: false,
          selectedLevels: [],
          selectedIntensities: [],
          selectedEquipmentLabels: [EquipmentLabels.FULL],
          selectedSeasonTimings: [],
          selectedGoals: [],
          durationInMinutes: undefined,
          displayedDrills: [fullEquipmentDrill],
        },
      });
    });

    it('filters drills by SeasonTimings', async () => {
      const preDrill = createDrill({ id: 1, seasonTiming: SeasonTimings.PRE_SEASON });
      const offDrill = createDrill({ id: 2, seasonTiming: SeasonTimings.OFF_SEASON });
      const inDrill = createDrill({ id: 3, seasonTiming: SeasonTimings.IN_SEASON });
      const drills = [offDrill, preDrill, inDrill];
      const navigate = jest.fn();

      const DummyScreen = (props) => null;
      const Stack = createStackNavigator();

      const { getByText } = await waitFor(() =>
        render(
          <Provider store={mockstore}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="FitnessFilters"
                  component={ConnectedFitnessFilters}
                  initialParams={{
                    initialData: drills,
                    previousScreen: 'DrillListPage',
                    previousType: DrillTypes.FITNESS,
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

      await fireEvent.press(getByText(SeasonTimings.OFF_SEASON));

      expect(getByText('See 1 drill')).toBeDefined();

      await fireEvent.press(getByText(SeasonTimings.PRE_SEASON));

      expect(getByText('See 2 drills')).toBeDefined();

      await fireEvent.press(getByText(SeasonTimings.OFF_SEASON));

      expect(getByText('See 1 drill')).toBeDefined();

      await fireEvent.press(getByText(SeasonTimings.PRE_SEASON));

      expect(getByText('See 3 drills')).toBeDefined();

      await fireEvent.press(getByText(SeasonTimings.IN_SEASON));

      expect(getByText('See 1 drill')).toBeDefined();

      await fireEvent.press(getByText('See 1 drill'));

      expect(navigate).toBeCalledWith('DrillListPage', {
        type: DrillTypes.FITNESS,
        currentFilters: {
          selectedFavorites: false,
          selectedLevels: [],
          selectedIntensities: [],
          selectedEquipmentLabels: [],
          selectedSeasonTimings: [SeasonTimings.IN_SEASON],
          selectedGoals: [],
          durationInMinutes: undefined,
          displayedDrills: [inDrill],
        },
      });
    });

    it('filters drills by goal', async () => {
      const legsDrill = createDrill({ id: 1, goals: [FitnessGoals.LEGS] });
      const upperDrill = createDrill({ id: 2, goals: [FitnessGoals.UPPER] });
      const fullDrill = createDrill({ id: 3, goals: [FitnessGoals.FULL_BODY] });
      const legsCoreDrill = createDrill({ id: 4, goals: [FitnessGoals.LEGS, FitnessGoals.CORE] });
      const drills = [legsDrill, upperDrill, fullDrill, legsCoreDrill];
      const navigate = jest.fn();

      const DummyScreen = (props) => null;
      const Stack = createStackNavigator();

      const { getByText } = await waitFor(() =>
        render(
          <Provider store={mockstore}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="FitnessFilters"
                  component={ConnectedFitnessFilters}
                  initialParams={{
                    initialData: drills,
                    previousScreen: 'DrillListPage',
                    previousType: DrillTypes.FITNESS,
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

      await fireEvent.press(getByText(FitnessGoals.LEGS));

      expect(getByText('See 2 drills')).toBeDefined();

      await fireEvent.press(getByText(FitnessGoals.FULL_BODY));

      expect(getByText('See 3 drills')).toBeDefined();

      await fireEvent.press(getByText(FitnessGoals.LEGS));

      expect(getByText('See 1 drill')).toBeDefined();

      await fireEvent.press(getByText(FitnessGoals.FULL_BODY));

      expect(getByText('See 4 drills')).toBeDefined();

      await fireEvent.press(getByText(FitnessGoals.UPPER));

      expect(getByText('See 1 drill')).toBeDefined();

      await fireEvent.press(getByText('See 1 drill'));

      expect(navigate).toBeCalledWith('DrillListPage', {
        type: DrillTypes.FITNESS,
        currentFilters: {
          selectedFavorites: false,
          selectedLevels: [],
          selectedIntensities: [],
          selectedEquipmentLabels: [],
          selectedSeasonTimings: [],
          selectedGoals: [FitnessGoals.UPPER],
          durationInMinutes: undefined,
          displayedDrills: [upperDrill],
        },
      });
    });

    it('filters drills by duration', async () => {
      const oneMinuteDrill = createDrill({ id: 1, durationInMinutes: 1 });
      const twoMinutesDrill = createDrill({ id: 2, durationInMinutes: 2 });
      const tenMinutesDrill = createDrill({ id: 3, durationInMinutes: 10 });
      const drills = [oneMinuteDrill, twoMinutesDrill, tenMinutesDrill];
      const navigate = jest.fn();

      const DummyScreen = (props) => null;
      const Stack = createStackNavigator();

      const { getByText, getByTestId } = await waitFor(() =>
        render(
          <Provider store={mockstore}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="FitnessFilters"
                  component={ConnectedFitnessFilters}
                  initialParams={{
                    initialData: drills,
                    previousScreen: 'DrillListPage',
                    previousType: DrillTypes.FITNESS,
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

      expect(getByText('How much time do you have? - mins')).toBeDefined();
      expect(getByText('See 3 drills')).toBeDefined();

      await fireEvent(getByTestId('durationSlider'), 'valueChange', 5);

      expect(getByText('How much time do you have? 5 mins')).toBeDefined();
      expect(getByText('See 2 drills')).toBeDefined();

      await fireEvent.press(getByText('See 2 drills'));

      expect(navigate).toBeCalledWith('DrillListPage', {
        type: DrillTypes.FITNESS,
        currentFilters: {
          selectedFavorites: false,
          selectedLevels: [],
          selectedIntensities: [],
          selectedEquipmentLabels: [],
          selectedSeasonTimings: [],
          selectedGoals: [],
          durationInMinutes: 5,
          displayedDrills: [oneMinuteDrill, twoMinutesDrill],
        },
      });
    });

    it('filters favorite drills', async () => {
      const drills = [beginnerDrill, intermediateDrill, advancedDrill];
      const navigate = jest.fn();

      const DummyScreen = (props) => null;
      const Stack = createStackNavigator();

      const mockstore = configureMockStore()({
        drills: [beginnerDrill, intermediateDrill, advancedDrill],
        favoriteDrills: [intermediateDrill],
      });

      const { getByText } = await waitFor(() =>
        render(
          <Provider store={mockstore}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="FitnessFilters"
                  component={ConnectedFitnessFilters}
                  initialParams={{
                    initialData: drills,
                    previousScreen: 'DrillListPage',
                    previousType: DrillTypes.FITNESS,
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
        type: DrillTypes.FITNESS,
        currentFilters: {
          selectedFavorites: true,
          selectedLevels: [],
          selectedIntensities: [],
          selectedEquipmentLabels: [],
          selectedSeasonTimings: [],
          selectedGoals: [],
          durationInMinutes: undefined,
          displayedDrills: [intermediateDrill],
        },
      });
    });
  });

  describe('resets filters', () => {
    it('resets a fitler', async () => {
      const oneMinuteDrill = createDrill({ id: 1, durationInMinutes: 1 });
      const twoMinutesDrill = createDrill({ id: 2, durationInMinutes: 2 });
      const tenMinutesDrill = createDrill({ id: 3, durationInMinutes: 10 });
      const drills = [oneMinuteDrill, twoMinutesDrill, tenMinutesDrill];
      const navigate = jest.fn();

      const DummyScreen = (props) => null;
      const Stack = createStackNavigator();

      const { getByText, getByTestId } = await waitFor(() =>
        render(
          <Provider store={mockstore}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="FitnessFilters"
                  component={ConnectedFitnessFilters}
                  initialParams={{
                    initialData: drills,
                    previousScreen: 'DrillListPage',
                    previousType: DrillTypes.FITNESS,
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

      expect(getByText('How much time do you have? - mins')).toBeDefined();
      expect(getByText('See 3 drills')).toBeDefined();

      await fireEvent(getByTestId('durationSlider'), 'valueChange', 5);

      expect(getByText('How much time do you have? 5 mins')).toBeDefined();
      expect(getByText('See 2 drills')).toBeDefined();

      await fireEvent.press(getByTestId('resetButton'));

      expect(getByText('How much time do you have? - mins')).toBeDefined();
      expect(getByText('See 3 drills')).toBeDefined();

      await fireEvent.press(getByText('See 3 drills'));

      expect(navigate).toBeCalledWith('DrillListPage', {
        type: DrillTypes.FITNESS,
        currentFilters: {
          selectedFavorites: false,
          selectedLevels: [],
          selectedIntensities: [],
          selectedEquipmentLabels: [],
          selectedSeasonTimings: [],
          selectedGoals: [],
          durationInMinutes: undefined,
          displayedDrills: drills,
        },
      });
    });
  });
});
