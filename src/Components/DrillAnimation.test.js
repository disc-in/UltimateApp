import React from 'react';
import renderer from 'react-test-renderer';
import animationMenageATrois from '../Fixtures/AnimationMenageATrois';

import DrillAnimation from './DrillAnimation';
import { createDrill } from '../Fixtures/TestFixtures';

describe('<DrillAnimation />', () => {
  it('renders correctly for a drill with video', () => {
    const drill = createDrill({
      steps: [
        {
          video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
        },
      ],
    });
    const tree = renderer.create(<DrillAnimation drill={drill} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly for a drill with animation', () => {
    const drill = createDrill({
      steps: [
        {
          animation: animationMenageATrois,
        },
      ],
    });
    const tree = renderer.create(<DrillAnimation drill={drill} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly for a drill with a video from vimeo', () => {
    const drill = createDrill({
      steps: [
        {
          id: 1,
          title: 'Rower Hamstring',
          source: 'vimeo',
          link: '407999139',
          count: '20',
          rest: '90s',
          instruction: 'blabla bla blabl blalb ',
        },
        {
          id: 2,
          title: 'Full Clean',
          source: 'vimeo',
          link: '406747741',
          count: '8',
          rest: '90s',
          instruction: 'blabla bla blabl blalb ',
        },
      ],
    });
    const tree = renderer.create(<DrillAnimation drill={drill} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly for a drill with no video nor animation', () => {
    const drill = {};
    const tree = renderer.create(<DrillAnimation drill={drill} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
