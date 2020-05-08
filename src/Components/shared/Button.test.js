import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-native-testing-library';

import Button from './Button';

afterEach(cleanup);

describe('<Button />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button text="OK" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls delegates onPress prop', async () => {
    const onPress = jest.fn();

    const { getByTestId } = render(<Button text="Easy" onPress={onPress} />);

    await fireEvent.press(getByTestId('button'));

    expect(onPress).toHaveBeenCalled();
  });
});
