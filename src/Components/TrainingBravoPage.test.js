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
    const tree = renderer.create(<TrainingBravoPage route={route} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('marks training as complete when finished', async () => {
    const trainingLastDrill = training.drills[training.drills.length - 1];
    const completeTraining = jest.fn();

    const Stack = createStackNavigator();
    const navigate = jest.fn();

    const MockedConnectedTrainingBravoPage = connect(null, () => ({ completeTraining }))(TrainingBravoPage);

    const { getByTestId } = render(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="TrainingBravoPage"
              component={MockedConnectedTrainingBravoPage}
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

    await fireEvent.press(getByTestId('button'));

    expect(completeTraining).toBeCalledWith({ training, program });
    expect(navigate).toBeCalledWith('ProgramsPage');
  });
});
