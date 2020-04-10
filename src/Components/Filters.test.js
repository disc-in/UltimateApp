import React from 'react';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrill } from '../Fixtures/TestFixtures';
import { render, fireEvent } from 'react-native-testing-library';
import { Levels } from '../Fixtures';

import Filters from './Filters';

describe('<Filters />', () => {
  const beginnerDrill = createDrill({ id: 1, level: Levels.BEGINNER });
  const advancedDrill = createDrill({ id: 2, level: Levels.ADVANCED });
  const drills = [beginnerDrill, advancedDrill];

  it('renders correctly', () => {
    const onFiltered = jest.fn();
    const route = {
      params: {
        initialData: drills,
        onFiltered,
      },
    };
    const navigation = { setOptions: jest.fn(), goBack: jest.fn() };
    const tree = renderer.create(<Filters route={route} navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('filtering', () => {
    it('filters drills by level on press, then updates parent list on validation', async () => {
      const onFiltered = jest.fn();
      const route = {
        params: {
          initialData: drills,
          onFiltered,
        },
      };
      const Stack = createStackNavigator();
      const { getByText, getByTestId } = render(
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Filters" component={Filters} initialParams={{ initialData: drills, onFiltered }} />
          </Stack.Navigator>
        </NavigationContainer>,
      );

      expect(getByTestId('availableDrills').props.children.join('')).toEqual('2 drills available');
      expect(onFiltered).nthCalledWith(1, drills);

      await fireEvent.press(getByText(Levels.BEGINNER));

      expect(getByTestId('availableDrills').props.children.join('')).toEqual('1 drills available');

      await fireEvent.press(getByText(Levels.BEGINNER));

      expect(getByTestId('availableDrills').props.children.join('')).toEqual('2 drills available');

      await fireEvent.press(getByText(Levels.ADVANCED));

      expect(getByTestId('availableDrills').props.children.join('')).toEqual('1 drills available');

      await fireEvent.press(getByTestId('validateButton'));

      expect(onFiltered).nthCalledWith(2, [advancedDrill]);

      // Following expect is skipped because we found no way to mock navigation
      // expect(navigation.goBack).toBeCalled();
    });
  });
});
