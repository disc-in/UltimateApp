import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Checkbox title="OK" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly when active', () => {
    const { toJSON } = render(<Checkbox title="OK" active />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('calls delegates onPress prop', async () => {
    const onPress = jest.fn();

    const { getByText } = render(<Checkbox title="Easy" onPress={onPress} />);

    await fireEvent.press(getByText('Easy'));

    expect(onPress).toHaveBeenCalled();
  });
});
