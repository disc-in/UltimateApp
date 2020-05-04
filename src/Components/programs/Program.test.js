import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-native-testing-library';
import { connect, Provider } from 'react-redux';

import { createProgram, createTraining } from '../../Fixtures/TestFixtures';
import store from '../../Store/testStore';

import ConnectedProgram, { Program } from './Program';

afterEach(cleanup);

describe('<Program />', () => {
  let program = createProgram();

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ConnectedProgram program={program} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when finished', () => {
    const firstTraining = createTraining({ id: 1 });
    const secondTraining = createTraining({ id: 2 });
    program = createProgram({ trainings: [firstTraining, secondTraining] });

    const tree = renderer
      .create(
        <Program
          program={program}
          completeTrainings={[
            { training: firstTraining, program },
            { training: secondTraining, program },
          ]}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('links to first training page when no training is completed', async () => {
    const training = program.trainings[0];
    const navigation = { navigate: jest.fn() };
    const { getByText } = render(<Program program={program} navigation={navigation} completeTrainings={[]} />);

    await fireEvent.press(getByText(program.title));

    expect(navigation.navigate).toBeCalledWith('TrainingPage', { training, program });
  });

  it('links to second training if the first is completed', async () => {
    const firstTraining = program.trainings[0];
    const secondTraining = program.trainings[1];

    const navigation = { navigate: jest.fn() };
    const { getByText } = render(
      <Program program={program} navigation={navigation} completeTrainings={[{ training: firstTraining, program }]} />,
    );

    await fireEvent.press(getByText(program.title));

    expect(navigation.navigate).toBeCalledWith('TrainingPage', { training: secondTraining, program });
  });

  it('links to nowhere if all trainings are completed', async () => {
    const firstTraining = program.trainings[0];
    const secondTraining = program.trainings[1];

    const navigation = { navigate: jest.fn() };
    const { getByText } = render(
      <Program
        program={program}
        navigation={navigation}
        completeTrainings={[
          { training: firstTraining, program },
          { training: secondTraining, program },
        ]}
      />,
    );

    await fireEvent.press(getByText(program.title));

    expect(navigation.navigate).not.toBeCalled();
  });
});
