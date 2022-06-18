import React from 'react';
import { render } from '@testing-library/react-native';

import Slider from '../Slider';

describe('<Slider />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Slider value={15} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
