import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from 'react-native-testing-library';

import Filters from './Filters';

describe('<Filters />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Filters initialData={[]} onConfirm={jest.fn()} onFiltered={jest.fn()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('filtering', () => {
    const onConfirm = jest.fn();
    const onFiltered = jest.fn();

    it('filters drills by level', async () => {
      const { container, getByText } = render(
        <Filters initialData={[]} onConfirm={onConfirm} onFiltered={onFiltered} />,
      );

      await fireEvent.press(getByText('Beginner'));

      expect(onFiltered).toBeCalledWith([]);

      await fireEvent.press(getByText('Validate'));

      expect(onConfirm).toBeCalled();
    });
  });
});
