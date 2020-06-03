import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup, waitForElement, act } from 'react-native-testing-library';

import store from '../Store/testStore';
import { createProgram, createTraining } from '../Fixtures/TestFixtures';

import ConnectedProgramListPage, { ProgramListPage } from './ProgramListPage';

afterEach(cleanup);

describe('<ProgramListPage />', () => {
  it('renders correctly when connected', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ConnectedProgramListPage />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('links to training', async () => {
    const navigation = { navigate: jest.fn() };

    const program1 = createProgram({ title: 'Program 1' });
    const firstTraining = createTraining({ id: 1, title: 'First Training' });
    const secondTraining = createTraining({ id: 2, title: 'Second Training' });
    const program2 = createProgram({ title: 'Program 2', trainings: [firstTraining, secondTraining] });
    const programs = [program1, program2];

    const { getByText } = render(
      <Provider store={store}>
        <ProgramListPage programs={programs} navigation={navigation} completeTrainings={[]} />
      </Provider>,
    );

    expect(getByText('Program 1')).toBeDefined();
    expect(getByText('Program 2')).toBeDefined();

    await fireEvent.press(getByText('Program 2'));

    expect(getByText('1 - First Training')).toBeDefined();
    expect(getByText('2 - Second Training')).toBeDefined();

    await fireEvent.press(getByText('1 - First Training'));

    await act(async () => {
      await waitForElement(() => {
        expect(navigation.navigate).toBeCalledWith('TrainingPage', { program: program2, training: firstTraining });
      });
    });
  });
});
