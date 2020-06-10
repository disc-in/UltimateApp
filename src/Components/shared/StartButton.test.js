import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-native-testing-library';

import StartButton from './StartButton';

afterEach(cleanup);

describe('<StartButton />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<StartButton text="OK" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls delegates onPress prop', async () => {
    const onPress = jest.fn();

    const { getByTestId } = render(<StartButton text="Easy" onPress={onPress} />);

    await fireEvent.press(getByTestId('startButton'));

    expect(onPress).toHaveBeenCalled();
  });
});
