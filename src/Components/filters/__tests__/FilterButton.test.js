import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import FilterButton from '../FilterButton';

describe('<FilterButton />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<FilterButton title="OK" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly when active', () => {
    const { toJSON } = render(<FilterButton title="OK" active />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('calls delegates onPress prop', async () => {
    const onPress = jest.fn();

    const { getByText } = render(<FilterButton title="Easy" onPress={onPress} />);

    await fireEvent.press(getByText('Easy'));

    expect(onPress).toHaveBeenCalled();
  });
});
