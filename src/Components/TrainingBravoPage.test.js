import React from 'react';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect, Provider } from 'react-redux';
import { render, fireEvent, cleanup } from 'react-native-testing-library';

import fixtures from '../Fixtures/TestFixtures';
import store from '../Store/testStore';

import ConnectedTrainingBravoPage, { TrainingBravoPage } from './TrainingBravoPage';

afterEach(cleanup);
beforeEach(() => jest.useFakeTimers()); // for Animated
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('<TrainingBravoPage />', () => {
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

  it('renders correctly', () => {
    const completeTraining = jest.fn();
    const tree = renderer.create(<TrainingBravoPage route={route} completeTraining={completeTraining} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('redirects to trainings list when finished standalone', async () => {
    const Stack = createStackNavigator();
    const navigate = jest.fn();
    const completeTraining = jest.fn();

    const MockedConnectedTrainingBravoPage = connect(null, () => ({ completeTraining }))(TrainingBravoPage);

    const { getByTestId } = render(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="TrainingBravoPage"
              component={MockedConnectedTrainingBravoPage}
              initialParams={{ training }}
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

    await expect(completeTraining).not.toBeCalled();

    await fireEvent.press(getByTestId('button'));

    expect(navigate).toBeCalledWith('TrainingListPage');
  });

  it('marks training as complete and redirects when finished within a program', async () => {
    const Stack = createStackNavigator();
    const navigate = jest.fn();
    const completeTraining = jest.fn();

    const MockedConnectedTrainingBravoPage = connect(null, () => ({ completeTraining }))(TrainingBravoPage);

    const { getByTestId } = render(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="TrainingBravoPage"
              component={MockedConnectedTrainingBravoPage}
              initialParams={{ program, training }}
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

    await expect(completeTraining).toBeCalledWith({ training, program });

    await fireEvent.press(getByTestId('button'));

    expect(navigate).toBeCalledWith('ProgramPage', { program });
  });
});
