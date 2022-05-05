import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Button from './Button';

describe('<Button />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Button text="OK" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly when small', () => {
    const { toJSON } = render(<Button text="OK" small />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with an icon', () => {
    const { toJSON } = render(<Button text="OK" icon="share" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly when light', () => {
    const { toJSON } = render(<Button text="OK" light />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('calls delegates onPress prop', async () => {
    const onPress = jest.fn();

    const { getByTestId } = render(<Button text="Easy" onPress={onPress} />);

    await fireEvent.press(getByTestId('button'));

    expect(onPress).toHaveBeenCalled();
  });
});
