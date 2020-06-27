import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import { createProgram, createTraining } from '../../Fixtures/TestFixtures';
import store from '../../Store/testStore';

import ProgramList from './ProgramList';

describe('<ProgramList />', () => {
  it('renders correctly', () => {
    const navigation = { navigate: jest.fn() };

    const program1 = createProgram({ title: 'Program 1' });
    const firstTraining = createTraining({ id: 1, title: 'First Training' });
    const secondTraining = createTraining({ id: 2, title: 'Second Training' });
    const program2 = createProgram({ title: 'Program 2', trainings: [firstTraining, secondTraining] });
    const programs = [program1, program2];

    const tree = renderer
      .create(
        <Provider store={store}>
          <ProgramList displayedPrograms={programs} navigation={navigation} completeTrainings={[]} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
