import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';

import ToggleButton from './ToggleButton';

describe('<ToggleButton />', () => {
  const onValueChange = jest.fn();
  const value = 'animation';
  const icons = ['clipboard-outline', 'video'];
  const possibleValues = ['animation', 'video'];

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ToggleButton value={value} onValueChange={onValueChange} icons={icons} possibleValues={possibleValues} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('delegates onValueChange prop', async () => {
    const { getByTestId } = render(
      <ToggleButton value={value} onValueChange={onValueChange} icons={icons} possibleValues={possibleValues} />,
    );

    await fireEvent.press(getByTestId('toggle-video'));

    expect(onValueChange).toHaveBeenCalledWith('video');
  });
});
