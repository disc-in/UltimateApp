import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import StartButton from '../StartButton';

describe('<StartButton />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<StartButton text="OK" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('calls delegates onPress prop', async () => {
    const onPress = jest.fn();

    const { getByTestId } = render(<StartButton text="Easy" onPress={onPress} />);

    await fireEvent.press(getByTestId('startButton'));

    expect(onPress).toHaveBeenCalled();
  });
});
