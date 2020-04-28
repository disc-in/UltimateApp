import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-native-testing-library';
import fixtures from '../Fixtures/TestFixtures';

import { DrillPageMinimal } from './DrillPageMinimal';

afterEach(cleanup);
beforeEach(() => jest.useFakeTimers()); // for Animated

describe('<DrillPageMinimal />', () => {
  const navigation = { navigate: jest.fn(), setOptions: jest.fn() };
  const route = {
    params: {
      training: fixtures.trainings[0],
      drill: fixtures.drills.find(d => d.id === fixtures.trainings[0].drills[0]),
    },
  };
  it('renders correctly with a training and a drill', () => {
    const tree = renderer
      .create(<DrillPageMinimal navigation={navigation} route={route} drills={fixtures.drills} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('links to drill page', async () => {
    const navigation = { navigate: jest.fn(), setOptions: jest.fn() };

    const training = fixtures.trainings[0];
    const trainingFirstDrill = fixtures.drills.find(drill => drill.id === training.drills[0]);

    const { getByText } = render(<DrillPageMinimal navigation={navigation} route={route} drills={fixtures.drills} />);

    await fireEvent.press(getByText('More details on this drill'));

    expect(navigation.navigate).toBeCalledWith('DrillPage', { drill: trainingFirstDrill });
  });
});
