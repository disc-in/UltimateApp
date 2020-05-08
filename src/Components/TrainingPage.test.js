import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-native-testing-library';
import fixtures from '../Fixtures/TestFixtures';

import TrainingPage from './TrainingPage';

afterEach(cleanup);

describe('<TrainingPage />', () => {
  const navigation = { navigate: jest.fn() };
  const program = fixtures.programs[0];
  const training = program.trainings[0];
  let route = {
    params: {
      training,
      program,
    },
  };

  it('renders correctly with a training outside any program', () => {
    const route = {
      params: {
        training,
      },
    };
    const tree = renderer.create(<TrainingPage route={route} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with a training within a program', () => {
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

    const { queryByText } = render(<TrainingPage navigation={navigation} route={route} />);

    expect(queryByText('<')).toBeDefined();
    expect(queryByText('>')).toBeNull(); // Not displayed on last training

    await fireEvent.press(queryByText('<'));

    expect(navigation.navigate).toBeCalledWith('TrainingPage', { training: program.trainings[0], program });
  });

  it('links to next training within program', async () => {
    route = {
      params: {
        training: program.trainings[0],
        program,
      },
    };

    const { queryByText } = render(<TrainingPage navigation={navigation} route={route} />);

    expect(queryByText('<')).toBeNull();
    expect(queryByText('>')).toBeDefined();

    await fireEvent.press(queryByText('>'));

    expect(navigation.navigate).toBeCalledWith('TrainingPage', { training: program.trainings[1], program });
  });

  it('links to drill page', async () => {
    const trainingFirstDrill = training.drills[0];

    const { queryByText } = render(<TrainingPage navigation={navigation} route={route} />);

    await fireEvent.press(queryByText(trainingFirstDrill.title));

    expect(navigation.navigate).toBeCalledWith('DrillPageMinimal', { drill: trainingFirstDrill, training, program });
  });

  it('starts training links to first drill', async () => {
    const { queryByText } = render(<TrainingPage navigation={navigation} route={route} />);

    await fireEvent.press(queryByText('Start training'));

    expect(navigation.navigate).toBeCalledWith('DrillPageMinimal', { drill: training.drills[0], training, program });
  });
});
