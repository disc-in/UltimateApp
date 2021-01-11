import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';

import Button from './Button';

describe('<Button />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button text="OK" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when small', () => {
    const tree = renderer.create(<Button text="OK" small />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with an icon', () => {
    const tree = renderer.create(<Button text="OK" icon="share" small />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when light', () => {
    const tree = renderer.create(<Button text="OK" light />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls delegates onPress prop', async () => {
    const onPress = jest.fn();

    const { getByTestId } = render(<Button text="Easy" onPress={onPress} />);

    await fireEvent.press(getByTestId('button'));

    expect(onPress).toHaveBeenCalled();
  });
});
