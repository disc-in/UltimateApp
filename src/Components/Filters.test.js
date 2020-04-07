import React from 'react';
import renderer from 'react-test-renderer';
import { createDrill } from '../Fixtures/TestFixtures';
import { render, fireEvent } from 'react-native-testing-library';
import { Levels } from '../Fixtures';

import Filters from './Filters';

describe('<Filters />', () => {
  const onFiltered = jest.fn();
  const beginnerDrill = createDrill({ level: Levels.BEGINNER });
  const advancedDrill = createDrill({ level: Levels.ADVANCED });
  const drills = [beginnerDrill, advancedDrill];
  const route = {
    params: {
      initialData: drills,
      onFiltered,
    },
  };
  const navigation = { setOptions: jest.fn(), goBack: jest.fn() };

  it('renders correctly', () => {
    const tree = renderer.create(<Filters route={route} navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('filtering', () => {
    it('filters drills by level on press, then updates parent list on validation', async () => {
      const { getByText, getByTestId, debug } = render(<Filters route={route} navigation={navigation} />);

      expect(getByTestId('availableDrills').props.children.join('')).toEqual('2 drills available');
      expect(onFiltered).nthCalledWith(1, drills);

      await fireEvent.press(getByText(Levels.BEGINNER));

      expect(getByTestId('availableDrills').props.children.join('')).toEqual('1 drills available');

      await fireEvent.press(getByText(Levels.BEGINNER));

      expect(getByTestId('availableDrills').props.children.join('')).toEqual('2 drills available');

      await fireEvent.press(getByText(Levels.ADVANCED));

      expect(getByTestId('availableDrills').props.children.join('')).toEqual('1 drills available');

      // await fireEvent.press(getByText('Validate'));
      // TODO: Need to access the header button. Or to find another solution

      expect(onFiltered).nthCalledWith(2, [advancedDrill]); // Called on component mounting to reset filters
      expect(navigation.goBack).toBeCalled();
    });
  });
});
