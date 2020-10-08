import React from 'react';
import { create, act } from 'react-test-renderer';

import animationSquare from '../../Fixtures/Animation/AnimationSquare';
import Drill from './Drill';

import Animation from './Animation';

describe('<Animation />', () => {
  it('renders correctly', async () => {
    const tree = create(<Animation animation={new Drill(animationSquare)} />).toJSON();
    await act(async () => expect(tree).toMatchSnapshot());
  });
});
