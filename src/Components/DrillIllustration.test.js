import React from 'react';
import renderer from 'react-test-renderer';
import animationMenageATrois from '../Fixtures/AnimationMenageATrois';

import DrillIllustration from './DrillIllustration';
import { SourceType } from './Fixtures';
import { createDrill } from '../Fixtures/TestFixtures';

describe('<DrillIllustration />', () => {
  it('renders correctly for a drill with video', () => {
    const drill = createDrill();
    const tree = renderer.create(<DrillIllustration drill={drill} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly for a drill with animation', () => {
    const drill = createDrill({
      steps: [
        {
          illustrationType: SourceType.ANIMATION,
          source: animationMenageATrois,
        },
      ],
    });
    const tree = renderer.create(<DrillIllustration drill={drill} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly for a drill with a video from vimeo', () => {
    const drill = createDrill({
      steps: [
        {
          id: 1,
          title: 'Rower Hamstring',
          illustrationType: 'vimeo',
          source: '407999139',
          repetition: '20',
          rest: '90s',
          instruction: 'blabla bla blabl blalb ',
        },
        {
          id: 2,
          title: 'Full Clean',
          illustrationType: 'vimeo',
          source: '406747741',
          repetition: '8',
          rest: '90s',
          instruction: 'blabla bla blabl blalb ',
        },
      ],
    });
    const tree = renderer.create(<DrillIllustration drill={drill} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly for a drill with no video nor animation', () => {
    const drill = createDrill({
      steps: [],
    });
    const tree = renderer.create(<DrillIllustration drill={drill} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
