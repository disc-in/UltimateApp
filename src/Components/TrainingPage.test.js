import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react-native';

import store from '../Store/testStore';
import fixtures from '../Fixtures/TestFixtures';

import TrainingPage from './TrainingPage';

const mockedSetPage = jest.fn();
jest.mock('react-native-pager-view', () => {
  const RealComponent = jest.requireActual('react-native-pager-view');
  const React = require('react');

  return class PagerView extends React.Component {
    setPage = mockedSetPage;

    render() {
      return <RealComponent.default>{this.props.children}</RealComponent.default>;
    }
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
      const { toJSON } = render(
        <Provider store={store}>
          <TrainingPage route={route} />
        </Provider>,
      );
      expect(toJSON()).toMatchSnapshot();
    });

    it('links to previous training within program', async () => {
      route = {
        params: {
          training: program.trainings[1],
          program,
        },
      };

      const { queryByTestId } = render(
        <Provider store={store}>
          <TrainingPage navigation={navigation} route={route} />
        </Provider>,
      );

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

      const { queryByTestId } = render(
        <Provider store={store}>
          <TrainingPage navigation={navigation} route={route} />
        </Provider>,
      );

      expect(queryByTestId('goToPrev0')).toBeNull();
      expect(queryByTestId('goToNext0')).toBeDefined();

      await fireEvent.press(queryByTestId('goToNext0'));

      expect(mockedSetPage).toBeCalledWith(1);
    });

    it('links to drill page for fitness', async () => {
      const trainingFirstDrill = training.drills[0];

      const { queryByText } = render(
        <Provider store={store}>
          <TrainingPage navigation={navigation} route={route} />
        </Provider>,
      );

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
      const { toJSON } = render(
        <Provider store={store}>
          <TrainingPage route={route} />
        </Provider>,
      );
      expect(toJSON()).toMatchSnapshot();
    });

    it('links to minimal drill page for frisbee', async () => {
      const trainingFirstDrill = training.drills[0];

      const { queryByText } = render(
        <Provider store={store}>
          <TrainingPage navigation={navigation} route={route} />
        </Provider>,
      );

      await fireEvent.press(queryByText(trainingFirstDrill.title));

      expect(navigation.navigate).toBeCalledWith('DrillPageMinimal', { drill: trainingFirstDrill, training, program });
    });

    it('starts training links to first drill for frisbee', async () => {
      const { queryByTestId } = render(
        <Provider store={store}>
          <TrainingPage navigation={navigation} route={route} />
        </Provider>,
      );

      await fireEvent.press(queryByTestId('start0'));

      expect(navigation.navigate).toBeCalledWith('DrillPageMinimal', { drill: training.drills[0], training, program });
    });
  });
});
