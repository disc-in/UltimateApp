import React from 'react';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrill } from '../Fixtures/TestFixtures';
import { render, fireEvent } from 'react-native-testing-library';
import { Levels, DrillTypes } from '../Fixtures';

import Filters from './Filters';

describe('<Filters />', () => {
  const beginnerDrill = createDrill({ id: 1, level: Levels.BEGINNER });
  const advancedDrill = createDrill({ id: 2, level: Levels.ADVANCED });
  const drills = [beginnerDrill, advancedDrill];

  it('renders correctly', () => {
    const route = {
      params: {
        initialData: drills,
      },
    };
    const navigation = { setOptions: jest.fn(), navigate: jest.fn() };
    const tree = renderer.create(<Filters route={route} navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('filtering', () => {
    it('filters drills by level on press, then goes back to parent list on validation', async () => {
      const navigate = jest.fn();

      const DummyScreen = props => null;
      const Stack = createStackNavigator();

      const { getByText, getByTestId } = render(
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Filters"
              component={Filters}
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

      expect(getByTestId('availableDrills').props.children.join('')).toEqual('2 drills available');

      await fireEvent.press(getByText(Levels.BEGINNER));

      expect(getByTestId('availableDrills').props.children.join('')).toEqual('1 drills available');

      await fireEvent.press(getByText(Levels.BEGINNER));

      expect(getByTestId('availableDrills').props.children.join('')).toEqual('2 drills available');

      await fireEvent.press(getByText(Levels.ADVANCED));

      expect(getByTestId('availableDrills').props.children.join('')).toEqual('1 drills available');

      await fireEvent.press(getByTestId('validateButton'));

      expect(navigate).toBeCalledWith('DrillListPage', {
        filteredDrills: [advancedDrill],
        type: DrillTypes.TECHNICAL,
      });
    });
  });
});
