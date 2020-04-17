import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-native-testing-library';
import fixtures from '../Fixtures/TestFixtures';

import { TrainingPage } from './TrainingPage';

afterEach(cleanup);

describe('<TrainingPage />', () => {
  const route = {
    params: {
      training: fixtures.trainings[0],
    },
  };
  it('renders correctly with a training', () => {
    const tree = renderer.create(<TrainingPage route={route} drills={fixtures.drills} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('links to drill page', async () => {
    const navigation = { navigate: jest.fn() };

    const training = fixtures.trainings[0];
    const trainingFirstDrill = fixtures.drills.find(drill => drill.id === training.drills[0]);

    const { getByText } = render(<TrainingPage navigation={navigation} route={route} drills={fixtures.drills} />);

    await fireEvent.press(getByText(trainingFirstDrill.title));

    expect(navigation.navigate).toBeCalledWith('DrillPage', { drill: trainingFirstDrill });
  });
});
