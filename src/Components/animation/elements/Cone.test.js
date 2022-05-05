import React from 'react';
import { render } from '@testing-library/react-native';

import Cone from './Cone';

describe('<Cone />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Cone baseWidth={10} number={1} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
