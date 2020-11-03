import React from 'react';
import { create, act } from 'react-test-renderer';

import Disc from './Disc';

describe('<Disc />', () => {
  it('renders correctly', async () => {
    const tree = create(<Disc baseWidth={10} number={1} />).toJSON();
    await act(async () => expect(tree).toMatchSnapshot());
  });
});
