import React from 'react';
import renderer from 'react-test-renderer';

import animationSquare from '../../Fixtures/Animation/AnimationSquare';
import Drill from './Drill';

import Animation from './Animation';

describe('<Animation />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Animation animation={new Drill(animationSquare)} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
