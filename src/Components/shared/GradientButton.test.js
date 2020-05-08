import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-native-testing-library';

import GradientButton from './GradientButton';

afterEach(cleanup);

describe('<GradientButton />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<GradientButton text="OK" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls delegates onPress prop', async () => {
    const onPress = jest.fn();

    const { getByTestId } = render(<GradientButton text="Easy" onPress={onPress} />);

    await fireEvent.press(getByTestId('gradientButton'));

    expect(onPress).toHaveBeenCalled();
  });
});
