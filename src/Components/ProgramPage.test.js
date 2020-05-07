import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from 'react-native-testing-library';

import store from '../Store/testStore';
import { createProgram, createTraining } from '../Fixtures/TestFixtures';

import ConnectedProgramPage, { ProgramPage } from './ProgramPage';

afterEach(cleanup);

describe('<ProgramPage />', () => {
  const firstTraining = createTraining({ id: 1, title: 'First Training' });
  const secondTraining = createTraining({ id: 2 });
  const program = createProgram({ trainings: [firstTraining, secondTraining] });
  const route = {
    params: {
      program,
    },
  };

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ConnectedProgramPage route={route} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when finished', () => {
    const tree = renderer
      .create(
        <ProgramPage
          route={route}
          completeTrainings={[
            { training: firstTraining, program },
            { training: secondTraining, program },
          ]}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('links to program', async () => {
    const navigation = { navigate: jest.fn() };
    const { getByText } = render(<ProgramPage route={route} navigation={navigation} completeTrainings={[]} />);
    await fireEvent.press(getByText(firstTraining.title));

    expect(navigation.navigate).toBeCalledWith('TrainingPage', { training: firstTraining, program });
  });
});
