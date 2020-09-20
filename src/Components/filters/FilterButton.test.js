import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from '@testing-library/react-native';

import FilterButton from './FilterButton';

describe('<FilterButton />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<FilterButton title="OK" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when active', () => {
    const tree = renderer.create(<FilterButton title="OK" active />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls delegates onPress prop', async () => {
    const onPress = jest.fn();

    const { getByText } = render(<FilterButton title="Easy" onPress={onPress} />);

    await fireEvent.press(getByText('Easy'));

    expect(onPress).toHaveBeenCalled();
  });
});
