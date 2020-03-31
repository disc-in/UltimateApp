import React from 'react';
import renderer from 'react-test-renderer';
import animationMenageATrois from '../Fixtures/AnimationMenageATrois';

import DrillAnimationPage from './DrillAnimationPage';

describe('<DrillAnimationPage />', () => {
  it('renders correctly for a drill with video', () => {
    const route = {
      params: {
        drill: {
          video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
        },
      },
    };
    const tree = renderer.create(<DrillAnimationPage route={route} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly for a drill with animation', () => {
    const route = {
      params: {
        drill: {
          animation: animationMenageATrois,
        },
      },
    };
    const tree = renderer.create(<DrillAnimationPage route={route} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly for a drill with no video nor animation', () => {
    const route = {
      params: {
        drill: {},
      },
    };
    const tree = renderer.create(<DrillAnimationPage route={route} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
