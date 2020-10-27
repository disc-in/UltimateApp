import React from 'react';
import { create, act } from 'react-test-renderer';

import Player from './Player';

describe('<Player />', () => {
  it('renders offense correctly', async () => {
    const tree = create(<Player width={10} number={1} type="offense" />).toJSON();
    await act(async () => expect(tree).toMatchSnapshot());
  });

  it('renders defense correctly', async () => {
    const tree = create(<Player width={10} number={1} type="defense" />).toJSON();
    await act(async () => expect(tree).toMatchSnapshot());
  });
});
