import React from 'react';
import { render } from '@testing-library/react-native';

import Disc from './Disc';

describe('<Disc />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Disc baseWidth={10} number={1} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
