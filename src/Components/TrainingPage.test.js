import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';
import fixtures from '../Fixtures/TestFixtures';

import TrainingPage from './TrainingPage';

const mockedSetPage = jest.fn();
jest.mock('@react-native-community/viewpager', () => {
  const RealComponent = jest.requireActual('@react-native-community/viewpager');
  const React = require('react');

  return class ViewPager extends RealComponent {
    setPage = mockedSetPage;
  };
});

describe('<TrainingPage />', () => {
  const navigation = { navigate: jest.fn() };

  describe('When fitness program', () => {
    const program = fixtures.programs[0];
    const training = program.trainings[0];
    let route = {
      params: {
        training,
        program,
      },
    };

    it('renders correctly a fitness training', () => {
      const tree = renderer.create(<TrainingPage route={route} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('links to previous training within program', async () => {
      route = {
        params: {
          training: program.trainings[1],
          program,
        },
      };

      const { queryByTestId } = render(<TrainingPage navigation={navigation} route={route} />);

      expect(queryByTestId('goToPrev1')).toBeDefined();
      expect(queryByTestId('goToNext1')).toBeNull(); // Not displayed on last training

      await fireEvent.press(queryByTestId('goToPrev1'));

      expect(mockedSetPage).toBeCalledWith(0);
    });

    it('links to next training within program', async () => {
      route = {
        params: {
          training: program.trainings[0],
          program,
        },
      };

      const { queryByTestId } = render(<TrainingPage navigation={navigation} route={route} />);

      expect(queryByTestId('goToPrev0')).toBeNull();
      expect(queryByTestId('goToNext0')).toBeDefined();

      await fireEvent.press(queryByTestId('goToNext0'));

      expect(mockedSetPage).toBeCalledWith(1);
    });

    it('links to drill page for fitness', async () => {
      const trainingFirstDrill = training.drills[0];

      const { queryByText } = render(<TrainingPage navigation={navigation} route={route} />);

      await fireEvent.press(queryByText(trainingFirstDrill.title));

      expect(navigation.navigate).toBeCalledWith('DrillPage', { id: trainingFirstDrill.id });
    });
  });

  describe('When frisbee program', () => {
    const program = fixtures.programs[1];
    const training = program.trainings[0];
    const route = {
      params: {
        training,
        program,
      },
    };

    it('renders correctly a frisbee training', () => {
      const tree = renderer.create(<TrainingPage route={route} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('links to minimal drill page for frisbee', async () => {
      const trainingFirstDrill = training.drills[0];

      const { queryByText } = render(<TrainingPage navigation={navigation} route={route} />);

      await fireEvent.press(queryByText(trainingFirstDrill.title));

      expect(navigation.navigate).toBeCalledWith('DrillPageMinimal', { drill: trainingFirstDrill, training, program });
    });

    it('starts training links to first drill for frisbee', async () => {
      const { queryByTestId } = render(<TrainingPage navigation={navigation} route={route} />);

      await fireEvent.press(queryByTestId('start0'));

      expect(navigation.navigate).toBeCalledWith('DrillPageMinimal', { drill: training.drills[0], training, program });
    });
  });
});
