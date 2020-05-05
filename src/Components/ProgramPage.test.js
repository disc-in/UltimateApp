import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Store/testStore';

import fixtures from '../Fixtures/TestFixtures';

import ConnectedProgramPage, { ProgramPage } from './ProgramPage';

describe('<ProgramPage />', () => {
  const program = fixtures.programs[0];
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
});
