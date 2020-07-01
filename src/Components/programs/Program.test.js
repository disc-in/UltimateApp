import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-native-testing-library';
import { Provider } from 'react-redux';

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
});
