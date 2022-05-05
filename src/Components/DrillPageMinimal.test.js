import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContext } from '@react-navigation/native';

import fixtures from '../Fixtures/TestFixtures';

import { DrillPageMinimal } from './DrillPageMinimal';

beforeEach(() => jest.useFakeTimers()); // for Animated
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

jest.mock('./shared/VimeoVideo');

describe('<DrillPageMinimal />', () => {
  const navigation = { navigate: jest.fn(), setOptions: jest.fn() };
  const program = fixtures.programs[1];
  const training = program.trainings[1];
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
    const { toJSON } = render(<DrillPageMinimal navigation={navigation} route={route} />);
    expect(toJSON()).toMatchSnapshot();
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
      <NavigationContext.Provider value={navContext}>
        <DrillPageMinimal navigation={navigation} route={route} completeTraining={completeTraining} />
      </NavigationContext.Provider>,
    );

    await fireEvent.press(getByText('Finish Training!'));

    expect(completeTraining).toBeCalledWith({ training, program });
    expect(navigation.navigate).toBeCalledWith('ProgramListPage', { activeProgram: program.id });
  });
});
