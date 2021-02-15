import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';

import { createDrill } from '../../Fixtures/TestFixtures';
import { DrillTypes } from '../../Fixtures/config';

import FitnessDrillIllustration from './FitnessDrillIllustration';

describe('<FitnessDrillIllustration />', () => {
  const startFitness = jest.fn();
  const steps = [
    {
      id: 1,
      repetition: 3,
      title: 'First Step',
      vimeoId: '406746924',
    },
    {
      id: 2,
      repetition: 3,
      title: 'Second Step',
      vimeoId: '406747302',
    },
    {
      id: 3,
      repetition: 3,
      title: 'Third Step',
      vimeoId: '406747476',
    },
  ];
  const drill = createDrill({ type: DrillTypes.FITNESS, title: 'Hot Box', steps });

  it('renders correctly', () => {
    const tree = renderer.create(<FitnessDrillIllustration drill={drill} startFitness={startFitness} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('triggers startFitness', async () => {
    const { getByTestId } = render(<FitnessDrillIllustration drill={drill} startFitness={startFitness} />);

    fireEvent.press(getByTestId('startFitness'));

    expect(startFitness).toHaveBeenCalled();
  });
});
