import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import HeaderButton from '../HeaderButton';

describe('<HeaderButton />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<HeaderButton icon="check" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('calls delegates onPress prop', async () => {
    const onPress = jest.fn();

    const { getByTestId } = render(<HeaderButton onPress={onPress} />);

    await fireEvent.press(getByTestId('headerButton'));

    expect(onPress).toHaveBeenCalled();
  });
});
