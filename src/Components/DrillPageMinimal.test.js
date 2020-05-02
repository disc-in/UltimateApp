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

describe('<DrillPageMinimal />', () => {
  const navigation = { navigate: jest.fn(), setOptions: jest.fn() };
  const program = fixtures.programs[0];
  const training = program.trainings[0];
  const drill = training.drills[0];
  const route = {
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

  it('links to drill page', async () => {
    const { getByText } = render(<DrillPageMinimal navigation={navigation} route={route} />);

    await fireEvent.press(getByText('More details on this drill'));

    expect(navigation.navigate).toBeCalledWith('DrillPage', { drill });
  });

  it('links to next drill within training when finished', async () => {
    const trainingFirstDrill = training.drills[0];

    const Stack = createStackNavigator();
    const navigate = jest.fn();
    const { getByTestId } = render(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="DrillPageMinimal"
              component={ConnectedDrillPageMinimal}
              initialParams={{ program, training, drill }}
              listeners={({ navigation }) => ({
                transitionStart: e => {
                  navigation.navigate = navigate;
                },
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>,
    );

    await fireEvent.press(getByTestId('headerButton'));

    const secondDrill = training.drills[1];
    expect(navigate).toBeCalledWith('DrillPageMinimal', { drill: secondDrill, training, program });
  });

  it('marks training as complete when finished and is last drill', async () => {
    const trainingLastDrill = training.drills[training.drills.length - 1];
    const completeTraining = jest.fn();

    const Stack = createStackNavigator();
    const navigate = jest.fn();

    const MockedConnectedDrillPageMinimal = connect(null, () => ({ completeTraining }))(DrillPageMinimal);

    const { getByTestId } = render(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="DrillPageMinimal"
              component={MockedConnectedDrillPageMinimal}
              initialParams={{ program, training, drill: trainingLastDrill }}
              listeners={({ navigation }) => ({
                transitionStart: e => {
                  navigation.navigate = navigate;
                },
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>,
    );

    await fireEvent.press(getByTestId('headerButton'));

    expect(completeTraining).toBeCalledWith({ training, program });
    expect(navigate).toBeCalledWith('TrainingPage', { training });
  });
});
