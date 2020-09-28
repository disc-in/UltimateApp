import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';

import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Checkbox title="OK" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when active', () => {
    const tree = renderer.create(<Checkbox title="OK" active />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls delegates onPress prop', async () => {
    const onPress = jest.fn();

    const { getByText } = render(<Checkbox title="Easy" onPress={onPress} />);

    await fireEvent.press(getByText('Easy'));

    expect(onPress).toHaveBeenCalled();
  });
});
