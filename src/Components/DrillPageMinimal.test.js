import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-native-testing-library';
import { connect, Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import fixtures from '../Fixtures/TestFixtures';
import store from '../Store/testStore';

import ConnectedDrillPageMinimal, { DrillPageMinimal } from './DrillPageMinimal';

afterEach(cleanup);
beforeEach(() => jest.useFakeTimers()); // for Animated
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('<DrillPageMinimal />', () => {
  const navigation = { navigate: jest.fn(), setOptions: jest.fn() };
  const program = fixtures.programs[0];
  const training = program.trainings[0];
  const drill = training.drills[0];
  let route = {
    params: {
      program,
      training,
      drill,
    },
  };

  it('renders correctly with a training and a drill', () => {
    const tree = renderer.create(<DrillPageMinimal navigation={navigation} route={route} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('links to next drill within training when finished', async () => {
    const { getByText } = render(<DrillPageMinimal navigation={navigation} route={route} />);

    await fireEvent.press(getByText('Next drill'));

    const secondDrill = training.drills[1];
    expect(navigation.navigate).toBeCalledWith('DrillPageMinimal', { drill: secondDrill, training, program });
  });

  it('links to programs list page when finished and is last drill', async () => {
    const completeTraining = jest.fn();
    route = {
      params: {
        program,
        training,
        drill: training.drills[training.drills.length - 1],
      },
    };

    const { getByText } = render(
      <DrillPageMinimal navigation={navigation} route={route} completeTraining={completeTraining} />,
    );

    await fireEvent.press(getByText('Finish Training!'));

    expect(completeTraining).toBeCalledWith({ training, program });
    expect(navigation.navigate).toBeCalledWith('ProgramListPage', { activeProgram: program.id });
  });
});
