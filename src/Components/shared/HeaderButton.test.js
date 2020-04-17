import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-native-testing-library';

import HeaderButton from './HeaderButton';

afterEach(cleanup);

describe('<HeaderButton />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HeaderButton title="OK" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls delegates onPress prop', async () => {
    const onPress = jest.fn();

    const { getByTestId } = render(<HeaderButton title="Easy" onPress={onPress} />);

    await fireEvent.press(getByTestId('headerButton'));

    expect(onPress).toHaveBeenCalled();
  });
});
