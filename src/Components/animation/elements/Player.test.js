import React from 'react';
import { render } from '@testing-library/react-native';

import Player from './Player';

describe('<Player />', () => {
  it('renders offense correctly', async () => {
    const { toJSON } = render(<Player baseWidth={10} number={1} type="offense" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders defense correctly', async () => {
    const { toJSON } = render(<Player baseWidth={10} number={1} type="defense" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
