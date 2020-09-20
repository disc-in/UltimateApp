import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';

import HeaderButton from './HeaderButton';

import buttonValidation from '../../../assets/check_dark.png';

describe('<HeaderButton />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HeaderButton image={buttonValidation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls delegates onPress prop', async () => {
    const onPress = jest.fn();

    const { getByTestId } = render(<HeaderButton onPress={onPress} />);

    await fireEvent.press(getByTestId('headerButton'));

    expect(onPress).toHaveBeenCalled();
  });
});
