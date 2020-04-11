import React from 'react';
import renderer from 'react-test-renderer';
import animationMenageATrois from '../Fixtures/AnimationMenageATrois';

import DrillAnimationPage from './DrillAnimationPage';

describe('<DrillAnimationPage />', () => {
  it('renders correctly for a drill with video', () => {
    const videoProps = {
      video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
    };
    const tree = renderer.create(<DrillAnimationPage props={videoProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly for a drill with animation', () => {
    const animationProps = {
      animation: animationMenageATrois,
    };
    const tree = renderer.create(<DrillAnimationPage props={animationProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly for a drill with no video nor animation', () => {
    const noProps = {
      drill: {},
    };
    const tree = renderer.create(<DrillAnimationPage props={noProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
