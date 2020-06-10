import React from 'react';
import renderer from 'react-test-renderer';
import animationMenageATrois from '../../Fixtures/Animation/AnimationMenageATrois';

import Animation from './Animation';

describe('<Animation />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Animation animation={animationMenageATrois} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
