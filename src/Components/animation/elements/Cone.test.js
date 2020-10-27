import React from 'react';
import { create, act } from 'react-test-renderer';

import Cone from './Cone';

describe('<Cone />', () => {
  it('renders correctly', async () => {
    const tree = create(<Cone width={10} number={1} />).toJSON();
    await act(async () => expect(tree).toMatchSnapshot());
  });
});
