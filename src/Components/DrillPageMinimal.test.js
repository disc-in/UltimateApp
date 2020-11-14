import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContext } from '@react-navigation/native';

import fixtures from '../Fixtures/TestFixtures';
import store from '../Store/testStore';

import ConnectedDrillPageMinimal, { DrillPageMinimal } from './DrillPageMinimal';
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
  // fake NavigationContext value data
  const navContext = {
    isFocused: () => true,
    // addListener returns an unscubscribe function.
    addListener: jest.fn(() => jest.fn()),
  };

  it('renders correctly with a training and a drill', () => {
    const tree = renderer.create(
      <NavigationContext.Provider value={navContext}>
        <DrillPageMinimal navigation={navigation} route={route} />
      </NavigationContext.Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('links to drill page', async () => {
    const { getByTestId } = render(
      <NavigationContext.Provider value={navContext}>
        <DrillPageMinimal navigation={navigation} route={route} />
      </NavigationContext.Provider>,
    );

    await fireEvent.press(getByTestId('detailsButton'));

    expect(navigation.navigate).toBeCalledWith('DrillPage', { drill });
  });

  it('links to next drill within training when finished', async () => {
    const { getByText } = render(
      <NavigationContext.Provider value={navContext}>
        <DrillPageMinimal navigation={navigation} route={route} />
      </NavigationContext.Provider>,
    );

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
      <NavigationContext.Provider value={navContext}>
        <DrillPageMinimal navigation={navigation} route={route} completeTraining={completeTraining} />
      </NavigationContext.Provider>,
    );

    await fireEvent.press(getByText('Finish Training!'));

    expect(completeTraining).toBeCalledWith({ training, program });
    expect(navigation.navigate).toBeCalledWith('ProgramListPage', { activeProgram: program.id });
  });
});
