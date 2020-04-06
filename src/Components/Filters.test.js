import React from 'react';
import renderer from 'react-test-renderer';
import { createDrill } from '../Fixtures/TestFixtures';
import { render, fireEvent } from 'react-native-testing-library';
import { Levels } from '../Fixtures';

import Filters from './Filters';

describe('<Filters />', () => {
  const onFiltered = jest.fn();
  const route = {
    params: {
      initialData: [createDrill()],
      onFiltered,
    },
  };
  const navigation = { setOptions: jest.fn() };

  it('renders correctly', () => {
    const tree = renderer.create(<Filters route={route} navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('filtering', () => {
    it('filters drills by level', async () => {
      const { container, getByText } = render(<Filters route={route} navigation={navigation} />);

      await fireEvent.press(getByText(Levels.BEGINNER));

      // TODO: Fix tests
      expect(onFiltered).toBeCalledWith([]);

      // await fireEvent.press(getByText('Validate'));

      // expect(onConfirm).toBeCalled();
    });
  });
});
