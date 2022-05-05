import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import { createProgram, createTraining } from '../../Fixtures/TestFixtures';
import store from '../../Store/testStore';

import ConnectedProgram, { Program } from './Program';

describe('<Program />', () => {
  let program = createProgram();

  it('renders correctly', () => {
    const { toJSON } = render(
      <Provider store={store}>
        <ConnectedProgram program={program} />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly when finished', () => {
    const firstTraining = createTraining({ id: 1 });
    const secondTraining = createTraining({ id: 2 });
    program = createProgram({ trainings: [firstTraining, secondTraining] });

    const { toJSON } = render(
      <Program
        program={program}
        completeTrainings={[
          { training: firstTraining, program },
          { training: secondTraining, program },
        ]}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
