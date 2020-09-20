import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react-native';

import ProgressBar from './ProgressBar';

describe('<ProgressBar />', () => {
  it('renders correctly', async () => {
    const onDotPress = jest.fn();
    const { toJSON, queryAllByTestId } = render(<ProgressBar total={6} current={2} onDotPress={onDotPress} />);

    expect(toJSON()).toMatchSnapshot();

    await fireEvent.press(queryAllByTestId('progress-bar-dot')[3]);
    expect(onDotPress).toBeCalledWith(3);
  });
});
