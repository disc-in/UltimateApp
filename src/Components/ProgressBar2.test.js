import React from 'react';
import { render, cleanup, fireEvent } from 'react-native-testing-library';
import ProgressBar from './ProgressBar2';

afterEach(cleanup);

describe('<ProgressBar2 />', () => {
  it('renders correctly', () => {
    const mockFn = jest.fn();
    const { toJSON, queryAllByTestId } = render(<ProgressBar total={6} current={2} onDotPress={mockFn} />);

    expect(toJSON()).toMatchSnapshot();

    fireEvent.press(queryAllByTestId('progress-bar-dot')[3]);
    expect(mockFn).toBeCalledWith(3);
  });
});
