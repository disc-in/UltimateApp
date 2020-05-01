import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-native-testing-library';
import fixtures from '../Fixtures/TestFixtures';

import DrillPageMinimal from './DrillPageMinimal';

afterEach(cleanup);
beforeEach(() => jest.useFakeTimers()); // for Animated

describe('<DrillPageMinimal />', () => {
  const navigation = { navigate: jest.fn(), setOptions: jest.fn() };
  const training = fixtures.trainings[0];
  const route = {
    params: {
      training,
      drill: training.drills[0],
    },
  };

  it('renders correctly with a training and a drill', () => {
    const tree = renderer.create(<DrillPageMinimal navigation={navigation} route={route} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('links to drill page', async () => {
    const navigation = { navigate: jest.fn(), setOptions: jest.fn() };

    const trainingFirstDrill = training.drills[0];

    const { getByText } = render(<DrillPageMinimal navigation={navigation} route={route} />);

    await fireEvent.press(getByText('More details on this drill'));

    expect(navigation.navigate).toBeCalledWith('DrillPage', { drill: trainingFirstDrill });
  });
});
